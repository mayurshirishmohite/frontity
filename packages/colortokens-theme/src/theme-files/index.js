import React from "react";
import {connect,Global,css,styled} from "frontity";
import Link from "./link";
import List from "./list";
import Post from "./post";
import Page from "./page";

const Root = ({state}) => {
  const data = state.source.get(state.router.link);
    return (
      <>
      <Global 
        styles={css`
          *{
            padding:0;
            margin:0;
            box-sizing:border-box;
          }
            html,body {
              font-family:Arial;
            }
          `}
      />
      <Header isPostType={data.isPostType}>
        <HeaderContent>
          <h1>CT-Website Workshop</h1>
            <p>Current URL: {state.router.link}</p>
            <Menu>
                <Link href="/">Home</Link>
                <Link href="/page/2">Page 2</Link>
                <Link href="/lorem-ipsum/">Lorem Ipsum</Link>
            </Menu>
          </HeaderContent>
        </Header>
        <Main>
            {data.isArchive && <List/>}
            {data.isPost && <Post/>}
            {data.isPage && <Page/>}  
        </Main>
      </>
    );
  };

  export default connect(Root);
  
  const Header = styled.header`
    background-color:#eee;
    padding:10px;
    border-bottom:5px solid ${props => props.isPostType ? 'lightseagreen' : 'maroon'};
  `

  const HeaderContent = styled.div`
    max-width: 880px;
    margin: 0 auto;
    padding: 2em 1em;
  `

  const Menu = styled.nav`
   display:flex;
   flex-direction:row;
   margin-top:1em;

   & > div {
     margin-right: 1em;
   }
  `
  const Main = styled.main`
  max-width: 880px;
  margin: 0 auto;
  padding: 1em;

  img,video,iframe {
    max-width:100%;
  }
  h2{
    margin: 0.5em 0;
  }
  p{
    line-height: 1.25em;
    margin-bottom:0.75em;
  }
`