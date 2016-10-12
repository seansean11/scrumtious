import React, { PropTypes } from 'react';

const BucketItem = ({ item, toggleItemState, activateItem }) => {
  const itemClass = item.done ?
                      'bucket-list__item done' :
                      'bucket-list__item';
  return (
    <li draggable="true" className={itemClass}>
      <a
        className="material-icons bucket-list__state"
        onClick={() => toggleItemState(item)}
      >done</a>
      <a
        className="bucket-list__body"
        onClick={() => activateItem(item)}
      >
        <h3 className="bucket-list__title">{item.key}</h3>
        <div className="bucket-list__summary">
          <p>{item.fields.summary}</p>
        </div>
      </a>
    </li>
  );
};

BucketItem.propTypes = {
  item: PropTypes.object.isRequired,
  toggleItemState: PropTypes.func.isRequired,
  activateItem: PropTypes.func.isRequired
};

export default BucketItem;
