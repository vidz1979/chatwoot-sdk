/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgentBot } from "../../models/agent_bot";
import type { AgentBotCreateUpdatePayload } from "../../models/agent_bot_create_update_payload";

import { ChatwootAPIConfig } from "../../core/ChatwootAPI";
import { request as __request } from "../../core/request";

export class AgentBots {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * List all AgentBots
     * List all agent bots available
     * @returns agent_bot Success
     * @throws ApiError
     */
    public list(): Promise<Array<AgentBot>> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/platform/api/v1/agent_bots",
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Create an Agent Bot
     * Create an agent bot
     * @returns agent_bot Success
     * @throws ApiError
     */
    public create({ data }: { data: AgentBotCreateUpdatePayload }): Promise<AgentBot> {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/platform/api/v1/agent_bots",
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get an agent bot details
     * Get the details of an agent bot
     * @returns agent_bot Success
     * @throws ApiError
     */
    public get({
        id,
    }: {
        /**
         * The ID of the agentbot to be updated
         */
        id: number;
    }): Promise<AgentBot> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/platform/api/v1/agent_bots/{id}",
            path: {
                id: id,
            },
            errors: {
                401: `Unauthorized`,
                404: `The given agent bot ID does not exist`,
            },
        });
    }

    /**
     * Update an agent bot
     * Update an agent bot's attributes
     * @returns agent_bot Success
     * @throws ApiError
     */
    public update({
        id,
        data,
    }: {
        /**
         * The ID of the agentbot to be updated
         */
        id: number;
        data: AgentBotCreateUpdatePayload;
    }): Promise<AgentBot> {
        return __request(this.chatwootAPI, {
            method: "PATCH",
            url: "/platform/api/v1/agent_bots/{id}",
            path: {
                id: id,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Delete an AgentBot
     * Delete an AgentBot
     * @returns any Success
     * @throws ApiError
     */
    public delete({
        id,
    }: {
        /**
         * The ID of the agentbot to be updated
         */
        id: number;
    }): Promise<any> {
        return __request(this.chatwootAPI, {
            method: "DELETE",
            url: "/platform/api/v1/agent_bots/{id}",
            path: {
                id: id,
            },
            errors: {
                401: `Unauthorized`,
                404: `The agent bot does not exist`,
            },
        });
    }
}
