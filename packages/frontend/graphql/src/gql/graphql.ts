/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
  /** The `SafeInt` scalar type represents non-fractional signed whole numeric values that are considered safe as defined by the ECMAScript specification. */
  SafeInt: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export enum ChatHistoryOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export enum CopilotModels {
  DallE3 = 'DallE3',
  Gpt4Omni = 'Gpt4Omni',
  Gpt4OmniMini = 'Gpt4OmniMini',
  TextEmbedding3Large = 'TextEmbedding3Large',
  TextEmbedding3Small = 'TextEmbedding3Small',
  TextEmbeddingAda002 = 'TextEmbeddingAda002',
  TextModerationLatest = 'TextModerationLatest',
  TextModerationStable = 'TextModerationStable'
}

export type CopilotPromptConfigInput = {
  frequencyPenalty?: InputMaybe<Scalars['Float']['input']>;
  jsonMode?: InputMaybe<Scalars['Boolean']['input']>;
  presencePenalty?: InputMaybe<Scalars['Float']['input']>;
  temperature?: InputMaybe<Scalars['Float']['input']>;
  topP?: InputMaybe<Scalars['Float']['input']>;
};

export type CopilotPromptMessageInput = {
  content: Scalars['String']['input'];
  params?: InputMaybe<Scalars['JSON']['input']>;
  role: CopilotPromptMessageRole;
};

export enum CopilotPromptMessageRole {
  Assistant = 'assistant',
  System = 'system',
  User = 'user'
}

export type CreateChatMessageInput = {
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  blobs?: InputMaybe<Array<Scalars['Upload']['input']>>;
  content?: InputMaybe<Scalars['String']['input']>;
  params?: InputMaybe<Scalars['JSON']['input']>;
  sessionId: Scalars['String']['input'];
};

export type CreateChatSessionInput = {
  docId: Scalars['String']['input'];
  /** The prompt name to use for the session */
  promptName: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};

export type CreateCheckoutSessionInput = {
  coupon?: InputMaybe<Scalars['String']['input']>;
  idempotencyKey: Scalars['String']['input'];
  plan?: InputMaybe<SubscriptionPlan>;
  recurring?: InputMaybe<SubscriptionRecurring>;
  successCallbackLink: Scalars['String']['input'];
};

