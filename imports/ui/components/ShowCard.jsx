// Framework
import React from 'react';

// Libraries
import moment from 'moment';
import { Link } from 'react-router';

// Components
import { Card, CardImg, CardBlock, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

/**
 * Discrete Card unit showing information about a show.
 *
 * @param {Object} props Information about the show to display.
 * @returns {ReactElement} Containing a nicely styled card.
 */
const ShowCard = ({ show }) => {
  return (
    <div className="show-card">
      <Card>
        <Link to={`/show/${show._id}`}>
          <CardImg src={show.feed.image} top width="100%" alt={`${show.feed.title || ''} cover art`} />
        </Link>
        <CardBlock>
          <CardTitle>{show.feed.title || ''}</CardTitle>
          <CardSubtitle>{show.feed.owner && show.feed.owner.name}</CardSubtitle>
          <CardText>{show.feed.description && show.feed.description.long}</CardText>
          <Button>Subscribe</Button>
          <CardText>
            <small className="text-muted">Last updated {show.feed.episodes &&
              moment(show.feed.episodes[0].published).from(new Date())}</small>
          </CardText>
        </CardBlock>
      </Card>
    </div>
  );
};

export default ShowCard;
