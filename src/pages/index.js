import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';
import GoogleButton from 'react-google-button';
import Animation from 'components/Animation';

const Index = ({ data }) => (
  <Layout>
    <Animation />
    <Box>
      <Title as="h2" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
      <Modal>
        {/* <video
          src="https://i.imgur.com/gzFqNSW.mp4"
          playsInline
          loop
          autoPlay
          muted
        /> */}
        <GoogleButton
          onClick={() => {
            console.log('Google button clicked');
          }}
        />
      </Modal>
    </Box>
    <Gallery items={data.homeJson.gallery} />
    <div style={{ height: '50vh' }} />
    <IOExample />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
