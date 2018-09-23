
export const SAVE_TITLE = "SAVE_TITLE";
export function saveTitle(idCard, title) {
    return {
        type: SAVE_TITLE,
        idCard,
        title
    }
};

const initialstate =
    [
        {
            id: "todo",
            name: "TODO"
        },
        {
            id: "inProgress",
            name: "In Progress"
        },
        {
            id: "testing",
            name: "Test"
        },
        {
            id: "done",
            name: "Done"
        }
    ]
    ;

export default function column(state = initialstate, action) {
    switch (action.type) {

        case SAVE_TITLE:
            return state.map(data => {
                 if (data.id === action.idCard) {
                      data.name = action.title;
                  }
                 return data;
            })

        default:
            return state;
    }

};
