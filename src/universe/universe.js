import React from 'react';
import "./universe.css";
import UniverseAPI from './../util/universe.js';

class Universe extends React.Component {

    constructor() {
        super();
        this.state = {
            search: '',
<<<<<<< HEAD
            loading: false,
=======
>>>>>>> 1b7249026db97ae49fbf8201b2db1f221142edab
            characters: [],
            selected: {}
        };
    }

    componentDidMount() {
<<<<<<< HEAD
        this.setState({
            loading : true
        });
        UniverseAPI.getAllCharacters().then(result => {
            this.setState({
                characters: result,
                loading: false,
=======
        UniverseAPI.getAllCharacters().then(result => {
            console.log(result);
            this.setState({
                characters: result,
>>>>>>> 1b7249026db97ae49fbf8201b2db1f221142edab
                selected: result[0]
            });
        });
    }

    select(value) {
        this.setState({selected : value});
    }


    render() {
        return (
            <div className="container-fluid universe">
                <div className="row">
                    <div className="col-md-2 border-right">
                        <form>
                            <input type="search"
                                onChange={event => this.setState({ search: event.target.value.toLowerCase() || '' })}
                                value={this.state.search}
                                className="form-control ds-input"
                                placeholder="Rechercher..." />
                        </form>
                        <nav className="bg-light mt-3">
                            <ul className="nav flex-column ">
                                <p className="h5">Séries</p>

                                <p className="h5">Personnages</p>
                                {this.state.characters.filter(c => c.name.toLowerCase().includes(this.state.search)).map((character, index) =>
                                    <li key={index} className="nav-item">
                                        <a className="nav-link active" onClick={() => this.select(character)} href="#">{character.name}</a>
                                    </li>
                                )}
                                <p className="h5">Lieux</p>

                                <p className="h5">Récits</p>

                                <p className="h5">Auteurs</p>

                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-10">
                        <h3>
<<<<<<< HEAD
=======
                            <small className="text-muted">Nom </small>
>>>>>>> 1b7249026db97ae49fbf8201b2db1f221142edab
                            {this.state.selected.name}
                        </h3>
                        <div className="row">
                            <div className="col-md-6">
                                <img src={this.state.selected.imageurl} className="img-fluid" />
                            </div>
                            <div className="col-md-6">
                                <dl className="row">
                                    {Object.keys(this.state.selected).map((key, index) =>
                                        ['name', 'imageurl'].indexOf(key) < 0 &&
                                        <div className="row col-md-12" key={index}>
<<<<<<< HEAD
                                            <dt className="col-md-4 text-capitalize">{key}: </dt>
=======
                                            <dt className="col-md-4 text-capitalize">{key}</dt>
>>>>>>> 1b7249026db97ae49fbf8201b2db1f221142edab
                                            <dd className="col-md-8">{this.state.selected[key]}</dd>
                                        </div>
                                    )}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Universe;
