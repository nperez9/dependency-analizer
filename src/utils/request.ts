import requestPromise from 'request-promise';

export const getWebsiteContent = async (url: string): Promise<string | undefined> => {
  try {
    const result = await requestPromise(url);
    return result;
  } catch (e) {
    console.error(`error getting Website content: ${url}`, e);
  }
}