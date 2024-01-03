/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AgentBot = {
    /**
     * ID of the agent bot
     */
    id?: number;
    /**
     * The name of the agent bot
     */
    name?: string;
    /**
     * The description about the agent bot
     */
    description?: string;
    /**
     * Account ID if it's an account specific bot
     */
    account_id?: number;
    /**
     * The webhook URL for the bot
     */
    outgoing_url?: string;
    /**
     * Bot type (default: "webhook")
     */
    bot_type?: string;
    /**
     * Bot config (default: {})
     */
    bot_config?: any;
    /**
     * Access token for bot
     */
    access_token?: string;
};
