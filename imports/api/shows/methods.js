// Framework
import { Meteor } from 'meteor/meteor';

// Libraries
import request from 'request';
import parsePodcast from 'node-podcast-parser';

// APIs
import { Shows } from './collection';

/**
 * Add a new show document to the shows collection.
 *
 * @param {Object} params URL of the podcast show to add.
 * @returns {null} Returns nothing, only side-effects.
 */
export function addShow({ url }) {
  if (Meteor.isServer) {
    request(url, Meteor.bindEnvironment((networkError, response, body) => {
      if (networkError) {
        throw new Meteor.Error('Error - Could not connect to URL:', networkError);
      }
      parsePodcast(body, Meteor.bindEnvironment((parseError, podcastMetaData) => {
        if (parseError || !podcastMetaData) {
          throw new Meteor.Error('Error - Cannot parse provided podcast URL, or add show:', parseError);
        }
        const newShow = {
          addedAt: new Date(),
          feed: podcastMetaData,
          url,
        };
        Shows.insert(newShow);
      }));
    }));
  }
}

/**
 * Get all the current shows in the collection
 *
 * @returns {Array} Contains all current shows.
 */
export function getShows() {
  if (Meteor.isServer) {
    return Shows.find({}).fetch();
  }
  return [];
}

/**
 * Get all the current shows in the collection.
 *
 * @param {Object} id Automatically assigned MongoDB unique _id.
 * @returns {Array} Contains all current shows.
 */
export function getShowById({ id }) {
  if (Meteor.isServer) {
    return Shows.findOne({ _id: id });
  }
  return undefined;
}

export function searchShows({ searchValue }) {
  if (Meteor.isServer) {
    const regexPattern = new RegExp(searchValue, 'g');
    return Shows.find({ 'feed.title': { $regex: regexPattern, $options: 'i' } }).fetch();
  }
  return [];
}

Meteor.methods({
  addShow,
  getShows,
  getShowById,
  searchShows,
});
