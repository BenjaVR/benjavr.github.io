import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';

import { githubButtons } from '../../mock/data';
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { isEnabled } = githubButtons;

  return (
      <footer className="footer navbar-static-bottom">
        <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
          <div className="social-links">
            {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                  <a
                      key={id}
                      href={url}
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label={name}
                  >
                    <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                  </a>
              );
            })}
          </div>
          <hr />
          <p className="footer__text">
            © {new Date().getFullYear()} - Benjamin Van Renterghem - BVR Code - +32 471 28 25 74
          </p>
          <StaticQuery
            query={graphql`
              query {
                images: allFile {
                  edges {
                    node {
                      relativePath
                      name
                      childImageSharp {
                        fixed(width: 200) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }
                  }
                }
              }
            `}
            render={(data) => {
              const image = data.images.edges.find((n) => n.node.name === 'logo');

              if (!image) return null;
              console.log(image, image.node.childImageSharp.fixed);

              const imageFixed = image.node.childImageSharp.fixed;
              return <Img className="align-content-center" style={{ width: 200, maxWidth: '90%' }} alt="logo" fixed={imageFixed} />;
            }}
          />

          {isEnabled && <GithubButtons />}
        </Container>
      </footer>
  );
};

export default Footer;
