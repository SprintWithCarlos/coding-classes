/* eslint-disable max-len */
/* I will give you a string.You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.
Passwords must abide by the following requirements:
More than 3 characters but less than 20.
Must contain only alphanumeric characters.
Must contain letters and numbers. */
const passwordValidator = require('./katas');

describe.skip('Password Validator', () => {
  it('Must be between 3 an 20 characters', () => {
    expect(passwordValidator('u1')).toBe('INVALID');
    expect(passwordValidator('ThisPasswordIsTooLong1234')).toBe('INVALID');
  });
  it('Username123 to be valid', () => {
    expect(passwordValidator('Username123')).toBe(
      'VALID',
    );
  });

  it('Must contain only alphanumeric characters', () => {
    expect(passwordValidator('Username123!')).toBe('INVALID');
  });
  it('Must contain letters and numbers', () => {
    expect(passwordValidator('Username')).toBe('INVALID');
    expect(passwordValidator('123')).toBe('INVALID');
  });
});
