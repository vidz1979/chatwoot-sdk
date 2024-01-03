/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AgentBotCreateUpdatePayload = {
    /**
     * The name of the agent bot
     */
    name?: string;
    /**
     * The description about the agent bot
     */
    description?: string;
    /**
     * The webhook URL for the bot
     */
    outgoing_url?: string;
};
