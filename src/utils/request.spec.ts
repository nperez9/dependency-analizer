import { expect } from 'chai';
import 'mocha';

import { getWebsiteContent } from './request';

describe('file.ts', async () => {

  it('should read a website', async () => {
    const result = await getWebsiteContent('https://www.google.com');

    expect(result).to.be.string;
  });
});
 