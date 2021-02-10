const appendSelect = ({ array, firstLabel = "all", firstValue = "-1" }) => {
  const appendedArray = [{ value: firstValue, label: firstLabel }, ...array];
  return appendedArray;
};

export default appendSelect;
