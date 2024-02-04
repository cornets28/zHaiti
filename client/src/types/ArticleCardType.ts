export type ArticleCardType = {
    title: string,
    description?: string,
    channel: string,
    writer: string,
    like: number,
    reply: number,
    image: string
    tooltipTitle: string;
    isNews?: boolean;
    url: string;
}