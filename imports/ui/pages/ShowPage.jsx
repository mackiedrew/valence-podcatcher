// Framework
import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

// Components
import { Container, Row, Col as Column, Table } from 'reactstrap';
import ShowCard from '../components/ShowCard.jsx';
import EpisodeList from '../components/EpisodeList.jsx';

/**
 * Where to discover new podcasts.
 *
 * @returns {ReactElement} Element displaying a page segment for new podcast discovery.
 */
class ShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: {},
    };
  }

  componentDidMount() {
    Meteor.call('getShowById', { id: this.props.params.id }, (error, show) => {
      if (error) {
        throw new Meteor.Error('Error - could not find show at id of that id: ', error);
      }
      this.setState({ show });
    });
  }



  render() {
    return (
      <Container fluid className="show-page">
        <Row>
          <Column xs={12} lg={6}>
            {this.state.show.feed && <ShowCard show={this.state.show} />}
          </Column>
        </Row>
        <Row>
          {this.state.show.feed && <EpisodeList episodes={this.state.show.feed.episodes} />}
        </Row>
      </Container>
    );
  }
}

export default ShowPage;
