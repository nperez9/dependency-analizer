import requestPromise from 'request-promise';

export const getWebsiteContent = async (url: string): Promise<string | null> => {
  try {
    return requestPromise(url);
  } catch (e) {
    console.error(`error getting Website content: ${url}`, e);
    return null;
  }
}