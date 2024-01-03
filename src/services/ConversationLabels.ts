/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConversationLabelList } from "../models/conversation_label_list";

import { ChatwootAPIConfig } from "../core/ChatwootAPI";
import { request as __request } from "../core/request";

export class ConversationLabels {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * List Labels
     * Lists all the labels of a conversation
     * @returns conversation_labels Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Conversation-Labels/operation/list-all-labels-of-a-conversation}
     */
    public list({
        accountId,
        conversationId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the conversation
         */
        conversationId: number;
    }): Promise<ConversationLabelList> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/conversations/{conversation_id}/labels",
            path: {
                account_id: accountId,
                conversation_id: conversationId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Conversation not found`,
            },
        });
    }

    /**
     * Add Labels
     * Add labels to a conversation. Note that this API would overwrite the existing list of labels associated to the conversation.
     * @returns conversation_labels Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Conversation-Labels/operation/conversation-add-labels}
     */
    public add({
        accountId,
        conversationId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the conversation
         */
        conversationId: number;
        data: {
            /**
             * Array of labels (comma-separated strings)
             */
            labels?: ConversationLabelList;
        };
    }): Promise<ConversationLabelList> {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/conversations/{conversation_id}/labels",
            path: {
                account_id: accountId,
                conversation_id: conversationId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
                404: `Conversation not found`,
            },
        });
    }
}
