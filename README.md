# **LIVECHAT**

# Deskripsi

Aplikasi Live Chat, Aplikasi yang kami kembangkan ialah aplikasi berbasis web yang mana basic dari aplikasi kami dibuat menggunakan PHP Native dan ajax. Aplikasi kami dapat memberikan fitur chating kepada antar user secara realtime. Ajax diganti menggunakan web-socket.

__Anggota Kelompok:__
* 182410103005  Dewangga Putra Kuswanto
* 182410103031	Dyah Ayuningtyas
* 182410103037	Meliatiya Arifviyana
* 182410103042	Azizah Nurul Firdausi Amijaya
* 182410103081	Muhammad Agung Santoso
* 182410103018	Muhammad Rizki Attoilah
* 182410103078	Nauval Acmad Yusufa
* 182410103012	Muhammad Faisal Amruddin
* 182410103090	Ferdy Dwi Kurniawan
* 182410103077	M. Nur Ridho Taufikurrahman


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
  - [AdonisJs](https://preview.adonisjs.com/guides/quick-start)
  - [SocketIO](https://socket.io/docs/v4)
  - [Typescript](https://www.typescriptlang.org/docs/)
  - [NodeJs](https://nodejs.org/en/docs/)
- Blog
  - [Membuat Realtime Chart dengan Express, ChartJs, MongoDB dan Socket IO](https://www.codepolitan.com/membuat-realtime-chart-dengan-express-chartjs-mongodb-dan-socket-io-57ce7902a5b95-5)
  - [Tutorial Cara Menggunakan Socket.IO dan Express](https://billnode.blogspot.com/2017/01/tutorial-cara-menggunakan-socket-io-dan-express-node-js.html)
  - [Membuat chat dengan Socket.io dan ExpressJS](https://sekolahkoding.com/forum/membuat-chat-dengan-socketio-dan-expressjs)
- Youtube
  - Play List
    - [Belajar NodeJS](https://www.youtube.com/playlist?list=PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD)
    - [Tutorial Dasar Adonisjs](https://www.youtube.com/playlist?list=PL9At9z2rvOC_CkMnCV73E0qXK88l2rzIF)
    - [Node.js framework tutorial CRUD dengan Adonis.js bahasa indonesia](https://www.youtube.com/playlist?list=PLaPc1Bch98J2aFFn8SocnEcoUfL24OBVS)
    - [AdonisJS 5 From Scratch](https://www.youtube.com/playlist?list=PL9gT3zlT0C1Ngrii-NCPpuRvUO1mIGzwf)
    - [Tutorial Typescript](https://www.youtube.com/watch?v=CJ4cWe-jXBg&list=PLnQvfeVegcJbjCnML6FdusK-rl-oDRMXJ)
    - [Bicara Typescript](https://www.youtube.com/playlist?list=PLwvMCa_o2Latn_BAqFBMbj2IwlqgfgnG8)
  - Single Video
    - [Realtime Chat With Users & Rooms - Socket.io, Node & Express](https://www.youtube.com/watch?v=jD7FnbI76Hg)



## **Catatan**

Di folder backend sudah terinstal adonisjs, jadi gak perlu init aplikasi lagi pakai ```npm init adonis-ts-app```. Untuk jalankan development mode, run ```node ace serve --watch```.

Sudah di install socket.io juga, untuk route eventnya ada di ```start/socket.ts```.

Di folder ./vscode ada settings untuk load SDK typescript di workspace jika menggunakan Text Editor VSCode. kalo yang lain bisa menyesuaikan. jadi untuk root foldernya di folder backend.

Saran pakai extension formater di Text Editornya. Contoh extension [Prettier](https://prettier.io/).

Jangan lupa setup buat DB nya di mysql. bisa pakai XAMPP
