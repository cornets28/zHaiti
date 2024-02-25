import * as yup from "yup";

export const createMessageSchema = yup.object().shape({
  full_name: yup.string().required("Full name is required"),

  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),

  phone: yup
    .string()
    .min(8, "Phone must contain at least 7 characters")
    .max(13, "Phone must contain 13 characters max")
    .required("Phone is required"),

  message: yup
    .string()
    .min(20, "Message must contain at least 20 characters")
    .required("Message is required"),
});
