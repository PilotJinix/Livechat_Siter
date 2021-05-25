/*
|---------------------------------------------------------------
| Type
|---------------------------------------------------------------
|
*/

export const NEW_CONVERSATION = "NEW_CONVERSATION";
export const LOAD_CONVERSATION = "LOAD_CONVERSATION";
export const SELECT_CONVERSATION = "SELECT_CONVERSATION";

export const NEW_MESSAGE = "NEW_MESSAGE";
export const LOAD_MESSAGE = "LOAD_MESSAGE";

export const NEW_NEWS = "NEW_NEWS";
export const LOAD_NEWS = "LOAD_NEWS";

export const LOAD_USER = "LOAD_USER";
export const SELECT_USER = "SELECT_USER";

export const NEW_COMMENT = "NEW_COMMENT";
export const LOAD_COMMENT = "LOAD_COMMENT";

export type ThemeType = "light" | "dark";

export type User = {
  id: number;
  username: string;
  role: "admin" | "common";
  avatar: string | null;
  created_at: string;
  updated_at: string;
};

export type Comment = {
  id: number;
  news_id: number;
  user_id: number;
  comment: string;
  created_at: string;
  updated_at: string;
};

export type NewsMeta = {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
  first_page_url: string | null;
  last_page_url: string | null;
  next_page_url: string | null;
  previous_page_url: string | null;
};

export type News = {
  id: number;
  author_id: number;
  title: string;
  content: string;
  slug: string;
  thumbnail: string;
  created_at: string;
  updated_at: string;
  comments?: Comment[];
  author?: User;
};

export type Participant = {
  id: number;
  user_id: number;
  conversation_id: number;
  created_at: number;
  updated_at: number;
  user?: User;
};

export type Message = {
  id: number;
  sender_id: number;
  conversation_id: number;
  message: string;
  created_at: number;
  updated_at: number;
  deleted_at: number | null;
  sender?: User;
};

export type ConversationMeta = {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
  first_page_url: string | null;
  last_page_url: string | null;
  next_page_url: string | null;
  previous_page_url: string | null;
};

export type Conversation = {
  id: number;
  creatorId: number;
  title: string;
  created_at: number;
  updated_at: number;
  deleted_at: number | null;
  messages?: Message[];
  participants?: Participant[];
};

export type UserState = {
  data: User[];
  selectedId?: number;
};

export type NewsState = {
  meta: NewsMeta;
  data: News[];
  selectedId?: number;
};

export type ConversationState = {
  // meta: ConversationMeta;
  data: Conversation[];
  selectedId?: number;
};

/*
|---------------------------------------------------------------
| Home State
|---------------------------------------------------------------
|
*/

export interface HomeState {
  news?: NewsState;
  conversations?: ConversationState;
  users?: UserState;
}

/*
|---------------------------------------------------------------
| In Home Action
|---------------------------------------------------------------
|
*/

export interface NewConversationAction {
  type: typeof NEW_CONVERSATION;
}

export interface LoadConversationAction {
  type: typeof LOAD_CONVERSATION;
  payload: {
    conversation: ConversationState;
  };
}

export interface SelectConversationAction {
  type: typeof SELECT_CONVERSATION;
  payload: {
    id: number;
  };
}

export interface NewConversationAction {
  type: typeof NEW_CONVERSATION;
  payload: {
    id: number;
    creatorId: number;
    title: string;
    created_at: number;
    updated_at: number;
    deleted_at: number | null;
    messages?: Message[];
    participants?: Participant[];
  };
}

export interface NewMessageAction {
  type: typeof NEW_MESSAGE;
  payload: {
    id: number;
    sender_id: number;
    conversation_id: number;
    message: string;
    created_at: number;
    updated_at: number;
    deleted_at: number;
  };
}

export interface NewNewsAction {
  type: typeof NEW_NEWS;
}

export interface LoadNewsAction {
  type: typeof LOAD_NEWS;
  payload: {
    news: NewsState;
  };
}

export interface LoadUserAction {
  type: typeof LOAD_USER;
  payload: {
    user: UserState;
  };
}

export interface SelectUserAction {
  type: typeof SELECT_USER;
  payload: {
    id: number;
  };
}

/*
|---------------------------------------------------------------
| Type HomeAction
|---------------------------------------------------------------
|
*/

export type HomeActionTypes =
  | NewConversationAction
  | LoadConversationAction
  | SelectConversationAction
  | NewNewsAction
  | LoadNewsAction
  | LoadUserAction
  | SelectUserAction
  | NewConversationAction
  | NewMessageAction;
