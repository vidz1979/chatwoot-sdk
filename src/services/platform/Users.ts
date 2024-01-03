/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from "../../models/user";
import type { UserCreateUpdatePayload } from "../../models/user_create_update_payload";

import { ChatwootAPIConfig } from "../../core/ChatwootAPI";
import { request as __request } from "../../core/request";

export class Users {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * Create a User
     * Create a User
     * @returns user Success
     * @throws ApiError
     */
    public create({ data }: { data: UserCreateUpdatePayload }): Promise<User> {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/platform/api/v1/users",
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get an user details
     * Get the details of an user
     * @returns user Success
     * @throws ApiError
     */
    public get({
        id,
    }: {
        /**
         * The numeric ID of the user on the platform
         */
        id: number;
    }): Promise<User> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/platform/api/v1/users/{id}",
            path: {
                id: id,
            },
            errors: {
                401: `Unauthorized`,
                404: `The given user does not exist`,
            },
        });
    }

    /**
     * Update a user
     * Update a user's attributes
     * @returns user Success
     * @throws ApiError
     */
    public update({
        id,
        data,
    }: {
        /**
         * The numeric ID of the user on the platform
         */
        id: number;
        data: UserCreateUpdatePayload;
    }): Promise<User> {
        return __request(this.chatwootAPI, {
            method: "PATCH",
            url: "/platform/api/v1/users/{id}",
            path: {
                id: id,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Delete a User
     * Delete a User
     * @returns any Success
     * @throws ApiError
     */
    public delete({
        id,
    }: {
        /**
         * The numeric ID of the user on the platform
         */
        id: number;
    }): Promise<any> {
        return __request(this.chatwootAPI, {
            method: "DELETE",
            url: "/platform/api/v1/users/{id}",
            path: {
                id: id,
            },
            errors: {
                401: `Unauthorized`,
                404: `The user does not exist`,
            },
        });
    }

    /**
     * Get User SSO Link
     * Get the sso link of a user
     * @returns any Success
     * @throws ApiError
     */
    public getSSOUrl({
        id,
    }: {
        /**
         * The numeric ID of the user on the platform
         */
        id: number;
    }): Promise<{
        /**
         * SSO url to autenticate the user
         */
        url?: string;
    }> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/platform/api/v1/users/{id}/login",
            path: {
                id: id,
            },
            errors: {
                401: `Unauthorized`,
                404: `The given user does not exist`,
            },
        });
    }
}
