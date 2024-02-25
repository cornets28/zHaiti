import { MouseEventHandler } from "react";

export type MainMustKnowHaitiansContainerType = {
    mainImage1: string,
    mainImage2: string,
    title1: string,
    title2: string,
    onClick1: MouseEventHandler<HTMLDivElement>,
    onClick2: MouseEventHandler<HTMLDivElement>,
}