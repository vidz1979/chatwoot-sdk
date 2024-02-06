/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PublicMessage } from "../../models/public_message";
import type { PublicMessageCreatePayload } from "../../models/public_message_create_payload";
import type { PublicMessageUpdatePayload } from "../../models/public_message_update_payload";

import { ChatwootAPIConfig } from "../../core/ChatwootAPI";

/**
 * Messages calls from Client API
 */
export class MessagesApi {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * Create a message
     * Create a message
     * @returns public_message Success
     * @throws ApiError
     */
    public create({
        inboxIdentifier,
        contactIdentifier,
        conversationId,
        data,
    }: {
        /**
         * The identifier obtained from API inbox channel
         */
        inboxIdentifier: string;
        /**
         * The source id of contact obtained on contact create
         */
        contactIdentifier: string;
        /**
         * The numeric ID of the conversation
         */
        conversationId: number;
        data: PublicMessageCreatePayload;
    }): Promise<PublicMessage> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "POST",
            url: "/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages",
            path: {
                inbox_identifier: inboxIdentifier,
                contact_identifier: contactIdentifier,
                conversation_id: conversationId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * List all messages
     * List all messages in the conversation
     * @returns public_message Success
     * @throws ApiError
     */
    public list({
        inboxIdentifier,
        contactIdentifier,
        conversationId,
    }: {
        /**
         * The identifier obtained from API inbox channel
         */
        inboxIdentifier: string;
        /**
         * The source id of contact obtained on contact create
         */
        contactIdentifier: string;
        /**
         * The numeric ID of the conversation
         */
        conversationId: number;
    }): Promise<Array<PublicMessage>> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "GET",
            url: "/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages",
            path: {
                inbox_identifier: inboxIdentifier,
                contact_identifier: contactIdentifier,
                conversation_id: conversationId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a message
     * Update a message
     * @returns public_message Success
     * @throws ApiError
     */
    public update({
        inboxIdentifier,
        contactIdentifier,
        conversationId,
        messageId,
        data,
    }: {
        /**
         * The identifier obtained from API inbox channel
         */
        inboxIdentifier: string;
        /**
         * The source id of contact obtained on contact create
         */
        contactIdentifier: string;
        /**
         * The numeric ID of the conversation
         */
        conversationId: number;
        /**
         * The numeric ID of the message
         */
        messageId: number;
        data: PublicMessageUpdatePayload;
    }): Promise<PublicMessage> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "PATCH",
            url: "/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages/{message_id}",
            path: {
                inbox_identifier: inboxIdentifier,
                contact_identifier: contactIdentifier,
                conversation_id: conversationId,
                message_id: messageId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
