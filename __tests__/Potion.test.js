const { test, expect } = require("@jest/globals");
const Potion = require("../lib/Potion.js");


test("create a health program object.", () => {
    const healthPotion = new Potion();

    expect(healthPotion.name).toEqual(expect.any(String));
    expect(healthPotion.name.length).toBeGreaterThan(0);
    expect(healthPotion.value).toEqual(expect.any(Number));
});