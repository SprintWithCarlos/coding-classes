const kata = require('./kata');

// it('Canary Test', () => {
//   expect(kata('Mundo')).toBe('Hola Mundo');
// });
describe('Binary Addition Tests', () => {
  it('Convert to binary', () => {
    expect(kata(2, 1)).toBe('11');
  });
});
