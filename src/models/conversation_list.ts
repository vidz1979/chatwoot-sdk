/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Conversation } from "./conversation";
import type { GenericId } from "./generic_id";
import type { User } from "./user";

export type ConversationList = {
    data?: {
        meta?: {
            mine_count?: number;
            unassigned_count?: number;
            assigned_count?: number;
            all_count?: number;
        };
        /**
         * array of conversations
         */
        payload?: Array<
            GenericId &
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
                }
        >;
    };
};
