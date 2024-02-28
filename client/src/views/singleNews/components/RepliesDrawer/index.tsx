import { FC } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../components/Grid/Grid";
import Drawer from "@mui/material/Drawer";
import { RepliesDrawerType } from "../../../../types/RepliesDrawerType";
import PageHeader from "../../../../components/PageHeader";
import typography from "../../../../utils/theme/base/typography";
import colors from "../../../../utils/theme/base/colors";
import DrawerContainer from "../DrawerContainer";
import DrawerCloseButton from "../DrawerCloseButton";
import DrawerDetails from "../DrawerDetails";
import ReplyInput from "../ReplyInput";
import Reply from "../Reply";
import UserInitial from "../UserInitial";
import ReplyDetails from "../ReplyDetails";
import InviteActionToReply from "../InviteActionToReply";
import { useTranslation } from "react-i18next";

const RepliesDrawer: FC<RepliesDrawerType> = ({ children, open, onClose }) => {
  const { h4 } = typography;
  const { grey } = colors;
  const { t } = useTranslation();
  return (
    <DrawerContainer>
      <Drawer anchor={"right"} open={open} onClose={onClose}>
        <DrawerCloseButton onClose={onClose} />
        <DrawerDetails>
          <PageHeader fontSize={h4} textAlign={"left"} color={grey[900]}>
            {t("Kòmatè")} 678
          </PageHeader>

          <ReplyInput
            infoText={t(
              "Pataje opinyon w. Nou ouvri pou n resevwa tout kritik ak kòmatè. Ekpètiz ou konte pou nou anpil."
            )}
            replyPlaceholder={t("Ekri ide w la...")}
            replyButton={t('Ajoute repons')}
          />

          <Reply>
            <UserInitial>SC</UserInitial>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ReplyDetails
                fullName="Samuel Cornet"
                town="Potoprens"
                text="Pataje opinyon w. Nou ouvri ak tout kritik ak komante ou yo.
                  Ekpetiz ou konte pou nou anpil"
              />
              <InviteActionToReply
                onClickReply={() => alert("Reply")}
                onClickShare={() => alert("share")}
              />
            </Grid>
          </Reply>

          <Reply>
            <UserInitial>SC</UserInitial>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ReplyDetails
                fullName="Samuel Cornet"
                town="Potoprens"
                text="Pataje opinyon w. Nou ouvri ak tout kritik ak komante ou yo.
                  Ekpetiz ou konte pou nou anpil"
              />
              <InviteActionToReply
                onClickReply={() => alert("Reply")}
                onClickShare={() => alert("share")}
              />
            </Grid>
          </Reply>
          <Reply>
            <UserInitial>SC</UserInitial>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ReplyDetails
                fullName="Samuel Cornet"
                town="Potoprens"
                text="Pataje opinyon w. Nou ouvri ak tout kritik ak komante ou yo.
                  Ekpetiz ou konte pou nou anpil"
              />
              <InviteActionToReply
                onClickReply={() => alert("Reply")}
                onClickShare={() => alert("share")}
              />
            </Grid>
          </Reply>
          <Reply>
            <UserInitial>SC</UserInitial>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ReplyDetails
                fullName="Samuel Cornet"
                town="Potoprens"
                text="Pataje opinyon w. Nou ouvri ak tout kritik ak komante ou yo.
                  Ekpetiz ou konte pou nou anpil"
              />
              <InviteActionToReply
                onClickReply={() => alert("Reply")}
                onClickShare={() => alert("share")}
              />
            </Grid>
          </Reply>
          <Reply>
            <UserInitial>SC</UserInitial>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ReplyDetails
                fullName="Samuel Cornet"
                town="Potoprens"
                text="Pataje opinyon w. Nou ouvri ak tout kritik ak komante ou yo.
                  Ekpetiz ou konte pou nou anpil"
              />
              <InviteActionToReply
                onClickReply={() => alert("Reply")}
                onClickShare={() => alert("share")}
              />
            </Grid>
          </Reply>
          <Reply>
            <UserInitial>SC</UserInitial>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ReplyDetails
                fullName="Samuel Cornet"
                town="Potoprens"
                text="Pataje opinyon w. Nou ouvri ak tout kritik ak komante ou yo.
                  Ekpetiz ou konte pou nou anpil"
              />
              <InviteActionToReply
                onClickReply={() => alert("Reply")}
                onClickShare={() => alert("share")}
              />
            </Grid>
          </Reply>
          <Reply>
            <UserInitial>SC</UserInitial>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ReplyDetails
                fullName="Samuel Cornet"
                town="Potoprens"
                text="Pataje opinyon w. Nou ouvri ak tout kritik ak komante ou yo.
                  Ekpetiz ou konte pou nou anpil"
              />
              <InviteActionToReply
                onClickReply={() => alert("Reply")}
                onClickShare={() => alert("share")}
              />
            </Grid>
          </Reply>
          {children}
        </DrawerDetails>
      </Drawer>
    </DrawerContainer>
  );
};

RepliesDrawer.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.any.isRequired,
  onClose: PropTypes.any.isRequired,
};

export default RepliesDrawer;
