import styled from 'styled-components';

export const LeftSection = styled.div`
width: 100%;


@media ${(props) => props.theme.breakpoints.sm} {
  width: 80%;
  display: flex;
  flex-direction: column;

  margin: auto;
}
@media ${(props) => props.theme.breakpoints.md} {
  width: 100%;
  display: flex;
  flex-direction: column;

  margin: auto;
}
`;

export const HeadShot = styled.img`
  max-width: 1000px;
  border-radius: 5%;
  margin: 4rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
  
    margin: auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
  
    margin: auto;
  }
`;