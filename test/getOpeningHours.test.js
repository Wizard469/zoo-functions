const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('tests if getOpeningHours is a function', () => {
    expect(typeof getOpeningHours).toBe('function');
  });

  it('tests if getOpeningHours is empty, returns an object', () => {
    const actual = getOpeningHours();

    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };

    expect(actual).toStrictEqual(expected);
  });

  it('tests if getOpeningHours parameter is monday, returns a string', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');

    const expected = 'The zoo is closed';

    expect(actual).toStrictEqual(expected);
  });

  it('tests if getOpeningHours parameter is tuesday, returns a string', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');

    const expected = 'The zoo is open';

    expect(actual).toStrictEqual(expected);
  });

  it('tests if getOpeningHours parameter is wednesday, returns a string', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');

    const expected = 'The zoo is closed';

    expect(actual).toStrictEqual(expected);
  });

  it('tests if getOpeningHours parameter is invalid, returns an error.', () => {
    const actual = () => getOpeningHours('Xablau', '09:00-AM');

    const expected = 'The day must be valid. Example: Monday';

    expect(actual).toThrow(expected);
  });

  it('tests if getOpeningHours parameter is invalid, returns an error', () => {
    const actual = () => getOpeningHours('Saturday', 'C9:00-AM');

    const expected = 'The hour should represent a number';

    expect(actual).toThrow(expected);
  });

  it('tests if getOpeningHours parameter is invalid, returns an error', () => {
    const actual = () => getOpeningHours('Sunday', '09:c0-AM');

    const expected = 'The minutes should represent a number';

    expect(actual).toThrow(expected);
  });

  it('tests if getOpeningHours parameter is a wrong time, returns an error', () => {
    const actual = () => getOpeningHours('Monday', '13:00-AM');

    const expected = 'The hour must be between 0 and 12';

    expect(actual).toThrow(expected);
  });

  it('tests if getOpeningHours parameter is a wrong time, returns an error', () => {
    const actual = () => getOpeningHours('Tuesday', '09:60-AM');

    const expected = 'The minutes must be between 0 and 59';

    expect(actual).toThrow(expected);
  });

  it('tests if getOpeningHours parameter has a wrong abbreviation, returns an error', () => {
    const actual = () => getOpeningHours('Friday', '09:00-ZM');

    const expected = 'The abbreviation must be \'AM\' or \'PM\'';

    expect(actual).toThrow(expected);
  });
});
