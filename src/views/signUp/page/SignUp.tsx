import type { FC } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export const SignUp: FC = () => {
    return (
        <Container>
            <Grid container spacing={3}>
                <h1>Hello from SignUp</h1>
            </Grid>
        </Container>
    );
};

export default SignUp;