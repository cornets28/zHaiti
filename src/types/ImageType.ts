import { MouseEventHandler } from "react"

export type ImageType = {
    image: string, 
    alt: string, 
    title: string, 
    author: string, 
    onClick: MouseEventHandler<HTMLDivElement>
}