import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationRounded = () => {
  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      alignItems="right"
      justifyContent="right"
      mt={10}
    >
      <Grid>
        <Stack spacing={2}>
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default PaginationRounded;
