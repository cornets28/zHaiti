import { FC } from "react";
import PropTypes from "prop-types";
import { MemeFormType } from "../../../../types/MemeFormType";
import { Grid } from "../../../../components/Grid/Grid";
import colors from "../../../../utils/theme/base/colors";
import typography from "../../../../utils/theme/base/typography";
import MemePageHeader from "../MemePageHeader";
import MemeInputFileUpload from "../MemeInputFileUpload";
import { LoadingButton } from "@mui/lab";
import { Stack, TextField } from "@mui/material";
// import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

const MemeForm: FC<MemeFormType> = ({
  text,
  text2,
  imageSizeInfo,
  uploadFileText,
  buttonText,
  textLimit,
  textLimitCount,
  onChange,
  onSubmit
}) => {
  const { grey, error } = colors;
  const { h3, h5, h6 } = typography;

  const { control, register, handleSubmit } = useForm({
    mode: "onTouched",
    defaultValues: {
      hashtag: "",
      // name: "",
    },
  });

  return (
    <>
      <MemePageHeader fontSize={h3} textAlign="center" color={grey["100"]}>
        {text}
      </MemePageHeader>
      <Grid mt={3}>
        <MemePageHeader fontSize={h5} textAlign="center" color={grey["100"]}>
          {text2}
        </MemePageHeader>
      </Grid>
      <Grid mt={3}>
        <MemePageHeader fontSize={h6} textAlign="center" color={grey["100"]}>
          {imageSizeInfo}
        </MemePageHeader>
      </Grid>

      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <MemeInputFileUpload text={uploadFileText} />
        <Stack spacing={3}>
          <TextField
            type="text"
            placeholder="Write your hashtag here"
            fullWidth
            multiline
            {...register("hashtag")}
            onChange={onChange} 
            //   error={signinForm.touched.username && signinForm.errors.username !== undefined}
            //   helperText={signinForm.touched.username && signinForm.errors.username}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: grey["100"],
                },
                "&:hover fieldset": {
                  borderColor: grey["100"],
                },
                input: { color: "red !important" },
              },
              marginBottom: -2
            }}
          />
         
          <MemePageHeader fontSize={''} textAlign="center" color={textLimit <= 100  ? grey["100"] : error.focus}>
           {textLimitCount }
          </MemePageHeader>
       
          
        </Stack>

        <LoadingButton
          type="submit"
          fullWidth
          size="large"
          variant="contained"
          sx={{ marginTop: 4 }}
          // loading={isLoginRequest}
        >
          {buttonText}
        </LoadingButton>
        {/* <Box sx={{color: 'white'}}>{memeText}</Box> */}
        {/* {errorMessage && (
        <Box sx={{ marginTop: 2 }}>
          <Alert severity="error" variant="outlined" >{errorMessage}</Alert>
        </Box>
      )} */}
      </form>
    </>
  );
};

MemeForm.propTypes = {
  text: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  imageSizeInfo: PropTypes.string.isRequired,
  uploadFileText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default MemeForm;
