import { MouseEventHandler } from "react"

export type SectionItemType = {
    image: string,
    title: string,
    body?: string,
    date?: string,
    onClick:  MouseEventHandler<HTMLLIElement>,
}