// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { Container, Grid, Button, Box, Typography } from '@mui/material';
// import PostItem from './PostItem';
// import { setEditPost } from '../redux/actions';

// const PostsDisplay = () => {
//   const posts = useSelector(state => state.posts);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleEdit = (postId) => {
//     dispatch(setEditPost(postId));
//     navigate('/edit-post');
//   };

//   return (
//     <Container>
//       <Box sx={{ mb: 4 }}>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => navigate('/create-post')}
//         >
//           Create Post
//         </Button>
//       </Box>
//       <Grid container spacing={4}>
//         {posts.map(post => (
//           <Grid item key={post.id} xs={12} sm={6} md={4}>
//             <PostItem post={post} onEdit={handleEdit} />
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default PostsDisplay;





import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Box, Grid } from '@mui/material';
import PostItem from './PostItem';
import { setEditPost } from '../redux/actions';
import './PostsDisplay.css';

const PostsDisplay = () => {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (postId) => {
    dispatch(setEditPost(postId));
    navigate('/edit-post');
  };

  return (
    <Container className="posts-display-container">
      <Box className="posts-display-create-button-container">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/create-post')}
          className="posts-display-create-button"
        >
          Create Post
        </Button>
      </Box>
      <Grid container spacing={4} className="posts-grid">
        {posts.map(post => (
          <Grid item key={post.id} xs={12} sm={6} md={4} className="posts-grid-item">
            <PostItem post={post} onEdit={handleEdit} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PostsDisplay;
