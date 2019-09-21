const { createKata, readKatas } = require('./script');

describe('Suite de Test de Seguidor de Katas', () => {
  it.skip('Canary Test', () => {
    expect(test('Hola')).toBe('Hola');
  });
  it('Create a kata with name = "Kata1" link = "Link1" and status = false', () => {
    expect(createKata('Kata1', 'Link1')).toEqual({ name: 'Kata1', link: 'Link1', status: false });
  });
  it('Read Katas Array', () => {
    expect(readKatas()).toEqual([{ name: 'Kata1', link: 'Link1', status: false }]);
  });
});
