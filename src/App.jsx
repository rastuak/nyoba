// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom';
import Card from './components/cardd.jsx'
import borobudurPict from "./assets/borobudur.jpeg"
import prambananPict from "./assets/prambanan.jpeg"
import cangkuangPict from "./assets/cangkuang.jpg"


function App() {
  const cards = [
    {
      title: 'Candi Borobudur',
      desc: 'Candi Borobudur atau kadang-kadang disebut “Barabudur” adalah candi Buddha Mahayana yang berlokasi di dekat kota Muntilan di Pulau Jawa di Indonesia',
      image: borobudurPict,
      url: 'https://id.wikipedia.org/wiki/Borobudur',
    },
    {
      title: 'Candi Prambanan',
      desc: 'Candi Prambanan adalah candi Hindu terbesar di Yogyakarta, menjulang setinggi 47 meter dengan ornamen yang mengagumkan. Dibangun pada abad ke-9, dibuat oleh Roro Jonggrang, seorang putri yang cantik',
      image: prambananPict,
      url: 'https://id.wikipedia.org/wiki/Candi_Prambanan',
    },
    {
      title: 'Candi Cangkuang',
      desc: 'Candi Cangkuang pertama kali sudah terdengar oleh Vorderman, ia menyatakan bahwa di Desa Cangkuang terdapat peninggalan patung Dewa Siwa',
      image: cangkuangPict,
      url: 'https://id.wikipedia.org/wiki/Candi_Cangkuang'
    },
    {
      title: 'Candi Borobudur',
      desc: 'Candi Borobudur atau kadang-kadang disebut “Barabudur” adalah candi Buddha Mahayana yang berlokasi di dekat kota Muntilan di Pulau Jawa di Indonesia',
      image: borobudurPict,
      url: 'https://id.wikipedia.org/wiki/Borobudur',
    },
    {
      title: 'Candi Prambanan',
      desc: 'Candi Prambanan adalah candi Hindu terbesar di Yogyakarta, menjulang setinggi 47 meter dengan ornamen yang mengagumkan. Dibangun pada abad ke-9, dibuat oleh Roro Jonggrang, seorang putri yang cantik',
      image: prambananPict,
      url: 'https://id.wikipedia.org/wiki/Candi_Prambanan',
    },
    {
      title: 'Candi Cangkuang',
      desc: 'Candi Cangkuang pertama kali sudah terdengar oleh Vorderman, ia menyatakan bahwa di Desa Cangkuang terdapat peninggalan patung Dewa Siwa',
      image: cangkuangPict,
      url: 'https://id.wikipedia.org/wiki/Candi_Cangkuang'
    },
    {
      title: 'Candi Borobudur',
      desc: 'Candi Borobudur atau kadang-kadang disebut “Barabudur” adalah candi Buddha Mahayana yang berlokasi di dekat kota Muntilan di Pulau Jawa di Indonesia',
      image: borobudurPict,
      url: 'https://id.wikipedia.org/wiki/Borobudur',
    },
    {
      title: 'Candi Prambanan',
      desc: 'Candi Prambanan adalah candi Hindu terbesar di Yogyakarta, menjulang setinggi 47 meter dengan ornamen yang mengagumkan. Dibangun pada abad ke-9, dibuat oleh Roro Jonggrang, seorang putri yang cantik',
      image: prambananPict,
      url: 'https://id.wikipedia.org/wiki/Candi_Prambanan',
    },
    {
      title: 'Candi Cangkuang',
      desc: 'Candi Cangkuang pertama kali sudah terdengar oleh Vorderman, ia menyatakan bahwa di Desa Cangkuang terdapat peninggalan patung Dewa Siwa',
      image: cangkuangPict,
      url: 'https://id.wikipedia.org/wiki/Candi_Cangkuang'
    },
    {
      title: 'Candi Borobudur',
      desc: 'Candi Borobudur atau kadang-kadang disebut “Barabudur” adalah candi Buddha Mahayana yang berlokasi di dekat kota Muntilan di Pulau Jawa di Indonesia',
      image: borobudurPict,
      url: 'https://id.wikipedia.org/wiki/Borobudur',
    },
    {
      title: 'Candi Prambanan',
      desc: 'Candi Prambanan adalah candi Hindu terbesar di Yogyakarta, menjulang setinggi 47 meter dengan ornamen yang mengagumkan. Dibangun pada abad ke-9, dibuat oleh Roro Jonggrang, seorang putri yang cantik',
      image: prambananPict,
      url: 'https://id.wikipedia.org/wiki/Candi_Prambanan',
    },
    {
      title: 'Candi Cangkuang',
      desc: 'Candi Cangkuang pertama kali sudah terdengar oleh Vorderman, ia menyatakan bahwa di Desa Cangkuang terdapat peninggalan patung Dewa Siwa',
      image: cangkuangPict,
      url: 'https://id.wikipedia.org/wiki/Candi_Cangkuang'
    },
  ]


  return (
    <>
      <nav className='flex items-center gap-4 bg-gray-800 fixed top-0 w-screen z-10 p-2 left-0 justify-center'>
        <Link to="/" className='text-white hover:text-white'>
          <button>Home</button>
        </Link>
        <Link to="/dashboard" className='text-white hover:text-white'>
          <button>Dashboard</button>
        </Link>
        {/* <Link to="/dashboard" className='text-white hover:text-white'>
        <button>About</button>
        </Link> */}
      </nav>
      <br />
      <div>
        <h1 className=''>Candi to Visits</h1>
        <h2>Click to see more details</h2>
        <div id="app" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
          {cards.map((cardd, index) => (
            <Card key={index} {...cardd} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
