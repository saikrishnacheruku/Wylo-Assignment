// import React from 'react';
// import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

// const PostItem = ({ post, onEdit }) => {
//   return (
//     <Card sx={{ minHeight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//       <CardContent>
//         <Typography variant="h5" component="div">
//           {post.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {post.content}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small" onClick={() => onEdit(post.id)}>
//           Edit
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default PostItem;



import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import './PostItem.css';

const PostItem = ({ post, onEdit }) => {
  return (
    <Card className="post-item-container">
      <CardContent>
        <Typography variant="h5" component="div" className="post-item-title">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="post-item-content">
          {post.content}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onEdit(post.id)}
          className="post-item-edit-button"
        >
          Edit
        </Button>
      </CardContent>
    </Card>
  );
};

export default PostItem;
