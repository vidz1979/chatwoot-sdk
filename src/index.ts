export { ApiError } from "./core/ApiError";
export { ChatwootAPI } from "./core/ChatwootAPI";
export type { ChatwootAPIConfig } from "./core/ChatwootAPI";

export type { Account as account } from "./models/account";
export type { AccountCreateUpdatePayload as account_create_update_payload } from "./models/account_create_update_payload";
export type { AccountSummary as account_summary } from "./models/account_summary";
export type { Agent as agent } from "./models/agent";
export type { AgentBot as agent_bot } from "./models/agent_bot";
export type { AgentBotCreateUpdatePayload as agent_bot_create_update_payload } from "./models/agent_bot_create_update_payload";
export type { AgentConversationMetrics as agent_conversation_metrics } from "./models/agent_conversation_metrics";
export type { AutomationRule as automation_rule } from "./models/automation_rule";
export type { AutomationRuleCreateUpdatePayload as automation_rule_create_update_payload } from "./models/automation_rule_create_update_payload";
export type { BadRequestError as bad_request_error } from "./models/bad_request_error";
export type { CannedResponse as canned_response } from "./models/canned_response";
export type { CannedResponseCreateUpdatePayload as canned_response_create_update_payload } from "./models/canned_response_create_update_payload";
export type { Contact as contact } from "./models/contact";
export type { ContactBase as contact_base } from "./models/contact_base";
export type { ContactConversations as contact_conversations } from "./models/contact_conversations";
export type { ContactCreate as contact_create } from "./models/contact_create";
export type { ContactInboxes as contact_inboxes } from "./models/contact_inboxes";
export type { ContactList as contact_list } from "./models/contact_list";
export type { ContactUpdate as contact_update } from "./models/contact_update";
export type { ContactableInboxes as contactable_inboxes } from "./models/contactable_inboxes";
export type { Conversation as conversation } from "./models/conversation";
export type { ConversationLabelList as conversation_labels } from "./models/conversation_label_list";
export type { ConversationList as conversation_list } from "./models/conversation_list";
export type { ConversationMessageCreate as conversation_message_create } from "./models/conversation_message_create";
export type { ConversationShow as conversation_show } from "./models/conversation_show";
export type { ConversationStatusToggle as conversation_status_toggle } from "./models/conversation_status_toggle";
export type { CustomAttribute as custom_attribute } from "./models/custom_attribute";
export type { CustomAttributeCreateUpdatePayload as custom_attribute_create_update_payload } from "./models/custom_attribute_create_update_payload";
export type { CustomFilter as custom_filter } from "./models/custom_filter";
export type { CustomFilterCreateUpdatePayload as custom_filter_create_update_payload } from "./models/custom_filter_create_update_payload";
export type { ExtendedContact as extended_contact } from "./models/extended_contact";
export type { ExtendedMessage as extended_message } from "./models/extended_message";
export type { GenericId as generic_id } from "./models/generic_id";
export type { Inbox as inbox } from "./models/inbox";
export type { IntegrationsApp as integrations_app } from "./models/integrations_app";
export type { IntegrationsHook as integrations_hook } from "./models/integrations_hook";
export type { IntegrationsHookCreatePayload as integrations_hook_create_payload } from "./models/integrations_hook_create_payload";
export type { IntegrationsHookUpdatePayload as integrations_hook_update_payload } from "./models/integrations_hook_update_payload";
export type { Message as message } from "./models/message";
export type { PlatformAccount as platform_account } from "./models/platform_account";
export type { PublicContact as public_contact } from "./models/public_contact";
export type { PublicContactCreateUpdatePayload as public_contact_create_update_payload } from "./models/public_contact_create_update_payload";
export type { PublicConversation as public_conversation } from "./models/public_conversation";
export type { PublicMessage as public_message } from "./models/public_message";
export type { PublicMessageCreatePayload as public_message_create_payload } from "./models/public_message_create_payload";
export type { PublicMessageUpdatePayload as public_message_update_payload } from "./models/public_message_update_payload";
export type { RequestError as request_error } from "./models/request_error";
export type { Team as team } from "./models/team";
export type { TeamCreateUpdatePayload as team_create_update_payload } from "./models/team_create_update_payload";
export type { User as user } from "./models/user";
export type { UserCreateUpdatePayload as user_create_update_payload } from "./models/user_create_update_payload";
export type { Webhook as webhook } from "./models/webhook";
export type { WebhookCreateUpdatePayload as webhook_create_update_payload } from "./models/webhook_create_update_payload";

