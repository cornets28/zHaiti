import { JSXElementConstructor, MouseEventHandler, ReactElement } from "react";

export type AddArticlesModalType = {
    open: boolean;
    handleClose: MouseEventHandler<HTMLDivElement>;
    children: ReactElement<any, string | JSXElementConstructor<any>>;
}