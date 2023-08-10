import React from 'react'
import { Layout } from '@/layout/Layout'
import { ProjectLayout } from '@/layout/ProjectLayout'
import { Balancer } from 'react-wrap-balancer'
import { ProjectSection, ImageContainer, ProjectText, ProjectSectionTitle, BoldText } from '@/styles/GlobalComponents'

const ThreeDPrinting = () => {
  return (
    <Layout>
      <ProjectLayout projectSlug='3dprinting'>
        <ProjectSection>
          <ImageContainer src="/images/3dprintingglam.png" alt="Resin Printing"/>
          <Balancer>
          <ProjectSectionTitle>Overview</ProjectSectionTitle>
            <ProjectText>
            For my birthday, I received a <BoldText>Voxelab Proxima 6 SLA resin printer</BoldText> after being quite interested in 3D printing for a while. Seeing my printer,
            my boyfriend also got really interested in the prospect of being able to 3D print, so he purchased a <BoldText>Voxelab Aquila S2 FDM printer.</BoldText> In my free time,
            I like to model up various things to print from both our printers.
            </ProjectText>

          <ProjectSectionTitle>Chair Leg Tip</ProjectSectionTitle>
            <ProjectText>
              As I heard my mom complaining about how the 5th chair leg tip she's tried was falling off or breaking, I was eager to try to help her situation
              with my new 3D printer. 
              <ImageContainer src="/images/3dprintlegcap.jpg" alt="Resin Printing"/>

              This was my first project with my 3D printer, and from it I learned a <BoldText>lot.</BoldText>
              <br /> <br />
              I first took measurements off of our house chair feet, and then designed a couple ideas I had. From there, came modelling and prototyping. 
              I learned very quickly the trials and tribulations that come with resin printing, getting resin all over the table, my tools, inhaling probably
              too much IPA fumes, and not even getting a successful print at the end. Through time, I learned <BoldText>the process of resin SLA printing, the possibilities,
              limitations, and requirements for a successful print.</BoldText>
              <br /> <br />
              At the end, I was able to mock up and print a set of chair leg tips that my mom was very happy about:

              ****INSERT IMAGE HERE*****


            </ProjectText>

          <ProjectSectionTitle>Nintendo Switch Cartridge Holder</ProjectSectionTitle>
            <ProjectText>
              Being an avid Nintendo Switch player, I have many games for the console. This means that the cases for the games tend to pile up and create a lot of 
              clutter. To fix this, I wanted to model up a holder for just the cartridges themselves without needing the whole case. The goal going into this project
              was to create a strong, sleek looking case that could also hold a decent amount of game cartridges. I decided I wanted to model this case off of a Pokédex, 
              a device from the video game Pokémon, as an extra challenge. 
              <br /> <br />
              Going into designing the entire holder, I first needed to find the right dimensions for each cartridge slot so that it is big enough to fit the cartridge in,
              but also small enough to have a snug fit. I modelled various dimensions for the slot for printing to test them out. 

              ****INSERT PICTURE Here****

              Once finding the right dimensions, I was able to model up the entire Pokédex itself, which consisted of 2 pieces that fit together. Each side could hold 9 
              Switch games as well as 1 SD card, for storage of 18 games and 2 SD cards in total. This endeavor presented a valuable opportunity for me to <BoldText>challenge my SolidWorks
              skills while also showcasing my capability to prototype a functional solution.</BoldText>

            </ProjectText>
            </Balancer>
          </ProjectSection>
      </ProjectLayout>
    </Layout>
  )
}

export default ThreeDPrinting