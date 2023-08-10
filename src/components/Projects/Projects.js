import React from 'react';

import { ProjectSection, BlogCard, CardInfo, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, Img } from './ProjectsStyles';
import { Section,  SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Link from 'next/link';

const Projects = () => (
  <ProjectSection id="projects">
    <SectionTitle>PROJECTS</SectionTitle>
    <SectionText>Click on each box to learn more :)</SectionText>
    <GridContainer>
      {projects.map((p, i) => {
        return (
            <BlogCard key={i} >
            <Link href={"/projects/" + p.slug} key={i}>
              <Img src={p.image} />
              <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">
                {p.description.split('\n').map((line, index) => (
                <p key={index}>{line}<br /></p>
                ))}
                </CardInfo>
              <div>
                <TitleContent>Tags</TitleContent>
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              </Link>
            </BlogCard>
        );
      })}
    </GridContainer>
  </ProjectSection>
);

export default Projects;