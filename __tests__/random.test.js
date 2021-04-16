const { test, expect } = require('@jest/globals');
const randomNumber = require('../lib/random.js');

test("Checks if 10 = 10", () => {
    expect(randomNumber()).toBeGreaterThanOrEqual(1);
    expect(randomNumber()).toBeLessThanOrEqual(10);
});