import { getDataFromCsv } from './modules/get-data-from-csv';
import { getSitesContent } from './modules/get-sites-data';
import { showContentLenghtData } from './modules/show-data';
import { getScriptsReport } from './modules/get-scripts-report';

export default async function main(): Promise<void> {
  try {
    const sites = await getDataFromCsv();
    const sitesContent = await getSitesContent(sites);
    showContentLenghtData(sitesContent);

    const scriptsReport = getScriptsReport(sitesContent);
    console.info(scriptsReport);
  } catch (e) {
    console.error('Error running the process', e);
  }
}
