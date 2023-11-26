import { MouseEventHandler } from "react";

export type MostPopularItemType = {
    image: string;
    title: string;
    views: number;
    onClick: MouseEventHandler<HTMLDivElement>
}