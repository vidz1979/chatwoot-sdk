/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserCreateUpdatePayload = {
    /**
     * Name of the user
     */
    name?: string;
    /**
     * Email of the user
     */
    email?: string;
    /**
     * Password must contain uppercase, lowercase letters, number and a special character
     */
    password?: string;
    /**
     * Custom attributes you want to associate with the user
     */
    custom_attributes?: any;
};
