import * as Yup from "yup";
import inputRestrictions from "./inputRestrictions";
import tempLng from "../../TEMP/lng";

export const locationInitialValues = {
  name: "",
  description: "",
  address: "",
};

export const locationConfig = ({
  values = locationInitialValues,
  lng = tempLng,
}) => ({
  validation: Yup.object().shape({
    name: Yup.string()
      .required(lng.required)
      .max(inputRestrictions.shortChar, `${lng.max}: ${inputRestrictions.shortChar} ${lng.char}`),
    description: Yup.string().max(inputRestrictions.longChar, `${lng.max}: ${inputRestrictions.longChar} ${lng.char}`),
    address: Yup.string().max(inputRestrictions.longChar, `${lng.max}: ${inputRestrictions.longChar} ${lng.char}`),
  }),

  initialValues: values,

  fields: [
      { type: "input", name: "name", label: lng.name, fullWidth: true }
      { type: "input", name: "description", label: lng.description, fullWidth: true }
      { type: "input", name: "address", label: lng.address, fullWidth: true }
],
});