export type CreateCopilotPromptInput = {
  action?: InputMaybe<Scalars['String']['input']>;
  config?: InputMaybe<CopilotPromptConfigInput>;
  messages: Array<CopilotPromptMessageInput>;
  model: CopilotModels;
  name: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteSessionInput = {
  docId: Scalars['String']['input'];
  sessionIds: Array<Scalars['String']['input']>;
  workspaceId: Scalars['String']['input'];
};

export enum ErrorNames {
  AccessDenied = 'ACCESS_DENIED',
  ActionForbidden = 'ACTION_FORBIDDEN',
  AlreadyInSpace = 'ALREADY_IN_SPACE',
  AuthenticationRequired = 'AUTHENTICATION_REQUIRED',
  BlobNotFound = 'BLOB_NOT_FOUND',
  BlobQuotaExceeded = 'BLOB_QUOTA_EXCEEDED',
  CannotDeleteAllAdminAccount = 'CANNOT_DELETE_ALL_ADMIN_ACCOUNT',
  CannotDeleteOwnAccount = 'CANNOT_DELETE_OWN_ACCOUNT',
  CantChangeSpaceOwner = 'CANT_CHANGE_SPACE_OWNER',
  CantUpdateLifetimeSubscription = 'CANT_UPDATE_LIFETIME_SUBSCRIPTION',
  CaptchaVerificationFailed = 'CAPTCHA_VERIFICATION_FAILED',
  CopilotActionTaken = 'COPILOT_ACTION_TAKEN',
  CopilotFailedToCreateMessage = 'COPILOT_FAILED_TO_CREATE_MESSAGE',
  CopilotFailedToGenerateText = 'COPILOT_FAILED_TO_GENERATE_TEXT',
  CopilotMessageNotFound = 'COPILOT_MESSAGE_NOT_FOUND',
  CopilotPromptInvalid = 'COPILOT_PROMPT_INVALID',
  CopilotPromptNotFound = 'COPILOT_PROMPT_NOT_FOUND',
  CopilotProviderSideError = 'COPILOT_PROVIDER_SIDE_ERROR',
  CopilotQuotaExceeded = 'COPILOT_QUOTA_EXCEEDED',
  CopilotSessionDeleted = 'COPILOT_SESSION_DELETED',
  CopilotSessionNotFound = 'COPILOT_SESSION_NOT_FOUND',
  CustomerPortalCreateFailed = 'CUSTOMER_PORTAL_CREATE_FAILED',
  DocAccessDenied = 'DOC_ACCESS_DENIED',
  DocHistoryNotFound = 'DOC_HISTORY_NOT_FOUND',
  DocNotFound = 'DOC_NOT_FOUND',
  EarlyAccessRequired = 'EARLY_ACCESS_REQUIRED',
  EmailAlreadyUsed = 'EMAIL_ALREADY_USED',
  EmailTokenNotFound = 'EMAIL_TOKEN_NOT_FOUND',
  EmailVerificationRequired = 'EMAIL_VERIFICATION_REQUIRED',
  ExpectToPublishPage = 'EXPECT_TO_PUBLISH_PAGE',
  ExpectToRevokePublicPage = 'EXPECT_TO_REVOKE_PUBLIC_PAGE',
  FailedToCheckout = 'FAILED_TO_CHECKOUT',
  FailedToSaveUpdates = 'FAILED_TO_SAVE_UPDATES',
  FailedToUpsertSnapshot = 'FAILED_TO_UPSERT_SNAPSHOT',
  InternalServerError = 'INTERNAL_SERVER_ERROR',
  InvalidEmail = 'INVALID_EMAIL',
  InvalidEmailToken = 'INVALID_EMAIL_TOKEN',
  InvalidHistoryTimestamp = 'INVALID_HISTORY_TIMESTAMP',
  InvalidOauthCallbackState = 'INVALID_OAUTH_CALLBACK_STATE',
  InvalidPasswordLength = 'INVALID_PASSWORD_LENGTH',
  InvalidRuntimeConfigType = 'INVALID_RUNTIME_CONFIG_TYPE',
  LinkExpired = 'LINK_EXPIRED',
  MailerServiceIsNotConfigured = 'MAILER_SERVICE_IS_NOT_CONFIGURED',
  MemberQuotaExceeded = 'MEMBER_QUOTA_EXCEEDED',
  MissingOauthQueryParameter = 'MISSING_OAUTH_QUERY_PARAMETER',
  NotFound = 'NOT_FOUND',
  NotInSpace = 'NOT_IN_SPACE',
  NoCopilotProviderAvailable = 'NO_COPILOT_PROVIDER_AVAILABLE',
  OauthAccountAlreadyConnected = 'OAUTH_ACCOUNT_ALREADY_CONNECTED',
  OauthStateExpired = 'OAUTH_STATE_EXPIRED',
  PageIsNotPublic = 'PAGE_IS_NOT_PUBLIC',
  PasswordRequired = 'PASSWORD_REQUIRED',
  RuntimeConfigNotFound = 'RUNTIME_CONFIG_NOT_FOUND',
  SameEmailProvided = 'SAME_EMAIL_PROVIDED',
  SameSubscriptionRecurring = 'SAME_SUBSCRIPTION_RECURRING',
  SignUpForbidden = 'SIGN_UP_FORBIDDEN',
  SpaceAccessDenied = 'SPACE_ACCESS_DENIED',
  SpaceNotFound = 'SPACE_NOT_FOUND',
  SpaceOwnerNotFound = 'SPACE_OWNER_NOT_FOUND',
  SubscriptionAlreadyExists = 'SUBSCRIPTION_ALREADY_EXISTS',
  SubscriptionExpired = 'SUBSCRIPTION_EXPIRED',
  SubscriptionHasBeenCanceled = 'SUBSCRIPTION_HAS_BEEN_CANCELED',
  SubscriptionNotExists = 'SUBSCRIPTION_NOT_EXISTS',
  SubscriptionPlanNotFound = 'SUBSCRIPTION_PLAN_NOT_FOUND',
  TooManyRequest = 'TOO_MANY_REQUEST',
  UnknownOauthProvider = 'UNKNOWN_OAUTH_PROVIDER',
  UnsplashIsNotConfigured = 'UNSPLASH_IS_NOT_CONFIGURED',
  UserAvatarNotFound = 'USER_AVATAR_NOT_FOUND',
  UserNotFound = 'USER_NOT_FOUND',
  VersionRejected = 'VERSION_REJECTED',
  WrongSignInCredentials = 'WRONG_SIGN_IN_CREDENTIALS',
  WrongSignInMethod = 'WRONG_SIGN_IN_METHOD'
}

/** The type of workspace feature */
export enum FeatureType {
  AiEarlyAccess = 'AIEarlyAccess',
  Admin = 'Admin',
  Copilot = 'Copilot',
  EarlyAccess = 'EarlyAccess',
  UnlimitedCopilot = 'UnlimitedCopilot',
  UnlimitedWorkspace = 'UnlimitedWorkspace'
}

export type ForkChatSessionInput = {
  docId: Scalars['String']['input'];
  /** Identify a message in the array and keep it with all previous messages into a forked session. */
  latestMessageId: Scalars['String']['input'];
  sessionId: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};

export enum InvoiceStatus {
  Draft = 'Draft',
  Open = 'Open',
  Paid = 'Paid',
  Uncollectible = 'Uncollectible',
  Void = 'Void'
}

export type ListUserInput = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ManageUserInput = {
  /** User email */
  email?: InputMaybe<Scalars['String']['input']>;
  /** User name */
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum OAuthProviderType {
  GitHub = 'GitHub',
  Google = 'Google',
  Oidc = 'OIDC'
}

/** User permission in workspace */
export enum Permission {
  Admin = 'Admin',
  Owner = 'Owner',
  Read = 'Read',
  Write = 'Write'
}

/** The mode which the public page default in */
export enum PublicPageMode {
  Edgeless = 'Edgeless',
  Page = 'Page'
}

export type QueryChatHistoriesInput = {
  action?: InputMaybe<Scalars['Boolean']['input']>;
  fork?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  messageOrder?: InputMaybe<ChatHistoryOrder>;
  sessionId?: InputMaybe<Scalars['String']['input']>;
  sessionOrder?: InputMaybe<ChatHistoryOrder>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum RuntimeConfigType {
  Array = 'Array',
  Boolean = 'Boolean',
  Number = 'Number',
  Object = 'Object',
  String = 'String'
}

export enum ServerDeploymentType {
  Affine = 'Affine',
  Selfhosted = 'Selfhosted'
}

export enum ServerFeature {
  Captcha = 'Captcha',
  Copilot = 'Copilot',
  OAuth = 'OAuth',
  Payment = 'Payment'
}

export enum SubscriptionPlan {
  Ai = 'AI',
  Enterprise = 'Enterprise',
  Free = 'Free',
  Pro = 'Pro',
  SelfHosted = 'SelfHosted',
  Team = 'Team'
}

export enum SubscriptionRecurring {
  Lifetime = 'Lifetime',
  Monthly = 'Monthly',
  Yearly = 'Yearly'
}

export enum SubscriptionStatus {
  Active = 'Active',
  Canceled = 'Canceled',
  Incomplete = 'Incomplete',
  IncompleteExpired = 'IncompleteExpired',
  PastDue = 'PastDue',
  Paused = 'Paused',
  Trialing = 'Trialing',
  Unpaid = 'Unpaid'
}

export type UpdateUserInput = {
  /** User name */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWorkspaceInput = {
  /** Enable url previous when sharing */
  enableUrlPreview?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  /** is Public workspace */
  public?: InputMaybe<Scalars['Boolean']['input']>;
};
