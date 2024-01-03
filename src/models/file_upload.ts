/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { Readable } from "stream";

export type FileUpload = {
    /**
     * Name of the account
     */
    content?: Readable;
    filename?: string;
};
