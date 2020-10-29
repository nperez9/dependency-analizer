import { SiteContent, ScriptReport, ScriptBySite } from '../interfaces';
import { JSDOM } from 'jsdom';

function sanetizeScript(script: string): string {
  let scriptString = '';
  const auxScript = script.split('/');
  scriptString = auxScript[auxScript.length - 1].substr(0);
  
  if (scriptString.indexOf('?') !== -1) {
    scriptString = scriptString.substr(0, scriptString.indexOf('?'))
  }

  return scriptString;
}

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
