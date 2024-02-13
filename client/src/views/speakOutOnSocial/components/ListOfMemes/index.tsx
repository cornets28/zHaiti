import { useState, type FC, useEffect } from "react";
import Container from "@mui/material/Container";
import Cow from "../../../../images/boys.webp";
import SingleMeme from "../SingleMeme";
import { Grid } from "../../../../components/Grid/Grid";
import Title from "../../../../components/Title/Title";
import { useTranslation } from "react-i18next";
import MemesContainer from "../../MemesContainer";
import MemeWrapper from "../../MemesWrapper";
import NoDataYet from "../../../../components/NoDataYet";
import db from "../../../../utils/articles.json";
import colors from "../../../../utils/theme/base/colors";
import typography from "../../../../utils/theme/base/typography";

const ListOfMemes: FC = () => {
  const { t } = useTranslation();
  const { grey } = colors;
  const { h5 } = typography;
  const [temporaryMemes, setTemporaryMemes] = useState([]);

  useEffect(() => {
    // @ts-ignore
    setTemporaryMemes(db.memes);
  }, [db.memes]);

  console.log(temporaryMemes);

  return (
    <MemesContainer>
      <Container>
        <Grid container item py={6}>
          <Title
            text=""
            title1={t("mem")}
            title2={t("sou rezo yo")}
            isBlackBackground={true}
          />
          <Grid container py={6}>
            {temporaryMemes && temporaryMemes.length > 0 ? (
              temporaryMemes.map((_, index) => (
                <MemeWrapper temporaryMemesLen={temporaryMemes} key={index}>
                  <SingleMeme key={index} image={Cow} />
                </MemeWrapper>
              ))
            ) : (
              <NoDataYet
                color={grey["100"]}
                fontSize={h5}
                textAlign="center"
                text={t("Poko gen mem ki kreye. Tanpri kreye youn!!!")}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </MemesContainer>
  );
};

export default ListOfMemes;
