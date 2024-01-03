/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Message } from "./message";

export type PublicConversation = {
    /**
     * Id of the conversation
     */
    id?: number;
    /**
     * The inbox id of the conversation
     */
    inbox_id?: string;
    /**
     * Messages in the conversation
     */
    messages?: Array<Message>;
    /**
     * The contact information associated to the conversation
     */
    contact?: any;
};
