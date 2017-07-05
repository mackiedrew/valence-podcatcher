// Framework
import { Meteor } from 'meteor/meteor';

// APIs
import { ShowLists } from './collection';

export function addShowList({ name, userId }) {
  if (Meteor.isServer) {
    const newShow = {
      name,
      userId,
      showsIds: [],
      createdAt: new Date(),
    };
    ShowLists.insert(newShow);
  }
}

export function addShowToShowList({ id, showId }) {
  if (Meteor.isServer) {
    const selector = { _id: id };
    const modifier = { $addToSet: { showIds: showId } };
    ShowLists.update(selector, modifier);
  }
}

export function getShowListById({ id }) {
  if (Meteor.isServer) {
    return ShowLists.findOne({ _id: id });
  }
  return undefined;
}

export function getShowListsByUserId({ userId }) {
  if (Meteor.isServer) {
    return ShowLists.find({ userId }).fetch();
  }
  return [];
}

export function getShowListByUserIdAndName({ userId, name }) {
  if (Meteor.isServer) {
    return ShowLists.findOne({ userId, name });
  }
  return undefined;
}

Meteor.methods({
  addShowList,
  getShowListsByUserId,
  getShowListById,
});
