import *  as yup from 'yup'



 export const signupSchema=yup.object().shape({
  name: yup.string()
    .min(4, "Should be minimum 4 letters")
    .required("Required"),
    number:yup.string()
    .required("Required")
    .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Enter numbers only')
    .min(10, 'Enter a valid number')
    .max(10, 'Enter a valid number'),
  email: yup.string()
    .lowercase()
    .email('Must be a valid email!')
    
    .required('Required!'),
  password: yup.string()
  .min(8, 'Minimum 8 characters required!')
    .required('Required!')
    .matches(/(?=.*[a-z])/, 'one lowercase required!')
    .matches(/(?=.*[A-Z])/, 'one uppercase required!')
    .matches(/(?=.*[0-9])/, 'one number required!'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Password must be the same!')
    .required('Required!'),
   
  });