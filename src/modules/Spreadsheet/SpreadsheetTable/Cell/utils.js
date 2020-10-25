export const circulateValidator = (
  label,
  formula = "",
  data,
  relativeLabelsArray = []
) => {
  relativeLabelsArray.push(label.toLocaleLowerCase());
  if (!formula) return true;

  for (let label of relativeLabelsArray) {
    if (formula.includes(label)) {
      return false;
    }
  }

  const operandsArray = getOperandsArray(formula);

  for (let opLabel of operandsArray) {
    const newRelativeLabelsArray = [...relativeLabelsArray];
    if (
      !fastCirculateValidator(
        opLabel,
        data[`${opLabel}`.toLocaleLowerCase()]?.formula,
        data,
        newRelativeLabelsArray
      )
    )
      return false;
  }

  return true;
};

function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

const fastCirculateValidator = memoize(circulateValidator);

const getOperandsArray = (formula = "") => {
  const operandsArray = formula.split(/[+\/*-\s]/);
  return operandsArray;
};
