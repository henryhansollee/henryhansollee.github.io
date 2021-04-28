import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import media from '../utils/media';
import Github from '../images/social/github-brands.svg';
import Facebook from '../images/social/facebook-square-brands.svg';
import Instagram from '../images/social/instagram-brands.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5rem 0;

  ${media.tablet`
    flex-direction: column;
    text-align: center;
  `}
`;

const TextContainer = styled.div`
  ${media.phone`
    order: 2;
  `}
`;

const ImageContainer = styled.div`
  ${media.phone`
    order: 1;
  `}
`;

const Name = styled.h3`
  font-size: 2.4rem;
  letter-spacing: 0.1rem;
  font-weight: 800;
  margin-bottom: 1rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: 'system';
`;

const TagLine = styled.sub`
  font-weight: normal;
  font-size: 1.6rem;
  margin: 0;
  display: block;
`;

const GithubIcon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  padding: 1.5rem 1rem;
`;

const FacebookIcon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  padding: 1.5rem 1rem;
`;

const InstagramIcon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  padding: 1.5rem 1rem;
`;
const Links = styled.a`
  margin: 0.7%;
`;

const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={(data) => {
      const { author, authorTagline, social } = data.site.siteMetadata;
      return (
        <>
          <Container>
            <TextContainer>
              <Name>{author}</Name>
              <TagLine>{authorTagline}</TagLine>
              <a
                href={`https://www.github.com/${social.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon src={Github} alt="github" />
              </a>
              <a
                href={`https://www.facebook.com/${social.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon src={Facebook} alt="facebook" />
              </a>
              <a
                href={`https://www.instagram.com/${social.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon src={Instagram} alt="instagram" />
              </a>
            </TextContainer>
            <ImageContainer>
              <Image fixed={data.avatar.childImageSharp.fixed} alt={author} />
            </ImageContainer>
          </Container>
          <div>
            <Links href="/about">About</Links>
            <Links href="/toys">Toys</Links>
            <Links href="/projects">Projets</Links>
          </div>
        </>
      );
    }}
  />
);

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/icon.png/" }) {
      childImageSharp {
        fixed(width: 70, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        authorTagline
        social {
          github
          facebook
          instagram
        }
      }
    }
  }
`;

export default Bio;
