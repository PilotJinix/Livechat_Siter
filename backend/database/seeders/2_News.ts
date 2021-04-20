import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import { DateTime } from "luxon";

// MODEL
import News from "App/Models/News";

export default class NewsSeeder extends BaseSeeder {
  public async run() {
    const content =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh arcu, consequat vitae mi in, cursus semper magna. In pulvinar condimentum arcu eu faucibus. Phasellus maximus nibh vel consectetur congue. Pellentesque semper vel mauris vitae pharetra. Fusce eros nisi, accumsan vel convallis in, accumsan ut nisi. Proin sollicitudin eros leo, ut semper felis aliquam bibendum. Vestibulum quis nunc porttitor, pulvinar risus at, ultricies neque. Fusce in ullamcorper augue. In ut mi orci. Aenean ut mi maximus lacus vulputate sagittis. Nullam justo dolor, vehicula ac massa eget, ullamcorper laoreet lacus. Nunc at mi sed dolor sollicitudin consequat. Etiam porta elit quis purus pretium, in pharetra turpis ullamcorper. Fusce pellentesque metus quis nunc maximus tristique. Duis hendrerit metus ut viverra porta.";

    let news: Partial<News>[] = [
      {
        authorId: 1,
        title: `title of news A`,
        content: `contentA from user_id 1 = ${content}`,
        thumbnail: "/thumbnail.jpg",
      },
      {
        authorId: 1,
        title: `title of news B`,
        content: `contentB from user_id 1 = ${content}`,
        thumbnail: "/thumbnail.jpg",
      },
      {
        authorId: 1,
        title: `title of news C`,
        content: `contentC from user_id 1 = ${content}`,
        thumbnail: "/thumbnail.jpg",
      },
      {
        authorId: 1,
        title: `title of news D`,
        content: `contentD from user_id 1 = ${content}`,
        thumbnail: "/thumbnail.jpg",
      },
      {
        authorId: 2,
        title: `title of news E`,
        content: `contentE from user_id 2 = ${content}`,
        thumbnail: "/thumbnail.jpg",
      },
      {
        authorId: 2,
        title: `title of news F`,
        content: `contentF from user_id 2 = ${content}`,
        thumbnail: "/thumbnail.jpg",
      },
      {
        authorId: 1,
        title: `title of news G`,
        content: `contentG from user_id 1 = ${content}`,
        thumbnail: "/thumbnail.jpg",
      },
      {
        authorId: 1,
        title: `title of news H`,
        content: `contentH from user_id 1 = ${content}`,
        thumbnail: "/thumbnail.jpg",
      },
      {
        authorId: 1,
        title: `title of news I`,
        content: `contentI from user_id 1 = ${content}`,
        thumbnail: "/thumbnail.jpg",
      },
      {
        authorId: 1,
        title: `title of news J`,
        content: `contentJ from user_id 1 = ${content}`,
        thumbnail: "/thumbnail.jpg",
      },
      {
        authorId: 2,
        title: `title of news K`,
        content: `contentK from user_id 2 = ${content}`,
        thumbnail: "/thumbnail.jpg",
      },
      {
        authorId: 2,
        title: `title of news L`,
        content: `contentL from user_id 2 = ${content}`,
        thumbnail: "/thumbnail.jpg",
      },
      {
        authorId: 2,
        title: `title of news M`,
        content: `contentM from user_id 2 = ${content}`,
        thumbnail: "/thumbnail.jpg",
      },
      {
        authorId: 2,
        title: `title of news N`,
        content: `contentN from user_id 2 = ${content}`,
        thumbnail: "/thumbnail.jpg",
      },
      {
        authorId: 2,
        title: `title of news O`,
        content: `contentO from user_id 2 = ${content}`,
        thumbnail: "/thumbnail.jpg",
      },
      {
        authorId: 2,
        title: `title of news P`,
        content: `contentP from user_id 2 = ${content}`,
        thumbnail: "/thumbnail.jpg",
      },
      {
        authorId: 2,
        title: `title of news Q`,
        content: `contentQ from user_id 2 = ${content}`,
        thumbnail: "/thumbnail.jpg",
      },
      {
        authorId: 2,
        title: `title of news R`,
        content: `contentR from user_id 2 = ${content}`,
        thumbnail: "/thumbnail.jpg",
      },
      {
        authorId: 2,
        title: `title of news S`,
        content: `contentS from user_id 2 = ${content}`,
        thumbnail: "/thumbnail.jpg",
      },
      {
        authorId: 2,
        title: `title of news T`,
        content: `contentT from user_id 2 = ${content}`,
        thumbnail: "/thumbnail.jpg",
      },
      {
        authorId: 2,
        title: `title of news U`,
        content: `contentU from user_id 2 = ${content}`,
        thumbnail: "/thumbnail.jpg",
      },
      {
        authorId: 2,
        title: `title of news V`,
        content: `contentV from user_id 2 = ${content}`,
        thumbnail: "/thumbnail.jpg",
      },
    ];

    const sixmonthago = DateTime.now().minus({ months: 6 });

    let day = 0;
    const newsNext = news.map((n) => {
      day += 1;
      n.createdAt = sixmonthago.plus({ days: day });
      return n;
    });

    await News.createMany(newsNext);
  }
}
