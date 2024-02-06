/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { ChatwootAPIConfig } from "../../core/ChatwootAPI";

export class AccountUsers {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * List all Account Users
     * List all account users
     * @returns any Success
     * @throws ApiError
     */
    public list({
        accountId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
    }): Promise<
        Array<{
            /**
             * The ID of the user
             */
            account_id?: number;
            /**
             * The ID of the user
             */
            user_id?: number;
            /**
             * whether user is an administrator or agent
             */
            role?: string;
        }>
    > {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "GET",
            url: "/platform/api/v1/accounts/{account_id}/account_users",
            path: {
                account_id: accountId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Create an Account User
     * Create an Account User
     * @returns any Success
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
        data: {
            /**
             * The ID of the user
             */
            user_id: number;
            /**
             * whether user is an administrator or agent
             */
            role: string;
        };
    }): Promise<any> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "POST",
            url: "/platform/api/v1/accounts/{account_id}/account_users",
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
     * Delete an Account User
     * Delete an Account User
     * @returns any Success
     * @throws ApiError
     */
    public delete({
        accountId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: {
            /**
             * The ID of the user
             */
            user_id: number;
        };
    }): Promise<any> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "DELETE",
            url: "/platform/api/v1/accounts/{account_id}/account_users",
            path: {
                account_id: accountId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
                404: `The account does not exist`,
            },
        });
    }
}
