/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
*/

import Route from "@ioc:Adonis/Core/Route";

/*
|--------------------------------------------------------------------------
| Test Query Database
|--------------------------------------------------------------------------
|
*/
import { user, news, conversation, message } from "./Test";
// USERS
Route.get("api/users", user.index);
Route.get("api/admins", user.adminOnly);
Route.get("api/commons", user.commonOnly);
// NEWS
Route.get("api/news", news.index);
// CONVERSATIONS
Route.get("api/conversations", conversation.index);
Route.get("api/conversations/:id", conversation.show);
Route.get("api/conversations-soft-delete/:id", conversation.softDelete);
// MESSAGE
Route.get("api/messages", message.index);
Route.get("api/messages/:id", message.show);
Route.get("api/messages-soft-delete/:id", message.softDelete);

/*
|--------------------------------------------------------------------------
| History Api Fallback for BrowserRouter - react-router-dom
|--------------------------------------------------------------------------
|
*/
Route.get("*", async ({ view }) => {
  return view.render("react/index");
});
