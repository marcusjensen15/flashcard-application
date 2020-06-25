returnNumberFive = (x) => {
  return 5;
}

describe("First test", () => {
  test("this should fail", () => {
    const numberFour = 4;
    const output = 5;

    expect(returnNumberFive(numberFour)).toEqual(outuput);
});
  });
