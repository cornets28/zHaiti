import type { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../components/Grid/Grid";
import { MessageContainerType } from "../../../../types/MessageContainerType";

const MessageContainer: FC<MessageContainerType> = ({ children }) => {
  return (
    <Grid container item xs={12} sm={12} md={6} lg={6}>
      {children}
    </Grid>
  );
};

MessageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MessageContainer;
