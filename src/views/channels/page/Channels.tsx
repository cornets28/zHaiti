import type { FC } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export const Channels: FC = () => {
    return (
        <Container>
            <Grid container spacing={3}>
                <h1>Hello from Channels</h1>
            </Grid>
        </Container>
    );
};

export default Channels;