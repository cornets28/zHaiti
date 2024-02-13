import { FC, useState } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../components/Grid/Grid";
import colors from "../../../../utils/theme/base/colors";
import typography from "../../../../utils/theme/base/typography";
import MemePageHeader from "../MemePageHeader";
import MemeForm from "../MemeForm";
import MemeFormContainer from "../MemeFormContainer";
import { useTranslation } from "react-i18next";
import MemeBackground from "../../../../images/memeBacground.png";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

const CreateMeme: FC = () => {
  const { error } = colors;
  const { h3 } = typography;
  const { t } = useTranslation();

  const [phrase1Limit, setPhrase1Limit] = useState(0);
  const [memeText, setMemeText] = useState('');

  const { control, register, handleSubmit } = useForm({
    mode: "onTouched",
    defaultValues: {
      phrase_1: "",
    },
  });

  const onSubmit = async (data: any) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <MemeFormContainer>
      <Grid container item xs={12} sm={12} md={12} lg={12} pb={2}>
        <MemePageHeader fontSize={h3} textAlign="left" color={error.main}>
          {t("Jan ou Ta vle mem ou an paret")}
        </MemePageHeader>
      </Grid>

      <Grid container item xs={12} sm={12} md={7} lg={7} bgcolor={"red"}>
        <Grid container item xs={12} sm={12} md={12} lg={12}>
          <Grid>
            <img src={MemeBackground} width={"100%"} height={"100%"} alt="Meme background" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={5} px={5} py={8}>
        <MemeForm
          text={t("Kreye mem pa w la")}
          text2={t("Voye imaj ou epi chwazi hashtag ou epi gaye pawòl la.")}
          imageSizeInfo={t(
            "Chwazi dosye imaj ou a (png oswa jpeg). Pou pi bon rezilta, gwosè imaj yo ta dwe 781 piksèl lajè x 704 piksèl segondè."
          )}
          uploadFileText={t("Voye imaj")}
          buttonText={t("Kreye mem")}
        //   onChange={(e: any) => setPhrase1Limit(e.target.value)}
          name="phrase_1"
          inputRef= {{...register('phrase_1')}}
          value={phrase1Limit}
          onSubmit={handleSubmit(onSubmit)}
        />
      </Grid>
    </MemeFormContainer>
  );
};

CreateMeme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CreateMeme;
