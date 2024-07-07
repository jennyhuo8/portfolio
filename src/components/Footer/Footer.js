import React from 'react';
import { useState } from 'react';
import { AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai';
import Link from 'next/link';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, MadeBy, Slogan, SocialContainer, ImageFooter, IconsContainer, LinkText} from './FooterStyles';

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
          <LinkTitle>LINKEDIN</LinkTitle>
          <Link href="https://www.linkedin.com/in/jenny-huo88/" target="_blank" rel="noopener noreferrer">
            <LinkItem>
              <SocialContainer>
                <AiOutlineLinkedin/>
              </SocialContainer>
              <LinkText>jenny-huo88</LinkText>
            </LinkItem>
          </Link>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>EMAIL</LinkTitle>
          <Link href="mailto:jenny8huo@gmail.com" target="_blank" rel="noopener noreferrer">
            <LinkItem>
              <SocialContainer>
                <AiOutlineMail/>
              </SocialContainer>
              <LinkText><span mr-5>jenny8huo@gmail.com</span></LinkText>
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
