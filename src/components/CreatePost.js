// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { TextField, Button, Container, Typography, Box } from '@mui/material';
// import { addPost, updatePost, clearEditPost } from '../redux/actions';

// const CreatePost = () => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const editPost = useSelector(state => state.editPost);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (editPost) {
//       setTitle(editPost.title);
//       setContent(editPost.content);
//     }
//   }, [editPost]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editPost) {
//       dispatch(updatePost({ ...editPost, title, content }));
//     } else {
//       dispatch(addPost({ title, content }));
//     }
//     dispatch(clearEditPost());
//     navigate('/');
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
//         <Typography variant="h4" gutterBottom>
//           {editPost ? 'Edit Post' : 'Create Post'}
//         </Typography>
//         <TextField
//           fullWidth
//           label="Title"
//           variant="outlined"
//           margin="normal"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//         <TextField
//           fullWidth
//           label="Content"
//           variant="outlined"
//           margin="normal"
//           multiline
//           rows={4}
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           required
//         />
//         <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
//           {editPost ? 'Update Post' : 'Create Post'}
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default CreatePost;



import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box, Paper } from '@mui/material';
import { addPost, updatePost, clearEditPost } from '../redux/actions';
import './CreatePost.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const editPost = useSelector(state => state.editPost);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (editPost) {
      setTitle(editPost.title);
      setContent(editPost.content);
    }
  }, [editPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editPost) {
      dispatch(updatePost({ ...editPost, title, content }));
    } else {
      dispatch(addPost({ title, content }));
    }
    dispatch(clearEditPost());
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} className="create-post-container">
        <Box component="form" onSubmit={handleSubmit} className="create-post-form">
          <Typography variant="h4" className="create-post-title">
            {editPost ? 'Edit Post' : 'Create Post'}
          </Typography>
          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="create-post-field"
          />
          <TextField
            fullWidth
            label="Content"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="create-post-field"
          />
          <Button type="submit" variant="contained" color="primary" className="create-post-button">
            {editPost ? 'Update Post' : 'Create Post'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CreatePost;
