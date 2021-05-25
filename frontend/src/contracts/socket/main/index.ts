declare module "@interfaces/socket/main" {
  import { Socket } from "socket.io-client";
  import { Listener, Emiter } from "@interfaces/socket";

  /*
  |--------------------------------------------------------------------------
  | Daftar Type ListenEvents
  |--------------------------------------------------------------------------
  |
  */

  // -----------------------------
  // conversation:new
  // -----------------------------
  //
  type dataListenerConversationNew = {
    id: number;
    creatorId: number;
    title: string;
    created_at: number;
    updated_at: number;
    deleted_at: number;
    messages?: {
      id: number;
      sender_id: number;
      conversation_id: number;
      message: string;
      created_at: number;
      updated_at: number;
      deleted_at: number | null;
    }[];
    participants?: {
      id: number;
      user_id: number;
      conversation_id: number;
      created_at: number;
      updated_at: number;
    }[];
  };
  type ConversationNewListener = Listener<dataListenerConversationNew>;

  // -----------------------------
  // message:new
  // -----------------------------
  //
  interface dataListenerMessageNew {
    id: number;
    sender_id: number;
    conversation_id: number;
    message: string;
    created_at: number;
    updated_at: number;
    deleted_at: number;
  }
  type MessageNewListener = Listener<dataListenerMessageNew>;

  // -----------------------------
  // Daftar semua ListenEvents
  // -----------------------------
  //
  interface ListenEvents {
    "conversation:new": ConversationNewListener;
    "message:new": MessageNewListener;
  }

  /*
  |--------------------------------------------------------------------------
  | Daftar Type EmitEvents
  |--------------------------------------------------------------------------
  |
  */

  // -----------------------------
  // user:join
  // -----------------------------
  //
  interface dataEmiterUserJoin {
    user_id: number;
  }
  type UserJoinEmiter = Emiter<dataEmiterUserJoin>;

  // -----------------------------
  // conversation:new
  // -----------------------------
  //
  interface dataEmiterConversationNew {
    user_id: number;
    title: string;
    participants: number[];
    message: string;
  }
  type ConversationNewEmiter = Emiter<dataEmiterConversationNew>;

  // -----------------------------
  // conversation:join
  // -----------------------------
  //
  interface dataEmiterConversationJoin {
    conversations: number[];
  }
  type ConversationJoinEmiter = Emiter<dataEmiterConversationJoin>;

  // -----------------------------
  // message:new
  // -----------------------------
  //
  interface dataEmiterMessageNew {
    user_id: number;
    conversation_id: number;
    message: string;
  }
  type MessageNewEmiter = Emiter<dataEmiterMessageNew>;

  // -----------------------------
  // Daftar semua EmitEvents
  // -----------------------------
  //
  interface EmitEvents {
    "user:join": UserJoinEmiter;
    "conversation:new": ConversationNewEmiter;
    "conversation:join": ConversationJoinEmiter;
    "message:new": MessageNewEmiter;
  }

  /*
  |--------------------------------------------------------------------------
  | Type Safe ListenEvents dan EmitEvents untuk MainNamespace
  |--------------------------------------------------------------------------
  |
  */

  type MainNamespace = Socket<ListenEvents, EmitEvents>;
}
