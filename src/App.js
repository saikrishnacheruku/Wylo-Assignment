import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Container, Typography } from '@mui/material';
import store from './redux/store';
import PostsDisplay from './components/PostsDisplay';
import CreatePost from './components/CreatePost';

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router>
        <Container>
          <Typography variant="h2" align="center" gutterBottom>
            Wylo Posts
          </Typography>
          <Routes>
            <Route path="/" element={<PostsDisplay />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/edit-post" element={<CreatePost />} />
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
};

export default App;



