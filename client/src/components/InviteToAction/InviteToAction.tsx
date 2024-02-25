import { FC } from "react";
import PropTypes from "prop-types";
import IconContainer from "./components/IconContainer";
import { ShareSvgIcon } from "../../images/svg/ShareSvgIcon";
import { SaveSvgIcon } from "../../images/svg/SaveSvgIcon";
import { MessageSvgIcon } from "../../images/svg/MessageSvgIcon";
import { InviteToActionType } from "../../types/InviteToActionType";
import CallToActionContainer from "./components/callToActionContainer";

const InviteToAction: FC<InviteToActionType> = ({ numberOfMessages, onClickShare, onClickMessages, onClickSave}) => {
  return (
    <CallToActionContainer>
      <IconContainer onClick={onClickShare}>
        <ShareSvgIcon />
      </IconContainer>
      <IconContainer onClick={onClickSave}>
        <SaveSvgIcon />
      </IconContainer>
      <IconContainer onClick={onClickMessages} text={numberOfMessages}>
        <MessageSvgIcon />
      </IconContainer>
    </CallToActionContainer>
  );
};

InviteToAction.propTypes = {
    numberOfMessages: PropTypes.string.isRequired,
    onClickShare: PropTypes.any.isRequired,
    onClickSave: PropTypes.any.isRequired,
    onClickMessages: PropTypes.any.isRequired,
};

export default InviteToAction;
