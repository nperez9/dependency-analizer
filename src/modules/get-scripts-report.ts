import { SiteContent, ScriptReport, ScriptBySite } from '../interfaces';
import { JSDOM } from 'jsdom';
import { sanetizeScript } from '../utils/sanetize-script';

export const getScriptsReport = (sitesContent: SiteContent[]): ScriptReport  => {
  const scriptsCounter = {} as any;

  const scriptsBySite = sitesContent.map(({ name, content }): ScriptBySite => {
    const report = { name, scriptsList: new Array<string>() };
    const { window } = new JSDOM(content);

    const scripts = window.document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
      if (!scripts[i].src) {
        continue;
      }
      const sanetizedScript = sanetizeScript(scripts[i].src);
      
      report.scriptsList.push(sanetizedScript);
      
      scriptsCounter[sanetizedScript] = (scriptsCounter[sanetizedScript]) 
       ? scriptsCounter[sanetizedScript] + 1 : 1;
    }

    return report;
  });

  return { scriptsBySite, scriptsCounter };
};
