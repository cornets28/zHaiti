import { MouseEventHandler, ReactNode } from "react";

export type EditIconContainerType = {
    children: ReactNode, 
    onClick: MouseEventHandler<HTMLDivElement>
}