export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const CHANGE_TITLE_CARD = 'CHANGE_TITLE_CARD';
export const ADD_DESCRIPTIONS = 'ADD_DESCRIPTIONS';


export const addCard = (idCard, newCard) => ({
  type: ADD_CARD,
  idCard,
  newCard,
  id: Date.now(),
  description: ''
});

export const deleteCard = (idCard, nameColumn) => ({
  type: DELETE_CARD,
  idCard,
  nameColumn
});

export const changeTitleCard = (idCard, nameColumn, textTitleCard) => ({
  type: CHANGE_TITLE_CARD,
  idCard,
  nameColumn,
  textTitleCard
});

export const addDescriptions = (idCard, nameColumn, text) => ({
  type: ADD_DESCRIPTIONS,
  idCard,
  nameColumn,
  text
});

const initialstate = {
  todo: [
    {
      id: 4,
      title: 'Buy milk',
      description: '2 Gallons of milk'
    },
    {
      id: 5,
      title: 'Buy brod',
      description: '2 bar Brod'
    }
  ],
  inProgress: [
    {
      id: 6,
      title: 'Clean House',
      description: 'Soap wash and polish floor'
    }
  ],
  test: [
    {
      id: 7,
      title: 'Practice Meditation',
      description: 'Use Headspace app'
    }
  ],
  done: [{}],
};

export default function cards (state = initialstate, action) {
  switch (action.type) {
  case ADD_CARD: {
    const siries = action.idCard;
    const card = {
      id: action.id,
      title: action.newCard,
      description: action.description
    };
    return {
      ...state,
      [siries]: state[siries].concat(card)
    };
  }

  case DELETE_CARD: {
    const columnName = action.nameColumn;
    return {
      ...state,
      [columnName]: state[columnName].filter(
        note => note.id !== action.idCard
      )
    };
  }

  case CHANGE_TITLE_CARD: {
    const nameColumn = action.nameColumn;
    const newTitle = state[nameColumn].map(x => {
      if (x.id === action.idCard) {
        x.title = action.textTitleCard;
      }
      return x;
    });
    return { ...state, [nameColumn]: newTitle };
  }

  case ADD_DESCRIPTIONS: {
    const nameCol = action.nameColumn;
    const newDesc = state[nameCol].map(data => {
      if (data.id === action.idCard) {
        data.description = action.text;
      }
      return data;
    });
    return { ...state, [nameCol]: newDesc };
  }
  
  default:
    return state;
  }
}
