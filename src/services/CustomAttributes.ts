/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomAttribute } from "../models/custom_attribute";
import type { CustomAttributeCreateUpdatePayload } from "../models/custom_attribute_create_update_payload";

import { ChatwootAPIConfig } from "../core/ChatwootAPI";

export class CustomAttributes {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * List all custom attributes in an account
     * Get details of custom attributes in an Account
     * @returns custom_attribute Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Attributes/operation/get-account-custom-attribute}
     */
    public list({
        accountId,
        attributeModel,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * conversation_attribute(0)/contact_attribute(1)
         */
        attributeModel: "0" | "1";
    }): Promise<Array<CustomAttribute>> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/custom_attribute_definitions",
            path: {
                account_id: accountId,
            },
            query: {
                attribute_model: attributeModel,
            },
            errors: {
                403: `Access denied`,
            },
        });
    }

    /**
     * Add a new custom attribute
     * Add a new custom attribute to account
     * @returns custom_attribute Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Attributes/operation/add-new-custom-attribute-to-account}
     */
    public create({
        accountId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: CustomAttributeCreateUpdatePayload;
    }): Promise<CustomAttribute> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/custom_attribute_definitions",
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
     * Get a custom attribute details
     * Get the details of a custom attribute in the account
     * @returns custom_attribute Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Attributes/operation/get-details-of-a-single-custom-attribute}
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
         * ID of the custom attribute
         */
        id: number;
    }): Promise<CustomAttribute> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/custom_attribute_definitions/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            errors: {
                401: `Unauthorized`,
                404: `The given attribute ID does not exist in the account`,
            },
        });
    }

    /**
     * Update custom attribute in Account
     * Update a custom attribute in account
     * @returns custom_attribute Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Attributes/operation/update-custom-attribute-in-account}
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
         * ID of the custom attribute
         */
        id: number;
        data: CustomAttributeCreateUpdatePayload;
    }): Promise<CustomAttribute> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "PATCH",
            url: "/api/v1/accounts/{account_id}/custom_attribute_definitions/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Agent not found`,
            },
        });
    }

    /**
     * Remove a custom attribute from account
     * Remove a custom attribute from account
     * @returns any Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Attributes/operation/delete-custom-attribute-from-account}
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
         * ID of the custom attribute
         */
        id: number;
    }): Promise<any> {
        return this.chatwootAPI.request(this.chatwootAPI, {
            method: "DELETE",
            url: "/api/v1/accounts/{account_id}/custom_attribute_definitions/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            errors: {
                403: `Access denied`,
                404: `Custom attribute not found`,
            },
        });
    }
}
