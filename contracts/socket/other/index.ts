declare module "@interfaces/socket/other" {
  import { Socket, Namespace } from "socket.io";
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
  interface responseOtherL {
    res: any;
  }
  type OtherLListener = Listener<dataOtherL, responseOtherL>;

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
  type OtherEEmiter = Emiter<dataOtherE>;

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
  type NamespaceOtherNamespace = Namespace<ListenEvents, EmitEvents>;
}
