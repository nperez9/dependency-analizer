import { getFileContent } from '../utils';
import csvToJson from 'csvtojson';

export const getDataFromCsv = async (): Promise<any> => {
  try {
    const jsonArray = await csvToJson().fromFile('data/websites.csv');
    return jsonArray;
  } catch (e) {
    console.error(e.message);
  }

}