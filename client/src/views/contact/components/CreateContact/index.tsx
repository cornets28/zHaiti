import { FC } from "react";
import PropTypes from "prop-types";
import colors from "../../../../utils/theme/base/colors";
import { LoadingButton } from "@mui/lab";
import { Stack, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CreateContactType } from "../../../../types/CreateContactType";
import { createMessageSchema } from "../../../../utils/createContactValidators";

const CreateContact: FC<CreateContactType> = ({
  fullNamePlaceholder,
  emailAddressPlaceholder,
  messagePlaceholder,
  phonePlaceholder,
  onSubmit,
  buttonText,
}) => {
  const { grey, error } = colors;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createMessageSchema),
    mode: "onTouched",
    defaultValues: {
      full_name: "",
      message: "",
      email: "",
      phone: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <TextField
          type="text"
          placeholder={fullNamePlaceholder}
          fullWidth
          {...register("full_name")}
          error={!!errors?.full_name}
          helperText={errors?.full_name?.message}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: grey["100"],
              },
              "&:hover fieldset": {
                borderColor: grey["900"],
              },
              input: { color: grey["900"] },
            },
            mt: 2,
          }}
        />

        <TextField
          type="text"
          placeholder={emailAddressPlaceholder}
          {...register("email")}
          fullWidth
          error={!!errors?.email}
          helperText={errors?.email?.message}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: grey["100"],
              },
              "&:hover fieldset": {
                borderColor: grey["900"],
              },
              input: { color: grey["900"] },
            },
          }}
        />

        <TextField
          type="text"
          placeholder={phonePlaceholder}
          {...register("phone")}
          fullWidth
          error={!!errors?.phone}
          helperText={errors?.phone?.message}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: grey["100"],
              },
              "&:hover fieldset": {
                borderColor: grey["900"],
              },
              input: { color: grey["900"] },
            },
          }}
        />

        <TextField
          type="text"
          placeholder={messagePlaceholder}
          {...register("message")}
          fullWidth
          error={!!errors?.message}
          helperText={errors?.message?.message}
          multiline
          rows={4}
          className="textarea-1"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: grey["100"],
              },
              "&:hover fieldset": {
                borderColor: grey["900"],
              },
              input: { color: grey["900"] },
            },
          }}
        />
      </Stack>

      <LoadingButton
        type="submit"
        fullWidth
        size="large"
        variant="contained"
        sx={{
          backgroundColor: error.focus,
          marginTop: 4,
          color: grey["100"],
        }}
        // loading={isLoginRequest}
      >
        {buttonText}
      </LoadingButton>
    </form>
  );
};

CreateContact.propTypes = {
  fullNamePlaceholder: PropTypes.string.isRequired,
  emailAddressPlaceholder: PropTypes.string.isRequired,
  messagePlaceholder: PropTypes.string.isRequired,
  onSubmit: PropTypes.string.isRequired,
  buttonText: PropTypes.any.isRequired,
};

export default CreateContact;
