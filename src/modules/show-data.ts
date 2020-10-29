import { SiteContent, ScriptBySite } from '../interfaces';

function showRow(content: any[]): void {
  const row = content.join(' | ');
  console.info(`| ${row} |`);
}

export function showContentLenghtData(sitesContent: SiteContent[]): void {
  console.info('---------- Content Lenght -------------');
  sitesContent.map(({ name, contentSize }) => showRow([ name, contentSize ]));
  console.info('---------- End of Content Lenght -------------');
}

export function showScriptsSites(scriptBySites: ScriptBySite[]): void {
  console.info('---------- Scripts by site -------------');
  scriptBySites.map(({ name, scriptsList }) => {
    scriptsList.map(script => {
      showRow([name, script]);
    });
  });
  console.info('---------- End Scripts by site -------------');
}

export function showScriptsCounter(scriptsCounters: any): void {
  console.info('---------- Scripts Counter -------------');
  Object.keys(scriptsCounters).map(key => {
    showRow([key, scriptsCounters[key]]);
  });
  console.info('---------- End Scripts Counter -------------');
}