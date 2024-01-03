/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Webhook = {
    /**
     * The ID of the webhook
     */
    id?: number;
    /**
     * The url to which the events will be send
     */
    url?: string;
    /**
     * The list of subscribed events
     */
    subscriptions?: Array<
        | "conversation_created"
        | "conversation_status_changed"
        | "conversation_updated"
        | "message_created"
        | "message_updated"
        | "webwidget_triggered"
    >;
    /**
     * The id of the account which the webhook object belongs to
     */
    account_id?: number;
};
