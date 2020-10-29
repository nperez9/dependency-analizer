import { Site, SiteContent } from '../interfaces';
import { getFileContent, getWebsiteContent } from '../utils';
const urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/

// TODO: get byteLength from file/request
function getBytes(str: string): number{
  return Buffer.byteLength(str, 'utf8')
}

const isUrl = (url: string): boolean => {
  return urlRegex.test(url);
}

export const getSitesContent = async (sites: Site[]): Promise<SiteContent[]> => {
  const sitesPromises = sites.map(({ url }) => {
    if (isUrl(url)) {
      return getWebsiteContent(url);
    }
    return getFileContent(url);
  });

  const sitesContent = await Promise.all(sitesPromises);

  return sitesContent.filter(content => content).map((content, i) => {
    return {
      content: content as string,
      contentSize: getBytes(content as string),
      name: sites[i].name,
      url: sites[i].url
    }
  });
};
