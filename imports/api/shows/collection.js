// Framework
import { Mongo } from 'meteor/mongo';

// Export Collection
export const Shows = new Mongo.Collection('shows');

// Add Text Index for searching
// Shows._ensureIndex({
//   feed: {
//     title: 'text',
//   },
// });
