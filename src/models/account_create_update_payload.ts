/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { Locale } from "./locale";

export type AccountCreateUpdatePayload = {
    /**
     * Name of the account
     */
    name: string;

    /**
     * Locale of the account (language)
     */
    locale?: Locale;
};
