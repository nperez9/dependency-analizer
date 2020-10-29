export interface Site {
  name: string,
  url: string
}

export interface SiteContent extends Site {
  content: string,
  contentSize: number,
}