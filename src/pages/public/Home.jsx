import React from 'react'
import Navbar from '../../components/common/Navbar'
import HeroSection from '../../components/home/HeroSection'
import CategoryList from '../../components/home/CategoryList'
import FeaturedProducts from '../../components/home/FeaturedProducts'
import Footer from '../../components/common/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoryList />
      <FeaturedProducts />
      <Footer />
    </>
  )
}
