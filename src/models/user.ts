/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from "./account";

export type User = {
    id?: number;
    uid?: string;
    name?: string;
    available_name?: string;
    display_name?: string;
    email?: string;
    account_id?: number;
    role?: "agent" | "administrator";
    confirmed?: boolean;
    /**
     * Available for users who are created through platform APIs and has custom attributes associated.
     */
    custom_attributes?: any;
    accounts?: Array<Account>;
    /**
     * Provides access to endpoints based on the user permissions levels.
     * This token can be saved by an external system when user is created via API, to perform activities on behalf
     * of the user.
     */
    access_token?: string;
};
