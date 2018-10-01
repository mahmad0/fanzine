import React from "react";
import PRODUCTIONS from "./../util/productions.js";
import "./productions.css";

class Productions extends React.Component {

    render() {
        let mainProd = PRODUCTIONS && PRODUCTIONS.length > 0 && PRODUCTIONS[0];

        return (
            <div className="container-fluid productions">
                <div style={{ backgroundImage: 'url(' + mainProd.cover + ')' }} className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light main-production">
                    <div className="col-md-5 p-lg-5 mx-auto my-5">
                        <h1 className="display-4 font-weight-normal">{mainProd.title}</h1>
                        <p className="lead font-weight-normal">{mainProd.description}</p>
                        <a className="btn btn-secondary" href={mainProd.link} target="_blank">En savoir plus</a>
                    </div>
                </div>

                <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                    {PRODUCTIONS.slice(1).map((prod, key) => (
                        <div key={key} className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                            <div className="my-3 py-3">
                                <h2 className="display-5">{prod.title}</h2>
                                <p className="lead">{prod.description}</p>
                            </div>
                            <div className="bg-light shadow-sm mx-auto production-cover" style={{ backgroundImage: 'url(' + prod.cover + ')' }}></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default Productions;
