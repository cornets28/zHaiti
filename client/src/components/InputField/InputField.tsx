import React, { FC } from "react";
import PropTypes from "prop-types";
import { TextField } from "../TextField/TextField";
import colors from "../../utils/theme/base/colors";
import { InputFieldType } from "../../types/InputFieldType";

const InputField: FC<InputFieldType> = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  error,
  helperText,
}) => {
  const { grey } = colors;
  return (
    <TextField
      type={type}
      placeholder={placeholder}
      name={name}
      fullWidth
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      size="small"
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
  );
};

InputField.propTypes = {};

export default InputField;
