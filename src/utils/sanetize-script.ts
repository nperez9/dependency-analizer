export function sanetizeScript(script: string): string {
  let scriptString = '';
  const auxScript = script.split('/');
  scriptString = auxScript[auxScript.length - 1].substr(0);
  
  if (scriptString.indexOf('?') !== -1) {
    scriptString = scriptString.substr(0, scriptString.indexOf('?'))
  }

  return scriptString;
}
