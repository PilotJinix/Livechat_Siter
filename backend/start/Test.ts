import User from "App/Models/User";
import News from "App/Models/News";
import Conversation from "App/Models/Conversation";
import Message from "App/Models/Message";

/*
|--------------------------------------------------------------------------
| Test Query Database
|--------------------------------------------------------------------------
| Api ini cuma testing untuk query database
| dan hanya digunakan untuk development saja
|
*/

export const user = {
  index: async () => {
    return await User.all();
  },
  withNews: async () => {
    return await User.query().preload("news");
  },
  adminOnly: async () => {
    return await User.query().where("role", "admin").preload("news");
  },
  commonOnly: async () => {
    return await User.query().where("role", "common");
  },
};

export const news = {
  // index withComments
  index: async () => {
    return await News.query().preload("comments", (query) => {
      query.preload("user");
    });
  },
};

export const conversation = {
  // index withParticipant, withMessages
  index: async () => {
    return await Conversation.query().preload("participants").preload("messages");
  },
  show: async ({ params }) => {
    return await Conversation.findOrFail(params.id);
  },
  softDelete: async ({ params, response }) => {
    const conversation = await Conversation.findOrFail(params.id);
    conversation.softDelete();
    return response.redirect("/api/conversations");
  },
};

export const message = {
  index: async () => {
    return await Message.query();
  },
  show: async ({ params }) => {
    return await Message.findOrFail(params.id);
  },
  softDelete: async ({ params, response }) => {
    const message = await Message.findOrFail(params.id);
    message.softDelete();
    return response.redirect("/api/messages");
  },
};
