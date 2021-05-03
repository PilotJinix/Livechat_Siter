/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
*/

import Route from "@ioc:Adonis/Core/Route";
import AuthController from "App/Controllers/Http/AuthController";
import UsersController from "App/Controllers/Http/UsersController";
import NewsController from "App/Controllers/Http/NewsController";
import ConversationsController from "App/Controllers/Http/ConversationsController";

/*
|--------------------------------------------------------------------------
| Test Query Database
|--------------------------------------------------------------------------
|
*/
// import { user, news, conversation, message } from "./Test";
// USERS
// Route.get("api/users", user.index);
// Route.get("api/admins", user.adminOnly);
// Route.get("api/commons", user.commonOnly);
// NEWS
// Route.get("api/news", news.index);
// CONVERSATIONS
// Route.get("api/conversations", conversationController.index);
// Route.get("api/conversations/:id", conversation.show);
// Route.get("api/conversations-soft-delete/:id", conversation.softDelete);
// MESSAGE
// Route.get("api/messages", message.index);
// Route.get("api/messages/:id", message.show);
// Route.get("api/messages-soft-delete/:id", message.softDelete);

// Test Auth
const authController = new AuthController();
// Handle Register Form
Route.post("api/register", authController.register);
// Handle Login Form
Route.post("api/login", authController.login);
// Handle first load application
Route.post("api/authenticate", authController.authenticate);
// Handle Logout Form
Route.post("api/logout", authController.logout);

// Test News
const newsController = new NewsController();
Route.get("api/news", newsController.index);

// test conversation
const conversationsController = new ConversationsController (); 
Route.get("api/conversations", conversationsController.index);

// Test User
const usersController = new UsersController();
Route.get("api/users", usersController.index);

/*
|--------------------------------------------------------------------------
| History Api Fallback for BrowserRouter - react-router-dom
|--------------------------------------------------------------------------
|
*/
Route.get("*", async ({ view }) => {
  return view.render("react/index");
});
