import React from 'react';
import Card from '../components/Card';
import Title from '../components/Title';
import AddCard from '../components/AddCard';
import '../App.css';


export default class Column extends React.Component {
  colunmService;
  constructor(props) {
    super(props);
    
    this.state = {
      title: props.title,
      isEdit: false,
    }
    this.thisTitle = this.thisTitle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  thisTitle(e) {
    let title = e.target.title;
    this.setState({ title })
  };

  handleClick(){
    this.setState({ isEdit: true });
    let nameTitle = this.state.title;
    this.colunmService.SaveTitle(this.props.id, nameTitle);
  };

  render() {
    const { data,title,storage,id } = this.props;
    return (
      <div className="col border border-info rounded">
        <div className="content">
          <div className="header">
            <Title id={id}
              title={title}
              storage={storage}
              saveTitle={this.props.newTitle} />
          </div>
          <hr />
          {data.map(cards =>
            <Card
              key={cards.id}
              id={cards.id}
              title={cards.title}
              cardModal={this.props.isOpenModal}
            />)}
          <hr />
          <AddCard id={id}
            storage={storage}
            addCard={this.props.addNewCard} />
        </div>
      </div>
    )
  }
};
