import * as Yup from "yup";
import inputRestrictions from "./inputRestrictions";
import tempLng from "../../TEMP/lng";

export const productInitialValues = {
  supplierId: null,
  location: null,
  type: null,
  name: "",
  code: "",
  description: "",
  costPrice: 0,
  sellPrice: 0,
  qtyInStock: 0,
  imageUrl: "",
  isPrivate: false,
  archived: false,
};

export const productConfig = ({
  values = productInitialValues,
  lng = tempLng,
  supplierOptions = [],
  typeOptions = [],
}) => ({
  validation: Yup.object().shape({
    //   supplierId: Yup.required(lng.required),
    //   location: Yup.required(lng.required),
    //   type: Yup.required(lng.required),
    name: Yup.string()
      .required(lng.required)
      .max(
        inputRestrictions.shortChar,
        `${lng.max}: ${inputRestrictions.shortChar} ${lng.char}`
      ),
    code: Yup.string()
      .required(lng.required)
      .max(
        inputRestrictions.shortChar,
        `${lng.max}: ${inputRestrictions.shortChar} ${lng.char}`
      ),
    description: Yup.string()
      .required(lng.required)
      .max(
        inputRestrictions.longChar,
        `${lng.max}: ${inputRestrictions.longChar} ${lng.char}`
      ),
    costPrice: Yup.number().min(
      inputRestrictions.minNum,
      `${lng.min}: ${inputRestrictions.minNum}`
    ),
    sellPrice: Yup.number().min(
      inputRestrictions.minNum,
      `${lng.min}: ${inputRestrictions.minNum}`
    ),
    qtyInStock: Yup.number().min(
      inputRestrictions.minNum,
      `${lng.min}: ${inputRestrictions.minNum}`
    ),
  }),

  initialValues: values,

  fields: [
    {
      type: "select",

      name: "supplierId",
      label: lng.supplier,
      options: supplierOptions,
    },
    {
      type: "select",
      isMulti: true,
      name: "type",
      label: lng.type,
      options: typeOptions,
    },
    { type: "text", name: "name", label: lng.name, fullWidth: true },
    { type: "text", name: "code", label: lng.code, fullWidth: true },
    {
      type: "text",
      name: "description",
      label: lng.description,
      fullWidth: true,
    },
    {
      type: "number",
      name: "costPrice",
      label: lng.costPrice,
      fullWidth: true,
    },
    {
      type: "number",
      name: "sellPrice",
      label: lng.sellPrice,
      fullWidth: true,
    },
    {
      type: "number",
      name: "qtyInStock",
      label: lng.qtyInStock,
      fullWidth: true,
    },
    {
      type: "file",
      name: "imageUrl",
      label: lng.image,
      fullWidth: true,
    },
    {
      type: "checkbox",
      name: "isPrivate",
      label: lng.isPrivate,
    },
    {
      type: "checkbox",
      name: "archived",
      label: lng.archived,
    },
  ],
});
