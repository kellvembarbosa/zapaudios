import React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import Card from '../components/Card'
import Main from '../components/layout/Main'
import { API } from '../services/api'
import styled from 'styled-components';
import { down } from 'styled-breakpoints'
import Axios from 'axios'

function Home({ posts }) {
  return (
    <Main>
      <GridContainer>
        { posts && posts.length > 0 && posts.map(post => <Card key={post.id} itemJson={post} /> )}
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

  // const response = await Axios.get('https://painel.spinui.com/api/content/zapaudios/audios/')

  const response = await API.get('/items/audios')

  if(response){
    const posts = response.data.data
    return { posts }
  }

  //console.log("response ==>", JSON.stringify())

  // if(response.status === 200 && response.data.total > 0) {
  //   const posts = response.data.items
  //   return { posts }
  // }

  // // const response = await API.get('/posts?_sort=created_at:DESC')
  // if (response.status === 200 && response.data) {
  //   const posts = response.data
  //   return { posts }
  // }

  return {}
}

export default Home

