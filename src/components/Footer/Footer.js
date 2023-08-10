import React from 'react';
import { useState } from 'react';
import { AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai';

import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, MadeBy, Slogan, SocialContainer, ImageFooter } from './FooterStyles';

const Footer = () => {
  const [highlighted, setHighlighted] = useState(false);

  const handleMouseEnter = () => {
    setHighlighted(true);
  };

  const handleMouseLeave = () => {
    setHighlighted(false);
  };

  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Linkedin</LinkTitle>
            <LinkItem href="https://www.linkedin.com/in/jenny-huo88/" target="_blank" rel="noopener noreferrer">
              <SocialContainer>
                <AiOutlineLinkedin/>
              </SocialContainer>
                jenny-huo88
            </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:jenny8huo@gmail.com" target="_blank" rel="noopener noreferrer">
              <SocialContainer>
                <AiOutlineMail/>
              </SocialContainer>
              <span mr-5>jenny8huo@gmail.com</span>
            </LinkItem>
        </LinkColumn>
        <LinkColumn></LinkColumn>
        <LinkColumn>
          <MadeBy>
            made with ❤ by{" "}
            <Slogan
              highlighted={highlighted}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              jenny  
              <ImageFooter 
                src={highlighted ? '/images/footer2.png' : '/images/footer.png'}
                highlighted={highlighted}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </Slogan>
          </MadeBy>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
