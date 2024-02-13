import { FC } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { MemeInputFileUploadType } from "../../../../types/MemeInputFileUploadType";


const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const MemeInputFileUpload: FC<MemeInputFileUploadType> = ({ text }) => {
  return (
    <Button
      component="label"
      variant="contained"
      color="secondary"
      sx={{ lineHeight: 3, px: 4, fontWeight: "bold", my: 4}}
      startIcon={<CloudUploadIcon />}
    >
      {text}
      <VisuallyHiddenInput type="file" />
    </Button>
  );
};

export default MemeInputFileUpload;
