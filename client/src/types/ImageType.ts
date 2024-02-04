import { MouseEventHandler } from "react"

export type ImageType = {
    image: string, 
    alt: string, 
    title: string, 
    author: string, 
    marginTop?: number,
    marginRight?: number,
    marginLeft?: number,
    onClick: MouseEventHandler<HTMLDivElement>
}