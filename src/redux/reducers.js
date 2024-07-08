import { ADD_POST, UPDATE_POST, SET_EDIT_POST, CLEAR_EDIT_POST } from './actions';

const initialState = {
  posts: [],
  editPost: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { ...action.payload, id: state.posts.length + 1 }],
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post => (post.id === action.payload.id ? action.payload : post)),
      };
    case SET_EDIT_POST:
      return {
        ...state,
        editPost: state.posts.find(post => post.id === action.payload),
      };
    case CLEAR_EDIT_POST:
      return {
        ...state,
        editPost: null,
      };
    default:
      return state;
  }
};

export default reducer;


