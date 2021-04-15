declare module "@interfaces/socket" {
  interface Response<D = any> {
    err?: any;
    ok?: boolean;
    data?: D;
    msg?: string;
  }

  type Callback<R = any> = (response: Response<R>) => void;
  type CallbackAsync<R = any> = (response: Response<R>) => Promise<void>;

  type Listener<D = any, R = any> = (data: D, callback: Callback<R>) => void;
  type ListenerAsync<D = any, R = any> = (data: D, callback: Callback<R>) => Promise<void>;

  type Emiter<D = any, R = any> = (data: D, callback?: Callback<R>) => void;
  type EmiterAsync<D = any, R = any> = (data: D, callback?: Callback<R>) => Promise<void>;
}
