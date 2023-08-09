const fragment =
      <React.Fragment>
            <h1 className="heading">About React Fragments</h1>
            <p className="aboutReactFragments">
                  It is a way to define nested elements inside one parent without creating extra wrapper.
            </p>
            <ul className="types" type="square">
                  <li> Using ReactFragment</li>
                  <li> Using Empty Fragment</li>
            </ul>
      </React.Fragment>;
ReactDOM.createRoot(document.getElementById('root')).render(fragment);