import styled from 'styled-components';

export const ProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Img = styled.img`
  width: 100%;
  height: 330px;
`

export const GridContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const BlogCard = styled.div`
  text-align: center;
  width: 550px;
  margin: 4rem;
  border: 2px solid #000000;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    border: 5px solid #ff8fc6;
    transform: translate(10px, -20px);
    outline: #ff8fc6;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  color: #000000;
  margin-top: 3rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #000000;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #000000;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.div`
  width: 100%;
  padding: 0 50px;
  color: #000000;
  font-size: 2rem;
  line-height: 24px;
  text-align: justify;
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #000000;
font-size: 1.5rem;
`