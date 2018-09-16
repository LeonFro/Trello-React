import {
    ADD_NAME,
    ADD_CARD,
    DELETE_CARD,
    CHANGE_TITLE_CARD,
    SAVE_TITLE,
    ADD_DESCRIPTIONS,
    ADD_COMMENT,
    DELETE_COMMENT,
    CHANGE_COMMENT
} from '../actions';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_NAME:
            let name = action.name;
            return { ...state, name }

        case ADD_CARD:
            let siries = action.idCard
            let card = {
                id: action.id,
                title: action.newCard,
                description: action.description
            };
            let store = { ...state };                     // ???
            let data = Object.assign({}, store, {
                [siries]: store[siries].concat(card)
            });
            return data;

        case DELETE_CARD:
            let newdata = { ...state };
            let columnName = action.nameColumn;
            let indexCard = newdata[columnName].findIndex(x => {
                return x.id === action.idCard;
            });
            return newdata[columnName].splice(indexCard, 1);;


        case CHANGE_TITLE_CARD:
            let sta = { ...state };
            let column = action.nameColumn;
            return sta[column].map(data => {
                if (data.id === action.idCard) {
                    data.title = action.textTitleCard;
                }
                return data;
            });

        case SAVE_TITLE:
            let stor = { ...state };
            return stor.nameColumn.map(data => {
                if (data.id === action.idCard) {
                    data.name = action.title;
                }
                return data;
            });

        case ADD_DESCRIPTIONS:
            let colu = action.nameColumn;
            let storage = { ...state };
            return storage[colu].map(data => {
                if (data.id === action.id) {
                    data.description = action.text;
                }
                return data;
            });


        case ADD_COMMENT:
            let st = { ...state };
            let comment = {
                idCard: action.idCard,
                id: action.newId,
                comment: action.text,
            }
            return Object.assign({}, st, {
                comments: st.comments.concat(comment)
            });

        case DELETE_COMMENT:
            let deldata = { ...state };
            let indexComment = deldata.comments.findIndex(x => {
                return x.id === action.idComment;
            });
            return deldata.comments.splice(indexComment, 1);

        case CHANGE_COMMENT:
            let date = { ...state };
            return date.comments.map(data => {
                if (data.id === action.idComment) {
                    data.comment = action.textComment;
                }
                return data;
            });
        default:
            return state;
    }

};
export default reducer;

