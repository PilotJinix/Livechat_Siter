import {
  HomeState,
  HomeActionTypes,
  NEW_NEWS,
  LOAD_NEWS,
  LOAD_USER,
  LOAD_CONVERSATION,
  SELECT_CONVERSATION,
  ConversationState,
  SELECT_USER,
  UserState,
  NEW_MESSAGE,
  NEW_CONVERSATION,
} from "./types";

/*
|---------------------------------------------------------------
| Initial State
|---------------------------------------------------------------
|
*/

const initialState: HomeState = {};

/*
|---------------------------------------------------------------
| Home Reducers
|---------------------------------------------------------------
|
*/

export const homeReducer = (state: HomeState = initialState, action: HomeActionTypes): HomeState => {
  switch (action.type) {
    //
    //
    // Menambahkan berita baru kedalam listview
    //
    case NEW_NEWS:
      return state;
    //
    //
    // Memuat data berita dengan pemanggilan per halaman dan menampilkan ke listview
    //
    case LOAD_NEWS:
      return {
        ...state,
        news: {
          ...state.news,
          meta: action.payload.news.meta,
          data: [...(state.news?.data || []), ...action.payload.news.data],
        },
      };
    //
    //
    // Memuat data user
    //
    case LOAD_USER:
      return {
        ...state,
        users: {
          ...state.users,
          data: [...(state.users?.data || []), ...action.payload.user.data],
        },
      };
    case SELECT_USER:
      return {
        ...state,
        users: {
          ...(state.users as UserState),
          selectedId: action.payload.id,
        },
      };
    //
    //
    // Memuat data conversation
    //
    case LOAD_CONVERSATION:
      return {
        ...state,
        conversations: {
          ...state.conversations,
          data: [...(state.conversations?.data || []), ...action.payload.conversation.data],
          selectedId: action.payload.conversation.data[0].id,
        },
      };
    //
    //
    // Pilih data conversation
    //
    case SELECT_CONVERSATION:
      return {
        ...state,
        conversations: {
          ...(state.conversations as ConversationState),
          selectedId: action.payload.id,
        },
      };
    //
    //
    // Percakapan baru
    //
    case NEW_CONVERSATION:
      return {
        ...state,
        conversations: {
          ...(state.conversations as ConversationState),
          data: [action.payload, ...(state.conversations?.data || [])],
        },
      };
    //
    //
    // Pesan baru
    //
    case NEW_MESSAGE:
      return {
        ...state,
        conversations: {
          ...(state.conversations as ConversationState),
          data:
            state.conversations?.data.map((conv) => {
              if (conv.id == action.payload.conversation_id) {
                if (conv.messages) conv.messages.push({ ...action.payload });
                return conv;
              }
              return conv;
            }) || [],
        },
      };
    //
    //
    // Handle Invalid Type
    //
    default:
      return state;
  }
};
