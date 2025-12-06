import * as yup from "yup";

const passwordRules =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
// At least 8 characters, At least one upper case letter, At least one number ,and At least special character

export const basicSchema = yup.object().shape({
  firstName: yup.string().required("This field is required"),
  lastName: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please input your email"),
  phoneNumber: yup
    .string()
    .required("Please input your Phone Number"),
  jobTitle: yup.string().required("This field is required"),
  bio: yup.string().required("This field is required"),
});


export const passwordSchema = yup.object().shape({
  currentPassword: yup.string(),
   newPassword: yup
    .string()
    .matches(
      passwordRules,
      "Must contain 8+ characters, 1 uppercase, 1 number, 1 special character"
    )
    .required("Password is required"),
    
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], "Passwords must match")
    .required("Password is required"),
})


export const signUpSchema = yup.object().shape({
    firstName: yup.string().required("This field is required"),
    lastName: yup.string().required("This field is required"),
    schoolOrInstituteName: yup.string().required("This field is required")
});