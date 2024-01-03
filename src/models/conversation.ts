/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Message } from "./message";

export type Conversation = {
    /**
     * ID of the conversation
     */
    id?: number;
    messages?: Array<Message>;
    /**
     * Account Id
     */
    account_id?: number;
    /**
     * ID of the inbox
     */
    inbox_id?: number;
    /**
     * The status of the conversation
     */
    status?: "open" | "resolved" | "pending";
    /**
     * The time at which conversation was created
     */
    timestamp?: string;
    contact_last_seen_at?: string;
    agent_last_seen_at?: string;
    /**
     * The number of unread messages
     */
    unread_count?: number;
    /**
     * The object containing additional attributes related to the conversation
     */
    additional_attributes?: any;
    /**
     * The object to save custom attributes for conversation, accepts custom attributes key and value
     */
    custom_attributes?: any;
};
