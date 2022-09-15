import { Command, CommandRunner, Option } from 'nest-commander';
import { HttpService } from '@nestjs/axios';
import { createReadStream, createWriteStream } from "fs";
import * as csv from "csv-parser";
import { appConnection } from "../datasource"
import { ListingEntity } from '../listing.entity';

@Command({ name: 'process', description: 'A parameter parse' })
export class ProcessCommand extends CommandRunner {
  constructor(private readonly httpService: HttpService) {
    super();
  }

  async run(
    passedParams: string[],
    options?: Record<string, any>,
  ): Promise<void> {
    const filetype = passedParams[0];
    const now = new Date();
    const date = now.getFullYear().toString() + now.getMonth().toString().padStart(2, '0') + now.getDate().toString();
    const filename = './' + date + '-' + filetype + '.csv';

    console.log('Downloading ' + filetype + ' listing from TREB for ' + date);

    const writer = createWriteStream(filename);
    const response = await this.httpService.axiosRef({
      url: 'https://3pv.torontomls.net/data3pv/DownLoad3PVAction.asp',
      method: 'POST',
      responseType: 'stream',
      params: {
        user_code: 't017ami',
        password: 'O32p25',
        au_both: filetype, // 'avail/unavail'
        query_str: "lud>='" + date + "'",
      },
    });

    response.data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });

    console.log('File downlaoded');

    const data = await new Promise<any[]>((resolve) => {
      const data = [];
      createReadStream(filename)
        .pipe(csv())
        .on('data', (row) => data.push(row))
        .on('end', () => resolve(data));
    });

    for (const dataKey in data) {
      const record = data[dataKey];

      for (const key in record) {
        if (record[key] === '') {
          delete record[key];
        }
      }

      let result;
      try {
        result = await appConnection
          .getRepository(ListingEntity)
          .find({ where: { ml_num: record.ml_num } });

      } catch (e) {
        console.log(e);
      }

      console.log('Processing ' + record.ml_num);
      if (result.length) {
        await appConnection
          .createQueryBuilder()
          .update(ListingEntity)
          .set(record)
          .where('ml_num = :ml_num', { ml_num: record.ml_num })
          .execute();

        console.log('Updated');
      } else {
        await appConnection
          .createQueryBuilder()
          .insert()
          .into(ListingEntity)
          .values(record)
          .execute();

        console.log('Inserted');
      }
    }
  }
}