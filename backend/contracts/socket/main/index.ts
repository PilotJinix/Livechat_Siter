declare module "@interfaces/socket/main" {
  import { Server, Socket } from "socket.io";
  import { Listener, Emiter } from "@interfaces/socket";

  import Conversation from "App/Models/Conversation";

  /*
  |--------------------------------------------------------------------------
  | Daftar Type ListenEvents
  |--------------------------------------------------------------------------
  |
  */

  // -----------------------------
  // user:join
  // -----------------------------
  //
  interface dataListenerUserJoin {
    user_id: number;
  }
  type UserJoinListener = Listener<dataListenerUserJoin>;

  // -----------------------------
  // conversation:new
  // -----------------------------
  //
  interface dataListenerConversationNew {
    user_id: number;
    title: string;
    participants: number[];
    message: string;
  }
  type ConversationNewListener = Listener<dataListenerConversationNew>;

  // -----------------------------
  // conversation:join
  // -----------------------------
  //
  interface dataListenerConversationJoin {
    conversations: number[];
  }
  type ConversationJoinListener = Listener<dataListenerConversationJoin>;

  // -----------------------------
  // message:new
  // -----------------------------
  //
  interface dataListenerMessageNew {
    conversation_id: number;
    user_id: number;
    message: string;
  }
  type MessageNewListener = Listener<dataListenerMessageNew>;

  // -----------------------------
  // Daftar semua ListenEvents
  // -----------------------------
  //
  interface ListenEvents {
    "user:join": UserJoinListener;
    "conversation:new": ConversationNewListener;
    "conversation:join": ConversationJoinListener;
    "message:new": MessageNewListener;
  }

  /*
  |--------------------------------------------------------------------------
  | Daftar Type EmitEvents
  |--------------------------------------------------------------------------
  |
  */

  // -----------------------------
  // conversation:new
  // -----------------------------
  //
  type dataEmiterConversationNew = Conversation;
  type ConversationNewEmiter = Emiter<dataEmiterConversationNew>;

  // -----------------------------
  // message:new
  // -----------------------------
  //
  interface dataEmiterMessageNew {
    id: number;
    sender_id: number;
    conversation_id: number;
    message: string;
    created_at: number;
    updated_at: number;
    deleted_at: number | null;
  }
  type MessageNewEmiter = Emiter<dataEmiterMessageNew>;

  // -----------------------------
  // Daftar semua EmitEvents
  // -----------------------------
  //
  interface EmitEvents {
    "conversation:new": ConversationNewEmiter;
    "message:new": MessageNewEmiter;
  }

  /*
  |--------------------------------------------------------------------------
  | Type Safe ListenEvents dan EmitEvents untuk MainNamespace
  |--------------------------------------------------------------------------
  |
  */

  type MainNamespace = Socket<ListenEvents, EmitEvents>;
  type ServerMainNamespace = Server<ListenEvents, EmitEvents>;
}
