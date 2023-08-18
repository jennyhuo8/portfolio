import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 1rem;
  }
`;

export const Img = styled.img`
  width: 20%;
`

export const Div2 = styled.div`
  grid-area: 1 / 1 / 8 / 8;
  justify-content: space-between;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 9;
    margin: 2rem 0;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center; 
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center; 
  margin: 3rem;
`;

export const LogoText = styled.p`
  margin-left: 10px;
  font-weight: bold;
  color: #000000;
  font-size: 4rem;
`;

export const LinkItem = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  margin-left: 50px;
  font-size: 2rem;
`;