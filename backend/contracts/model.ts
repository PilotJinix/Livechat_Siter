declare module "@interfaces/model" {
  import { DateTime } from "luxon";
  import { HasMany, BelongsTo } from "@ioc:Adonis/Lucid/Orm";

  import Comment from "App/Models/Comment";
  import Conversation from "App/Models/Conversation";
  import Message from "App/Models/Message";
  import News from "App/Models/News";
  import Participant from "App/Models/Participant";
  import User from "App/Models/User";

  interface UserInterface {
    id: number;
    username: string;
    password: string;
    role: "admin" | "common";
    avatar: string | null;
    createdAt: DateTime;
    updatedAt: DateTime;

    // hasMany
    news: HasMany<typeof News>;
    conversations: HasMany<typeof Conversation>;
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

    // belongsTo
    author: BelongsTo<typeof User>;
    // hasMany
    comments: HasMany<typeof Comment>;
  }

  interface CommentsInterface {
    id: number;
    newsId: number;
    userId: number;
    comment: string;
    createdAt: DateTime;
    updatedAt: DateTime;

    // belongsTo
    user: BelongsTo<typeof User>;
  }

  interface ConversationsInterface {
    id: number;
    creatorId: number;
    title: string;
    // type?: 'personal' | 'channel'
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt: DateTime;

    // belongsTo
    creator: BelongsTo<typeof User>;
    // hasMany
    participants: HasMany<typeof Participant>;
    messages: HasMany<typeof Message>;
  }

  interface ParticipantsInterface {
    id: number;
    userId: number;
    conversationId: number;
    createdAt: DateTime;
    updatedAt: DateTime;

    // belongsTo
    user: BelongsTo<typeof User>;
  }

  interface MessagesInterface {
    id: number;
    senderId: number;
    conversationId: number;
    message: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt: DateTime;

    // belongsTo
    sender: BelongsTo<typeof User>;
  }
}
