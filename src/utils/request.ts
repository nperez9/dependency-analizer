import requestPromise from 'request-promise';

export const getWebsiteContent = async (url: string): Promise<string | undefined> => {
  try {
    return requestPromise(url);
  } catch (e) {
    console.error(`error getting Website content: ${url}`, e);
  }
}