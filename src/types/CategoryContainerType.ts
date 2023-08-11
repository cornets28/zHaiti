import { MouseEventHandler, ReactNode } from "react"

export type CategoryContainerType = {
    children: ReactNode, 
    onMouseOver: MouseEventHandler<HTMLDivElement>, 
    onMouseOut: MouseEventHandler<HTMLDivElement>,
}