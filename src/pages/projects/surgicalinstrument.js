import React from 'react'
import { Layout } from '@/layout/Layout'
import { Balancer } from 'react-wrap-balancer'
import { ProjectLayout } from '@/layout/ProjectLayout'
import { ProjectSection, ImageContainer, ProjectText, ProjectSectionTitle, SectionBullets, BoldText } from '@/styles/GlobalComponents'

const SurgicalInstrument = () => {
  return (
    <Layout>
      <ProjectLayout projectSlug='surgicalinstrument'>
        <ProjectSection>
          <ImageContainer src="/images/dpsproject.jpg" alt="Surgical Instrument"/>
          <Balancer>
          <ProjectSectionTitle>Overview</ProjectSectionTitle>
            <ProjectText>
            I was a Product Development co-op at DePuy Synthes during my second year at Northeastern University from January to July.* During my time
            there I helped out with two teams mainly: one relating to wrist fixation and the other for general small bones in the body. Projects included
            designing and optimizing instruments, leading mechanical testing on parts, and independent leadership roles.
            <br /> <br />
            *Note: due to the nature of the work, some details are classified.
            </ProjectText>
          <ProjectSectionTitle>Design Work</ProjectSectionTitle>
            <ProjectText>
              During my Product Development co-op at DePuy Synthes, I was presented with a unique challenge. The company lacked instruments on the
              market for certain essential surgical techniques used by surgeons. I took on the responsibility of designing instruments
              that would facilitate the application of these techniques totally from scratch. This comprehensive task involved not only the design process itself
              but also encompassed <BoldText>researching the techniques, creating prototypes, and conducting tests in cadaver labs.</BoldText>
              <br /> <br />
              To ensure the success of the project, I engaged in multiple iterations and collaborated closely with a team of Senior Engineers, 
              Global Marketing professionals, and Supply Chain experts. This collaborative effort was crucial in ensuring that my prototypes 
              were not only <BoldText> mechanically robust but also aligned with customer needs and feasible for manufacturing. </BoldText>
              <br />
              <ImageContainer src="/images/dps_surgeon.jpg" alt="Lab"/>
              <br />
              This big of a project presented an opportunity for significant personal growth and learning. Here are some key aspects I delved into:
              <SectionBullets>
              <br />
                • <BoldText>Universal Application: </BoldText> I ensured that the instruments I designed would be universally applicable by 
                utilizing digital analysis on thousands of bone models. <br />
                • <BoldText>Design for Manufacturability: </BoldText> Collaborating with fellow team members, I created complex designs that were not
                only innovative, but also manufacturable. <br />
                • <BoldText>Strength Assurance: </BoldText> Employing both physical testing and digital analysis on ANSYS softwsare, I meticulously
                verified that the instruments would retain their strength even after hundreds of uses. <br />
                • <BoldText>Material Selection: </BoldText> Recognizing the need for enhanced efficiency in material selection, I compiled and presented an 
                extensive catalog encompassing a wide array of 3D printed and machined materials to hundreds of employees wordwide. <br />

              </SectionBullets>
              <br />
              The culmination of these efforts was marked by engagements with surgeons. This offered a firsthand experience of the impact my designs had 
              on their practice, and was very encouraging when they were met with <BoldText>positive feedback!</BoldText>
              <br /> <br />

              This project encapsulated a compelling narrative of innovation, collaboration, and tangible impact. <BoldText>It underscores the power of enginering to
              bridge gaps, elevate medical practices, and contribute to the realm of surgical precision.</BoldText>
            </ProjectText>

            <ProjectSectionTitle>Mechanical Testing</ProjectSectionTitle>
              <ProjectText>
                In the medical device industry, every device introduced to the market undergoes stringent testing and safety assessments. I played
                a crucial role in conducting essential mechanical testing for a variety of devices. This process aimed to ensure the high 
                quality of our products, accelerate their market launch, and uphold the safety standards of existing devices.
                <br /> <br />
                My responsibilities encompassed producing comprehensive and meticulously regulated test reports, performing statistical 
                analyses on outcomes, and overseeing the design and rapid prototyping of more than 20 test fixtures. The following are a few projects:
                <SectionBullets>
                <br />
                  • <BoldText>Tolerance Analysis: </BoldText> Ensured that parts under both least material condition and most material condition
                   adhered to safety requirements. <br />
                  • <BoldText>Mechanical Strength: </BoldText> Conducted detailed analyses and comprehensive reports on project components, 
                  comparing them to existing products to verify their superior strength. <br />
                  • <BoldText>Test Protocol Development: </BoldText> Assisted in creating comprehensive test protocols and procedures, including fixture design 
                  and instrumentation setup, to ensure accurate and reliable mechanical testing of medical devices. <br />
                </SectionBullets>
                <br />

                With an unwavering commitment to patient safety and a strong dedication to pushing the boundaries of innovation in the market, I 
                contributed to a reduction in Time to Market, ultimately <BoldText> benefiting both patients and the industry as a whole.</BoldText>
                <ImageContainer src="/images/dpsmechanicaltesting.jpg" alt="Lab"/>
              </ProjectText>

              <ProjectSectionTitle>Independent Ventures</ProjectSectionTitle>
              <ProjectText>
              As a co-op, I wanted to make the most out of my short time there, so I put on various hats. 

              Recognizing the necessity for effective coordination among interns and co-op participants at my location, I took the initiative to 
              serve as the <BoldText>President of the Intern and Co-Op Association.</BoldText> My responsibilities encompassed overseeing the onboarding 
              and training of new hires, as well as organizing events. This ranged from conducting insightful tours of different 
              facilities to arranging visits to other Johnson & Johnson operating companies, thereby providing us with a comprehensive understanding of the 
              company and a multifaceted glimpse into the realm of engineering. 
              <br /> <br />
              Furthermore, fueled by my interest for computer programming, I sought active engagement in the <BoldText>development and oversight of an internal 
              website utilized by thousands of employees across the world.</BoldText> I assumed responsibility for swiftly implementing requested enhancements, diligently upholding
              maintenance, and rigorously conducting bug testing.
              </ProjectText>
          </Balancer>
        </ProjectSection>
      </ProjectLayout>
    </Layout>
  )
}

export default SurgicalInstrument