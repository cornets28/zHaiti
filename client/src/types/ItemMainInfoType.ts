import { MouseEventHandler } from "react";

export type ItemMainInfoType = {
    title: string;
    image: string;
    imageInfo: string;
    partialDescription: string;
    onClick: MouseEventHandler<HTMLDivElement>;
}