const userCheck = require('./index');

describe('Test for Usernames', () => {
  it('Your regex should match JACK', () => {
    expect(userCheck.test('JACK')).toStrictEqual(true);
  });
  it('Your regex should not match J', () => {
    expect(userCheck.test('J')).toStrictEqual(false);
  });
  it('Your regex should match Oceans11', () => {
    expect(userCheck.test('Oceans11')).toStrictEqual(true);
  });
  it('Your regex should match RegexGuru', () => {
    expect(userCheck.test('RegexGuru')).toStrictEqual(true);
  });
  it('Your regex should not match 007', () => {
    expect(userCheck.test('007')).toStrictEqual(false);
  });
  it('Your regex should not match 9', () => {
    expect(userCheck.test('9')).toStrictEqual(false);
  });
});
