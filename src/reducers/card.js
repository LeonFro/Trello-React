export const ADD_CARD = "ADD_CARD";
export const DELETE_CARD = "DELETE_CARD";
export const CHANGE_TITLE_CARD = 'CHANGE_TITLE_CARD';
export const ADD_DESCRIPTIONS = "ADD_DESCRIPTIONS";
export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const CHANGE_COMMENT = "CHANGE_COMMENT";

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
    nameColumn,

});

export const changeTitleCard = (idCard, nameColumn, textTitleCard) => ({
    type: CHANGE_TITLE_CARD,
    idCard,
    nameColumn,
    textTitleCard,

});

export const addDescriptions = (idCard, nameColumn, text) => ({
    type: ADD_DESCRIPTIONS,
    idCard,
    nameColumn,
    text,
});

export const addComment = (idCard, text) => ({
    type: ADD_COMMENT,
    idCard,
    text,
    id: Date.now(),
});

export const deleteComment = (idComment) => ({
    type: DELETE_COMMENT,
    idComment,
});

export const cangeComment = (idComment, textComment) => ({
    type: CHANGE_COMMENT,
    idComment,
    textComment
});

const initialstate = {

    todo: [
        {
            id: 4,
            title: "Buy milk",
            description: "2 Gallons of milk"
        },
        {
            id: 5,
            title: "Buy brod",
            description: "2 bar Brod"
        }
    ],
    inProgress: [
        {
            id: 6,
            title: "Clean House",
            description: "Soap wash and polish floor"
        }
    ],
    test: [
        {
            id: 7,
            title: "Practice Meditation",
            description: "Use Headspace app"
        }
    ],
    done: [{}],
    comments: [
        {
            idCard: 4,
            id: 8,
            comment: "Well Well Well"
        },
        {
            idCard: 7,
            id: 9,
            comment: "Very good!"
        }
    ]
};

export default function card(state = initialstate, action) {
    switch (action.type) {
        case ADD_CARD:
            let siries = action.idCard;
            let card = {
                id: action.id,
                title: action.newCard,
                description: action.description
            };
            return {
                ...state,
                [siries]: state[siries].concat(card)
            };

        case DELETE_CARD:
            let columnName = action.nameColumn;
            return {
                ...state,
                [columnName]: state[columnName].filter(note =>
                    note.id !== action.idCard),
            };

        case CHANGE_TITLE_CARD:
            let nameColumn = action.nameColumn;
            const newTitle = state[nameColumn].map(x => {
                if (x.id === action.idCard) {
                    x.title = action.textTitleCard;
                };
                return x;
            });
            return { ...state, [nameColumn]: newTitle };

        case ADD_DESCRIPTIONS:
            let nameCol = action.nameColumn;
            const newDesc = state[nameCol].map(data => {
                if (data.id === action.idCard) {
                    data.description = action.text;
                };
                return data;
            });
            return { ...state, [nameCol]: newDesc };

        case ADD_COMMENT:
            let comment = {
                idCard: action.idCard,
                id: action.id,
                comment: action.text,
            };
            return {
                ...state,
                comments: state.comments.concat(comment)
            };

        case DELETE_COMMENT:
            return {
                ...state, comments: state.comments.filter(note =>
                    note.id !== action.idComment)
            };

        case CHANGE_COMMENT:
            const newComment = state.comments.map(x => {
                if (x.id === action.idComment) {
                    x.comment = action.textComment;
                };
                return x;
            });
            return { ...state, comments: newComment };

        default:
            return state;
    }
};