import { ReactNode } from "react";

export type InviteToActionType = {
    numberOfMessages: string;
    onClickShare: any;//MouseEventHandler<HTMLButtonElement>,
    onClickSave: any;//MouseEventHandler<HTMLButtonElement>,
    onClickMessages: any;//MouseEventHandler<HTMLButtonElement>,
}