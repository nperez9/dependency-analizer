import { SiteContent } from "../interfaces";
import { JSDOM } from 'jsdom';

function sanetizeScript(script: string): string {
  // do some sanetization
  return script;
}

export const getScriptsReport = (sitesContent: SiteContent[]): any => {
  const scriptsCounter = {} as any;

  const superScripts = sitesContent.map(({ name, content }) => {
    const report = { name, scriptsList: new Array<string>() };
    const { window } = new JSDOM(content);

    const scripts = window.document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
      if (!scripts[i].src) {
        continue;
      }
      const sanetizedScript = sanetizeScript(scripts[i].src);
      report.scriptsList.push(sanetizedScript);
      scriptsCounter[sanetizedScript] ++;
    }

    return report;
  });

  return { superScripts, scriptsCounter };
};
