/*
|---------------------------------------------------------------
| Type
|---------------------------------------------------------------
|
*/

export const NEW_CONVERSATION = "NEW_CONVERSATION";
export const LOAD_CONVERSATION = "LOAD_CONVERSATION";
export const NEW_MESSAGE = "NEW_MESSAGE";
export const LOAD_MESSAGE = "LOAD_MESSAGE";
export const NEW_NEWS = "NEW_NEWS";
export const LOAD_NEWS = "LOAD_NEWS";
export const NEW_COMMENT = "NEW_COMMENT";
export const LOAD_COMMENT = "LOAD_COMMENT";

export type ThemeType = "light" | "dark";

export type Comment = {
  id: number;
  newsId: number;
  userId: number;
  comment: string;
  createdAt: number;
  updatedAt: number;
};

export type News = {
  id: number;
  authorId: number;
  title: string;
  content: string;
  slug: string;
  thumbnail: string;
  createdAt: number;
  updatedAt: number;
  comments?: Comment[];
};

export type Message = {
  id: number;
  senderId: number;
  conversationId: number;
  message: string;
  createdAt: number;
  updatedAt: number;
  deletedAt: number;
};

export type Conversation = {
  id: number;
  creatorId: number;
  title: string;
  createdAt: number;
  updatedAt: number;
  deletedAt: number;
  messages?: Message[];
};

/*
|---------------------------------------------------------------
| Home State
|---------------------------------------------------------------
|
*/

export interface HomeState {
  news?: News[];
  conversations?: Conversation[];
  latesNewsDate?: number;
  selectedConversation?: number;
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
}

export interface NewNews {
  type: typeof NEW_NEWS;
}

export interface LoadNews {
  type: typeof LOAD_NEWS;
}

/*
|---------------------------------------------------------------
| Type HomeAction
|---------------------------------------------------------------
|
*/

export type HomeActionTypes = NewConversationAction | LoadConversationAction | NewNews | LoadNews;
