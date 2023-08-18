import { FC } from "react";
import PropTypes from "prop-types";
import { Box } from "../../../../components/Box/Box";
import {
  imageListItemClasses,
} from "@mui/material/ImageListItem";
import { SectionType } from "../../../../types/SectionType";
import ThickDivider from "../ThickDivider/ThickDivider";
import colors from "../../../../utils/theme/base/colors";

export const Section: FC<SectionType> = ({ children, header }) => {
  const { error } = colors;
  return (
    <>
      <ThickDivider header={header} color={error.focus} />
      <Box
        sx={{
          marginX: { xs: 3, sm: 3, md: 0, lg: 0 },
          height: "auto",
          display: "grid",
          gridTemplateColumns: {
            sx: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          [`& .${imageListItemClasses.root}`]: {
            display: "flex",
            flexDirection: "column",
          },
          gap: 2,
          marginTop: 3,
        }}
      >
        {children}
      </Box>
    </>
  );
};

Section.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
