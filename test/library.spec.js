import chai from 'chai';
import Hodie from '../lib/hodie.js';

chai.expect();

const expect = chai.expect;

describe('on contructor', function () {
  it('should return a instance of Hodie', () => {
    expect(new Hodie()).to.be.an.instanceof(Hodie);
  });
});
