import React from 'react'
import Card from '../components/Card'
import Main from '../components/layout/Main'
import { API } from '../services/api'
import styled from 'styled-components';
import { down } from 'styled-breakpoints'

function Home({ posts }) {
  console.log('pos', posts)
  return (
    <Main>
      <GridContainer>
        { posts && posts.length > 0 && posts.map( post => {
            console.log(post)
            return (<Card key={post.id} itemJson={post} />)
        })}
      </GridContainer>
    </Main>
  )
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); /* see notes below */
  grid-gap: 1em;

    ${down("md")}{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100%, 1fr)); /* see notes below */
      grid-gap: 1em;
    }
`;

Home.getInitialProps = async (ctx) => {

  const responseWP = await API.get(`/audios?_fields=title,acf,slug,id,link&per_page=10&page=1`);

  if(responseWP) {
    const posts = responseWP.data;
    return { posts }
  }

  return {}
}

export default Home

