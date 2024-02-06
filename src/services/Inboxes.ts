/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Agent } from "../models/agent";
import type { Inbox } from "../models/inbox";
import type { AgentBot } from "../models/agent_bot";

import { ChatwootAPIConfig } from "../core/ChatwootAPI";

import { InboxCreateUpdatePayload } from "../models/inbox_create_update_upload";

export class Inboxes {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * List all inboxes
     * List all inboxes available in the current account
     * @returns inbox Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Inboxes/operation/listAllInboxes}
     */
    public list({
        accountId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
    }): Promise<{
        payload: Array<Inbox>;
    }> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/inboxes",
            path: {
                account_id: accountId,
            },
            errors: {
                403: `Access denied`,
                404: `Inbox not found`,
            },
        });
    }

    /**
     * Get an inbox
     * Get an inbox available in the current account
     * @returns inbox Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Inboxes/operation/GetInbox}
     */
    public get({
        accountId,
        id,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the inbox
         */
        id: number;
    }): Promise<Inbox> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/inboxes/{id}/",
            path: {
                account_id: accountId,
                id: id,
            },
            errors: {
                403: `Access denied`,
                404: `Inbox not found`,
            },
        });
    }

    /**
     * Create an inbox
     * You can create more than one website inbox in each account
     * @returns inbox Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Inboxes/operation/inboxCreation}
     */
    public create({ accountId, data }: { accountId: number; data: InboxCreateUpdatePayload }): Promise<Inbox> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/inboxes/",
            path: {
                account_id: accountId,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Inbox not found`,
            },
        });
    }

    /**
     * Update Inbox
     * Add avatar and disable auto assignment for an inbox
     * @returns inbox Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Inboxes/operation/updateInbox}
     */
    public update({
        accountId,
        id,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the inbox
         */
        id: number;
        data: InboxCreateUpdatePayload;
    }): Promise<Inbox> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "PATCH",
            url: "/api/v1/accounts/{account_id}/inboxes/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Inbox not found`,
            },
        });
    }

    /**
     * Show Inbox Agent Bot
     * See if an agent bot is associated to the Inbox
     * @returns agent_bot Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Inboxes/operation/getInboxAgentBot}
     */
    public getAgentBot({
        accountId,
        id,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the inbox
         */
        id: number;
    }): Promise<AgentBot> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/inboxes/{id}/agent_bot",
            path: {
                account_id: accountId,
                id: id,
            },
            errors: {
                403: `Access denied`,
                404: `Inbox not found, Agent bot not found`,
            },
        });
    }

    /**
     * Add or remove agent bot
     * To add an agent bot pass agent_bot id, to remove agent bot from an inbox pass null
     * @returns void
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Inboxes/operation/updateAgentBot}
     */
    public updateAgentBot({
        accountId,
        id,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the inbox
         */
        id: number;
        data: {
            /**
             * Agent bot ID
             */
            agent_bot: number;
        };
    }): Promise<{ agent_bot: number }> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/inboxes/{id}/set_agent_bot",
            path: {
                account_id: accountId,
                id: id,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Inbox not found, Agent bot not found`,
            },
        });
    }

    /**
     * List Agents in Inbox
     * Get Details of Agents in an Inbox
     * @returns agent Success
     * @throws ApiError
     */
    public listAgents({
        accountId,
        inboxId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the Inbox
         */
        inboxId: number;
    }): Promise<Array<Agent>> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/inbox_members/{inbox_id}",
            path: {
                account_id: accountId,
                inbox_id: inboxId,
            },
            errors: {
                403: `Access denied`,
                404: `Inbox not found`,
            },
        });
    }

    /**
     * Remove an Agent from Inbox
     * Remove an Agent from Inbox
     * @returns any Success
     * @throws ApiError
     */
    public removeAgent({
        accountId,
        inboxId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the Inbox
         */
        inboxId: number;
        data: {
            /**
             * The ID of the inbox
             */
            inbox_id: string;
            /**
             * IDs of users to be deleted from the inbox
             */
            user_ids: Array<number>;
        };
    }): Promise<any> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "DELETE",
            url: "/api/v1/accounts/{account_id}/inbox_members/{inbox_id}",
            path: {
                account_id: accountId,
                inbox_id: inboxId,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Inbox not found`,
                422: `User must exist`,
            },
        });
    }

    /**
     * Add a New Agent
     * Add a new Agent to Inbox
     * @returns agent Success
     * @throws ApiError
     */
    public addAgent({
        accountId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: {
            /**
             * The ID of the inbox
             */
            inbox_id: string;
            /**
             * IDs of users to be added to the inbox
             */
            user_ids: Array<number>;
        };
    }): Promise<Array<Agent>> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/inbox_members",
            path: {
                account_id: accountId,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Inbox not found`,
                422: `User must exist`,
            },
        });
    }

    /**
     * Update Agents in Inbox
     * All agents except the one passed in params will be removed
     * @returns agent Success
     * @throws ApiError
     */
    public updateAgentsInInbox({
        accountId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: {
            /**
             * The ID of the inbox
             */
            inbox_id: string;
            /**
             * IDs of users to be added to the inbox
             */
            user_ids: Array<number>;
        };
    }): Promise<Array<Agent>> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "PATCH",
            url: "/api/v1/accounts/{account_id}/inbox_members",
            path: {
                account_id: accountId,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Inbox not found`,
                422: `User must exist`,
            },
        });
    }
}
