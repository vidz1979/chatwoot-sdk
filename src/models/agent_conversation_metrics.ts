/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AgentConversationMetrics = {
    id?: number;
    name?: string;
    email?: string;
    thumbnail?: string;
    availability?: string;
    metric?: {
        open?: number;
        unattended?: number;
    };
};
