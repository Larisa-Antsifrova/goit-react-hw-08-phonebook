// React imports
import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components imports

// import Footer from './components/Footer';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// Routes imports
import routes from './routes';

// Views imports
// Lazy loading for views
const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);
const LoginPage = lazy(() =>
  import('./views/LoginPage' /* webpackChunkName: "home-page" */),
);
const RegisterPage = lazy(() =>
  import('./views/RegisterPage' /* webpackChunkName: "home-page" */),
);
const ContactsPage = lazy(() =>
  import('./views/ContactsPage' /* webpackChunkName: "home-page" */),
);

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <Loader
            type="TailSpin"
            color="#80cbc4"
            height={80}
            width={80}
            className="loader"
          />
        }
      >
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.register} component={RegisterPage} />
          <Route path={routes.login} component={LoginPage} />
          <Route path={routes.contacts} component={ContactsPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
