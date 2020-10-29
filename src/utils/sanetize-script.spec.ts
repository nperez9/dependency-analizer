import { expect } from 'chai';
import 'mocha';

import { sanetizeScript } from './sanetize-script';

describe('sanetize-script.ts', () => {
  it('should return a sanetized script', () => {
    const param = 'http://somecode/analytics.js?v=1&b=t';
    const result = sanetizeScript(param);

    expect(result).to.be.equal('analytics.js');
  });

  it('Should return a sanetized script witout ?', () => {
    const param = 'http://somecode/jquery.min.js';
    const result = sanetizeScript(param);

    expect(result).to.be.equal('jquery.min.js');
  });

  it('Should return a sanetized script without route', () => {
    const param = 'react.js';
    const result = sanetizeScript(param);

    expect(result).to.be.equal('react.js');
  });
})