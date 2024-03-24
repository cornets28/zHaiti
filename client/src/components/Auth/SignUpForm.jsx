import { LoadingButton } from "@mui/lab";
import { Alert, Stack } from "@mui/material";
import { Button } from "../Button/Button";
import { Box } from "../Box/Box";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import userApi from "../../api/modules/user.api";
import { setAuthModalOpen } from "../../redux/features/authModalSlice";
import { setUser } from "../../redux/features/userSlice";
import { useTranslation } from "react-i18next";
import { RegexNoWhiteSpace } from "../../utils/constants/Constants";
import { MESSAGE, MinMaxMessage } from "../../utils/constants/Messages";
import InputField from "../InputField/InputField";

const SignupForm = ({ switchAuthState }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [isLoginRequest, setIsLoginRequest] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const signupForm = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, MinMaxMessage("min", "First name", 2))
        .required(MESSAGE.INPUT_REQUIRED),
      password: Yup.string()
        .min(8, MinMaxMessage("min", "Password", 8))
        .required(MESSAGE.INPUT_REQUIRED),
      lastName: Yup.string()
        .min(2, MinMaxMessage("min", "Last name", 2))
        .required(MESSAGE.INPUT_REQUIRED),
      email: Yup.string()
        .matches(RegexNoWhiteSpace, {
          message: MESSAGE.WHITE_SPACE,
          excludeEmptyString: true,
        })
        .email(MESSAGE.EMAIL_INVALID)
        .required(MESSAGE.INPUT_REQUIRED),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password confirmation not match")
        .min(8, MinMaxMessage("min", "Password confirmation", 8))
        .required(MESSAGE.INPUT_REQUIRED),
   }), 
    onSubmit: async (values) => {
      setErrorMessage(undefined);
      setIsLoginRequest(true);
      const { response, err } = await userApi.signup(values);
      setIsLoginRequest(false);

      if (response) {
        signupForm.resetForm();
        dispatch(setUser(response));
        dispatch(setAuthModalOpen(false));
        toast.success(response.message);
      }

      if (err) setErrorMessage(err.message);
    },
  });

  return (
    <Box component="form" onSubmit={signupForm.handleSubmit}>
      <Stack spacing={3}>
        <InputField
          type="text"
          placeholder="first name"
          name="firstName"
          value={signupForm.values.firstName}
          onChange={signupForm.handleChange}
          error={
            signupForm.touched.firstName &&
            signupForm.errors.firstName !== undefined
          }
          helperText={
            signupForm.touched.firstName && signupForm.errors.firstName
          }
        />

        <InputField
          type="text"
          placeholder="last name"
          name="lastName"
          value={signupForm.values.lastName}
          onChange={signupForm.handleChange}
          error={
            signupForm.touched.lastName &&
            signupForm.errors.lastName !== undefined
          }
          helperText={signupForm.touched.lastName && signupForm.errors.lastName}
        />
        <InputField
          type="string"
          placeholder="email address"
          name="email"
          value={signupForm.values.email}
          onChange={signupForm.handleChange}
          error={
            signupForm.touched.email && signupForm.errors.email !== undefined
          }
          helperText={signupForm.touched.email && signupForm.errors.email}
        />
        <InputField
          type="password"
          placeholder="password"
          name="password"
          value={signupForm.values.password}
          onChange={signupForm.handleChange}
          error={
            signupForm.touched.password &&
            signupForm.errors.password !== undefined
          }
          helperText={signupForm.touched.password && signupForm.errors.password}
        />
        <InputField
          type="password"
          placeholder="confirm password"
          name="confirmPassword"
          value={signupForm.values.confirmPassword}
          onChange={signupForm.handleChange}
          error={
            signupForm.touched.confirmPassword &&
            signupForm.errors.confirmPassword !== undefined
          }
          helperText={
            signupForm.touched.confirmPassword &&
            signupForm.errors.confirmPassword
          }
        />
      </Stack>

      <LoadingButton
        type="submit"
        fullWidth
        size="large"
        variant="contained"
        sx={{ marginTop: 4 }}
        loading={isLoginRequest}
      >
        {t("enskri")}
      </LoadingButton>

      <Button fullWidth sx={{ marginTop: 1 }} onClick={() => switchAuthState()}>
        {t("Konekte")}
      </Button>

      {errorMessage && (
        <Box sx={{ marginTop: 2 }}>
          <Alert severity="error" variant="outlined">
            {errorMessage}
          </Alert>
        </Box>
      )}
    </Box>
  );
};

export default SignupForm;
