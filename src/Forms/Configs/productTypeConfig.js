import * as Yup from "yup";
import inputRestrictions from "./inputRestrictions";
import tempLng from "../../TEMP/lng";

export const productTypeInitialValues = {
  name: "",
  description: "",
};

export const productTypeConfig = ({
  values = productTypeInitialValues,
  lng = tempLng,
}) => ({
  validation: Yup.object().shape({
    name: Yup.string()
      .required(lng.name)
      .max(
        inputRestrictions.shortChar,
        `${lng.max}: ${inputRestrictions.shortChar} ${lng.char}`
      ),
    description: Yup.string().max(
      inputRestrictions.longChar,
      `${lng.max}: ${inputRestrictions.longChar} ${lng.char}`
    ),
  }),

  initialValues: values,

  fields: [
    {
      type: "text",
      name: "name",
      label: lng.name,
      fullWidth: true,
      required: true,
    },
    {
      type: "text",
      name: "description",
      label: lng.description,
      fullWidth: true,
    },
  ],
});
