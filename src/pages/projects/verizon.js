import React from 'react'
import { Layout } from '@/layout/Layout'
import { Balancer } from 'react-wrap-balancer'
import { ProjectLayout } from '@/layout/ProjectLayout'
import { ProjectSection, ImageContainer, ProjectText, ProjectSectionTitle, SectionBullets, BoldText } from '@/styles/GlobalComponents'

const Verizon = () => {
    return (
        <Layout>
            <ProjectLayout projectSlug='verizon'>
                <ProjectSection>
                    <ImageContainer src="/images/verizonheader.jpg" alt="Device Testing"/>
                    <Balancer>
                        <ProjectSectionTitle>Overview</ProjectSectionTitle>
                        <ProjectText>
                            I was a 5G Engineering co-op at Verizon! During my time there, I was on the device testing team, where we focused
                            on testing devices such as smartphones or Wi-Fi routers to ensure performance and also to make sure they are safe for the Verizon
                            network and won't cause overloads. In addition to my primary responsibilities in device testing, I gained valuable experience
                            in managing the lab network, establishing redundancy across all the lab, and maintaining the lab 3D printer, overseeing operations
                            and creating test fixtures. This experience allowed me to explore both device testing and lab management, deepening my understanding
                            of the 5G technology landscape.
                        </ProjectText>

                        <ProjectSectionTitle>Device Testing</ProjectSectionTitle>
                        <ProjectText>
                        During my co-op at Verizon, I was actively involved in testing both the capabilities and performance of devices. I tested 7 flagship smartphones
                        and fixed wireless routers running pre-commercial software, quickly gaining a deep understanding of the wireless industry’s concepts and terminology. 
                        Despite starting with limited knowledge, I successfully executed numerous tests and presented detailed analyses to management at the director level.
                            <br /> <br />
                            Working in an ISO, CTIA, and GCF certified lab, I became proficient in the testing protocols and standards. I utilized advanced testing platforms 
                            to assess device capabilities and radio frequency performance, uncovering 3 critical device failures before they could impact customers or the Verizon 
                            brand. Additionally, I collaborated with 3rd party vendors to provide feedback on testing software and conducted regular quality assurance on development
                            platforms, which improved test accuracy and reduced test time by over 50%.
                            <ImageContainer src="/images/5glab.png"/>
                        </ProjectText>

                        <ProjectSectionTitle>Networking</ProjectSectionTitle>
                        <ProjectText>
                        In any organization, the network infrastructure is a crucial but often overlooked component that ensures everything functions smoothly. 
                        During my time at Verizon, I gained valuable experience in maintaining the lab network used daily by over 70 employees.
                            <br /> <br />
                            A major project I undertook was building a redundant lab network to enhance reliability. Initially, the lab network lacked redundancy,
                            meaning a failure in one of the core switches could disrupt internet access for around 90% of the lab's shield rooms. I reconfigured over
                            200 switches to establish a redundant network, ensuring continuous connectivity. This project required me to trace and document all network
                            cables, as there was no existing documentation. I also created comprehensive documentation for future maintenance and upgrades, laying the
                            groundwork for improved network management. 
                            <ImageContainer src="/images/itnetworking.jpg"/>
                        </ProjectText>

                        <ProjectSectionTitle>3D Printing</ProjectSectionTitle>
                        <ProjectText>
                        When I started my co-op at Verizon, I eagerly took on the challenge of revitalizing a long-unused 3D printer in the lab. 
                        I began by creating test fixtures that addressed specific lab needs and enhanced our testing capabilities.
                            <br /> <br />
                            One significant project involved designing and 3D printing new holders for radiofrequency performance testing of smartphones. 
                            The original holders caused interference and skewed test results due to their design, which obstructed the phone's antennae. 
                            I developed new holders with a 20% infill to minimize material interference and designed them to be adjustable for various phone sizes. 
                            This solution allowed the lab to create its own test fixtures in-house, saving money and increasing flexibility compared to relying on 
                            third-party sources. The new holders were tested against the old ones and demonstrated superior performance, leading to their adoption for future tests.
                            <ImageContainer src="/images/verizonrfota.jpg"/>

                            In addition to this main project, I took on various side projects to support the lab’s operations. I designed and created phone holders that
                            mounted devices against the wall, improving accessibility for testers and boosting productivity. I also crafted a Verizon-themed bagel cutter which boosted team morale :)
                            <ImageContainer src="/images/verizon3dprint.jpg"/>

                        </ProjectText>
                    </Balancer>
                </ProjectSection>
            </ProjectLayout>
        </Layout>
    )


}

export default Verizon