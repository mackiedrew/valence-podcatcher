// Framework
import React from 'react';

// Libraries
import moment from 'moment';

// Components
import { Table } from 'reactstrap';
import PlayIcon from './PlayIcon.jsx';

const Episode = ({ title, published, duration, description, enclosure }) => {
  const date = moment(published).format('DD-MM-YYYY');

  // Get length in hours, minutes, seconds.

  return (
    <tr className="episode">
      <td className="title">{title}</td>
      <td className="date">{date}</td>
      <td className="duration">{duration}</td>
      <td className="description">{description}</td>
      <td>
        <PlayIcon url={enclosure.url} type={enclosure.type} />
      </td>
    </tr>
  );
};

/**
 * List of shows in a mason style.
 *
 * @param {Object} props cards that need to be displayed.
 * @returns {ReactElement} Containing a nicely styled card list.
 */
const EpisodeList = ({ episodes }) => (
  <Table striped className="episode-list">
    <thead>
      <tr>
        <th>Title</th>
        <th>Date</th>
        <th>Duration</th>
        <th>Description</th>
        <th>Play</th>
      </tr>
    </thead>
    <tbody>
      {episodes.map((episode, i) => <Episode key={i} {...episode} />)}
    </tbody>
  </Table>
);

export default EpisodeList;
