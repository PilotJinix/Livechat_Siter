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
  // update-online-users
  // -----------------------------
  //
  interface dataUpdateOnlineUser {
    insert?: number;
    remove?: number;
  }
  type UpdateOnlineUserListener = Listener<dataUpdateOnlineUser>;

  // -----------------------------
  // Daftar semua ListenEvents
  // -----------------------------
  //
  interface ListenEvents {
    "update-online-users": UpdateOnlineUserListener;
  }

  /*
  |--------------------------------------------------------------------------
  | Daftar Type EmitEvents
  |--------------------------------------------------------------------------
  |
  */

  // -----------------------------
  // user:login
  // -----------------------------
  //
  interface dataUserLogin {
    username: string;
    password: string;
  }
  interface responseUserLogin {
    token: string;
  }
  type UserLoginEmiter = Emiter<dataUserLogin, responseUserLogin>;

  // -----------------------------
  // user:register
  // -----------------------------
  //
  interface dataUserRegister {
    username: string;
    password: string;
    retypePassword: string;
  }
  interface responseUserRegister {
    token: string;
  }
  type UserRegisterEmiter = Emiter<dataUserRegister, responseUserRegister>;

  // -----------------------------
  // Daftar semua EmitEvents
  // -----------------------------
  //
  interface EmitEvents {
    "user:login": UserLoginEmiter;
    "user:register": UserRegisterEmiter;
  }

  /*
  |--------------------------------------------------------------------------
  | Type Safe ListenEvents dan EmitEvents untuk MainNamespace
  |--------------------------------------------------------------------------
  |
  */

  type MainNamespace = Socket<ListenEvents, EmitEvents>;
}
