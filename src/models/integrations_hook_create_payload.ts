/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IntegrationsHookCreatePayload = {
    /**
     * The ID of app for which integration hook is being created
     */
    app_id?: string;
    /**
     * The inbox ID, if the hook is an inbox hook
     */
    inbox_id?: string;
    /**
     * The settings required by the integration
     */
    settings?: any;
};
