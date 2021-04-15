declare module "@interfaces/socket/other" {
  import { Socket } from "socket.io-client";
  import { Listener, Emiter } from "@interfaces/socket";

  /*
  |--------------------------------------------------------------------------
  | Daftar Type ListenEvents
  |--------------------------------------------------------------------------
  |
  */

  // -----------------------------
  // other-listen
  // -----------------------------
  //
  interface dataOtherL {
    listen?: any;
  }
  type OtherLListener = Listener<dataOtherL>;

  // -----------------------------
  // Daftar semua ListenEvents
  // -----------------------------
  //
  interface ListenEvents {
    "other-listen": OtherLListener;
  }

  /*
  |--------------------------------------------------------------------------
  | Daftar Type EmitEvents
  |--------------------------------------------------------------------------
  |
  */

  // -----------------------------
  // other-emit
  // -----------------------------
  //
  interface dataOtherE {
    emit?: any;
  }
  interface responseOtherE {
    res: any;
  }
  type OtherEEmiter = Emiter<dataOtherE, responseOtherE>;

  // -----------------------------
  // Daftar semua EmitEvents
  // -----------------------------
  //
  interface EmitEvents {
    "other-emit": OtherEEmiter;
  }

  /*
  |--------------------------------------------------------------------------
  | Type Safe ListenEvents dan EmitEvents untuk OtherNamespace
  |--------------------------------------------------------------------------
  |
  */

  type OtherNamespace = Socket<ListenEvents, EmitEvents>;
}
