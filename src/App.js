import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group'

import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';

const routes = [
    { path: '/portfolio', name: 'Home', Component: Home },
    { path: '/portfolio/contact', name: 'Contact', Component: Contact },
    { path: '/portfolio/projects', name: 'Projects', Component: Projects }
];

const App = () => {
    return (
        <Router>
            <Nav className="justify-content-end navbar-main" activeKey="/home">
                {routes.map(route=>(
                    <Nav.Link key={route.path}
                    as={NavLink}
                    to={route.path}
                    activeClassName="active"
                    className="navbar-a"
                    exact>
                        {route.name}
                    </Nav.Link>
                ))}
            </Nav>
            {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path}>
                {({ match }) => (
                    <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    >
                    <div className="alert">
                        <Component />
                    </div>
                    </CSSTransition>
                )}
                </Route>
            ))}
        </Router>
    )
};

export default App;