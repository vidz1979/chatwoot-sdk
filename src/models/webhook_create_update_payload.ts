/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WebhookCreateUpdatePayload = {
    /**
     * The url where the events should be sent
     */
    url?: string;
    /**
     * The events you want to subscribe to.
     */
    subscriptions?: Array<
        | "conversation_created"
        | "conversation_status_changed"
        | "conversation_updated"
        | "message_created"
        | "message_updated"
        | "webwidget_triggered"
    >;
};
