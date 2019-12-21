import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import Counter from 'components/counter';
import IOExample from 'components/io-example';
import { graphql } from 'gatsby';
import GoogleLogin from 'react-google-login';
import  GoogleLogout  from 'react-google-login';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
      
    </Box>
     
           <GoogleLogin
    clientId="539150265253-mhuq4ueo94s5kvbt9bjf1d64gdq0c6m7.apps.googleusercontent.com"
    render={renderProps => (
      <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Log in</button>
    )}
    buttonText="Login"
    cookiePolicy={'single_host_origin'}
  />
 
 <GoogleLogout
      clientId="539150265253-mhuq4ueo94s5kvbt9bjf1d64gdq0c6m7.apps.googleusercontent.com"
      render={renderProps => (
        <button onClick={renderProps.onClick}>Log out</button>
      )}
      
      buttonText="Logout"
      
    >
    </GoogleLogout>
    
    <Gallery items={data.homeJson.gallery} />
    <div style={{ height: '50vh' }} />
    <Counter />
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
