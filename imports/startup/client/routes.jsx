/* global window */

// Framework
import React from 'react';

// Library
import { Router, Route, browserHistory } from 'react-router';

// Components
import App from '../../ui/components/App.jsx';
import ShowPage from '../../ui/pages/ShowPage.jsx';
import DiscoverPage from '../../ui/pages/DiscoverPage.jsx';
import SearchShowsPage from '../../ui/pages/SearchShowsPage.jsx';
import NotFoundPage from '../../ui/pages/NotFoundPage.jsx';

const resetScroll = () => {
  window.scrollTo(0, 0);
};

export const renderRoutes = () => (
  <Router onUpdate={resetScroll} history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="show/:id" component={ShowPage} />
      <Route path="discover" component={DiscoverPage} />
      <Route path="search" component={SearchShowsPage} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Router>
);
