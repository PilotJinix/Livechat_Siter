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
        title: `Handling Signals in Laravel Console Commands`,
        content: `Earlier this month the Laravel documentation got an update with console signal handling feature inherited through a console signals feature added to the Symfony console component in v5.2: = ${content}`,
        thumbnail: "/news_1.png",
      },
      {
        authorId: 1,
        title: `Laravel Forge now has support for Laravel Octane`,
        content: `Laravel Octane was announced at Laracon Online last month and since then the official beta launched and today Laravel Forge now offers support for it: Today we're pleased to announce that Octane support is available in Forge. We've written the guide below to help you get started. Please keep in mind that Octane is still in beta and should not be used in production. For complete details on getting started check out the announcement and give it a try. Just keep in mind it's still beta. = ${content}`,
        thumbnail: "/news_2.jpg",
      },
      {
        authorId: 1,
        title: `Anonymous Migrations in Laravel 8.37`,
        content: `The Laravel team released Laravel 8.37 with anonymous migration support, which solves a GitHub issue with migration class name collisions. The core of the problem is that if multiple migrations have the same class name, it'll cause issues when trying to recreate the database from scratch. = ${content}`,
        thumbnail: "/news_3.png",
      },
      {
        authorId: 1,
        title: `PhpStorm now includes Code With Me for Pair Programming`,
        content: `JetBrains, the company behind PhpStorm and other IDEs, has announced the public launch of the Code With Me service to enable collaborative development and pair programming across the majority of JetBrains IDEs, fundamentally changing the developer experience. = ${content}`,
        thumbnail: "/news_4.jpg",
      },
      {
        authorId: 2,
        title: `Create Controllers with a Custom Stub in Laravel 8.36`,
        content: `The Laravel team released 8.36 with a custom stub option when creating controllers, a useCurrentOnUpdate method for blueprint datetime columns in MySQL, a dispatch_sync() helper function, and the latest changes in the 8.x branch: = ${content}`,
        thumbnail: "/news_5.jpg",
      },
      {
        authorId: 2,
        title: `The Laravel Octane Beta is Available`,
        content: `The Laravel Octane beta is now released—the highly-anticipated first-party package for running highly performant Laravel utilizing environments like Swoole and RoadRunner.Early demos during Laracon showcased Octane reaching over 6,000 requests-per-second! Octane is considered beta, but the Laravel team is hard at work ensuring compatibility with first-party packages such as Jetstream, Horizon, Spark, etc. = ${content}`,
        thumbnail: "/news_6.png",
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
