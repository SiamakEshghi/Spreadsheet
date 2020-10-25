import { circulateValidator } from "./utils";

const data = {
  a1: {
    formula: "",
  },
  a2: {
    formula: "b2-c1+d6",
  },
  b2: {
    formula: "9-d7",
  },
  c1: {
    formula: "8",
  },
  d7: {
    formula: "a1-4",
  },
};

describe("Circulate:", () => {
  test("There is circulate", () => {
    const result = circulateValidator("a1", "a2*3", data);
    expect(result).toEqual(false);
  });

  test("There is not circulate", () => {
    const result = circulateValidator("a1", "c1*3", data);
    expect(result).toEqual(true);
  });
});
