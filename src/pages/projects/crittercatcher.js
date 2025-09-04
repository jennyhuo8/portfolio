import React from 'react'
import { Layout } from '@/layout/Layout'
import { ProjectLayout } from '@/layout/ProjectLayout'
import { Balancer } from 'react-wrap-balancer'
import { ProjectSection, ImageContainer, ProjectText, ProjectSectionTitle, BoldText, SectionBullets, PageContainer } from '@/styles/GlobalComponents'

const CritterCatcher = () => {
  return (
    <Layout>
      <ProjectLayout projectSlug='crittercatcher'>
        <ProjectSection>
          <ImageContainer src="/images/crittercatcherdevice.png" alt="CritterCatcher"/>
          <Balancer>
          <ProjectSectionTitle>Overview</ProjectSectionTitle>
            <ProjectText>
            As part of my senior year curriculum at Northeastern, I participated in the <BoldText>Mechanical Engineering Capstone Program</BoldText>, 
            our equivalent of a senior design project. Capstone offers students the opportunity to integrate their academic and 
            experiential learning into a multi-semester team project with real-world applications.
            <br /> <br />
            For my Capstone project, called the <BoldText>Critter Catcher</BoldText>, I collaborated with a team of four engineering students to design and manufacture a <BoldText>humane bug catcher </BoldText> 
            capable of safely capturing flying insects. From our efforts, we earned an award for <BoldText>Best Iterative Design</BoldText> at Northeastern University’s Engineering Showcase!
            </ProjectText>

          <ProjectSectionTitle>Design & Development Process</ProjectSectionTitle>
            <ProjectText>
            The Critter Catcher was developed through an extensive iterative engineering process. Multiple rounds of testing, and prototyping were underwent to create the device
            we see today. This process included:
                <SectionBullets>
                    • <BoldText>Market Research & Problem Identification: </BoldText> Analyzing existing insect catchers and identifying gaps in usability, effectiveness, and humane treatment. <br />
                    • <BoldText>Concept Development: </BoldText> Brainstorming solutions, evaluating different capture mechanisms, and selecting a vacuum-powered design. <br />
                    • <BoldText>Prototyping & Testing: </BoldText> Creating CAD models, 3D-printed prototypes, and refining the design based on ergonomic testing and live bee trials.<br />
                    • <BoldText>Iteration & Improvement: </BoldText> Enhancing user comfort, containment security, and suction power through multiple design cycles. <br />
                </SectionBullets>

            As the <BoldText>lead of the electronic subsystem</BoldText>, my primary responsibility was developing and implementing the device’s electronics. 
            I programmed an <BoldText>Arduino Pro Mini</BoldText> to control the fan’s duty cycle, allowing for <BoldText>variable fan speed adjustment</BoldText>. 
            Additionally, I integrated key electronic components, including an on-off button and a rechargeable lithium-ion battery to enhance portability. 
            This role required expertise in <BoldText>mechanical engineering, electrical engineering, and computer science</BoldText>, as I had to ensure all hardware fit seamlessly
            within the device while maintaining functionality and ease of use.
            </ProjectText>

          <ProjectSectionTitle>Impact & Takeaways</ProjectSectionTitle>
            <ProjectText>
            The Critter Catcher has potential applications beyond consumer use, including <BoldText>beekeeping, entomological research, 
            and conservation efforts</BoldText>. Humane testing with the Northeastern Bee Society and New England Beekeeping confirmed its <BoldText>effectiveness 
            and safety for live insects</BoldText>.

            <ImageContainer src="/images/crittercatchertest.jpg" alt="Live Testing"/>
            
            Through this project, I gained valuable experience in <BoldText>mechanical design, rapid prototyping, team collaboration, 
            and user-centered design</BoldText>. This experience reinforced the importance of <BoldText>iterative problem-solving, interdisciplinary
            communication, and sustainability-focused engineering</BoldText>.
            </ProjectText>
        </Balancer>

            
          </ProjectSection>
      </ProjectLayout>
    </Layout>
  )
}

export default CritterCatcher