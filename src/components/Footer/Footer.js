import React from 'react';
import { useState } from 'react';
import { AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai';
import Link from 'next/link';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, MadeBy, Slogan, SocialContainer, ImageFooter, IconsContainer } from './FooterStyles';

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
          <Link href="https://www.linkedin.com/in/jenny-huo88/" target="_blank" rel="noopener noreferrer">
            <LinkItem>
              <SocialContainer>
                <AiOutlineLinkedin/>
              </SocialContainer>
                jenny-huo88
            </LinkItem>
          </Link>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <Link href="mailto:jenny8huo@gmail.com" target="_blank" rel="noopener noreferrer">
            <LinkItem>
              <SocialContainer>
                <AiOutlineMail/>
              </SocialContainer>
              <span mr-5>jenny8huo@gmail.com</span>
            </LinkItem>
          </Link>
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
