/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AutomationRule } from "../models/automation_rule";
import type { AutomationRuleCreateUpdatePayload } from "../models/automation_rule_create_update_payload";

import { ChatwootAPIConfig } from "../core/ChatwootAPI";
import { request as __request } from "../core/request";

export class AutomationRules {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * List all automation rules in an account
     * Get details of automation rules in an Account
     * @returns automation_rule Success
     * @throws ApiError
     */
    public list({
        accountId,
        page = 1,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The page parameter
         */
        page?: number;
    }): Promise<Array<AutomationRule>> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/automation_rules",
            path: {
                account_id: accountId,
            },
            query: {
                page: page,
            },
            errors: {
                403: `Access denied`,
            },
        });
    }

    /**
     * Add a new automation rule
     * Add a new automation rule to account
     * @returns automation_rule Success
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
        data: AutomationRuleCreateUpdatePayload;
    }): Promise<AutomationRule> {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/automation_rules",
            path: {
                account_id: accountId,
            },
            body: data,
            errors: {
                403: `Access denied`,
            },
        });
    }

    /**
     * Get a automation rule details
     * Get the details of a automation rule in the account
     * @returns automation_rule Success
     * @throws ApiError
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
         * ID of the Automation Rule
         */
        id: number;
    }): Promise<AutomationRule> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/automation_rules/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            errors: {
                401: `Unauthorized`,
                404: `The given rule ID does not exist in the account`,
            },
        });
    }

    /**
     * Update automation rule in Account
     * Update a automation rule in account
     * @returns automation_rule Success
     * @throws ApiError
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
         * ID of the Automation Rule
         */
        id: number;
        data: AutomationRuleCreateUpdatePayload;
    }): Promise<AutomationRule> {
        return __request(this.chatwootAPI, {
            method: "PATCH",
            url: "/api/v1/accounts/{account_id}/automation_rules/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Rule not found`,
            },
        });
    }

    /**
     * Remove a automation rule from account
     * Remove a automation rule from account
     * @returns any Success
     * @throws ApiError
     */
    public delete({
        accountId,
        id,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the Automation Rule
         */
        id: number;
    }): Promise<any> {
        return __request(this.chatwootAPI, {
            method: "DELETE",
            url: "/api/v1/accounts/{account_id}/automation_rules/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            errors: {
                403: `Access denied`,
                404: `automation rule not found`,
            },
        });
    }
}
