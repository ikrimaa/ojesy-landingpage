# How I built the OJESY landing page with React

## Overview
Landing page yang dibagun menggunakan react ini memiliki beberapa component, yang akan menampilkan  halaman beranda, tentang kami, blog, dan hubungi kami. Tampilan landing page kali ini menggunakan framework material-ui.com.
## Table of Content 
1. Requirement
2. Apa itu React Js?
2. Membuat Project Baru
3. Gitlab Repo
3. Material Design Dengan Material-ui.com
4. Membuat Component
5. Request HTTP
6. Deploy ke server

## Requirement
Sebelum Anda membuat landing page dengan react ada beberapa hal yang harus dipersiapkan, seperti :

1. **Javascript Fundamental**
2. **Text Editor** 
3. **Node Js** dan **NPM**
4. **Yarn** (opsional)
5. **GIT**
6. **Koneksi Internet**

## Apa Itu React Js ?

## Membuat Project Baru 
untuk membuat project baru dengan react, menggunakan langkah sebagai berikut :

    npx create-react-app ojesy-fe
    cd ojesy-fe
    npm start

harus diketahui `create-react-app` tidak menangani logika maupun database , dimana hanya membuat frontend 

berikut tampilan ojesy-fe

## Gitlab Repo
Ketika kita membuat sebuah folder project web dengan isi file javascript, html, css. kemudian ketika sudah siap untuk dirilis file-file tersebut diupload ke server. di era teknologi opensource,  banyak developer dari berbagai negara menawarkan layanan hosting private dan public, seperti Github, Gitlab dan lain - lain. Ada yang berbayar dan gratis. sebagai developer pemula sebaiknya menggunakan fitur yang gratis. Untuk menyimpan file-file landing page ini menggunakan Gitlab.

### **Lalu bagaimana caranya ?**

* persiapkan git dengan mengunduhnya sesuai os yang anda pakai, di halaman website git-scm.com

* membuat repositori baru, 
    
    ``` 
    git init 
    ```

    atau menggunakan repo yang sudah ada di server jarak jauh, seperti pada project kali ini menggunakan repo di gitlab.com dengan nama`landing-page-daily-post-frontend`

    ```
    git remote add origin <server>
    git remote add origin https://gitlab.com/ojesy-dev/magang/landing-page-daily-post-frontend.git
    ```
* mengirim perubahan ke server
saat ini perubahan telah tersimpan di salinan kerja lokal, untuk megirimkan ke repositori jarak jauh lakukan perintah berikut:
    ```
    git status                  " untuk mengecek status perubahan "
    git add                     " menambahkan perubahan "
    git commit -m "isi pesan "  " memberi pesan perubahan komit "
    git pull                    " untuk memperbarui repositori lokal ke komit terkini "
    git push origin master      " mengirimkan ke repositori jarak jauh "
    ``` 
* Pelajari command penting lainnya di dokumentasi [git](https://git-scm.com/book/id/v1/Memulai-Git-Dasar-Git)

## Material Design Dengan Material-UI.com 









