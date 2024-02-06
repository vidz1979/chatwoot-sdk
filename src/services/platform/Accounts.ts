/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountCreateUpdatePayload } from "../../models/account_create_update_payload";
import type { PlatformAccount } from "../../models/platform_account";

import { ChatwootAPIConfig } from "../../core/ChatwootAPI";

export class Accounts {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * Create an Account
     * Create an Account
     * @returns platform_account Success
     * @throws ApiError
     */
    public create({ data }: { data: AccountCreateUpdatePayload }): Promise<PlatformAccount> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "POST",
            url: "/platform/api/v1/accounts",
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get an account details
     * Get the details of an account
     * @returns platform_account Success
     * @throws ApiError
     */
    public get({
        accountId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
    }): Promise<PlatformAccount> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "GET",
            url: "/platform/api/v1/accounts/{account_id}",
            path: {
                account_id: accountId,
            },
            errors: {
                401: `Unauthorized`,
                404: `The given account does not exist`,
            },
        });
    }

    /**
     * Update an account
     * Update an account's attributes
     * @returns platform_account Success
     * @throws ApiError
     */
    public update({
        accountId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: AccountCreateUpdatePayload;
    }): Promise<PlatformAccount> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "PATCH",
            url: "/platform/api/v1/accounts/{account_id}",
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
     * Delete an Account
     * Delete an Account
     * @returns any Success
     * @throws ApiError
     */
    public delete({
        accountId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
    }): Promise<any> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "DELETE",
            url: "/platform/api/v1/accounts/{account_id}",
            path: {
                account_id: accountId,
            },
            errors: {
                401: `Unauthorized`,
                404: `The account does not exist`,
            },
        });
    }
}
