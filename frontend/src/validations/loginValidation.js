import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .lowercase()
    .email("Must be a valid email!")
    // .notOneOf?$/, 'Email already taken!')
    .required("Required!"),
  password: yup
    .string()
    .min(8, "Minimum 8 characters required!")
    .required("Required!")
    .matches(/(?=.*[a-z])/, "one lowercase required!")
    .matches(/(?=.*[A-Z])/, "one uppercase required!")
    .matches(/(?=.*[0-9])/, "one number required!"),
});
