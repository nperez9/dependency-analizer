import { promises as fs } from 'fs';

export const getFileContent = async (fileName: string): Promise<string | null> => {
  try { 
    const data = await fs.readFile(fileName);
    return Buffer.from(data).toString();
  } catch (e) {
    console.error(`error getting file content: ${fileName}`, e);
    return null;
  }
};
