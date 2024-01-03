export type InboxCreateUpdatePayload = {
    /**
     * The name of the inbox
     */
    name?: string;
    /**
     * File for avatar image
     */
    avatar?: Blob;
    channel?: {
        type?: "web_widget";
        /**
         * URL at which the widget will be loaded
         */
        website_url?: string;
        /**
         * Welcome title to be displayed on the widget
         */
        welcome_title?: string;
        /**
         * Welcome tagline to be displayed on the widget
         */
        welcome_tagline?: string;
        /**
         * A message which will be sent if there is not agent available. This is not available if agentbot is connected
         */
        agent_away_message?: string;
        /**
         * A Hex-color string used to customize the widget
         */
        widget_color?: string;
    };
};
