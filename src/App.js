import React, {
    Component
} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import Moment from 'react-moment';
import 'moment-timezone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'
import './App.css';

import Article from './article/article';
import Home from './home/home';

class App extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false
        };
    }

    toggleMenu() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <div className="site-header sticky-top">
                        <Navbar color="light" light expand="md">
                            <NavbarBrand className="site-header-logo text-dark" href="/">Arcadia Graphic Studio</NavbarBrand>
                            <NavbarToggler onClick={this.toggleMenu} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink className="header-link" href="/productions/">Nos productions</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="header-link" href="/rejoindre/">Nous rejoindre</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                        <hr />
                    </div>
                    <div className="content">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/article/:id" component={Article} />
                            <Route component={Home} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
