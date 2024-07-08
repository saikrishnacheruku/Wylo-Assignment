export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const SET_EDIT_POST = 'SET_EDIT_POST';
export const CLEAR_EDIT_POST = 'CLEAR_EDIT_POST';

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

export const updatePost = (post) => ({
  type: UPDATE_POST,
  payload: post,
});

export const setEditPost = (postId) => ({
  type: SET_EDIT_POST,
  payload: postId,
});

export const clearEditPost = () => ({
  type: CLEAR_EDIT_POST,
});


