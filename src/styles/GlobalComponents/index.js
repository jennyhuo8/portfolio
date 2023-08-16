import styled from 'styled-components'

export const Section = styled.section`
  display: ${(props) => (props.grid ? 'grid' : 'flex')};
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  padding: ${(props) => (props.nopadding ? '0' : '32px 48px 0')};
  margin: 0 auto 3rem;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  align-items: ${(props) => (props.grid ? 'center' : 'flex-start')};
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

export const SectionTitle = styled.p`
  font-weight: 1000;
  font-size: ${(props) => props.main ? '65px' : '56px'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
  color: #000000;
  text-align: center;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};
  letter-spacing: 2rem;
  margin: 2rem 0;

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`

export const SectionText = styled.p`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 20px;
  color: black;
  text-align: center;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 20px;
  }
`;

export const SectionBullets = styled.p`
  padding-left: 50px;
`

export const BoldText = styled.p`
  font-weight: 900;
  display: inline;
`


export const ImageContainer = styled.img`
  width: 100%;
  border-radius: 10px;
  margin: 5rem auto 2rem;
`

export const ProjectSection = styled.div`
  flex-direction: column;
  width: 80%;
  text-align: center;
  margin: auto;
  margin-bottom: 40px;
  justify-content: center;

`

export const ProjectSectionTitle = styled.p`
  width: 70%;
  margin: 3rem auto;
  font-size: 35px;
  line-height: 40px;
  font-weight: 500;
  padding-bottom: 20px;
  color: black;
  text-align: center;
`

export const ProjectText = styled.div`
  font-size: 20px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 20px;
  color: black;
  text-align: left;

  
`



