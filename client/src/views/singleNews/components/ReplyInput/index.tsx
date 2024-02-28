import React, { FC } from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import { Box } from "../../../../components/Box/Box";
import PageHeader from "../../../../components/PageHeader";
import { TextField } from "../../../../components/TextField/TextField";
import colors from "../../../../utils/theme/base/colors";
import { ReplyInputType } from "../../../../types/ReplyInputType";
import { Button } from "../../../../components/Button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import { Grid } from "../../../../components/Grid/Grid";

const ReplyInput: FC<ReplyInputType> = ({
  infoText,
  replyPlaceholder,
  replyButton,
}) => {
  const { grey, error } = colors;

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    // resolver: yupResolver(createMessageSchema),
    mode: "onTouched",
    defaultValues: {
      reply: "",
    },
  });

  const onSubmitReply = async (data: any) => {
    const formData = [];

    formData.push(data);

    console.log("data:", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmitReply)}>
      <Stack
        spacing={3}
        sx={{
          border: `1px solid ${grey["200"]}`,
          p: 1,
          mt: 3,
          bgcolor: grey["200"],
          borderRadius: 1,
        }}
      >
        <Box mb={-2}>
          <PageHeader fontSize="13px" textAlign={"left"} color={grey[900]}>
            {infoText}
          </PageHeader>
        </Box>
        <TextField
          type="text"
          placeholder={replyPlaceholder}
          {...register("reply")}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: grey["500"],
              },
              "&:hover fieldset": {
                borderColor: grey["600"],
              },
              input: { color: grey["900"] },
            },
          }}
        />
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <LoadingButton
            type="submit"
            size="small"
            variant="contained"
            sx={{
              backgroundColor: error.focus,
              top: -8,
              mb: -1,
              color: grey["100"],
              float: "right",
              width: 'auto',
            }}
            // loading={isLoginRequest}
          >
            {replyButton}
          </LoadingButton>
        </Grid>
      </Stack>
    </form>
  );
};

ReplyInput.propTypes = {
  replyPlaceholder: PropTypes.string.isRequired,
  infoText: PropTypes.string.isRequired,
};

export default ReplyInput;
