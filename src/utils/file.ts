import { promises as fs } from 'fs';

export const getFileContent = async (fileName: string): Promise<string | undefined> => {
  try { 
    const data = await fs.readFile(fileName);
    return Buffer.from(data).toString();
  } catch (e) {
    console.error(fileName, e.message);
  }
};
