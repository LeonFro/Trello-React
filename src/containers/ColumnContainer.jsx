import Column from '../components/Colunm';
//import PropTypes from 'prop-types';
import {connect} from 'react-redux';
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

function mapStateToProps(state){
    return{
        storage:state,
        data:state.todo,
        title:state.nameColumn[0].name,
        id:"todo",
    };
};

function mapDispatchToProps(dispatch){
    return{
        addNewCard:(idCard, newCard) => dispatch(addCard(idCard, newCard)),
        newTitle:(idCard, title) => dispatch(saveTitle(idCard, title)),
        deletCard:(idCard, nameColumn) => dispatch(deleteCard(idCard, nameColumn)),
        addText:(id, nameColumn, text) => dispatch(addDescriptions(id, nameColumn, text)),
        addNewComment:(idCard, text) =>  dispatch(addComment(idCard, text)),
        commentDelet:(idComment) => dispatch(deleteComment(idComment)),
        onEditComment:(idComment, textComment) => dispatch(cangeComment(idComment, textComment)),
        onSaveTitle:(idCard, nameColumn, textTitleCard) => dispatch(changeTitleCard(idCard, nameColumn, textTitleCard))
    }
}

const ColumnContainer = connect(mapStateToProps,mapDispatchToProps)(Column);

export default ColumnContainer;
            {/* <div>
                <Column id="todo" key={"todo"}
                    title={storage.nameColumn[0].name}
                    storage={this.context.store.getState()}////////////////////////////////
                    data={storage.todo}
                />

                <Column id="inProgress" key={"inProgress"}
                    title={storage.nameColumn[1].name}
                    storage={this.context.store.getState()}
                    data={storage.inProgress}
                    addNewCard={(idCard, newCard) => this.store.dispatch(addCard(idCard, newCard))}
                    newTitle={(idCard, title) => this.store.dispatch(saveTitle(idCard, title))}
                    deletCard={(idCard, nameColumn) => this.store.dispatch(deleteCard(idCard, nameColumn))}
                    addText={(id, nameColumn, text) => this.store.dispatch(addDescriptions(id, nameColumn, text))}
                    addNewComment={(idCard, text) =>  this.store.dispatch(addComment(idCard, text))}
                    commentDelet={(idComment) => this.store.dispatch(deleteComment(idComment))}
                    onEditComment={(idComment, textComment) =>this.store.dispatch(cangeComment(idComment, textComment))}
                    onSaveTitle={(idCard, nameColumn, textTitleCard) => this.store.dispatch(changeTitleCard(idCard, nameColumn, textTitleCard))}
                />

                <Column id="testing" key={"testing"}
                    title={storage.nameColumn[2].name}
                    storage={this.context.store.getState()}
                    data={storage.testing}
                    addNewCard={(idCard, newCard) => this.store.dispatch(addCard(idCard, newCard))}
                    newTitle={(idCard, title) => this.store.dispatch(saveTitle(idCard, title))}
                    deletCard={(idCard, nameColumn) => this.store.dispatch(deleteCard(idCard, nameColumn))}
                    addText={(id, nameColumn, text) => this.store.dispatch(addDescriptions(id, nameColumn, text))}
                    addNewComment={(idCard, text) =>  this.store.dispatch(addComment(idCard, text))}
                    commentDelet={(idComment) => this.store.dispatch(deleteComment(idComment))}
                    onEditComment={(idComment, textComment) =>this.store.dispatch(cangeComment(idComment, textComment))}
                    onSaveTitle={(idCard, nameColumn, textTitleCard) => this.store.dispatch(changeTitleCard(idCard, nameColumn, textTitleCard))}
                />

                <Column id="done" key={Date.now}
                    title={storage.nameColumn[3].name}
                    storage={this.context.store.getState()}
                    data={storage.done}
                    addNewCard={(idCard, newCard) => this.store.dispatch(addCard(idCard, newCard))}
                    newTitle={(idCard, title) => this.store.dispatch(saveTitle(idCard, title))}
                    deletCard={(idCard, nameColumn) => this.store.dispatch(deleteCard(idCard, nameColumn))}
                    addText={(id, nameColumn, text) => this.store.dispatch(addDescriptions(id, nameColumn, text))}
                    addNewComment={(idCard, text) =>  this.store.dispatch(addComment(idCard, text))}
                    commentDelet={(idComment) => this.store.dispatch(deleteComment(idComment))}
                    onEditComment={(idComment, textComment) =>this.store.dispatch(cangeComment(idComment, textComment))}
                    onSaveTitle={(idCard, nameColumn, textTitleCard) => this.store.dispatch(changeTitleCard(idCard, nameColumn, textTitleCard))}
                />
            </div> */}

// ColumnContainer.propTypes = {  
//     addCard: PropTypes.func,
//     saveTitle: PropTypes.func,
//     toggleGreetingModal: PropTypes.func,
//     onAddDescription: PropTypes.func,
//     onDeletCard: PropTypes.func,
//     onAddComment: PropTypes.func,
//     onDeletComment: PropTypes.func,
//     changeComment: PropTypes.func,
//     storage: PropTypes.object.isRequired,
//     title: PropTypes.array,
//     data: PropTypes.array,
//     addNewCard: PropTypes.func,
//     newTitle: PropTypes.func,
//     addText: PropTypes.func,
//     deletCard: PropTypes.func,
//     addNewComment: PropTypes.func,
//     commentDelet: PropTypes.func,
//     onEditComment: PropTypes.func,
//     id: PropTypes.any,
//     changeTitleCard: PropTypes.func,
//     onSaveTitle: PropTypes.func,
//   };