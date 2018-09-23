export const ADD_NAME = "ADD_NAME";
export const ADD_CARD = "ADD_CARD";
export const DELETE_CARD = "DELETE_CARD";
export const CHANGE_TITLE_CARD = 'CHANGE_TITLE_CARD';

export const SAVE_TITLE = "SAVE_TITLE";
export const ADD_DESCRIPTIONS = "ADD_DESCRIPTIONS";

export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const CHANGE_COMMENT = "CHANGE_COMMENT";

export const MODAL_ON= "MODAL_ON";
export const MODAL_OFF = "MODAL_OFF";

let newId = Date.now();

export function addName(name) {
    return {
        type: ADD_NAME,
        name,
    }
};

export function addCard(idCard,newCard) {
    return {
        type: ADD_CARD,
        idCard,
        newCard,
        id:newId,
        description: ''
    }
};

export function deleteCard(nameColumn, idCard) {
    return {
        type: DELETE_CARD,
        nameColumn,
        idCard,
    }
};

export function changeTitleCard(idCard, nameColumn, textTitleCard) {
    return {
        type:CHANGE_TITLE_CARD,
        idCard,
        nameColumn,
        textTitleCard
    }
};

export function saveTitle(idCard,title){
    return{
        type:SAVE_TITLE,
        idCard,
        title
    }
};

export function addDescriptions(nameColumn,text){
    return{
        type:ADD_DESCRIPTIONS,
        nameColumn,
        text,
        id:newId,
    }
};

export function addComment(idCard,text){
    return{
        type:ADD_COMMENT,
        text,
        id:newId,
        idCard
    }
};

export function deleteComment(idComment){
    return{
        type:DELETE_COMMENT,
        idComment,
    }
};

export function cangeComment(textComment,idComment){
    return{
        type:CHANGE_COMMENT,
        idComment,
        textComment
    }
};
