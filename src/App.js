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
import Universe from './universe/universe';
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
            <Router basename={process.env.PUBLIC_URL}>
                <div>
                    <div className="site-header sticky-top bg-dark">
                        <Navbar expand="md p-0">
                            <div className="site-header-logo bg-danger">
                                <Link to="/"><NavbarBrand className="text-light text-center text-uppercase font-weight-bold mx-2">Arcadia Graphic Studio</NavbarBrand></Link>
                            </div>
                            <NavbarToggler onClick={this.toggleMenu} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto mr-5" navbar>
                                    <NavItem>
                                        <Link to="/universe"><NavLink className="header-link h5 my-0 text-light font-weight-bold">Notre univers</NavLink></Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/publications"><NavLink className="header-link h5 my-0 text-light font-weight-bold">Nos Publications</NavLink></Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/"><NavLink className="header-link h5 my-0 text-light font-weight-bold">Nous rejoindre</NavLink></Link>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </div>
                    <div className="container mt-5">
                        <div className="content mb-5">
                            <Switch>
                                <Route exact path={'/'} component={Home} />
                                <Route exact path={'/universe'} component={Universe} />
                                <Route exact path={'/publications'} component={Productions} />
                                <Route exact path={'/publications/:id'} component={Production} />
                                <Route exact path={'/articles/:id'} component={Article} />
                                <Route component={Home} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
