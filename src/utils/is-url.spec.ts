import { expect } from 'chai';
import 'mocha';

import { isUrl } from './is-url';

describe('is-url.ts', () => {
  it.only('Should return true on url, even with port', () => {
    const result1 = isUrl('https://www.google.com');
    const result2 = isUrl('http://localhost:3030/marcian');

    expect(result1).to.be.true;
    expect(result2).to.be.true;
  });

  it.only('Should return false', () => {
    const result1 = isUrl('/site/index.html');
    const result2 = isUrl('C:/http/file.txt');

    expect(result1).to.be.false;
    expect(result2).to.be.false;
  });
});
