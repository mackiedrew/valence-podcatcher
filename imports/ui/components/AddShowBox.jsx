// Framework
import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

// Components
import {
  Form,
  FormGroup,
  Label,
  InputGroup,
  InputGroupButton,
  Input,
  Button,
} from 'reactstrap';

/**
 * Search-bar-like element for adding new shows via their RSS url.
 *
 * @param {Object} props Values to help control the input.
 * @returns {ReactElement} Containing a nicely styled input box that can work anywhere.
 */
class AddShowBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcastURL: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ podcastURL: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    Meteor.call('addShow', { url: this.state.podcastURL }, (error) => {
      if (error) {
        throw new Meteor.call('Error - could not add show:', error);
      }
    });
  }

  render() {
    return (
      <div className="mt-3">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <InputGroup>
              <Label className="sr-only" for="podcastURL">Email</Label>
              <Input
                id="podcastURL"
                placeholder="Podcast URL"
                value={this.state.podcastURL}
                onChange={this.handleChange}
              />
              <InputGroupButton title="Add podcast by URL">
                <Button color="secondary">+</Button>
              </InputGroupButton>
            </InputGroup>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default AddShowBox;
