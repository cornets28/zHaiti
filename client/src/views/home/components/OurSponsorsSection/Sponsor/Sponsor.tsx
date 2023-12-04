import type { FC } from "react";
import PropTypes from "prop-types";
import colors from "../../../../../utils/theme/base/colors";
import { Box } from "../../../../../components/Box/Box";
import { Card } from "../../../../../components/Card/Card";
import { SponsorType } from "../../../../../types/SponsorType";
import { Link } from "react-router-dom";


const Sponsors: FC<SponsorType> = ({ image, link }) => {
  const { grey } = colors;

  return (
    <Box
      component={Link}
      // @ts-ignore
      to={link}
      target="_blank"
    >
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

Sponsors.propTypes = {
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Sponsors;
