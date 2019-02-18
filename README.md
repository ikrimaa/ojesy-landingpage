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
merupakan library opensource yang dikembangkan oleh facebook untuk membangun user interface. React JS hanya mengurusi semua hal yang berkaitan dengan tampilan dan logika di sekitarnya. 

## Membuat Project Baru 
untuk membuat project baru dengan react, menggunakan langkah sebagai berikut :

    npx create-react-app ojesy-fe
    cd ojesy-fe
    npm start

harus diketahui `create-react-app` tidak menangani logika maupun database , dimana hanya membuat frontend 

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

Merupakan bahasa desain yang dikembangkan Google dan diumumkan pada konferensi Google I/O pada 25 Juni 2014. Memperluas pada motif "kartu" yang pertama kali terlihat pada Google Now, adalah desain dengan peningkatan penggunaan layout berbasis grid, animasi dan transisi responsif, padding, dan efek kedalaman seperti pencahayaan dan bayangan. ( wikipedia )

Material-UI.com 
merupakan framework react UI yang popular, dan tersedia di [npm package](https://www.npmjs.com/package/@material-ui/core) 
untuk melakukan instalasi dan menyimpan di *dependencies* package.json jalan kan perintah :

    // dengan npm
    npm install @material-ui/core
    
    // dengan yarn
    yarn add @material-ui/core
    
## Membuat Component
berikut beberapa komponen untuk pembuatan landingpage ini, 
1. Header
2. Footer
1. Halaman Home 
    1. Cover
    2. Fitur List
    3. Galeri
    4. Blog
2. Halaman Tentang Kami
3. Halaman Blog
4. Halaman Hubungi Kami

dimana akan saya ambil satu contoh membangun komponen bloglist dengan beberapa function
1. handleload merupakan komponen untuk melakukan request http atau menampilkan data artikel
    ```
    handleLoad = () => {
        axios.post(`https://private-16c0d2-ikrimaa.apiary-mock.com/v1/landing-page`)
          .then(res => {
            let landingPage = res.data;
            let items = landingPage[0].posting;
            this.setState({ items });
            // console.log(postings);

          }).catch(error => {
            console.error(error);
          this.setState({
            error: true
          });
          })
    ```
2. loadmore
merupakan komponen yang akan menghandle brapa banya data yang akan ditampilkan
    
    ```
      loadMore() {
      this.setState((prev) => {
        return { visible: prev.visible + 2 };
      });
      }
    ```
3. Mapping data yang telah diambil ke card / tampilan blog

     ```
        <div >
          {this.state.items.slice(0, this.state.visible).map((item, index) => {
              return (
                <div  key={item.id}>
              
                  <Card className={classes.card} >
                 
                    <CardHeader
                      avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                          {item.avatar}
                        </Avatar>
                      }
                      action={
                        <IconButton>
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={item.judul}
                      subheader={item.published_at}
                    />
                    <CardMedia
                      className={classes.media}
                      image="/static/images/cards/paella.jpg"
                      title="Paella dish"
                    />
                    <CardContent>
                      <Typography component="p">
                        {item.post}
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                      <Button size="small" color="primary" value={item.id}
                      href={`${url}/${item.id}`}
                        id={item.id}
                        onChange={(id) => { this.handleId(item.id) }}
                      >
                        Learn More
                    </Button>
                    </CardActions>
                </Card>
                </div>
              );
            })}
          </div>
      ```
4. membuat tombol Readmore, dimana tombol ini berfungsi memanggi handle loadmore yang telah dibuat
    ```
    {this.state.visible < this.state.items.length &&
             <Button
             onClick={this.loadMore}
              color="secondary"
              color="primary"
              size="large"
              variant="contained"
              className={classes.button}
              
            >
              READ MORE
        </Button>
          }
    ```
## Request HTTP
Pada  bagian ini kita akan membahas bagaimana kita mengonsumsi data yang telah disediakan backend, HTTP seperangkat metode permintaan untuk mengajukan tindakan yang  diinginkan, yang akan dilakukan. 

Pada proyek ini untuk melakukan permintaan HTTP, yang berfungsi di platform Browser dan Node.js akan 
mengunakan Axios library javascript yang popular.

kita dapat memulai dengan menambahkan axios :
```
Dengan npm
npm install axios --save

Dengan Yarn
yarn add axios
```
contoh penggunaan axios di proyek landing page ini :

```
import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider-animations.css';
import './styles.css';
import axios from 'axios';
class SlideCover extends Component {
  state = {
    landingPage: [],
    covers: [],
  }
  // handleload = mengambil data dari api data covers 
  handleLoad = () => {
    axios.post(`https://private-16c0d2-ikrimaa.apiary-mock.com/v1/landing-page`)
      .then(res => {
        let landingPage = res.data;
        let covers = landingPage[0].cover;
        this.setState({ covers });
      })
  }
  componentDidMount() {
    this.handleLoad()
  }
  render() {
    const { covers } = this.state
    return (
      <div>
        <Slider autoplay={3000} className="slider-wrapper">
          {covers.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{ background: `url('${item.link_gambar}') no-repeat center center` }}
            >
              <div className="inner">
                <h1>{item.name}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
export default SlideCover;
```
## Deploy Ke Server
selanjutnya akan menjelaskan mengenai bagaimana project yang telah dibuat ini dapat diakses banyak orang melalui browser masing-masing. sebenarnya ada banyak cara seperti Surge.sh, Heroku, pages. 

Karena dari awal development proyek menggunakan CRA ( create react app ). Dengan menggunakan CRA ini kita tinggal fokus dalam membangun feature dari app yang ingin kita buat. Kita bisa menggunakan yarn startsaat melakukan development di local dan menggunakan yarn builduntuk melakukan deployment. 

Jika sebelumnya kita telah berhasil membuat React app menggunakan CRA, kali ini kita akan mencoba melakukan deployment menggunakan pages. 

untuk menggunakan layanan pages kita perlu melakukan :
1. sign up github
2. membuat repositori di github 
3. aktifkan github pages di menu setting
    - gambar    
4. setelah itu tambahkan repositori github yang telah dibuat sebagai repositori jarak jauh dan `push` code kedalamnya dengan perintah berikut:

    ```
    #menambah remote repositori
    git remote add origin https://github.com/namaakun/namarepositori.git

    # menambahkan perubahan
    git add .

    # commit semua perubahan
    git commit -m 'deploy gh-pages' 
    #
    $ git push origin master
    ```
5. Langkah selanjunya menambahkan `gh-pages` 
    ```
    # dengan npm
    npm install --save gh-pages

    # dengan yarn
    yarn add gh-pages
    ```
6. modifikasi `package.json` dengan beberapa statement berikut:

    ```
    Homepage menentukan jalur host tempat Anda ingin meng-host aplikasi.
    Template untuk URL adalah: 
    https: // [nama-pengguna-Anda] .github.io / [nama-repo Anda] /

    "homepage": "https://ikrimaa.github.io/ojesy-landingpage",
    

    "predeploy":"yarn run build",
    "deploy":"gh-pages -d build", 

    ```
    - gambar 

7. langkah terakhir untuk deployment :
pada command line jalankan perintah betikut

``` yarn deploy
```

-gambar sukses deploy
-gambar gh-pages














