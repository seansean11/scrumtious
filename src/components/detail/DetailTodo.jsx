import React, { PropTypes, Component } from 'react';
import marked from 'marked';

class DetailTodo extends Component {
  markdownToHTML() {
    return (this.props.activeItem.description) ?
      { __html: marked(this.props.activeItem.description) } :
      { __html: '' };
  }

  render() {
    const { activeItem, toggleTab, editItem } = this.props;

    return (
      <div className="tab__todo card">
        <header className="tab__header">
          <div className="tab__avatar">
            <img className="user-avatar" src={activeItem.avatar_xl} alt="creator avatar"/>
            <span className="txt-sm">{activeItem.displayName}</span>
          </div>
          <a
            className="tab__close"
            onClick={() => toggleTab('details')}
          >
            <i className="material-icons">close</i>
          </a>
        </header>
        <div className="tab__body todo">
          <h2
            className="todo__title"
            onInput={editItem}
            contentEditable="true"
          >{activeItem.key}</h2>
          <h4
            className="todo__summary"
            onChange={(activeItem) => editItem(activeItem)}
            contentEditable="true"
          >{activeItem.summary}</h4>
          <p
            className="todo__discription"
            onChange={(activeItem) => editItem(activeItem)}
            dangerouslySetInnerHTML={this.markdownToHTML()}
            contentEditable="true"
          />
        </div>
      </div>
    );
  }
}

DetailTodo.propTypes = {
  activeItem: PropTypes.object.isRequired,
  toggleTab: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired
};

export default DetailTodo;
