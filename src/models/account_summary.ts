/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AccountSummary = {
    avg_first_response_time?: string;
    avg_resolution_time?: string;
    conversations_count?: number;
    incoming_messages_count?: number;
    outgoing_messages_count?: number;
    resolutions_count?: number;
    previous?: {
        avg_first_response_time?: string;
        avg_resolution_time?: string;
        conversations_count?: number;
        incoming_messages_count?: number;
        outgoing_messages_count?: number;
        resolutions_count?: number;
    };
};
