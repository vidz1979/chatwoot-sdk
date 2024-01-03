/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from "../models/user";

import { ChatwootAPIConfig } from "../core/ChatwootAPI";
import { request as __request } from "../core/request";

export class Profile {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * Fetch user profile
     * Get the user profile details
     * @returns user Success
     * @throws ApiError
     */
    public profile(): Promise<User> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/profile",
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
