import React, { PropTypes, Component } from 'react';
import marked from 'marked';

class DetailTodo extends Component {
  markdownToHTML() {
    return { __html: marked(this.props.activeItem.description) };
  }

  render() {
    const { activeItem, toggleTab, editItem } = this.props;
    const creator = activeItem.fields ? activeItem.fields.creator : '';

    return (
      <div className="tab__todo card">
        <header className="tab__header">
          <div className="tab__avatar">
            <img className="user-avatar" src={creator.avatarUrls['48x48']} alt="creator avatar"/>
            <span className="txt-sm">{creator.displayName}</span>
          </div>
          <a
            className="tab__close"
            onClick={() => toggleTab('details')}
          >
            <i className="material-icons">close</i>
          </a>
        </header>
        <div className="tab_body">
          <h2
            onInput={editItem}
            contentEditable="true"
          >{activeItem.key}</h2>
          <h4
            onChange={(activeItem) => editItem(activeItem)}
            contentEditable="true"
          >{activeItem.fields.summary}</h4>
          <p
            onChange={(activeItem) => editItem(activeItem)}
            contentEditable="true"
            dangerouslySetInnerHTML={this.markdownToHTML()}
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
