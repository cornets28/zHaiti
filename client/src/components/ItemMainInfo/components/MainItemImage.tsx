import { FC } from 'react'
import PropTypes from 'prop-types';
import { Box } from "../../Box/Box";
import { MainItemImageType } from '../../../types/MainItemImageType';

const MainItemImage: FC<MainItemImageType> = ({image}) => {
  return (
    <Box
    component="img"
    height={26}
    width={26}
    sx={{
      height: { xs: "34vh", sm: "50vh", md: "45vh", lg: "65vh" },
      width: "100%",
      marginTop: 2,
    }}
    // @ts-ignore
    alt="Newest item"
    src={image}
  />
  )
}

MainItemImage.propTypes = {
 image: PropTypes.string.isRequired,
}

export default MainItemImage
