/* global document */

// Style
import 'bootstrap/dist/css/bootstrap.css';

// Framework
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/startup/client/routes.jsx';

// Start Meteor into the client
Meteor.startup(() => {
  // Render react starting at <App /> mounting on #render-target div
  render(renderRoutes(), document.getElementById('render-target'));
});
