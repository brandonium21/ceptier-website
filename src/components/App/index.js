import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import ExpertisePage from '../Expertise';
import TechnologyPage from '../Technology';
import ServicesPage from '../Services';
import AboutPage from '../About';
import HomePage from '../Home';
import * as ROUTES from '../../constants/routes';


class App extends React.Component{
    render() {
        return(
            <Router>
                <div>
                    <Navigation />
                    <Route path={ROUTES.EXPERTISE} component={ExpertisePage} />
                    <Route path={ROUTES.TECHNOLOGY} component={TechnologyPage} />
                    <Route path={ROUTES.SERVICES} component={ServicesPage} />
                    <Route path={ROUTES.HOME} exact component={HomePage} />
                    <Route path={ROUTES.ABOUT} component={AboutPage} />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;