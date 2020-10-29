import { Site } from '../interfaces';
import config from '../config';
import csvToJson from 'csvtojson';

export const getDataFromCsv = async (): Promise<Site[]> => {
  const jsonArray = (await csvToJson().fromFile(config.dataUrl)) as Site[];
  return jsonArray;
};
