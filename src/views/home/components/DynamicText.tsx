import type { FC } from "react";
import Grid from "@mui/material/Grid";
import TextContainer from "./DynamicTextSection/TextContainer/TextContainer";
import ZhaitiText from "./DynamicTextSection/ZhaitiText/ZhaitiText";
import ListItem from "./DynamicTextSection/ListItem/ListItem";
import ListItemContainer from "./DynamicTextSection/ListItemContainer/ListItemContainer";
import "../styles/useDynamicTextStyle.css";

export const DynamicText: FC = () => {
  return (
    <TextContainer>
      <Grid item className="wrapper">
        <ZhaitiText />
        <ListItemContainer>
          <ul>
            <ListItem text="Bay Nouvèl San Fòs Kote" />
            <ListItem text="Bay Nouvèl Nan Tout Sektè" />
            <ListItem text="Bay Nouvèl Nan Bon Jan Ti Mamit" />
          </ul>
        </ListItemContainer>
      </Grid>
    </TextContainer>
  );
};

export default DynamicText;
