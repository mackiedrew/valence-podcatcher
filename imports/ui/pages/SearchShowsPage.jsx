// Framework
import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

// Components
import { Container, Row, Col as Column, InputGroup, Input, Label, InputGroupAddon } from 'reactstrap';
import ShowList from '../components/ShowList.jsx';

/**
 * Where to discover new podcasts.
 *
 * @returns {ReactElement} Element displaying a page segment for new podcast discovery.
 */
class ShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      shows: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const nextSearchValue = event.target.value;
    this.setState({ searchValue: nextSearchValue });
    if (nextSearchValue.length >= 2) {
      Meteor.call('searchShows', { searchValue: nextSearchValue }, (error, shows) => {
        if (error) {
          throw new Meteor.Error('Error - could not find show at id of that id: ', error);
        }
        this.setState({ shows });
      });
    } else {
      this.setState({ shows: [] });
    }
  }

  render() {
    return (
      <Container fluid className="show-page">
        <Row>
          <Column xs={12}>
            <InputGroup>
              <Label className="sr-only" for="searchForShows">Search for shows</Label>
              <Input
                id="searchForShows"
                value={this.state.searchValue}
                onChange={this.handleChange}
              />
              <InputGroupAddon>search</InputGroupAddon>
            </InputGroup>
          </Column>
        </Row>
        <Row>
          <Column xs={12}>
            {
              (this.state.shows.length > 0) ?
                <ShowList shows={this.state.shows} /> :
                <div>
                  <h3 className="text-faded">No podcasts found!</h3>
                </div>
            }
          </Column>
        </Row>
      </Container>
    );
  }
}

export default ShowPage;
