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
        authorId: 2,
        title: `Laravel Forge now has support for Laravel Octane`,
        content: `Laravel Octane was announced at Laracon Online last month and since then the official beta launched and today Laravel Forge now offers support for it: Today we're pleased to announce that Octane support is available in Forge. We've written the guide below to help you get started. Please keep in mind that Octane is still in beta and should not be used in production. For complete details on getting started check out the announcement and give it a try. Just keep in mind it's still beta. = ${content}`,
        thumbnail: "/news_2.jpg",
      },
      {
        authorId: 3,
        title: `Anonymous Migrations in Laravel 8.37`,
        content: `The Laravel team released Laravel 8.37 with anonymous migration support, which solves a GitHub issue with migration class name collisions. The core of the problem is that if multiple migrations have the same class name, it'll cause issues when trying to recreate the database from scratch. = ${content}`,
        thumbnail: "/news_3.png",
      },
      {
        authorId: 4,
        title: `PhpStorm now includes Code With Me for Pair Programming`,
        content: `JetBrains, the company behind PhpStorm and other IDEs, has announced the public launch of the Code With Me service to enable collaborative development and pair programming across the majority of JetBrains IDEs, fundamentally changing the developer experience. = ${content}`,
        thumbnail: "/news_4.jpg",
      },
      {
        authorId: 5,
        title: `Create Controllers with a Custom Stub in Laravel 8.36`,
        content: `The Laravel team released 8.36 with a custom stub option when creating controllers, a useCurrentOnUpdate method for blueprint datetime columns in MySQL, a dispatch_sync() helper function, and the latest changes in the 8.x branch: = ${content}`,
        thumbnail: "/news_5.jpg",
      },
      {
        authorId: 6,
        title: `The Laravel Octane Beta is Available`,
        content: `The Laravel Octane beta is now released—the highly-anticipated first-party package for running highly performant Laravel utilizing environments like Swoole and RoadRunner.Early demos during Laracon showcased Octane reaching over 6,000 requests-per-second! Octane is considered beta, but the Laravel team is hard at work ensuring compatibility with first-party packages such as Jetstream, Horizon, Spark, etc. = ${content}`,
        thumbnail: "/news_6.png",
      },
      {
        authorId: 7,
        title: `Laravel Horizon`,
        content: `Before digging into Laravel Horizon, you should familiarize yourself with Laravel's base queue services. Horizon augments Laravel's queue with additional features that may be confusing if you are not already familiar with the basic queue features offered by Laravel.Laravel Horizon provides a beautiful dashboard and code-driven configuration for your Laravel powered Redis queues. Horizon allows you to easily monitor key metrics of your queue system such as job throughput, runtime, and job failures.When using Horizon, all of your queue worker configuration is stored in a single, simple configuration file. By defining your application's worker configuration in a version controlled file, you may easily scale or modify your application's queue workers when deploying your application. = ${content}`,
        thumbnail: "/news_7.png",
      },
      {
        authorId: 8,
        title: `Why Laravel Using Laravel ?`,
        content: `There are a variety of tools and frameworks available to you when building a web application. However, we believe Laravel is the best choice for building modern, full-stack web applications. = ${content}`,
        thumbnail: "/news_8.jpg",
      },
      {
        authorId: 9,
        title: `Laravel is Interesting `,
        content: `When building an API, you may need a transformation layer that sits between your Eloquent models and the JSON responses that are actually returned to your application's users. For example, you may wish to display certain attributes for a subset of users and not others, or you may wish to always include certain relationships in the JSON representation of your models. Eloquent's resource classes allow you to expressively and easily transform your models and model collections into JSON. Of course, you may always convert Eloquent models or collections to JSON using their toJson methods; however, Eloquent resources provide more granular and robust control over the JSON serialization of your models and their relationships. = ${content}`,
        thumbnail: "/news_9.png",
      },
      {
        authorId: 10,
        title: `MIGRATION LARAVEL `,
        content: `Migrations are like version control for your database, allowing your team to define and share the application's database schema definition. If you have ever had to tell a teammate to manually add a column to their local database schema after pulling in your changes from source control, you've faced the problem that database migrations solve. The Laravel Schema facade provides database agnostic support for creating and manipulating tables across all of Laravel's supported database systems. Typically, migrations will use this facade to create and modify database tables and columns. = ${content}`,
        thumbnail: "/news_10.png",
      },
    ];

    const sixmonthago = DateTime.now().minus({ months: 5 });

    let day = 0;
    const newsNext = news.map((n) => {
      day += 7;
      n.createdAt = sixmonthago.plus({ days: day });
      return n;
    });

    await News.createMany(newsNext);
  }
}
