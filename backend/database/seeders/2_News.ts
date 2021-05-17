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
        title: `Laravel Horizon`,
        content: `Before digging into Laravel Horizon, you should familiarize yourself with Laravel's base queue services. Horizon augments Laravel's queue with additional features that may be confusing if you are not already familiar with the basic queue features offered by Laravel.Laravel Horizon provides a beautiful dashboard and code-driven configuration for your Laravel powered Redis queues. Horizon allows you to easily monitor key metrics of your queue system such as job throughput, runtime, and job failures.When using Horizon, all of your queue worker configuration is stored in a single, simple configuration file. By defining your application's worker configuration in a version controlled file, you may easily scale or modify your application's queue workers when deploying your application. = ${content}`,
        thumbnail: "/news_7.png",
      },
      {
        authorId: 1,
        title: `Why Laravel Using Laravel ?`,
        content: `There are a variety of tools and frameworks available to you when building a web application. However, we believe Laravel is the best choice for building modern, full-stack web applications. = ${content}`,
        thumbnail: "/news_8.jpg",
      },
      {
        authorId: 1,
        title: `title of news I`,
        content: `contentI from user_id 1 = ${content}`,
        thumbnail: "/news_9.png",
      },
      {
        authorId: 1,
        title: `Laravel is Interesting `,
        content: `When building an API, you may need a transformation layer that sits between your Eloquent models and the JSON responses that are actually returned to your application's users. For example, you may wish to display certain attributes for a subset of users and not others, or you may wish to always include certain relationships in the JSON representation of your models. Eloquent's resource classes allow you to expressively and easily transform your models and model collections into JSON. Of course, you may always convert Eloquent models or collections to JSON using their toJson methods; however, Eloquent resources provide more granular and robust control over the JSON serialization of your models and their relationships. = ${content}`,
        thumbnail: "/news_10.png",
      },
      {
        authorId: 2,
        title: `Fitur-fitur Baru di Laravel 8`,
        content: `Di dalam Laravel 8 ini, terdapat beberapa improvement pada fitur yang disediakan pada Laravel 7.x. Beberapa diantaranya seperti Laravel Jetstream, Models Directory, Model Factory Classes, Dynamic Blade Components, dan masih banyak lagi. Berikut penjelasan untuk masing-masing pembaruan pada fitur Laravel 8. = ${content}`,
        thumbnail: "/news_11.1.jpeg",
      },
      {
        authorId: 2,
        title: `LARAVEL SCOUT`,
        content: `Check the Installation documentation for your specific platform. Still, the ease of getting an instance of MeiliSearch running is very attractive to lowering the barrier of entry to start tinkering with Scout. With the release of V9, Laravel Scout now supports Algolia, MeiliSearch, and any other service you might want by writing a custom engine. You can learn more about the Laravel Scout v9 package, get full installation instructions, and view the source code on GitHub. The Scout v9 documentation will be available soon, be sure to check out the Laravel Scout documentation for details on setting up Laravel Scout in your project. = ${content}`,
        thumbnail: "/news_12.png",
      },
      {
        authorId: 2,
        title: `COMPOSER SECURITY UPDATE CVE-2021-29472`,
        content: `As a precaution after updating Composer we recommend you audit your composer.lock files to ensure they only contain URLs and none which start with -- , e.g. --config and could be considered command line options. Should you find any such URL values despite our belief that this vulnerability was not exploited in the wild, please contact us immediately by email to security@packagist.org. In general we always recommend you review changes you make to your lock files to ensure no untrusted dependencies or external URLs are introduced to your application. Please note that Packagist.org is only a metadata server and package contents are downloaded from a location chosen by the package maintainers. Private Packagist will store copies of mirrored package contents, so Composer can download them from there, but the lock files will still contain the maintainers' original URLs for reference and as a fallback. = ${content}`,
        thumbnail: "/news_13.jpg",
      },
      {
        authorId: 2,
        title: `JSON Type Assertions and a "prohibited" Validation rule Are Now In Laravel 8.34`,
        content: `The Laravel team released 8.34 with type assertions in the fluent JSON API, a 'prohibited' validation rule, a new event fake assertion, and the latest changes in the 8.x branch: = ${content}`,
        thumbnail: "/news_14.png",
      },
      {
        authorId: 2,
        title: `The March Laravel Worldwide Meetup is today`,
        content: `The next Laravel Worldwide Meetup is today at 15:00 EDT, and you’ll be able to watch it live on the YouTube Channel. The speakers are as follows: Miguel Piedrafita will be presenting signing in with Laravel A deep-dive into the OAuth2 protocol, Sign in with Apple and Web Authentication Caneco will be presenting once upon a time at Laracon All secrets are revealed from the latest Laracon Online website. From the concept and early designs to the publish button. If you've missed any of the previous Worldwide Meetups you can view them on the Youtube Playlist page. = ${content}`,
        thumbnail: "/news_15.jpg",
      },
      {
        authorId: 2,
        title: `Laravel Breeze Now With Inertia.js`,
        content: `Laravel released an Inertia.js option for the Laravel Breeze starter kit you can use to create a minimal starting point for building Laravel applications with authentication: The --inertia flag offers an optional frontend implementation that scaffolds Inertia.js, Vue, and PHP code you'll need to get started: = ${content}`,
        thumbnail: "/news_16.png",
      },
      {
        authorId: 2,
        title: `Implementing CSP in a Laravel app`,
        content: `To easily add a Content Security Policy to a Laravel app, our team at Spatie has created a new package called laravel-csp. Once installed it allows you to create a policy class. It can look like this:  = ${content}`,
        thumbnail: "/news_17.JPG",
      },
      {
        authorId: 2,
        title: `Mengintegrasikan CKeditor di Laravel`,
        content: `Membuat sebuah editor pada halaman website merupakan fitur yang menarik terlebih lagi untuk kebutuhan blogging, layaknya wordpress dengan editornya yang powerful dimana memudahkan penggunanya karena fiturnya yang lengkap. Sebenarnya kita bisa memanfaatkan library yang sudah ada yakni Ckeditor. Ckeditor adalah text editor yang fleksibel yang dapat digunakan untuk menginput berupa teks yang secara otomatis akan diconvert menjadi HTML code, tidak hanya sebatas itu kita juga bisa menambahkan gambar dan video dengan fitur drag & drop kedalam editor tersebut. Tentu saja hal ini akan memudahkan pengguna bahkan pada tingkatan yang tidak memiliki pengetahuan seputar programming sekalipun. Kabar baiknya, pada artikel kali ini, tidak hanya sekedar mengintegrasikan Ckeditor tapi kita juga akan menambahkan plugin codesnippet yang memungkinkan kita untuk memasukkan source code (syntax highlighting) kedalam editor tersebut tanpa di-convert sebagaimana mestinya, sehingga yang akan ditampilkan tetap berupa source code.  = ${content}`,
        thumbnail: "/news_18.1.JPG",
      },
      {
        authorId: 2,
        title: `Best html wysiwyg for Laravel 5.5`,
        content: `I would like to know if you have any experience of the best and most reliable html editor that I could incorporate into Laravel please. I need an editor where the user can add images and html in the text area that do not add unecessary html tags like many bad editors I have used in the past in my projects without framework. = ${content}`,
        thumbnail: "/news_19.JPG",
      },
      {
        authorId: 2,
        title: `Mengenal Blade Pada Laravel`,
        content: `Blade adalah salah satu fitur dalam laravel yang digunakan untuk menampilkan output pada view. Fitur blade ini bisa dibilang sangat canggih, karena kita dapat membuat coding tanpa perlu tag PHP (<?php ?>). Selain menampilkan output, blade juga digunakan untuk membuat layout website. Untuk membuat coding PHP menggunakan Blade, diawali dengan karakter '@keywordphp'.  = ${content}`,
        thumbnail: "/news_20.JPG",
      },
      {
        authorId: 2,
        title: `Apa yang Baru di Laravel 8?`,
        content: `Laravel Jetstream merupakan Ekosistem baru di Laravel 8, yang digunakan untuk membuat scaffolding menggunakan Tailwind CSS dengan memberikan pilihan desain livewire atau inersia, yang berarti ini menggantikan scaffolding bootstrap, vue atau react seperti pada versi sebelumnya. = ${content}`,
        thumbnail: "/news_21.JPG",
      },
      {
        authorId: 2,
        title: `Pengertian Framework Laravel Beserta Fitur dan Keunggulannya`,
        content: `Website-website yang dikembangkan saat ini kebanyakan menggunakan bahasa pemrograman PHP. PHP sudah ada sejak tahun 1995 yang saat itu fungsinya untuk mengelola form data pada website. PHP hingga saat ini banyak digunakan untuk kebutuhan dalam pembuatan website dinamis, tidak menutup kemungkinan PHP sekarang ini juga digunakan untuk keperluan lain. Semakin berkembanga dari tahun dari 1995 sampai sekarang ini, teknologi dalam hal pemrograman sudah semakin berkembangan pesat dengan munculnya berbagai jenis framework PHP untuk lebih memudahkan para developer website dalam membuat sebuah website. Ada beberapa framework PHP yang banyak digunakan oleh para developer saat ini seperti Codeigniter, Yii, Symfony, CakePHP, Seagull, Bootstrap dan Laravel. = ${content}`,
        thumbnail: "/news_22.JPG",
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
