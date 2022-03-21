import { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

//Components
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

//Screens
import { Home } from 'screens/Home';

export const Router = memo(() => {
  return (
    <>
      <Helmet titleTemplate="%s - Weblap" defaultTitle="Weblap" />

      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </>
  );
});
