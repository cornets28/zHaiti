import { FC } from "react";
import PropTypes from "prop-types";
import { MemeFormType } from "../../../../types/MemeFormType";
import { Grid } from "../../../../components/Grid/Grid";
import colors from "../../../../utils/theme/base/colors";
import typography from "../../../../utils/theme/base/typography";
import MemePageHeader from "../MemePageHeader";
import MemeInputFileUpload from "../MemeInputFileUpload";
import { LoadingButton } from "@mui/lab";
import { Box, Stack, TextField } from "@mui/material";

const MemeForm: FC<MemeFormType> = ({
  text,
  text2,
  imageSizeInfo,
  uploadFileText,
  buttonText,
  onChange,
  inputRef,
  name,
  value,
  onSubmit
}) => {
  const { grey } = colors;
  const { h3, h5, h6 } = typography;
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

      {/* <Box component="form" onSubmit={onSubmit}> */}
      <form
                noValidate
                autoComplete="off"
                onSubmit={onSubmit}
              >
        <MemeInputFileUpload text={uploadFileText} />
        <Stack spacing={3}>
          <TextField
            type="text"
            placeholder="Write your hashtag here"
            name={name}
            fullWidth
            multiline
            value={value}
            // onChange={onChange}
            inputRef={inputRef}
            
            //   error={signinForm.touched.username && signinForm.errors.username !== undefined}
            //   helperText={signinForm.touched.username && signinForm.errors.username}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: grey["100"],
                },
                "&:hover fieldset": {
                  borderColor: grey["600"],
                },
                input: { color: grey["100"] },
              },
            }}
          />
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

        {/* {errorMessage && (
        <Box sx={{ marginTop: 2 }}>
          <Alert severity="error" variant="outlined" >{errorMessage}</Alert>
        </Box>
      )} */}
      {/* </Box> */}
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
