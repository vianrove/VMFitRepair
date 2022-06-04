import React from 'react'
import Announcement from '../components/Announcement'
import { Navbar } from '../components/Navbar'
import Slider from '../components/Slider'
import Products from '../components/Products'
import Footer from '../components/Footer'
import MessageBar from '../components/MessageBar'

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <MessageBar />
      <Products />
      <Footer />
    </div>
  )
}

export default Home;