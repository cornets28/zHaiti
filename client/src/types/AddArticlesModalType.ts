import { JSXElementConstructor, ReactElement } from "react";

export type AddArticlesModalType = {
    open: boolean;
    handleClose: any;
    children: ReactElement<any, string | JSXElementConstructor<any>>;
}