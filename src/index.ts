export { ApiError } from "./core/ApiError";
export { ChatwootAPI } from "./core/ChatwootAPI";
export type { ChatwootAPIConfig } from "./core/ChatwootAPI";

export type { Account } from "./models/account";
export type { AccountCreateUpdatePayload } from "./models/account_create_update_payload";
export type { AccountSummary } from "./models/account_summary";
export type { Agent } from "./models/agent";
export type { AgentBot } from "./models/agent_bot";
export type { AgentBotCreateUpdatePayload } from "./models/agent_bot_create_update_payload";
export type { AgentConversationMetrics } from "./models/agent_conversation_metrics";
export type { AutomationRule } from "./models/automation_rule";
export type { AutomationRuleCreateUpdatePayload } from "./models/automation_rule_create_update_payload";
export type { BadRequestError } from "./models/bad_request_error";
export type { CannedResponse } from "./models/canned_response";
export type { CannedResponseCreateUpdatePayload } from "./models/canned_response_create_update_payload";
export type { Contact } from "./models/contact";
export type { ContactBase } from "./models/contact_base";
export type { ContactConversations } from "./models/contact_conversations";
export type { ContactCreate } from "./models/contact_create";
export type { ContactInboxes } from "./models/contact_inboxes";
export type { ContactList } from "./models/contact_list";
export type { ContactUpdate } from "./models/contact_update";
export type { ContactableInboxes } from "./models/contactable_inboxes";
export type { Conversation } from "./models/conversation";
export type { ConversationLabelList } from "./models/conversation_label_list";
export type { ConversationList } from "./models/conversation_list";
export type { ConversationMessageCreate } from "./models/conversation_message_create";
export type { ConversationShow } from "./models/conversation_show";
export type { ConversationStatusToggle } from "./models/conversation_status_toggle";
export type { CustomAttribute } from "./models/custom_attribute";
export type { CustomAttributeCreateUpdatePayload } from "./models/custom_attribute_create_update_payload";
export type { CustomFilter } from "./models/custom_filter";
export type { CustomFilterCreateUpdatePayload } from "./models/custom_filter_create_update_payload";
export type { ExtendedContact } from "./models/extended_contact";
export type { ExtendedMessage } from "./models/extended_message";
export type { GenericId } from "./models/generic_id";
export type { Inbox } from "./models/inbox";
export type { IntegrationsApp } from "./models/integrations_app";
export type { IntegrationsHook } from "./models/integrations_hook";
export type { IntegrationsHookCreatePayload } from "./models/integrations_hook_create_payload";
export type { IntegrationsHookUpdatePayload } from "./models/integrations_hook_update_payload";
export type { Locale } from "./models/locale";
export type { Message } from "./models/message";
export type { PlatformAccount } from "./models/platform_account";
export type { PublicContact } from "./models/public_contact";
export type { PublicContactCreateUpdatePayload } from "./models/public_contact_create_update_payload";
export type { PublicConversation } from "./models/public_conversation";
export type { PublicMessage } from "./models/public_message";
export type { PublicMessageCreatePayload } from "./models/public_message_create_payload";
export type { PublicMessageUpdatePayload } from "./models/public_message_update_payload";
export type { RequestError } from "./models/request_error";
export type { Team } from "./models/team";
export type { TeamCreateUpdatePayload } from "./models/team_create_update_payload";
export type { User } from "./models/user";
export type { UserCreateUpdatePayload } from "./models/user_create_update_payload";
export type { Webhook } from "./models/webhook";
export type { WebhookCreateUpdatePayload } from "./models/webhook_create_update_payload";

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
