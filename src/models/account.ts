/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Account = {
    /**
     * Account ID
     */
    id?: number;
    /**
     * Name of the account
     */
    name?: string;
    /**
     * The user role in the account
     */
    role?: "administrator" | "agent";
};
