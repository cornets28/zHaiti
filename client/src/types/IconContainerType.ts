import { MouseEventHandler, ReactNode } from "react";

export type IconContainerType = {
    text?: string;
    children: ReactNode;
    onClick: any;//MouseEventHandler<HTMLButtonElement>,
}