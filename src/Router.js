import { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

//Components
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Home } from 'screens/Home';
import { About } from 'screens/About';
import { Contact } from 'screens/Contact/Contact';
import { Project } from 'screens/Project';
import Navbar from 'components/NavBar/NavBar';

export const Router = memo(() => {
  return (
    <>
      <Helmet titleTemplate="%s - Design" defaultTitle="Design" />

      <div>
        <Header />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Navbar />
        </Switch>
        <Footer />
      </div>
    </>
  );
});
