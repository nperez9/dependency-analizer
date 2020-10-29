export interface ScriptBySite {
  name: string,
  scriptsList: string[],
}

export interface ScriptReport {
  scriptsBySite: ScriptBySite[],
  scriptsCounter: any
}