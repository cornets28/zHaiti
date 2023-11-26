import { Box } from "../../../../../components/Box/Box";
import colors from "../../../../../utils/theme/base/colors";

const EditIcon = () => {
  const { error } = colors;

  return (
    <Box bgcolor={error.main} position={"absolute"} zIndex={5}>
      <i className="fa-solid fa-pen-to-square"></i>
    </Box>
  );
};

export default EditIcon;
