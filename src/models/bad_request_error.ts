/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RequestError } from "./request_error";

export type BadRequestError = {
    description?: string;
    errors?: Array<RequestError>;
};
