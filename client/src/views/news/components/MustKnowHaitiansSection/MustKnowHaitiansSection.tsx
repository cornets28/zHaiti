import { FC, useEffect, useState } from "react";
import PropTypes from "prop-types";
import ThickDivider from "../ThickDivider/ThickDivider";
import colors from "../../../../utils/theme/base/colors";
import { Grid } from "../../../../components/Grid/Grid";
import { MainMustKnowHaitiansContainer } from "../MainMustKnowHaitiansContainer/MainMustKnowHaitiansContainer";
import SectionItem from "../../../../components/SectionItem/SectionItem";
import CultureInfoBox from "../CulturesInfoBox/CultureInfoBox";
import { CultureSectionType } from "../../../../types/CultureSectionType";
import db from "../../../../utils/importantHaitians.json";


export const MustKnowHaitiansSection: FC<CultureSectionType> = ({ header }) => {
  const { error } = colors;
  const [temporaryImportantHaitians, setTemporaryImportantHaitians] = useState<any>([]);

  useEffect(() => {
    setTemporaryImportantHaitians(db.importantHaitians);
  }, [temporaryImportantHaitians]);

  return (
    <Grid container>
      <ThickDivider header={header} color={error.focus} />
       <MainMustKnowHaitiansContainer
        mainImage1={temporaryImportantHaitians[0]?.image}
        mainImage2={temporaryImportantHaitians[1]?.image}
        title1={temporaryImportantHaitians[0]?.title}
        title2={temporaryImportantHaitians[1]?.title}
      />

      <CultureInfoBox>
        {temporaryImportantHaitians.length > 0 &&
          temporaryImportantHaitians
            .slice(2, 10)
            .map((item: any) => (
              <SectionItem
                image={item.image}
                title={item.full_name}
                // body={item.body}
                date={item.date}
                key={item.image}
                onClick={() => alert("TBD")}
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
