// Framework
import React from 'react';

// Components
import { CardColumns } from 'reactstrap';
import ShowCard from './ShowCard.jsx';

/**
 * List of shows in a mason style.
 *
 * @param {Object} props cards that need to be displayed.
 * @returns {ReactElement} Containing a nicely styled card list.
 */
const ShowList = ({ shows }) => (
  <CardColumns className="show-list">
    {
      shows && shows.map(show =>
        <ShowCard
          key={show._id}
          show={show}
        />
      )
    }
  </CardColumns>
);

export default ShowList;
