import React from 'react'
import About from '@/components/About/About'
import Resume from '@/components/ResumeImg/ResumeImg'
import { Layout } from '@/layout/Layout'

const about = () => {
  return (
    <Layout>
      <About />
      <Resume />
    </Layout>
  )
}

export default about