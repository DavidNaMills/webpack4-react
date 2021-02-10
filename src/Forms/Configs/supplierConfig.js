import * as Yup from "yup";
import inputRestrictions from "./inputRestrictions";
import tempLng from "../../TEMP/lng";

export const supplierTypeInitialValues = {
  name: "",
  phone: "",
  wechat: "",
  email: "",
  province: "",
  city: "",
};

export const supplierConfig = ({
  values = supplierTypeInitialValues,
  lng = tempLng,
}) => ({
  validation: Yup.object().shape({
    name: Yup.string()
      .required(lng.required)
      .max(
        inputRestrictions.shortChar,
        `${lng.max}: ${inputRestrictions.shortChar} ${lng.char}`
      ),
    phone: Yup.string()
      .required(lng.required)
      .max(
        inputRestrictions.phoneLen,
        `${lng.max}: ${inputRestrictions.phoneLen} ${lng.char}`
      ),
    wechat: Yup.string().max(
      inputRestrictions.shortChar,
      `${lng.max}: ${inputRestrictions.shortChar} ${lng.char}`
    ),
    email: Yup.email(),
    province: Yup.string().max(
      inputRestrictions.shortChar,
      `${lng.max}: ${inputRestrictions.shortChar} ${lng.char}`
    ),
    city: Yup.string().max(
      inputRestrictions.shortChar,
      `${lng.max}: ${inputRestrictions.shortChar} ${lng.char}`
    ),
  }),

  initialValues: values,
  fields: [
    { type: "input", name: "name", label: lng.name, fullWidth: true },
    { type: "input", name: "phone", label: lng.phone, fullWidth: true },
    { type: "input", name: "wechat", label: lng.wechat, fullWidth: true },
    { type: "input", name: "email", label: lng.email, fullWidth: true },
    { type: "input", name: "province", label: lng.province, fullWidth: true },
    { type: "input", name: "city", label: lng.city, fullWidth: true },
  ],
});
