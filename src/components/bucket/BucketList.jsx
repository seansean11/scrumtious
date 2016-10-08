import React, { PropTypes } from 'react';
import BucketItem from './BucketItem';
import Accordion from '../global/Accordion';

const BucketList = ({ items, toggleItemState, toggleDetailsTab }) => (
  <Accordion title="Running">
    <ul className="bucket-list">
      {items.map(item =>
        <BucketItem
          key={item.id}
          item={item}
          toggleDetailsTab={toggleDetailsTab}
          toggleItemState={toggleItemState}
        />
      )}
    </ul>
  </Accordion>
);

BucketList.propTypes = {
  items: PropTypes.array.isRequired,
  toggleItemState: PropTypes.func.isRequired,
  toggleDetailsTab: PropTypes.func.isRequired
};

export default BucketList;
