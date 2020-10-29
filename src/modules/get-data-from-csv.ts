import { Site } from '../interfaces';
import csvToJson from 'csvtojson';

export const getDataFromCsv = async (): Promise<[Site]> => {
    const jsonArray = await csvToJson().fromFile('data/websites.csv') as [Site];
    return jsonArray;
}