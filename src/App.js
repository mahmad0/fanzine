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
import 'moment-timezone';
import './App.css';
import Article from './article/article';
import Productions from './productions/productions';
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
                        <Navbar expand="md">
                            <NavbarBrand className="site-header-logo text-dark" href="/">Arcadia Graphic Studio</NavbarBrand>
                            <NavbarToggler onClick={this.toggleMenu} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink className="header-link" href="/productions">Nos productions</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="header-link" href="/rejoindre">Nous rejoindre</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                        <hr />
                    </div>
                    <div className="content">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/productions" component={Productions} />
                            <Route exact path="/productions/:id" component={Article} />
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
