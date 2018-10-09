export const SAVE_TITLE = "SAVE_TITLE";

export const saveTitle = (idCard, title) => ({
    type: SAVE_TITLE,
    idCard,
    title
});

const initialstate = {
    nameColumn: [
        {
            id: "todo",
            name: "TODO",

        },
        {
            id: "inProgress",
            name: "In Progress",

        },
        {
            id: "test",
            name: "Test",

        },
        {
            id: "done",
            name: "Done",

        }
    ]
};

export default function column(state = initialstate, action) {
    switch (action.type) {
        case SAVE_TITLE:
            const newNameColumn = state.nameColumn.map(x => {
                if (x.id === action.idCard) {
                    x.name = action.title;
                };
                return x;
            });
            return { ...state, nameColumn: newNameColumn };

        default:
            return state;
    }

};
