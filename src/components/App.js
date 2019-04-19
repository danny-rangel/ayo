import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes } from 'react95';
import ChatWindow from './ChatWindow';


const ResetStyles = createGlobalStyle`
  ${reset}
`;

class App extends Component {
  render() {
    return (
      <div style={{height: '100vh', backgroundColor: 'teal', width: '100%'}}>
        <ResetStyles />
        <ThemeProvider theme={themes.default}>
          <div style={{
            padding: '5rem',
            background: 'teal'
          }}>
          <ChatWindow />
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
