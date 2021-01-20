import * as React from "react";
import Logo from "../components/logo";
import Play from "../components/icons/play";

function SpotifyPlaceholder(props) {
  return (
    <a href="/" className="box has-background-primary">
      <div className="columns is-vcentered">
        <div className="column is-narrow">
          <div className="box">
            <Logo className="has-text-primary" height="6em" width="6em" />
          </div>
        </div>
        <div className="column has-text-weight-semibold has-text-light">
          <p className="is-size-5">S2 E6 – Controversy Down Under & England in Sri Lanka</p>
          <p className="" style={{ opacity: 0.75 }}>Hit For Six</p>
        </div>
        <div className="column is-2 has-text-light">
          <Play alt="Load Player" className="mr-4" height="3rem" width="3rem" />
        </div>
      </div>
    </a>
  );
}

export default SpotifyPlaceholder;
