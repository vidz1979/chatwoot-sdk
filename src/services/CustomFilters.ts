/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomFilter } from "../models/custom_filter";
import type { CustomFilterCreateUpdatePayload } from "../models/custom_filter_create_update_payload";

import { ChatwootAPIConfig } from "../core/ChatwootAPI";
import { request as __request } from "../core/request";

export class CustomFilters {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * List all custom filters
     * List all custom filters in a category of a user
     * @returns custom_filter Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Filters/operation/list-all-filters}
     */
    public list({
        accountId,
        filterType,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The type of custom filter
         */
        filterType?: "conversation" | "contact" | "report";
    }): Promise<Array<CustomFilter>> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/custom_filters",
            path: {
                account_id: accountId,
            },
            query: {
                filter_type: filterType,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Create a custom filter
     * Create a custom filter in the account
     * @returns custom_filter Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Filters/operation/create-a-custom-filter}
     */
    public create({
        accountId,
        data,
        filterType,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: CustomFilterCreateUpdatePayload;
        /**
         * The type of custom filter
         */
        filterType?: "conversation" | "contact" | "report";
    }): Promise<CustomFilter> {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/custom_filters",
            path: {
                account_id: accountId,
            },
            query: {
                filter_type: filterType,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get a custom filter details
     * Get the details of a custom filter in the account
     * @returns custom_filter Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Filters/operation/get-details-of-a-single-custom-filter}
     */
    public get({
        accountId,
        customFilterId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the custom filter
         */
        customFilterId: number;
    }): Promise<CustomFilter> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}",
            path: {
                account_id: accountId,
                custom_filter_id: customFilterId,
            },
            errors: {
                401: `Unauthorized`,
                404: `The given team ID does not exist in the account`,
            },
        });
    }

    /**
     * Update a custom filter
     * Update a custom filter's attributes
     * @returns custom_filter Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Filters/operation/update-a-custom-filter}
     */
    public update({
        accountId,
        customFilterId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the custom filter
         */
        customFilterId: number;
        data: CustomFilterCreateUpdatePayload;
    }): Promise<CustomFilter> {
        return __request(this.chatwootAPI, {
            method: "PATCH",
            url: "/api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}",
            path: {
                account_id: accountId,
                custom_filter_id: customFilterId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Delete a custom filter
     * Delete a custom filter from the account
     * @returns any Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Filters/operation/delete-a-custom-filter}
     */
    public delete({
        accountId,
        customFilterId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the custom filter
         */
        customFilterId: number;
    }): Promise<any> {
        return __request(this.chatwootAPI, {
            method: "DELETE",
            url: "/api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}",
            path: {
                account_id: accountId,
                custom_filter_id: customFilterId,
            },
            errors: {
                401: `Unauthorized`,
                404: `The custom filter does not exist in the account`,
            },
        });
    }
}
