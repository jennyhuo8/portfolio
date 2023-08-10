import React from 'react'
import { Layout } from '@/layout/Layout'
import { ProjectLayout } from '@/layout/ProjectLayout'
import { Balancer } from 'react-wrap-balancer'
import { ProjectSection, ImageContainer, ProjectText, ProjectSectionTitle, BoldText } from '@/styles/GlobalComponents'


const Portfolio = () => {
  return (
    <Layout>
      <ProjectLayout projectSlug='portfolio'>
      <ProjectSection>
          <ImageContainer src="/images/thiswebsitereactjs.jpg" alt="React"/>
          <Balancer>
          <ProjectSectionTitle>Overview</ProjectSectionTitle>
            <ProjectText>
            As I proceed with my engineering career, I found more and more of a need to have my own portfolio to showcase my work.
            As someone with an interest in computer programming, I desired to not just use an online website builder, but to code my own!
            I came in with little to no knowledge at all about website creation or JavaScript. With my own research and hard work, I was
            able to produce this very website you're on!
            <br /> <br />
            Since I was getting started with basically nothing, I had to learn the basics from watching online videos and then trying it myself
            (and failing... a lot). It took me weeks where I was basically working from when I woke up to when I fell asleep.
            <br /> <br />
            With my research, I had decided upon utilizing <BoldText>React for a user-friendly UI and NodeJS for fast rendering and easy pairing. </BoldText> 
            After a long and arduous process of fighting with CSS styling and forgetting imports, I'm proud to present this website. 
            <br /> <br />
            As I go on in my engineering career, I will obviously add more in my portfolio, so I view this website as a continuous project I will have. 
            So who knows, maybe the next time you visit this website will look a little different!
            </ProjectText>
            </Balancer>
          </ProjectSection>
      </ProjectLayout>
    </Layout>
  )
}

export default Portfolio