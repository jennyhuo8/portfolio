import Link from 'next/link';

import { AiOutlineHome, AiOutlineSmile, AiOutlineReconciliation, AiOutlineFileText } from 'react-icons/ai';

import { Container, Div2, NavLink, } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div2>
    <li>
        <Link href="/">
          <NavLink> <AiOutlineHome size="3rem"/> Home</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/projects">
          <NavLink> <AiOutlineReconciliation size="3rem"/> Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <NavLink> <AiOutlineSmile size="3rem"/>About Me</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <NavLink> <AiOutlineFileText size="3rem"/> Resume</NavLink>
        </Link>
      </li>        
    </Div2>
    </Container>
);

export default Header;
