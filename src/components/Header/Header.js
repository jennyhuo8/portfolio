import Link from 'next/link';

import { AiOutlineHome, AiOutlineSmile, AiOutlineReconciliation, AiOutlineFileText } from 'react-icons/ai';

import { Container, Div2, Img, LogoContainer, LogoText, LinksContainer, LinkItem } from './HeaderStyles';

const Header = () => {
  return (
    <Container>
      <Div2>
        <LogoContainer>
          <Img src="/images/rhs_logo.png" />
          <LogoText>
            <ul>
              <li>ROE</li>
              <li>HANDYMAN</li>
              <li>SERVICES</li>
            </ul></LogoText>
        </LogoContainer>
        <LinksContainer>
          <LinkItem href="/services">SERVICES</LinkItem>
          <LinkItem href="/pictures">PICTURES</LinkItem>
          <LinkItem href="/about">ABOUT</LinkItem>
        </LinksContainer>
      </Div2>
    </Container>
  );
};

export default Header;
