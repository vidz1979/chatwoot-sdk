/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ConversationStatusToggle = {
    meta?: any;
    payload?: {
        success?: boolean;
        current_status?: "open" | "resolved";
        conversation_id?: number;
    };
};
