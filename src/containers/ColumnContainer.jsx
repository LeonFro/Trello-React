import Column from '../components/Colunm';
import { connect } from 'react-redux';
import {
    addCard,
    deleteCard,
    saveTitle,
    changeTitleCard,
    addDescriptions,
    addComment,
    deleteComment,
    cangeComment
} from '../actions';

function mapStateToProps(state) {
  
    return {
        storage: state,
        data: state.card.todo,
        title:state.column[0].name,
        id:"todo"
    };
};

function mapDispatchToProps(dispatch) {
    return {
        addNewCard: (idCard, newCard) => dispatch(addCard(idCard, newCard)),
        newTitle: (idCard, title) => dispatch(saveTitle(idCard, title)),
        deletCard: (idCard, nameColumn) => dispatch(deleteCard(idCard, nameColumn)),
        addText: (id, nameColumn, text) => dispatch(addDescriptions(id, nameColumn, text)),
        addNewComment: (idCard, text) => dispatch(addComment(idCard, text)),
        commentDelet: (idComment) => dispatch(deleteComment(idComment)),
        onEditComment: (idComment, textComment) => dispatch(cangeComment(idComment, textComment)),
        onSaveTitle: (idCard, nameColumn, textTitleCard) => dispatch(changeTitleCard(idCard, nameColumn, textTitleCard))
    }
};

const ColumnContainer = connect(mapStateToProps, mapDispatchToProps)(Column);
export default ColumnContainer;
