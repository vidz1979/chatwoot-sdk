/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CannedResponse } from "../models/canned_response";
import type { CannedResponseCreateUpdatePayload } from "../models/canned_response_create_update_payload";

import { ChatwootAPIConfig } from "../core/ChatwootAPI";

export class CannedResponses {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * List all Canned Responses in an Account
     * Get Details of Canned Responses in an Account
     * @returns canned_response Success
     * @throws ApiError
     */
    public list({
        accountId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
    }): Promise<Array<CannedResponse>> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/canned_responses",
            path: {
                account_id: accountId,
            },
            errors: {
                403: `Access denied`,
            },
        });
    }

    /**
     * Add a New Canned Response
     * Add a new Canned Response to Account
     * @returns canned_response Success
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
        data: CannedResponseCreateUpdatePayload;
    }): Promise<CannedResponse> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/canned_responses",
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
     * Update Canned Response in Account
     * Update a Canned Response in Account
     * @returns canned_response Success
     * @throws ApiError
     */
    public update({
        accountId,
        id,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the canned response to be updated.
         */
        id: number;
        data: CannedResponseCreateUpdatePayload;
    }): Promise<CannedResponse> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "PATCH",
            url: "/api/v1/accounts/{account_id}/canned_responses/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Agent not found`,
            },
        });
    }
    /**
     * Remove a Canned Response from Account
     * Remove a Canned Response from Account
     * @returns any Success
     * @throws ApiError
     */
    public delete({
        accountId,
        id,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the canned response to be deleted
         */
        id: number;
    }): Promise<any> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "DELETE",
            url: "/api/v1/accounts/{account_id}/canned_responses/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            errors: {
                403: `Access denied`,
                404: `Canned Response not found`,
            },
        });
    }
}
