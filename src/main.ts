import { getDataFromCsv } from './modules/get-data-from-csv';
import { getSitesContent } from './modules/get-sites-data';
import { showContentLenghtData, showScriptsSites, showScriptsCounter } from './modules/show-data';
import { getScriptsReport } from './modules/get-scripts-report';

export default async function main(): Promise<void> {
  try {
    const sites = await getDataFromCsv();
    const sitesContent = await getSitesContent(sites);
    showContentLenghtData(sitesContent);

    const { scriptsBySite, scriptsCounter } = getScriptsReport(sitesContent);
    showScriptsSites(scriptsBySite);
    showScriptsCounter(scriptsCounter);
  } catch (e) {
    console.error('Error running the process', e);
  }
}
