import React, {
    Component
} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import ArticleGrid from './articleGrid/articleGrid';

class App extends Component {

    constructor() {
        super();
        this.state = {
            'quote': '',
            'where': '',
            'when': '',
            'where': ''
        };
    }

    render() {
        return (
            <div>
                <div className="container">
                    <header className="blog-header py-3">
                        <div className="row flex-nowrap justify-content-between align-items-center">
                            <div className="col-6 justify-content-start">
                                <a className="blog-header-logo text-dark" href="#">Arcadia Graphic Studio</a>
                            </div>
                            <div className="col-4 d-flex justify-content-end align-items-center">
                                <a className="text-muted" href="#">Manifeste </a>
                                <a className="text-muted" href="#">Boutique </a>
                                <a className="text-muted" href="#">Nous rejoindre</a>
                            </div>
                        </div>
                        <ArticleGrid />
                    </header>
                </div>
            </div>
        );
    }
}

export default App;
