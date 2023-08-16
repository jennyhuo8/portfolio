import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
`;

export const ProjectHeader = styled.div`
  width: 80%;
  margin: auto;
  padding: 1rem 2rem;
  background-color: #000000;
  border-radius: 10px;
  text-align: center;
`;

export const ProjectTitle = styled.p`
  font-weight: 800;
  font-size: 45px;
  width: 100%;
  color: #ffffff;
  text-align: center;
  margin: 1rem 0;
`;

export const ProjectDesc = styled.p`
  font-weight: 800;
  font-size: 20px;
  width: 100%;
  color: #ffffff;
  text-align: center;
  margin: 1rem 0;
`;

export const ProjectSub = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  color: #ffffff;
  margin: 1rem;
  justify-content: center;

  @media ${props => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const ProjectSubText = styled.p`
  font-weight: 800;
  font-size: 20px;
  color: #ffffff;
`;

export const ProjectTags = styled.div`
  color: #000000;
  font-weight: 800;
  font-size: 2rem;
  padding: 5px 2rem;
  background: #ffffff;
  border-radius: 15px;
  border: solid;
  width: fit-content;
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 5rem 0;
`