/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Agent } from "../models/agent";
import type { Team } from "../models/team";
import type { TeamCreateUpdatePayload } from "../models/team_create_update_payload";

import { ChatwootAPIConfig } from "../core/ChatwootAPI";

export class Teams {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * List all teams
     * List all teams available in the current account
     * @returns team Success
     * @throws ApiError
     */
    public list({
        accountId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
    }): Promise<Array<Team>> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/teams",
            path: {
                account_id: accountId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Create a team
     * Create a team in the account
     * @returns team Success
     * @throws ApiError
     */
    public create({
        accountId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: TeamCreateUpdatePayload;
    }): Promise<Team> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/teams",
            path: {
                account_id: accountId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get a team details
     * Get the details of a team in the account
     * @returns team Success
     * @throws ApiError
     */
    public get({
        accountId,
        teamId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the team to be updated
         */
        teamId: number;
    }): Promise<Team> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/teams/{team_id}",
            path: {
                account_id: accountId,
                team_id: teamId,
            },
            errors: {
                401: `Unauthorized`,
                404: `The given team ID does not exist in the account`,
            },
        });
    }

    /**
     * Update a team
     * Update a team's attributes
     * @returns team Success
     * @throws ApiError
     */
    public update({
        accountId,
        teamId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the team to be updated
         */
        teamId: number;
        data: TeamCreateUpdatePayload;
    }): Promise<Team> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "PATCH",
            url: "/api/v1/accounts/{account_id}/teams/{team_id}",
            path: {
                account_id: accountId,
                team_id: teamId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Delete a team
     * Delete a team from the account
     * @returns any Success
     * @throws ApiError
     */
    public delete({
        accountId,
        teamId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the team to be updated
         */
        teamId: number;
    }): Promise<any> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "DELETE",
            url: "/api/v1/accounts/{account_id}/teams/{team_id}",
            path: {
                account_id: accountId,
                team_id: teamId,
            },
            errors: {
                401: `Unauthorized`,
                404: `The team does not exist in the account`,
            },
        });
    }

    /**
     * List Agents in Team
     * Get Details of Agents in an Team
     * @returns agent Success
     * @throws ApiError
     */
    public listMembers({
        accountId,
        teamId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the team to be updated
         */
        teamId: number;
    }): Promise<Array<Agent>> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "GET",
            url: "/accounts/{account_id}/teams/{team_id}/team_members",
            path: {
                account_id: accountId,
                team_id: teamId,
            },
            errors: {
                403: `Access denied`,
                404: `Inbox not found`,
            },
        });
    }

    /**
     * Add a New Agent
     * Add a new Agent to Team
     * @returns agent Success
     * @throws ApiError
     */
    public addAgent({
        accountId,
        teamId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the team to be updated
         */
        teamId: number;
        data: {
            /**
             * IDs of users to be added to the team
             */
            user_ids: Array<number>;
        };
    }): Promise<Array<Agent>> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "POST",
            url: "/accounts/{account_id}/teams/{team_id}/team_members",
            path: {
                account_id: accountId,
                team_id: teamId,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Team not found`,
                422: `User must exist`,
            },
        });
    }

    /**
     * Update Agents in Team
     * All agents except the one passed in params will be removed
     * @returns agent Success
     * @throws ApiError
     */
    public updateAgentsInTeam({
        accountId,
        teamId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the team to be updated
         */
        teamId: number;
        data: {
            /**
             * IDs of users to be added to the team
             */
            user_ids: Array<number>;
        };
    }): Promise<Array<Agent>> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "PATCH",
            url: "/accounts/{account_id}/teams/{team_id}/team_members",
            path: {
                account_id: accountId,
                team_id: teamId,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Team not found`,
                422: `User must exist`,
            },
        });
    }

    /**
     * Remove an Agent from Team
     * Remove an Agent from Team
     * @returns any Success
     * @throws ApiError
     */
    public removeAgent({
        accountId,
        teamId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the team to be updated
         */
        teamId: number;
        data: {
            /**
             * IDs of users to be deleted from the team
             */
            user_ids: Array<number>;
        };
    }): Promise<any> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "DELETE",
            url: "/accounts/{account_id}/teams/{team_id}/team_members",
            path: {
                account_id: accountId,
                team_id: teamId,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Team not found`,
                422: `User must exist`,
            },
        });
    }
}
