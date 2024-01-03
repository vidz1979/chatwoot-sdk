/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GenericId } from "./generic_id";
import type { Message } from "./message";

export type ExtendedMessage = GenericId &
    Message & {
        source_id?: number;
        sender?: any;
    };
