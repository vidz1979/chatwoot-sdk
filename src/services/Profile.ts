/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from "../models/user";

import { ChatwootAPIConfig } from "../core/ChatwootAPI";

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
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/profile",
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
