import { MouseEventHandler } from "react"

export type SectionItemType = {
    image: string,
    title?: string | undefined,
    body?: string | undefined,
    date?: string | undefined,
    onClick:  MouseEventHandler<HTMLLIElement>,
}