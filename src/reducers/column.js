export const SAVE_TITLE = 'SAVE_TITLE';

export const saveTitle = (idCard, title) => ({
  type: SAVE_TITLE,
  idCard,
  title,
});

const initialstate = [
  {
    id: 'todo',
    name: 'TODO',
  },
  {
    id: 'inProgress',
    name: 'In Progress',
  },
  {
    id: 'test',
    name: 'Test',
  },
  {
    id: 'done',
    name: 'Done',
  },
];

export default function columnNames(state = initialstate, action) {
  switch (action.type) {
  case SAVE_TITLE: {
    const newNameColumn = state.map((x) => {
      if (x.id === action.idCard) {
        x.name = action.title;
      }
      return x;
    });
    return [...newNameColumn];
  }
  default:
    return state;
  }
}

