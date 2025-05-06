import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('phone number success', () => {
  expect(isPhoneNumber("(123)-456-7890")).toBe(true);
});

test('phone number success', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});
test('phone number fail', () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
});

test('phone number fail', () => {
  expect(isPhoneNumber("123-45-7890")).toBe(false);
});

test('email success', () => {
  expect(isEmail("customer@gmail.com")).toBe(true);
});

test('email success', () => {
  expect(isEmail("guest@gmail.com")).toBe(true);
});

test('email fail', () => {
  expect(isEmail("customer@.com")).toBe(false);
});

test('email fail', () => {
  expect(isEmail("customer@gmail.c")).toBe(false);
});

test('strong password success', () => {
  expect(isStrongPassword("Abc123")).toBe(true);
});

test('strong password success', () => {
  expect(isStrongPassword("abc12")).toBe(true);
});

test('strong password fail', () => {
  expect(isStrongPassword("3")).toBe(false);
});

test('strong password fail', () => {
  expect(isStrongPassword("abc&123")).toBe(false);
});

test('date success', () => {
  expect(isDate("05/19/1998")).toBe(true);
});

test('date success', () => {
  expect(isDate("10/14/2023")).toBe(true);
});

test('date fail', () => {
  expect(isDate("00-00-1998")).toBe(false);
});

test('date fail', () => {
  expect(isDate("05/05/25")).toBe(false);
});

test('hex color success', () => {
  expect(isHexColor("#fff")).toBe(true);
});

test('hex color success', () => {
  expect(isHexColor("A1B1C1")).toBe(true);
});

test('hex color fail', () => {
  expect(isHexColor("#FFFFF")).toBe(false);
});

test('hex color fail', () => {
  expect(isHexColor("GGG")).toBe(false);
});



