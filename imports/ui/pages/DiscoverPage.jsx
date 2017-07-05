// Framework
import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

// Components
import ShowList from '../components/ShowList.jsx';
import AddShowBox from '../components/AddShowBox.jsx';

/**
 * Where to discover new podcasts.
 *
 * @returns {ReactElement} Element displaying a page segment for new podcast discovery.
 */
class DiscoverPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
    };
  }

  componentWillMount() {
    Meteor.call('getShows', (error, shows) => {
      if (error) {
        throw new Meteor.Error('Error - could not get shows: ', error);
      }
      this.setState({ shows });
    });
  }

  render() {
    return (
      <div>
        <AddShowBox />
        <ShowList shows={this.state.shows} />
      </div>
    );
  }
}

export default DiscoverPage;
