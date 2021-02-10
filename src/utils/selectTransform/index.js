const selectTransform = ({ array, value = "_id", label = "name" }) => {
  const transformed = array.map((x) => ({
    value: x[value],
    label: x[label],
  }));
  return transformed;
};

export default selectTransform;
