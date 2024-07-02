import styled from 'styled-components'

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 3rem;
  max-width: 100%;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  align-items: center;
  justify-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? '0' : '16px 16px 0')};
    width: calc(100vw - 32px);
    flex-direction: column;
}
`

export const AboutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 3rem;
`;

export const AboutText = styled.p`
  font-size: 18px;
  line-height: 40px;
  font-weight: 300;
  margin-bottom: 3rem;
  color: black;
  text-align: left;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
  }
`;

export const JennyImage = styled.img`
  max-width: 400px;
  border: solid 3px;
  color: #000000;
  margin: 1rem 3rem;
  float: right;
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 0;
    margin: 0;
    border: initial;
  }
`;

export const CheckResume = styled.p`
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  text-align: center;
  color: #000000
`