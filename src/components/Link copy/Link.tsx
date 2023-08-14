import type { FC } from 'react';
import { Link as LinkComponent } from '@mui/material';
import type { LinkProps } from '@mui/material';

export const Link: FC<LinkProps> = (props) => {
    const { children, ...rest } = props;

    return <LinkComponent {...rest}>{children}</LinkComponent>;
};
