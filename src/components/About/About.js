import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { AboutContainer, AboutText, JennyImage, CheckResume } from './AboutStyles';

const About = () => {
  return (
    <Section id="about">
      <SectionTitle>ABOUT ME</SectionTitle>
      <AboutContainer>
        <AboutText>
          Hi, I'm Jenny! I go to Northeastern University and I'm majoring in Mechanical Engineering with a minor in
          Computer Science. In my spare time, I like to cosplay, paint, and print random things using my 3D printer!
          <br /> <br />
          When I was a kid, instead of going to the beach on vacation, my parents would take me to science museums. 
          Of course, not to make my parents seem like sticks in the mud who would force me to go on educational trips
          when I just wanted to play in the sand, but on the contrary it was ME that wanted to go to the California 
          Science Center rather than Disneyland. I was so amazed at how we can travel thousands of miles in outer space
          in a hunk of metal by lighting liquid on fire in a space ship, or how we can stick someone in a huge magnet 
          and see inside their freaking brain with an MRI, and I mean, who would've thought of using the LITERAL SUN 
          so you can watch TV in your house with a solar panel? Finding out that I could harness my own creativity to 
          solve problems in the world is what drove me to engineering in the first place. Now, I hope to continue 
          exploring the world of engineering and be able to contribute to future advances in the world that my inner 
          child would be amazed by.
        </AboutText>
        <JennyImage src="/images/aboutme.jpg"/>
      </AboutContainer>
      <CheckResume>If you're interested, you can check out my resume below!</CheckResume>
    </Section>
  );
};

export default About;
