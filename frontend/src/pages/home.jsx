import React from 'react'
import hero from '../components/hero'
import latestCollection from '../context/latestcollection'
import BestSeller from '../components/bestseller'
import ourpolicy from '../components/ourpolicy'
import NewsletterBox from '../components/NewsletterBox'
i
const home = () => {
  return (
    <div>
      <hero />
      <latestcollection/>
        <Bestseller/>
        <ourpolicy/>
        <NewsletterBox/>
    </div>
  )
}

export default home

