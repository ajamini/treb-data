import { Command, CommandRunner, Option } from 'nest-commander';
import { HttpService } from '@nestjs/axios';
import { createReadStream, createWriteStream } from "fs";
import * as csv from "csv-parser";

interface BasicCommandOptions {
  filename?: string;
}

@Command({ name: 'migration', description: 'A parameter parse' })
export class MigrationCommand extends CommandRunner {

  private text_fields = [
    'tour_url',
    'mort_comm',
    'alt_feature_sheet',
    'sound_bite_url',
    'sales_brochure_url',
    'addl_pix_url',
    'map_loc_url',
    'extras',
    'ad_text',
    'oh_link1',
    'oh_link2',
    'oh_link3',
    'oh_link4',
    'oh_link5',
    'oh_link6',
  ];

  private date_fields = [
    'lud',
    'cctd',
    'cd',
    'cldt',
    'cndsold_xd',
    'dt_sus',
    'dt_ter',
    'input_date',
    'ld',
    'pctd',
    'redt',
    'rr_edt',
    'scdt',
    'susdt',
    'td',
    'uctd',
    'unavail_dt',
    'vtour_updt',
    'wrtd',
    'xd',
    'xdtd',
    'lcdt',
    'oh_date4',
    'oh_date5',
    'oh_date6',
  ];

  constructor(private readonly httpService: HttpService) {
    super();
  }

  async run(
    passedParams: string[],
    options?: BasicCommandOptions,
  ): Promise<void> {
    const headers = await new Promise<[]>((resolve) => {
      createReadStream(passedParams[0])
        .pipe(csv())
        .on('headers', (columns) => resolve(columns));
    });

    const migrations = [];
    const fields = [];
    const alter_command = 'ADD COLUMN :name :type';
    for (const headersKey in headers) {
      const header_name = headers[headersKey];
      const new_command = alter_command.replace(':name', header_name);

      // skip primary unique column
      if (header_name == 'ml_num') {
        continue;
      }

      if (this.date_fields.find((v) => v == header_name)) {
        migrations.push(new_command.replace(':type', 'date'));
      } else if (this.text_fields.find((v) => v == header_name)) {
        migrations.push(new_command.replace(':type', 'varchar'));
      } else {
        migrations.push(new_command.replace(':type', 'char(100)'));
      }
    }

    for (const headersKey in headers) {
      const header_name = headers[headersKey];
      const date_field =
        '\t@Column({ type: "date" })\n\t' + header_name + ': Date;\n';
      const text_field = '\t@Column()\n\t' + header_name + ': string;\n';

      // skip primary unique column
      if (header_name == 'ml_num') {
        continue;
      }

      if (this.date_fields.find((v) => v == header_name)) {
        fields.push(date_field);
      } else {
        fields.push(text_field);
      }
    }

    //console.log('ALTER TABLE listings ' + migrations.join(',\n\t') + ";");
    console.log(fields.join('\n'));
  }
}