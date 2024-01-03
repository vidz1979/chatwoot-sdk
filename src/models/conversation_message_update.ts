/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ConversationMessageUpdate = {
    /**
     * The content of the message
     */
    content?: string;
    message_type?: "outgoing" | "incoming";
    /**
     * Flag to identify if it is a private note
     */
    private?: boolean;
    /**
     * if you want to create custom message types
     */
    content_type?: "input_email" | "cards" | "input_select" | "form" | "article";
    /**
     * attributes based on your content type
     */
    content_attributes?: Record<string, unknown>;
    /**
     * attributes based on your content type
     */
    attachments?: Array<Record<string, unknown>>;
    source_id?: string;
    source_reply_id?: string;
};
