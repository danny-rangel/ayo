import React, { useState, useEffect } from 'react';
import { createGlobalStyle, ThemeProvider, css } from "styled-components";
import styled from 'styled-components';
import { reset, themes } from 'react95';
import { db, firebase } from './firebase'; 

import ChatWindow from './ChatWindow';
import BuddyList from './BuddyList';

const ResetStyles = createGlobalStyle`
  ${reset}
`;

const size = {
  small: 400,
  medium: 900,
  large: 1140
}

const media = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
      @media (max-width: ${size[label]}px) {
          ${css(...args)}
      }
  `
  return acc;
}, {});

const AppDiv = styled.div`
  height: 100vh;
  background-Color: teal;
  width: 100%;

  ${media.medium`
    height: 100%;
    `} 
`;

const MainDiv = styled.div`
  padding: 5rem;
  display: grid;
  grid-template-columns: auto 300px;
  grid-gap: 40px;
  justify-items: center;
  margin-bottom: 40px;

  ${media.medium`
      grid-template-columns: 1fr;
      grid-gap: 40px;
      padding: 10px;
      width: 95%;
    `} 
`;



const App = () => {

  const [admin, setAdmin] = useState(null);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        let colors = ['red', 'green', 'blue', 'orange', 'gold', 'deeppink', 'aqua'];
        let chosenOne = colors[Math.floor(Math.random() * colors.length)];
        const user = {
          displayName: firebaseUser.displayName,
          uid: firebaseUser.uid,
          color: chosenOne
        }
        setAdmin(user);
        db.collection('users').doc(user.uid).set(user, { merge: true })
      } else {
        setAdmin(null);
      }
    });
  }, [])

  useEffect(() => {
    return db.collection('users').onSnapshot(snapshot => {
      const documents = [];
      snapshot.forEach(doc => {
        documents.push({
          ...doc.data(),
          id: doc.id
        })
      });
      setUsers(documents);
    });
  }, [])

  const handleLogOut = () => {
    firebase.auth().signOut();
  }


  const handleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch(error) {
      setError(error);
    }
    
  }

    return admin ? (
      <AppDiv >
        <ResetStyles />
        <ThemeProvider theme={themes.default}>
          <MainDiv>
            <ChatWindow admin={admin} handleLogOut={handleLogOut} />
            <BuddyList admin={admin} users={users} />
          </MainDiv>
        </ThemeProvider>
      </AppDiv> ) 
      : 
      (
        <div>
          <h1>Ayo</h1>
          <button onClick={handleSignIn} >Sign in with Google</button>
          {error && (
            <div>
              <p>Sorry, there was a problem logging you in.</p>
              <i>{error.message}</i>
              <p>Please try again.</p>
            </div>
          )}
        </div>
      )
    
}

export default App;
