import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection, HeadShot } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
          <HeadShot src='images/headshot.png'/>
        <SectionTitle>
          JENNY HUO
        </SectionTitle>
        <SectionText>
        Aspiring Mechanical Engineer and Computer Science Enthusiast. Fueled by the excitement of blending creativity and technology to engineer a brighter future.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;