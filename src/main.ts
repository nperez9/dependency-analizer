import { getFileContent } from "./utils";
import { getDataFromCsv } from "./modules/get-data-from-csv";


export default async function main(): Promise<void> {
  const data = await getDataFromCsv()
  console.info(data);
}
