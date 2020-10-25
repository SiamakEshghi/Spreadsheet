import { updateData, calculate, evaluate } from "./dataUtils";

const data = {
  a1: {
    value: 3,
  },
  a2: {
    value: 1,
  },
  b2: {
    value: 5,
    formula: "a1+a2+1",
  },
  c1: {
    formula: "b2*a1+a2-4/2",
  },
  d7: {
    formula: "-a1 - 4",
  },
};

describe("Evaluate:", () => {
  test("Operand2 is not valid in data", () => {
    const result1 = evaluate(5, "+", "d2", data);
    const result2 = evaluate(5, "-", "d2", data);
    const result3 = evaluate(5, "*", "d2", data);
    const result4 = evaluate(5, "/", "d2", data);
    expect(result1).toEqual(5);
    expect(result2).toEqual(5);
    expect(result3).toEqual(0);
    expect(result4).toEqual(Infinity);
  });

  test("Operand2 is valid in data", () => {
    const result1 = evaluate(5, "+", "a1", data);
    const result2 = evaluate(5, "-", "a2", data);
    const result3 = evaluate(5, "*", "a1", data);
    const result4 = evaluate(5, "/", "b2", data);
    expect(result1).toEqual(8);
    expect(result2).toEqual(4);
    expect(result3).toEqual(15);
    expect(result4).toEqual(1);
  });
});

describe("Calculate:", () => {
  test("Cell does not hav formula", () => {
    const result = calculate("a1", data);
    expect(result).toEqual(3);
  });

  test("Cell has formula", () => {
    const result = calculate("c1", data);
    expect(result).toEqual(6);
  });

  test("Ignore unknown chars at the begining of formula", () => {
    const cloneData = { ...data, d7: { formula: "*%#+**-a1 - 4" } };

    const result = calculate("d7", cloneData);
    expect(result).toEqual(-7);
  });
});

describe("updateData:", () => {
  const cloneData = { ...data };

  beforeEach(() => {
    for (let label in cloneData) {
      delete data[label].value;
    }
  });

  test("Updating a cell causes an update in chain", () => {
    cloneData.a1.value = 6;
    const updatedData = updateData("a1", cloneData);

    expect(updatedData["a1"]?.value).toEqual(6); // 6
    expect(updatedData["b2"]?.value).toEqual(7); // 7
    expect(updatedData["c1"]?.value).toEqual(19); // 19
    expect(updatedData["d7"]?.value).toEqual(-10); // -10
  });
});
