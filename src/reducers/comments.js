export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const CHANGE_COMMENT = 'CHANGE_COMMENT';

export const addComment = (idCard, text) => ({
  type: ADD_COMMENT,
  idCard,
  text,
  id: Date.now()
});
  
export const deleteComment = idComment => ({
  type: DELETE_COMMENT,
  idComment
});
  
export const cangeComment = (idComment, textComment) => ({
  type: CHANGE_COMMENT,
  idComment,
  textComment
});

const initialstate = [
  {
    idCard: 4,
    id: 8,
    comment: 'Well Well Well'
  },
  {
    idCard: 7,
    id: 9,
    comment: 'Very good!'
  }
];

export default function comments (state = initialstate, action) {
  switch (action.type) {
  case ADD_COMMENT: {
    const comment = {
      idCard: action.idCard,
      id: action.id,
      comment: action.text
    };
    return [
      ...state, comment
    ];
  }
    
  case DELETE_COMMENT:{
    const index = state.findIndex(x => x.id === action.idComment);
    return [
      ...state.slice(0, index),
      ...state.slice(index + 1)
    ];
  }
  
  case CHANGE_COMMENT: {
    const newComment = state.map(x => {
      if (x.id === action.idComment) {
        x.comment = action.textComment;
      }
      return x;
    });
    return [...newComment];
  }

  default:
    return state;
  }
}