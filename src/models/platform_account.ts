/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { Locale } from "./locale";

export type PlatformAccount = {
    /**
     * Account ID
     */
    id?: number;
    /**
     * Name of the account
     */
    name?: string;
    /**
     * Domain of the account
     */
    domain?: string;
    /**
     * Locale of the account
     */
    locale?: Locale;
    /**
     * Status of the account
     */
    status?: string;
};
