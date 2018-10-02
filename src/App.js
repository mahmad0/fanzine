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
import { Link } from 'react-router-dom'
import 'moment-timezone';
import './App.css';
import Article from './article/article';
import Production from './production/production';
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
                            <Link to="/"><NavbarBrand className="site-header-logo text-dark">Arcadia Graphic Studio</NavbarBrand></Link>
                            <NavbarToggler onClick={this.toggleMenu} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <Link to="/productions"><NavLink className="header-link">Nos productions</NavLink></Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/"><NavLink className="header-link">Nous rejoindre</NavLink></Link>
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
                            <Route exact path="/productions/:id" component={Production} />
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
