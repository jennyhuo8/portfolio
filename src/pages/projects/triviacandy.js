import React from 'react'
import { Layout } from '@/layout/Layout'
import { ProjectLayout } from '@/layout/ProjectLayout'
import { Balancer } from 'react-wrap-balancer'
import { ProjectSection, ImageContainer, ProjectText, ProjectSectionTitle, BoldText } from '@/styles/GlobalComponents'


const TriviaCandy = () => {
  return (
    <Layout>
      <ProjectLayout projectSlug='triviacandy'>
      <ProjectSection>
          <ImageContainer src="/images/triviacandyprocess.png" alt="Process"/>
          <Balancer>
          <ProjectSectionTitle>Overview</ProjectSectionTitle>
            <ProjectText>
              As part of my Cornerstone of Engineering class, I collaborated with a team of two others to develop a unique
              candy dispenser combined with a trivia game as a final project. While the core structure resembled typical candy dispensers
              found in stores, our design incorporated a digital screen and a keypad to incorporate the interactive trivia game.
              The screen presents questions, which users answer using the keypad. Upon correctly answering 8 out of 10 questions, 
              the candy dispenser rewards users with a treat!
              <br /> <br />
              This project proved to be much more complex and difficult than we initally expected. However, 
              it offered us valuable insights into the realms of engineering and project management, leaving us enriched 
              with newfound knowledge and skills.
            </ProjectText>

            <ProjectSectionTitle>Prototyping</ProjectSectionTitle>
              <ProjectText> 
                During this stage, <BoldText> I took charge as leader in the entire project. </BoldText> 
                I facilitated regular communication among team members on individual progress, effectively assigned roles to establish 
                clear a division of tasks, and took the lead on writing reports and presentations for the project's progress and outcomes.
                <br /> <br />
                My specific role in the project was <BoldText>formulating the fundamental concept, functionality, and hardware design of the device.</BoldText> In the 
                initial ideation phase, I employed a decision matrix to generate the conceptual foundation, which then led to the design of the box.
                <ImageContainer src="/images/triviacandymatrix.png" alt="Concept"/>
                I then modelled it up in SolidWorks, as seen above. I needed to create something that I knew we would be able to feasibly create 
                with the materials we had at hand, and also be able to fit all of the components we needed, such as electronics for the dispensing
                mechanism and trivia game. This was my first encounter with what I didn't know at the time was called <BoldText>"Design for Manufacturing."</BoldText>
                <br /> <br />
                Given that our chosen materials entailed laser-cut wooden planks, I incorporated notches along the edges to facilitate 
                snug interlocking and easy assembly. Additionally, I incorporated appropriately sized holes for housing the candy bowl, display screen, dispenser 
                door, and keypad. The dimensions of the box were chosen to efficiently accommodate all electronic elements while 
                maintaining a suitable size profile.
                <br /> <br />
                Once the proposed concept was approved from my teammates, I harnessed AutoCAD to draft 2D models of each individual 
                wooden piece for laser cutting. <BoldText>Precision and meticulous attention to detail were paramount, given the cost of the wood and 
                the extended lead time for the fabrication process.</BoldText>
                </ProjectText>

              <ProjectSectionTitle>Assembly</ProjectSectionTitle>
                <ProjectText>
                After parts came in, it was time to assemble all of the components together. This meant the electronics and dispensing mechanism, which 
                my teammates had worked on. This became a difficult process of neatly fitting dozens of wires together while not disrupting the rather precise 
                dispensing process. Quickly we learned the complex nature of seemingly simple mechanisms, as we struggled to troubleshoot the dispensing mechanism. 
                <br /> <br />
                From adjusting the code to give a wider angle of the servo motor, to several different servo mounts, to 3D printing various types of dispensing mechanisms, 
                we finally came to a solution. Instead of a sort of wheel that spun and then sat in a doorway (similar to candy dispensers in stores), we had to  
                <BoldText> think outside of the box</BoldText> and instead just make the door itself the dispenser. 
                <ImageContainer src="/images/triviacandydispensing.png" alt="Dispensers"/>
                This, along with a funnel in the candy bowl to facilitate the candy falling down was the solution to our troubles.
                </ProjectText>

            <ProjectSectionTitle>Results</ProjectSectionTitle>
              <ProjectText>
                Once finalized, our project worked! It was able to consistently dispense candy for users, and be a functioning and fun trivia game as well. 
                <br /> <br />
                As my first major engineering project, I was able to learn very much from my successes and mistakes. <BoldText>My leadership was able to propel our 
                team forward to fill deadlines, and create a functioning device in the end.</BoldText> In addition, much planning of the project before actual prototyping 
                was very helpful in the end, as our ideas came together in a cohesive manner. What I wish I had done better in the future was think about the dispensing 
                mechanism more, and look into various examples of this mechanism in action. The aesthetics also could have used a little work :)
                <br /> <br />
                Overall, this project was a great success and I was happy to present this at the end of the course. I had utilized much of the engineering skills 
                I had learned, such as SolidWorks, AutoCAD, and Arduino programming and wiring into this project. I had learned a great deal from the entire process, 
                and enjoyed it the whole way.
                <ImageContainer src="/images/triviacandyfinal.png" alt="Final Result!"/>

              </ProjectText>
            </Balancer>
          </ProjectSection>
      </ProjectLayout>
    </Layout>
  )
}

export default TriviaCandy