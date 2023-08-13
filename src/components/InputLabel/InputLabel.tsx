import type { FC } from 'react';
import { InputLabel as MuiInputLabel } from '@mui/material';
import type { InputLabelProps } from '@mui/material';

export const InputLabel: FC<InputLabelProps> = (props) => {
    const { children, ...rest } = props;

    return <MuiInputLabel {...rest}>{children} </MuiInputLabel>;
};
