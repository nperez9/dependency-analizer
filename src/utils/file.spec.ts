import { expect } from 'chai';
import 'mocha';

import { getFileContent } from './file';

describe('file.ts', async () => {
  it('should read a file', async () => {
    const result = await getFileContent('data/test.txt');

    expect(result).to.be.equal('this is a test file');
  });

  it('should return undefined on error', async () => {
    const result = await getFileContent('aserege');

    expect(result).to.be.undefined;
  });
});
 