import React, { PropTypes } from 'react';

function stopPropagation(e) {
  if (!e.target.classList.contains('icon-drag') &&
    !e.target.parentNode.classList.contains('icon-drag')) e.stopPropagation();
}

const BucketItem = ({ item, sharedProps }) => {
  const itemClass = item.done ? 'done' : '';
  return (
    <div className={itemClass} onMouseDown={stopPropagation}>
      <svg className="icon-drag" viewBox="0 0 32 32" title="drag handle">
        <rect x="6" y="2" width="4" height="4" />
        <rect x="14" y="2" width="4" height="4" />
        <rect x="6" y="10" width="4" height="4" />
        <rect x="14" y="10" width="4" height="4" />
        <rect x="6" y="18" width="4" height="4" />
        <rect x="14" y="18" width="4" height="4" />
        <rect x="6" y="26" width="4" height="4" />
        <rect x="14" y="26" width="4" height="4" />
        <rect x="22" y="2" width="4" height="4" />
        <rect x="22" y="10" width="4" height="4" />
        <rect x="22" y="18" width="4" height="4" />
        <rect x="22" y="26" width="4" height="4" />
      </svg>
      <a
        className="material-icons bucket-list__state"
        onClick={() => sharedProps.toggleItemState(item)}
      >done</a>
      <a
        className="bucket-list__body"
        onClick={() => sharedProps.itemActivate(item)}
      >
        <h3 className="bucket-list__title">{item.key}</h3>
        <div className="bucket-list__summary">
          <p>{item.summary}</p>
        </div>
      </a>
    </div>
  );
};

BucketItem.propTypes = {
  item: PropTypes.object.isRequired,
  sharedProps: PropTypes.shape({
    toggleItemState: PropTypes.func.isRequired,
    itemActivate: PropTypes.func.isRequired
  })
};

export default BucketItem;
