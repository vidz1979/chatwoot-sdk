/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Conversation } from "./conversation";
import type { User } from "./user";

/**
 * array of conversations
 */
export type ContactConversations = Array<
    Conversation & {
        meta?: {
            sender?: {
                /**
                 * ID fo the sender
                 */
                id?: number;
                /**
                 * The name of the sender
                 */
                name?: string;
                /**
                 * Avatar URL of the contact
                 */
                thumbnail?: string;
                /**
                 * Channel Type
                 */
                channel?: string;
            };
            assignee?: User;
        };
    } & {
        display_id?: number;
    }
>;
