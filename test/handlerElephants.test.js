const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Test if handlerElephants is a function', () => {
    expect(typeof handlerElephants).toBe('function');
  });

  it('Test if the function returns undefined if empty', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Test if the function with the parameter (count) returns 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Test if the function with the parameter (names) returns the elephant names', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
    expect(handlerElephants('names')).toContain('Bea');
    expect(handlerElephants('names')).toContain('Ilana');
    expect(handlerElephants('names')).toContain('Orval');
  });

  it('Test if the function with the parameter (averageAge) returns a number around 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  it('Test if the function with the parameter (location) returns NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('Test if the function with the parameter (popularity) returns 5 or greater', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });

  it('Test if the function with the parameter (availability) returns an array without Monday', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });

  it('Test if the function with the parameter ({}) returns an error string', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Test if the function that parameter doest exist, returns null', () => {
    expect(handlerElephants('barabam')).toBeNull();
  });
});
