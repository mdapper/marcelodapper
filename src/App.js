import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';

import HomePage from 'components/pages/HomePage';
import SkillsPage from 'components/pages/SkillsPage';
import ProjectsPage from 'components/pages/ProjectsPage';
import ExperiencePage from 'components/pages/ExperiencePage';
import ContactPage from 'components/pages/ContactPage';

const title = 'Marcelo Dapper';

const App = () => (
  <Router>
    <div>
      <Helmet titleTemplate={`${title} | %s`} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/skills" component={SkillsPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/experience" component={ExperiencePage} />
        <Route path="/contact" component={ContactPage} />
        <Route render={() => <h2>No match!</h2>} />
      </Switch>
    </div>
  </Router>
);

export default App;
