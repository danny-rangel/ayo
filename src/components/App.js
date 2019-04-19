import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import styled from 'styled-components';
import { reset, themes } from 'react95';
import ChatWindow from './ChatWindow';
import BuddyList from './BuddyList';


const ResetStyles = createGlobalStyle`
  ${reset}
`;

const MainDiv = styled.div`
  padding: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
`;

class App extends Component {
  render() {
    return (
      <div style={{height: '100vh', backgroundColor: 'teal', width: '100%'}}>
        <ResetStyles />
        <ThemeProvider theme={themes.default}>
          <MainDiv>
            <ChatWindow />
            <BuddyList />
          </MainDiv>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
