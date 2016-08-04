import React, { PropTypes } from 'react';
import ScrumItem from './ScrumItem';

const BucketList = ({ tickets }) => (
  <ol className="list__tickets">
    {tickets.map(ticket =>
      <TicketItem key={ticket.index} ticket={ticket} />
    )}
  </ol>
);

BucketList.propTypes = {
  tickets: PropTypes.array.isRequired
};

export default BucketList;
