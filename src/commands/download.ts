import { Command, CommandRunner, Option } from 'nest-commander';
import { HttpService } from '@nestjs/axios';
import { createWriteStream } from "fs";

@Command({ name: 'download', description: 'A parameter parse' })
export class DownloadCommand extends CommandRunner {
  constructor(private readonly httpService: HttpService) {
    super();
  }

  async run(
    passedParams: string[],
    options?: Record<string, any>,
  ): Promise<void> {
    console.log('Downloading files from TREB');
    const filetype = passedParams[0];
    const now = new Date();
    const writer = createWriteStream(
      './' +
        now.getDate() +
        now.getMonth() +
        now.getFullYear() +
        '-' +
        filetype +
        '.csv',
    );

    const response = await this.httpService.axiosRef({
      url: 'https://3pv.torontomls.net/data3pv/DownLoad3PVAction.asp',
      method: 'POST',
      responseType: 'stream',
      params: {
        user_code: process.env.TREBUSER || '',
        password: process.env.TREBPASS || '',
        au_both: 'unavail', // 'avail/unavail'
        query_str: "lud>='20220101'",
      }
    });

    console.log(response);

    response.data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });

    console.log('File downlaoded');
  }
}