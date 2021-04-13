declare module "@interfaces/model" {
  import { DateTime } from "luxon";

  interface UserInterface {
    id: number;
    username: string;
    password: string;
    role: "admin" | "common";
    avatar: string;
    createdAt: DateTime;
    updatedAt: DateTime;
  }

  interface NewsInterface {
    id: number;
    authorId: number;
    title: string;
    content: string;
    slug: string;
    thumbnail: string;
    createdAt: DateTime;
    updatedAt: DateTime;
  }

  interface CommentsInterface {
    id: number;
    newsId: number;
    userId: number;
    comment: string;
    createdAt: DateTime;
    updatedAt: DateTime;
  }

  interface MessagesInterface {
    id: number;
    senderId: number;
    conversationId: number;
    message: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt: DateTime;
  }

  interface DeletedMessagesInterface {
    id: number;
    messageId: number;
    createdAt: DateTime;
    updatedAt: DateTime;
  }

  interface ConversationsInterface {
    id: number;
    creatorId: number;
    title: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt: DateTime;
  }

  interface DeletedConversationsInterface {
    id: number;
    conversationId: number;
    createdAt: DateTime;
    updatedAt: DateTime;
  }
}
