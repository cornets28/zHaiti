import type { FC } from "react";
import colors from "../../../utils/theme/base/colors";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { SponsorType } from "../../../types/SponsorType";

const Sponsors: FC<SponsorType> = ({ image }) => {
  const { grey } = colors;

  return (
    <Card
      sx={{
        maxWidth: 250,
        height: 120,
        margin: "auto",
        boxShadow: 0,
        border: `1px solid ${grey["300"]}`,
        "&:hover": {
          boxShadow: 10,
        },
      }}
    >
      <CardMedia sx={{ height: '100%', width: '100%' }} image={image} />
    </Card>
  );
};

export default Sponsors;
