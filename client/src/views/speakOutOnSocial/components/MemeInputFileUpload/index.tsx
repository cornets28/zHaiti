import { FC } from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { MemeInputFileUploadType } from "../../../../types/MemeInputFileUploadType";

const MemeInputFileUpload: FC<MemeInputFileUploadType> = ({
  text,
  children,
}) => {
  return (
    <div className="upload-btn-wrapper">
      <Button
        className="btn"
        color="secondary"
        variant="contained"
        startIcon={<CloudUploadIcon />}
        sx={{ lineHeight: 3, px: 4, fontWeight: "bold", my: 4 }}
      >
        {text}
        {children}
      </Button>
    </div>
  );
};

export default MemeInputFileUpload;
