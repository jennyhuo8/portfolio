import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0;
  max-width: 100%;
  box-sizing: content-box;
  position: relative;
  text-align: center;
  margin-bottom: 40px;
`

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.main ? '65px' : '56px'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
  color: #000000;
  text-align: center;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};
  letter-spacing: 2rem;
  margin: 2rem 0;
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
`

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



