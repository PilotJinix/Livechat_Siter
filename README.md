# **Backend**



## **Installation**

[AdonisJs](https://preview.adonisjs.com/) membutuhkan [NodeJs](https://nodejs.org/en/) >= 12.0.0, dan dengan npm >= 6.0.0

```bash
// clone project
git clone --branch Backend https://github.com/PilotJinix/Livechat_Siter.git

// cd root folder
cd Livechat_Siter/backend

// install dependencies
// kalo di Laravel 'composer install'
npm install

// run
// kalo di Laravel 'php artisan serve'
node ace serve --watch
```



## **Resource**

- Dokumentasi Resmi
  - [AdonisJs](https://preview.adonisjs.com/guides/quick-start){:target="_blank"}
  - [SocketIO](https://socket.io/docs/v4){:target="_blank"}
  - [Typescript](https://www.typescriptlang.org/docs/){:target="_blank"}
  - [NodeJs](https://nodejs.org/en/docs/){:target="_blank"}
- Blog
  - [Membuat Realtime Chart dengan Express, ChartJs, MongoDB dan Socket IO](https://www.codepolitan.com/membuat-realtime-chart-dengan-express-chartjs-mongodb-dan-socket-io-57ce7902a5b95-5){:target="_blank"}
  - [Tutorial Cara Menggunakan Socket.IO dan Express](https://billnode.blogspot.com/2017/01/tutorial-cara-menggunakan-socket-io-dan-express-node-js.html){:target="_blank"}
  - [Membuat chat dengan Socket.io dan ExpressJS](https://sekolahkoding.com/forum/membuat-chat-dengan-socketio-dan-expressjs){:target="_blank"}
- Youtube
  - Play List
    - [Belajar NodeJS](https://www.youtube.com/playlist?list=PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD){:target="_blank"}
    - [Tutorial Dasar Adonisjs](https://www.youtube.com/playlist?list=PL9At9z2rvOC_CkMnCV73E0qXK88l2rzIF){:target="_blank"}
    - [Node.js framework tutorial CRUD dengan Adonis.js bahasa indonesia](https://www.youtube.com/playlist?list=PLaPc1Bch98J2aFFn8SocnEcoUfL24OBVS){:target="_blank"}
    - [AdonisJS 5 From Scratch](https://www.youtube.com/playlist?list=PL9gT3zlT0C1Ngrii-NCPpuRvUO1mIGzwf){:target="_blank"}
    - [Tutorial Typescript](https://www.youtube.com/watch?v=CJ4cWe-jXBg&list=PLnQvfeVegcJbjCnML6FdusK-rl-oDRMXJ){:target="_blank"}
    - [Bicara Typescript](https://www.youtube.com/playlist?list=PLwvMCa_o2Latn_BAqFBMbj2IwlqgfgnG8){:target="_blank"}
  - Single Video
    - [Realtime Chat With Users & Rooms - Socket.io, Node & Express](https://www.youtube.com/watch?v=jD7FnbI76Hg){:target="_blank"}



## **Catatan**

Di folder backend sudah terinstal adonisjs, jadi gak perlu init aplikasi lagi pakai ```npm init adonis-ts-app```. Untuk jalankan development mode, run ```node ace serve --watch```.

Sudah di install socket.io juga, untuk route eventnya ada di ```start/socket.ts```.

Di folder ./vscode ada settings untuk load SDK typescript di workspace jika menggunakan Text Editor VSCode. kalo yang lain bisa menyesuaikan. jadi untuk root foldernya di folder backend.

Saran pakai extension formater di Text Editornya. Contoh extension [Prettier](https://prettier.io/).

Jangan lupa setup buat DB nya di mysql. bisa pakai XAMPP
