import { FC, useEffect, useState } from "react";
import PropTypes from "prop-types";
import ThickDivider from "../ThickDivider/ThickDivider";
import colors from "../../../../utils/theme/base/colors";
import { Grid } from "../../../../components/Grid/Grid";
import { MainMustKnowHaitiansContainer } from "../MainMustKnowHaitiansContainer/MainMustKnowHaitiansContainer";
import SectionItem from "../../../../components/SectionItem/SectionItem";
import CultureInfoBox from "../CulturesInfoBox/CultureInfoBox";
import { MustKnowHaitiansType } from "../../../../types/MustKnowHaitiansType";
import db from "../../../../utils/importantHaitians.json";
import { useNavigate } from "react-router-dom";


export const MustKnowHaitiansSection: FC<MustKnowHaitiansType> = ({ header , importantHaitians}) => {
  const { error } = colors;
  const navigate = useNavigate()

  return (
    <Grid container>
      <ThickDivider header={header} color={error.focus} />
       <MainMustKnowHaitiansContainer
       // @ts-ignore
        mainImage1={importantHaitians[0]?.image}
        // @ts-ignore
        mainImage2={importantHaitians[1]?.image}
        // @ts-ignore
        title1={importantHaitians[0]?.title}
        // @ts-ignore
        title2={importantHaitians[1]?.title}
      />

      <CultureInfoBox>
        {importantHaitians.length > 0 &&
          importantHaitians
            .slice(2, 10)
            .map((item: any) => (
              <SectionItem
                image={item.image}
                title={item.full_name}
                date={item.date}
                key={item.image}
                onClick={() => navigate(`/aktyalite/ayisyen-enpotan-yo/${item.id}`)}
              />
            ))}
      </CultureInfoBox>
    </Grid>
  );
};

MustKnowHaitiansSection.propTypes = {
  header: PropTypes.string.isRequired,
};

export default MustKnowHaitiansSection;