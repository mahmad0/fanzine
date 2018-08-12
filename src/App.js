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
              <div className="col-4 pt-1">
                <a className="text-muted" href="#">Boutique</a>
              </div>
              <div className="col-4 text-center">
                <a className="blog-header-logo text-dark" href="#">Arcadia Graphic Studio</a>
              </div>
              <div className="col-4 d-flex justify-content-end align-items-center">
                <a className="text-muted" href="#">
                </a>
                <a className="btn btn-sm btn-outline-secondary" href="#">Nous rejoindre</a>
              </div>
            </div>
          </header>

          <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between">
              <a className="p-2 text-muted" href="#">Forgotten Generation</a>
              <a className="p-2 text-muted" href="#">Apocalypse Please</a>
              <a className="p-2 text-muted" href="#">Terreur Noire</a>
              <a className="p-2 text-muted" href="#">Esprit Vengeur</a>
              <a className="p-2 text-muted" href="#">Dark Fates</a>
              <a className="p-2 text-muted" href="#">World Justice</a>
              <a className="p-2 text-muted" href="#">Steelman</a>
            </nav>
          </div>

          <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
            <div className="col-md-6 px-0">
            <div class="background-image"></div>
              <h1 className="display-4 font-italic">Site officiel de l'association Arcadia Graphic Studio</h1>
              <p className="lead my-3">Pour la promotion de la création de bandes dessinées et des auteurs amateurs sur un circuit indépendant.</p>
              {false && <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>}
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-md-6">
              <div className="card flex-md-row mb-4 box-shadow h-md-300">
                <div className="card-body d-flex flex-column align-items-start">
                  <strong className="d-inline-block mb-2 text-primary">Forgotten Generation</strong>
                  <h3 className="mb-0">
                    <a className="text-dark" href="#">Numéro 3</a>
                  </h3>
                  <div className="mb-1 text-muted">Mai 2016</div>
                  <p className="card-text mb-auto">Bandes dessinées de type comics/fantastique. Nouvelle formule du magazine : maquette et identité visuelle renouvelées, format des comics américains</p>
                  <a href="#">Commander</a>
                </div>
                <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" style={{ width: 200 + 'px', height: 300 + 'px' }} src="https://1.bp.blogspot.com/-rsr-0QZfNAY/Vz8Tuq4oZuI/AAAAAAAACmQ/2LMndowIQ3YV6wWMmMTSo2_y52cgOeypQCLcB/s400/FGcoverseule.jpg" data-holder-rendered="true" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card flex-md-row mb-4 box-shadow h-md-300">
                <div className="card-body d-flex flex-column align-items-start">
                  <strong className="d-inline-block mb-2 text-success">Terreur Noire</strong>
                  <h3 className="mb-0">
                    <a className="text-dark" href="#">1948-1949 : l'intégrale Robinson-Meskin</a>
                  </h3>
                  <div className="mb-1 text-muted">Novembre 2016</div>
                  <p className="card-text mb-auto">Retrouvez la période la plus épique de Black Terror par un duo des plus prisés de l'Âge d'Or (le fameux Golden Age) des comics américains, au travers de douze épisodes palpitants inédits en France.</p>
                  <a href="#">Commander</a>
                </div>
                <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="https://4.bp.blogspot.com/-YD05hDwCC44/WDXZ2TzGO_I/AAAAAAAACtU/Lod-TBTj7M4kGn5JgNsbOAzya5U8nERhwCLcB/s400/CouvertureTN2-JPG.jpg" data-holder-rendered="true" style={{ width: 200 + 'px', height: 300 + 'px' }} />
              </div>
            </div>
          </div>
        </div>
        <main role="main" className="container">
          <div className="row">
            <div className="col-md-8 blog-main">
              <h3 className="pb-3 mb-4 font-italic border-bottom">
                News
          </h3>
              <ArticleGrid />
              {false &&
                <nav className="blog-pagination">
                  <a className="btn btn-outline-primary" href="#">Older</a>
                  <a className="btn btn-outline-secondary disabled" href="#">Newer</a>
                </nav>
              }

            </div>

            <aside className="col-md-4 blog-sidebar">
              <div className="p-3 mb-3 bg-light rounded">
                <h4 className="font-italic">Qui sommes-nous ?</h4>
                <p className="mb-0">
                  Des gens trop cools
                </p>
              </div>

              {false && (<div className="p-3">
                <h4 className="font-italic">Catégorie</h4>
                <ol className="list-unstyled mb-0">
                  <li><a href="#">March 2014</a></li>
                  <li><a href="#">February 2014</a></li>
                  <li><a href="#">January 2014</a></li>
                  <li><a href="#">December 2013</a></li>
                  <li><a href="#">November 2013</a></li>
                  <li><a href="#">October 2013</a></li>
                  <li><a href="#">September 2013</a></li>
                  <li><a href="#">August 2013</a></li>
                  <li><a href="#">July 2013</a></li>
                  <li><a href="#">June 2013</a></li>
                  <li><a href="#">May 2013</a></li>
                  <li><a href="#">April 2013</a></li>
                </ol>
              </div>)}

              <div className="p-3">
                <h4 className="font-italic">Nous retrouver dans le multiverse</h4>
                <ol className="list-unstyled">
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Instagram</a></li>
                </ol>
              </div>
            </aside>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
