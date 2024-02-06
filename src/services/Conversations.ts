/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Conversation } from "../models/conversation";
import type { ConversationList } from "../models/conversation_list";
import type { ConversationShow } from "../models/conversation_show";
import type { ConversationStatusToggle } from "../models/conversation_status_toggle";

import { ChatwootAPIConfig } from "../core/ChatwootAPI";

export class Conversations {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * Get Conversation Counts
     * Get open, unassigned and all Conversation counts
     * @returns any Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Conversations/operation/conversationListMeta}
     */
    public getMeta({
        accountId,
        status = "open",
        q,
        inboxId,
        teamId,
        labels,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * Filter by conversation status.
         */
        status?: "open" | "resolved" | "pending" | "snoozed";
        /**
         * Filters conversations with messages containing the search term
         */
        q?: string;
        inboxId?: number;
        teamId?: number;
        labels?: Array<string>;
    }): Promise<{
        meta?: {
            mine_count?: number;
            unassigned_count?: number;
            assigned_count?: number;
            all_count?: number;
        };
    }> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/conversations/meta",
            path: {
                account_id: accountId,
            },
            query: {
                status: status,
                q: q,
                inbox_id: inboxId,
                team_id: teamId,
                labels: labels,
            },
            errors: {
                400: `Bad Request Error`,
            },
        });
    }

    /**
     * Conversations List
     * List all the conversations with pagination
     * @returns conversation_list Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Conversations/operation/conversationList}
     */
    public list({
        accountId,
        assigneeType = "all",
        status = "open",
        q,
        inboxId,
        teamId,
        labels,
        page = 1,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * Filter conversations by assignee type.
         */
        assigneeType?: "me" | "unassigned" | "all" | "assigned";
        /**
         * Filter by conversation status.
         */
        status?: "open" | "resolved" | "pending" | "snoozed";
        /**
         * Filters conversations with messages containing the search term
         */
        q?: string;
        inboxId?: number;
        teamId?: number;
        labels?: Array<string>;
        /**
         * paginate through conversations
         */
        page?: number;
    }): Promise<ConversationList> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/conversations",
            path: {
                account_id: accountId,
            },
            query: {
                assignee_type: assigneeType,
                status: status,
                q: q,
                inbox_id: inboxId,
                team_id: teamId,
                labels: labels,
                page: page,
            },
            errors: {
                400: `Bad Request Error`,
            },
        });
    }

    /**
     * Create New Conversation
     * Creating a conversation in chatwoot requires a source id.
     *
     * Learn more about source_id: https://github.com/chatwoot/chatwoot/wiki/Building-on-Top-of-Chatwoot:-Importing-Existing-Contacts-and-Creating-Conversations
     * @returns Pick<conversation, "id" | "account_id" | "inbox_id"> Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Conversations/operation/newConversation}
     */
    public create({
        accountId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: {
            /**
             * Conversation source id
             */
            source_id?: string;
            /**
             * Id of inbox in which the conversation is created <br/> Allowed Inbox Types: Website, Phone, Api, Email
             */
            inbox_id?: string;
            /**
             * Contact Id for which conversation is created
             */
            contact_id?: string;
            /**
             * Lets you specify attributes like browser information
             */
            additional_attributes?: any;
            /**
             * The object to save custom attributes for conversation, accepts custom attributes key and value
             */
            custom_attributes?: any;
            /**
             * Specify the conversation whether it's pending, open, closed
             */
            status?: "open" | "resolved" | "pending";
            /**
             * Agent Id for assigning a conversation to an agent
             */
            assignee_id?: string;
            /**
             * Team Id for assigning a conversation to a team
             */
            team_id?: string;
        };
    }): Promise<Pick<Conversation, "id" | "account_id" | "inbox_id">> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/conversations",
            path: {
                account_id: accountId,
            },
            body: data,
            errors: {
                403: `Access denied`,
            },
        });
    }

    /**
     * Conversations Filter
     * Filter conversations with custom filter options and pagination
     * @returns conversation_list Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Conversations/operation/conversationFilter}
     */
    public filter({
        accountId,
        payload,
        page,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        payload: Array<{
            /**
             * filter attribute name
             */
            attribute_key?: string;
            /**
             * filter operator name
             */
            filter_operator?: "equal_to" | "not_equal_to" | "contains" | "does_not_contain";
            /**
             * array of the attribute values to filter
             */
            values?: Array<string>;
            /**
             * query operator name
             */
            query_operator?: "AND" | "OR";
        }>;
        page?: number;
    }): Promise<ConversationList> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/conversations/filter",
            path: {
                account_id: accountId,
            },
            query: {
                page: page,
            },
            body: {
                payload,
            },
            errors: {
                400: `Bad Request Error`,
            },
        });
    }

    /**
     * Conversation Details
     * Get all details regarding a conversation with all messages in the conversation
     * @returns conversation_show Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Conversations/operation/get-details-of-a-conversation}
     */
    public get({
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
    }): Promise<ConversationShow> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/conversations/{conversation_id}",
            path: {
                account_id: accountId,
                conversation_id: conversationId,
            },
            errors: {
                403: `Access denied`,
                404: `Conversation not found`,
            },
        });
    }

    /**
     * Toggle Status
     * Toggles the status of the conversation between open and resolved
     * @returns conversation_status_toggle Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Conversations/operation/toggle-status-of-a-conversation}
     */
    public toggleStatus({
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
             * The status of the conversation
             */
            status: "open" | "resolved" | "pending";
        };
    }): Promise<ConversationStatusToggle> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/conversations/{conversation_id}/toggle_status",
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