import { AccountAgentBots } from "./services/AccountAgentBots";
import { Accounts } from "./services/platform/Accounts";
import { AccountUsers } from "./services/platform/AccountUsers";
import { AgentBots } from "./services/platform/AgentBots";
import { Agents } from "./services/Agents";
import { AutomationRules } from "./services/AutomationRules";
import { CannedResponses } from "./services/CannedResponses";
import { Contact } from "./services/ContactInboxes";
import { Contacts } from "./services/Contacts";
import { ContactsApi } from "./services/client/Contacts";
import { ConversationAssignment } from "./services/ConversationAssignments";
import { ConversationLabels } from "./services/ConversationLabels";
import { Conversations } from "./services/Conversations";
import { ConversationsApi } from "./services/client/Conversations";
import { CustomAttributes } from "./services/CustomAttributes";
import { CustomFilters } from "./services/CustomFilters";
import { Inboxes } from "./services/Inboxes";
import { Integrations } from "./services/Integrations";
import { Messages } from "./services/Messages";
import { MessagesApi } from "./services/client/Messages";
import { Profile } from "./services/Profile";
import { Reports } from "./services/Reports";
import { Teams } from "./services/Teams";
import { Users } from "./services/platform/Users";
import { Webhooks } from "./services/Webhooks";

import { ChatwootAPIConfig } from "./core/ChatwootAPI";

export default class ChatwootClient {
    private chatwootAPI: ChatwootAPIConfig;
    public readonly client;
    public readonly platform;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;

        this.client = {
            contacts: new ContactsApi({ config: config }),
            conversations: new ConversationsApi({ config: config }),
            messages: new MessagesApi({ config: config }),
        };

        this.platform = {
            accounts: new Accounts({ config: config }),
            accountUsers: new AccountUsers({ config: config }),
            agentBots: new AgentBots({ config: config }),
            users: new Users({ config: config }),
        };

        this.accountAgentBots = new AccountAgentBots({ config: config });

        this.agentBots = new AgentBots({ config: config });
        this.agents = new Agents({ config: config });
        this.automationRule = new AutomationRules({ config: config });
        this.cannedResponses = new CannedResponses({ config: config });
        this.contact = new Contact({ config: config });
        this.contacts = new Contacts({ config: config });

        this.customAttributes = new CustomAttributes({ config: config });
        this.conversationAssignment = new ConversationAssignment({ config: config });
        this.conversationLabels = new ConversationLabels({ config: config });
        this.conversations = new Conversations({ config: config });
        this.customFilters = new CustomFilters({ config: config });
        this.inboxes = new Inboxes({ config: config });
        this.integrations = new Integrations({ config: config });
        this.messages = new Messages({ config: config });

        this.profile = new Profile({ config: config });
        this.reports = new Reports({ config: config });
        this.teams = new Teams({ config: config });
        this.users = new Users({ config: config });
        this.webhooks = new Webhooks({ config: config });
    }

    public accountAgentBots: AccountAgentBots;
    public agentBots: AgentBots;
    public agents: Agents;
    public automationRule: AutomationRules;
    public cannedResponses: CannedResponses;
    public contact: Contact;
    public contacts: Contacts;
    public conversationAssignment: ConversationAssignment;
    public conversationLabels: ConversationLabels;
    public conversations: Conversations;
    public customAttributes: CustomAttributes;
    public customFilters: CustomFilters;
    public inboxes: Inboxes;
    public integrations: Integrations;
    public messages: Messages;
    public profile: Profile;
    public reports: Reports;
    public teams: Teams;
    public users: Users;
    public webhooks: Webhooks;
}
