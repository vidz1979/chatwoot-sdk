/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IntegrationsHook = {
    /**
     * The ID of the integration hook
     */
    id?: string;
    /**
     * The ID of the integration app
     */
    app_id?: string;
    /**
     * Inbox ID if its an Inbox integration
     */
    inbox_id?: string;
    /**
     * Account ID of the integration
     */
    account_id?: string;
    /**
     * Whether the integration hook is enabled for the account
     */
    status?: boolean;
    /**
     * Whether its an account or inbox integration hook
     */
    hook_type?: boolean;
    /**
     * The associated settings for the integration
     */
    settings?: any;
};
