export const evaluate = (operand1, operator, operand2Label, data) => {
  const operand2 =
    data[`${operand2Label}`.toLocaleLowerCase()]?.value || // getting cellValue from data
    parseInt(operand2Label) || // having number in formula
    0; // if operand2 does not have value

  switch (operator) {
    case "*":
      return operand1 * operand2;
    case "/":
      return operand1 / operand2;
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    default:
      return operand1;
  }
};

export const calculate = (label, data) => {
  if (!data[label]?.formula) return data[label]?.value || 0;

  let resultObject = data[label].formula.split("").reduce(
    (formulaAccum, char, index) => {
      const { operator, operand2Label, result } = formulaAccum;
      const newAccum = { ...formulaAccum };

      if (char === " ") return newAccum;

      if (["+", "-", "*", "/"].includes(char)) {
        //first operator in formula
        if (!operator) {
          newAccum.result = evaluate(result, "+", operand2Label, data);
        } else {
          newAccum.result = evaluate(result, operator, operand2Label, data);
        }
        newAccum.operand2Label = "";
        newAccum.operator = char;
        return newAccum;
      }
      //end of formula
      if (index + 1 === data[label].formula.length) {
        if (!operator) {
          //simple assignment
          newAccum.result = evaluate(result, "+", operand2Label + char, data);
        } else {
          newAccum.result = evaluate(
            result,
            operator,
            operand2Label + char,
            data
          );
        }

        return newAccum;
      }

      newAccum.operand2Label += char;
      return newAccum;
    },
    {
      operator: "",
      operand2Label: "",
      result: 0,
    }
  );

  return resultObject.result;
};

export const updateData = (label, inputData) => {
  const data = { ...inputData };
  const calculationQueue = [label];

  while (calculationQueue.length) {
    const currentLabel = calculationQueue.shift();
    if (data[currentLabel]) {
      data[currentLabel].value = calculate(currentLabel, data);

      const relatedLabels = Object.keys(data).filter((key) => {
        if (!data[key].formula) return false;
        return data[key].formula.toLowerCase().includes(currentLabel);
      });

      calculationQueue.push(...relatedLabels);
    }
  }

  return data;
};
