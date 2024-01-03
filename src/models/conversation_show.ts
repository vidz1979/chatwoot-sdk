/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Conversation } from "./conversation";
import type { GenericId } from "./generic_id";
import type { User } from "./user";

export type ConversationShow = GenericId &
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
    };
