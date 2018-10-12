import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PRODUCTIONS from "./../util/productions.js";
import "./productions.css";

class Productions extends React.Component {

    render() {
        let mainProd = PRODUCTIONS && PRODUCTIONS.length > 0 && PRODUCTIONS[0];
        return (
            <div className="container-fluid productions">
                {this.props.full &&
                    <div style={{ backgroundImage: 'url(' + mainProd.cover + ')' }} className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light main-production">
                        <div className="col-md-5 p-lg-5 mx-auto my-5">
                            <h1 className="display-4 font-weight-normal">{mainProd.title}</h1>
                            <p className="lead font-weight-normal">{mainProd.description}</p>
                            <a className="btn btn-secondary" href={mainProd.link} target="_blank">En savoir plus</a>
                        </div>
                    </div>}

                <div className="row text-center">
                    {PRODUCTIONS.slice(this.props.full ? 1 : 0, this.props.full ? PRODUCTIONS.length : 4).map((prod, key) => (
                        <div key={key} className="col-md-3 text-center text-black overflow-hidden">
                            {prod.online && <Link to={"/publications/" + prod.id}>
                                <img src={prod.cover} className="mx-auto d-block shadow  production-cover" alt="..." />
                            </Link>}
                            {!prod.online && <a href={prod.link} target="_blank">
                                <img src={prod.cover} className="mx-auto d-block shadow  production-cover" alt="..." />
                            </a>}
                            <div className="p-3 text-left">
                                {!prod.online && <p className="m-0 p-0"> </p>}
                                {prod.online && <p className="text-primary m-0 p-0">GRATUIT</p>}
                                <p className="display-5 text-uppercase font-weight-bold my-0">{prod.title}</p>
                                <p className="font-weight-light">{prod.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

}

Productions.propTypes = {
    full: PropTypes.bool
};

Productions.defaultProps = {
    full: true
};

export default Productions;
