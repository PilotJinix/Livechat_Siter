declare module "@interfaces/socket/main" {
  import { Server, Socket } from "socket.io";
  import { Listener, Emiter } from "@interfaces/socket";

  /*
  |--------------------------------------------------------------------------
  | Daftar Type ListenEvents
  |--------------------------------------------------------------------------
  |
  */

  // -----------------------------
  // first-load-content
  // -----------------------------
  //
  interface responseFirstLoadContent {
    news: any;
  }
  type FirstLoadContentListener = Listener<any, responseFirstLoadContent>;

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
  type UserLoginListener = Listener<dataUserLogin, responseUserLogin>;

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
  type UserRegisterListener = Listener<dataUserRegister, responseUserRegister>;

  // -----------------------------
  // Daftar semua ListenEvents
  // -----------------------------
  //
  interface ListenEvents {
    "first-load-content": FirstLoadContentListener;

    "user:login": UserLoginListener;
    "user:register": UserRegisterListener;
  }

  /*
  |--------------------------------------------------------------------------
  | Daftar Type EmitEvents
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
  type UpdateOnlineUserEmiter = Emiter<dataUpdateOnlineUser>;

  // -----------------------------
  // Daftar semua EmitEvents
  // -----------------------------
  //
  interface EmitEvents {
    "update-online-users": UpdateOnlineUserEmiter;
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
