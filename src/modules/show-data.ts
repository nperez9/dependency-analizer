import { SiteContent } from '../interfaces';

function showRow(content: any[]): void {
  const row = content.join(' | ');
  console.info(`| ${row} |`);
}

export function showContentLenghtData(sitesContent: SiteContent[]): void {
  console.info('---------- Content Lenght -------------');
  sitesContent.map(({ name, contentSize }) => showRow([ name, contentSize ]));
  console.info('---------- End of Content Lenght -------------');
}
