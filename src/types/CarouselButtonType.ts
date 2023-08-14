import { MouseEventHandler } from "react"

export type CarouselButtonType = {
    onClick: MouseEventHandler<HTMLButtonElement>,
    icon: string,
    marginLeft?: number,
}