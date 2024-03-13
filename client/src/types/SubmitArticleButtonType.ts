import { MouseEventHandler } from "react";

export type SubmitArticleButtonType = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
