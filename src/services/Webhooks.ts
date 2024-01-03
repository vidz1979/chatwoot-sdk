/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webhook } from "../models/webhook";
import type { WebhookCreateUpdatePayload } from "../models/webhook_create_update_payload";

import { ChatwootAPIConfig } from "../core/ChatwootAPI";
import { request as __request } from "../core/request";

export class Webhooks {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * List all webhooks
     * List all webhooks in the account
     * @returns webhook Success
     * @throws ApiError
     */
    public list({
        accountId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
    }): Promise<Array<Webhook>> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/webhooks",
            path: {
                account_id: accountId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Add a webhook
     * Add a webhook subscription to the account
     * @returns webhook Success
     * @throws ApiError
     */
    public create({
        accountId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: WebhookCreateUpdatePayload;
    }): Promise<Webhook> {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/webhooks",
            path: {
                account_id: accountId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a webhook object
     * Update a webhook object in the account
     * @returns webhook Success
     * @throws ApiError
     */
    public update({
        accountId,
        webhookId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the webhook
         */
        webhookId: number;
        data: WebhookCreateUpdatePayload;
    }): Promise<Webhook> {
        return __request(this.chatwootAPI, {
            method: "PATCH",
            url: "/api/v1/accounts/{account_id}/webhooks/{webhook_id}",
            path: {
                account_id: accountId,
                webhook_id: webhookId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Delete a webhook
     * Delete a webhook from the account
     * @returns any Success
     * @throws ApiError
     */
    public delete({
        accountId,
        webhookId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the webhook
         */
        webhookId: number;
    }): Promise<any> {
        return __request(this.chatwootAPI, {
            method: "DELETE",
            url: "/api/v1/accounts/{account_id}/webhooks/{webhook_id}",
            path: {
                account_id: accountId,
                webhook_id: webhookId,
            },
            errors: {
                401: `Unauthorized`,
                404: `The webhook does not exist in the account`,
            },
        });
    }
}
