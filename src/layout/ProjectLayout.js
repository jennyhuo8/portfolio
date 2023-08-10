import React from 'react';
import { Container, ProjectDesc, ProjectHeader, ProjectTitle, ProjectSub, ProjectSubText, ProjectTags, SubContainer } from './LayoutStyles';
import { projects } from '../constants/constants';
import { AiOutlineCalendar, AiOutlineTags } from 'react-icons/ai'

export const ProjectLayout = ({projectSlug, children}) => {
  const project = projects.find((p) => p.slug === projectSlug);

  return (
    <Container>
      <ProjectHeader>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDesc>{project.short_description}</ProjectDesc>
        <ProjectSub>
          <SubContainer>
            <AiOutlineCalendar size="3rem"/>
            <ProjectSubText>{project.date}</ProjectSubText>
          </SubContainer>

          <SubContainer>
            <AiOutlineTags size="3rem" />
            {project.tags.map((tag, index) => (
              <ProjectTags key={index}>{tag}</ProjectTags>
            ))}
          </SubContainer>
        </ProjectSub>
      </ProjectHeader>

      <main>{children}</main> 
    </Container>
  );
};
