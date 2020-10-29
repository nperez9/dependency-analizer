import { promises } from 'fs';

/**
 * return a file as string
 * @param fileName string
 */
export const getFileContent = async (fileName: string): Promise<string | undefined> => {
  try { 
    const data = await promises.readFile(fileName);
    return Buffer.from(data).toString();
  } catch (e) {
    console.error(`error getting file content: ${fileName}`, e);
  }
};
