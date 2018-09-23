export const ADD_CARD = "ADD_CARD";
export const DELETE_CARD = "DELETE_CARD";
export const CHANGE_TITLE_CARD = 'CHANGE_TITLE_CARD';
export const ADD_DESCRIPTIONS = "ADD_DESCRIPTIONS";
export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const CHANGE_COMMENT = "CHANGE_COMMENT";

let newId = Date.now();

export function addCard(idCard, newCard) {
    return {
        type: ADD_CARD,
        idCard,
        newCard,
        id: newId,
        description: ''
    }
};

export function deleteCard(idCard, nameColumn) {
    return {
        type: DELETE_CARD,
        idCard,
        nameColumn
    }
};

export function changeTitleCard(idCard, nameColumn, textTitleCard) {
    return {
        type: CHANGE_TITLE_CARD,
        idCard,
        nameColumn,
        textTitleCard
    }
};

export function addDescriptions(nameColumn, text) {
    return {
        type: ADD_DESCRIPTIONS,
        nameColumn,
        text,
        id: newId,
    }
};

export function addComment(idCard, text) {
    return {
        type: ADD_COMMENT,
        text,
        id: newId,
        idCard
    }
};

export function deleteComment(idComment) {
    return {
        type: DELETE_COMMENT,
        idComment,
    }
};

export function cangeComment(textComment, idComment) {
    return {
        type: CHANGE_COMMENT,
        idComment,
        textComment
    }
};

const initialstate = {
    todo: [
        {
            "id": 4,
            " title": "Buy milk",
            "description": "2 Gallons of milk"
        },
        {
            " id": 5,
            "title": "Buy brod",
            "description": "2 bar Brod"
        }
    ],
    inProgress: [
        {
            "id": 6,
            "title": "Clean House",
            "description": "Soap wash and polish floor"
        }
    ],

    test: [
        {
            "id": 7,
            "title": "Practice Meditation",
            "description": "Use Headspace app"
        }
    ],
    done: [{}],
    comments: [
        {
            "idCard": 4,
            "id": 8,
            "comment": "Well Well Well"
        },
        {
            "idCard": 7,
            "id": 9,
            "comment": "Very good!"
        }
    ]
};

export default function card(state = initialstate, action) {
    switch (action.type) {
        case ADD_CARD:        //DONE
            let siries = action.idCard; debugger
            let card = {
                id: action.id,
                title: action.newCard,
                description: action.description
            };
            return Object.assign({}, state, {
                [siries]: state[siries].concat(card)
            });;

        case DELETE_CARD:    //DONE
            let idCard = action.idCard;
            return Object.assign({}, state, {
                [idCard]: state[idCard].filter(note => note.id !== action.columnName),
            });

        case CHANGE_TITLE_CARD:        //Error!
            let nameColumn = action.nameColumn;
            let textTitleCard = action.textTitleCard;
            let id = action.idCard;

            return Object.assign({}, state, {
                [nameColumn]: state[nameColumn].title = state[nameColumn].map(x => {
                    if (x.id === id) {
                        return textTitleCard
                    }
                }),
            });

        // return state[nameColumn].map(x => {
        //     if (x.id !== action.idCard) {
        //         return state;
        //     }     
        //       return Object.assign({}, state,{title:action.textTitleCard});        
        //   })

        // return Object.assign({}, state, {
        //     [nameColumn]: state[nameColumn].title=state[nameColumn].map(x=>{
        //         if(x.id===id){
        //            return textTitleCard 
        //         }
        //     }),
        //   });
        //  let column = action.nameColumn;
        // return sta[column].map(data => {
        //     if (data.id === action.idCard) {
        //         data.title = action.textTitleCard;
        //     }
        //     return data;
        // });

        case ADD_DESCRIPTIONS:   //Error!
            let colu = action.nameColumn;
            let storage = { ...state };
            return storage[colu].map(data => {
                if (data.id === action.id) {
                    data.description = action.text;
                }
                return data;
            });

        case ADD_COMMENT: //DONE
            let comment = {
                idCard: action.idCard,
                id: action.newId,
                comment: action.text,
            }
            return Object.assign({}, state, {
                comments: state.comments.concat(comment)
            });

        case DELETE_COMMENT: //DONE
            return Object.assign({}, state, {
                comments: state.comments.filter(note => note.id !== action.idComment)
            });

        case CHANGE_COMMENT:  //Error!
            return state.comments.map(data => {
                if (data.id === action.idComment) {
                    data.comment = action.textComment;
                }
                return data;
            });
        default:
            return state;
    }
};