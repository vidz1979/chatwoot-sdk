/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IntegrationsApp } from "../models/integrations_app";
import type { IntegrationsHook } from "../models/integrations_hook";
import type { IntegrationsHookCreatePayload } from "../models/integrations_hook_create_payload";
import type { IntegrationsHookUpdatePayload } from "../models/integrations_hook_update_payload";

import { ChatwootAPIConfig } from "../core/ChatwootAPI";
import { request as __request } from "../core/request";

export class Integrations {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * List all the Integrations
     * Get the details of all Integrations available for the account
     * @returns integrations_app Success
     * @throws ApiError
     */
    public list({
        accountId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
    }): Promise<Array<IntegrationsApp>> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/integrations/apps",
            path: {
                account_id: accountId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Url not found`,
            },
        });
    }

    /**
     * Create an integration hook
     * Create an integration hook
     * @returns integrations_hook Success
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
        data: IntegrationsHookCreatePayload;
    }): Promise<IntegrationsHook> {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/integrations/hooks",
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
     * Update an Integration Hook
     * Update an Integration Hook
     * @returns integrations_hook Success
     * @throws ApiError
     */
    public update({
        accountId,
        hookId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the integration hook
         */
        hookId: number;
        data: IntegrationsHookUpdatePayload;
    }): Promise<IntegrationsHook> {
        return __request(this.chatwootAPI, {
            method: "PATCH",
            url: "/api/v1/accounts/{account_id}/integrations/hooks/{hook_id}",
            path: {
                account_id: accountId,
                hook_id: hookId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Delete an Integration Hook
     * Delete an Integration Hook
     * @returns any Success
     * @throws ApiError
     */
    public delete({
        accountId,
        hookId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the integration hook
         */
        hookId: number;
    }): Promise<any> {
        return __request(this.chatwootAPI, {
            method: "DELETE",
            url: "/api/v1/accounts/{account_id}/integrations/hooks/{hook_id}",
            path: {
                account_id: accountId,
                hook_id: hookId,
            },
            errors: {
                401: `Unauthorized`,
                404: `The hook does not exist in the account`,
            },
        });
    }
}
