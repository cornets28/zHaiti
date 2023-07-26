import type { FC } from "react";
import colors from "../../../utils/theme/base/colors";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { SponsorType } from "../../../types/SponsorType";
import { Link } from "react-router-dom";

const Sponsors: FC<SponsorType> = ({ image, link }) => {
  const { grey } = colors;

  return (
    <Box component={Link} to={link} target="_blank">
      <Card
        sx={{
          maxWidth: 250,
          height: 120,
          margin: "auto",
          boxShadow: 0,
          "&:hover": {
            boxShadow: 10,
            border: `1px solid ${grey["300"]}`,
          },
        }}
      >
        <img src={image} alt="Haiti Logo Flag" width={"100%"} height={"100%"} />
      </Card>
    </Box>
  );
};

export default Sponsors;
