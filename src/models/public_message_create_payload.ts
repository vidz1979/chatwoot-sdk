/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PublicMessageCreatePayload = {
    /**
     * Content for the message
     */
    content?: string;
    /**
     * Temporary identifier which will be passed back via websockets
     */
    echo_id?: string;
};
