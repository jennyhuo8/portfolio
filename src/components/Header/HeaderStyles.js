import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 0 1rem;
  margin: 3rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 1rem;
  }
`;
export const HeaderBox = styled.div`
  grid-area: 3 / 1 / 3 / 8;
  display: flex;
  justify-content: space-around;
  padding: 1rem 2rem;
  border-style: double;
  border-color: #000000;
  background-color: #ffefef;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 9;
    padding: 1rem;
    margin: 2rem 0;
  }
`;

export const NavLink = styled.div`
  display: flex;
  font-size: 2rem;
  line-height: 32px;
  color: #000000;
  transition: 0.4s ease;
  align-items: center;
  padding: 5px;
  gap: 5px;

  &:hover {
    color: #ff8fc6;
    opacity: 1;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 3rem;
    font-size: 0;
`;