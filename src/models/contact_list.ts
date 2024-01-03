/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Contact } from "./contact";
import type { GenericId } from "./generic_id";

/**
 * array of contacts
 */
export type ContactList = Array<GenericId & Contact>;
