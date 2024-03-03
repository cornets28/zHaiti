import { MouseEventHandler, ReactNode } from "react"

export type SectionItemType = {
    image: string,
    title?: string | undefined,
    body?: string | undefined,
    date?: string | undefined,
    children?: ReactNode,
    onClick:  MouseEventHandler<HTMLLIElement>,
}