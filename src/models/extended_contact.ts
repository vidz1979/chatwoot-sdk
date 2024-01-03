/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Contact } from "./contact";

export type ExtendedContact = Contact & {
    /**
     * Id of the user
     */
    id?: number;
    /**
     * Availability status of the user
     */
    availability_status?: "online" | "offline";
};
