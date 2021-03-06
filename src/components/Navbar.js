import React from "react";
import { Link } from "gatsby";
import spotify from "../img/spotifybadge.svg";
import google from "../img/googlebadge.svg";
import apple from "../img/applebadge.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faPodcast,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-spaced has-shadow"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container is-max-desktop">
          <div className="navbar-brand ">
            <Link to="/" className="navbar-item has-text-primary " title="Logo">
              <svg
                height="2.25rem"
                viewBox="0 0 1000 1000"
                width="2.25rem"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m453.536 447.294c-.7.912-1.384 1.849-2.049 2.839a63.141 63.141 0 0 0 -4.436 7.722 58.925 58.925 0 0 0 -5.851 28.225 63.94 63.94 0 0 0 18.1 41.69c36.53 33.4 77.341-6.069 75.609-43.753 1.965-27.393-17.255-48.888-39.241-53.435-14.629-3.025-30.478 1.462-42.132 16.712z" />
                <path d="m660.493 424.75c4.087-21.111-17.426-30.789-35.186-26.31-.37.058-.668.577-1.089.963 2.725 13.843 5.451 27.693 8.276 42.048 11.296-1.569 24.763-4.318 27.999-16.701z" />
                <path d="m468.432 1c-290.201 16.348-510.192 290.968-461.713 577.79 27.7 179.466 157.944 334.8 329.987 392.86 292.614 106.361 624.074-98.975 659.045-408.53 40.655-309.746-216.106-581.701-527.319-562.12zm94.532 127.36a431.553 431.553 0 0 1 47.72 4.778c2.375.276 3.557 1.224 3.983 3.589 1.9 12.956 5.637 25.68 6.53 38.725l-34.466-3.57c8.973 49.111 18.336 97.358 27.451 146.032l-42.727 3.175c-9.405-49.72-18.779-99.27-28.185-149-12.054-.472-23.617 1.58-35.744 2.213-2.722-14.383-5.4-28.518-8.194-43.3a368.277 368.277 0 0 1 63.632-2.646zm18.091 354.183c.228 55.882-39.671 105.3-95.491 108.345-.234.012-.466.031-.7.042-57.556 2.247-91.285-61.6-88.5-112.779 3.877-61.732 42.585-93.866 83.576-97.55.249-.023.5-.038.746-.059.445-.036.89-.074 1.335-.1.645-.043 1.291-.077 1.937-.106l.149-.008c46.684-2.009 94.893 32.627 96.948 102.211zm-90.784-350.395c12.325 65.075 24.6 129.868 36.929 194.982l-43.2 8.252c-12.443-65.025-24.71-129.8-37.193-194.939a388.507 388.507 0 0 1 43.464-8.295zm-165.962 54.952c5.069 22.995 9.186 45.634 14.008 68.474l58.575-22.643-14.084-72.441a427.486 427.486 0 0 1 41.633-14.177c1.715 3.21 37 185.181 37.621 194.1l-42.273 11.132-15.173-78.645c-20.072 6.255-39.284 13.14-58.739 21 4.909 25.333 9.786 50.5 14.729 76.013l-39.977 14.108c-11.758-58.238-23.466-116.231-35.252-174.6 12.714-7.911 25.271-15.34 38.932-22.321zm-4.224 438.428-34.706-182.6c28.606-9.665 57.239-18.89 86.664-27.845 2.744 14.407 5.356 28.121 8.058 42.31l-48.351 13.925 5.749 30.27c3.107-.58 6.116-1.243 9.088-1.941q2.268-.534 4.508-1.1 4.21-1.068 8.368-2.213c3.085-.85 6.176-1.721 9.3-2.589q2.44-.68 4.927-1.347c2.528-.683 5.082-1.36 7.709-2.01 3.01 14.2 5.5 28.195 8.136 42.742l-43.978 10.928c4.64 24.888 9.226 49.491 13.906 74.6-13.029 3.027-26.018 4.964-39.378 6.874zm182.315 171.358a75.615 75.615 0 0 1 -39.018 53.624c-20.824 10.924-46.911 11.548-71.138-4.755l9.814-44.323c12.869 9.858 24.374 13.15 33.632 12.518a26.953 26.953 0 0 0 16.007-6.344c.067-.058.137-.113.2-.172.152-.134.3-.275.443-.413s.308-.281.456-.426c.073-.071.139-.146.211-.218 4.5-4.541 6.751-10.482 6.146-16.059 0-.043-.013-.086-.018-.129-.036-.31-.078-.62-.132-.928-.923-5.258-4.466-10.081-11.139-12.94-17.324-5.54-37.406-2.142-52.642-13.615a42.223 42.223 0 0 1 -10.973-12.9c-5.173-9.072-8.019-20.25-8.887-31.372a88.456 88.456 0 0 1 2.054-27.76c.128-.513.254-1.028.392-1.529a50.281 50.281 0 0 1 19.174-29.345c.1-.075.2-.146.3-.221q.964-.71 1.962-1.377a63.3 63.3 0 0 1 14.409-7.132c.071-.025.141-.052.213-.076.963-.334 1.937-.644 2.919-.939q1.343-.4 2.708-.757c17.092-4.445 36.467-3.225 52.677 2.56-3.1 14.5-6.148 28.772-9.3 43.538-15.715-8.725-28.972-7.01-36.963-1.349a18.594 18.594 0 0 0 -7.947 11.96c-1.071 6.779 2.7 13.805 13.026 17.2l.245.034c9.041 1.287 18.525 2.008 27.5 3.491 12.532 2.043 24.012 5.557 31.909 14.292 4.517 4.959 7.848 11.6 9.512 20.578.013.07.03.133.043.2a76.08 76.08 0 0 1 2.205 35.084zm25.564 24.128c-2.984-11.187-5.7-22.561-8.223-34.067q-2.25-10.25-4.313-20.631c-.209-1.043-.423-2.082-.631-3.127q-2.033-10.252-3.947-20.592-1.766-9.472-3.48-18.987c-3.44-19.022-6.8-38.12-10.428-57.066-2.055-10.725-4.191-21.4-6.487-31.99l42.545-14.041 35.523 180.287zm166.742-101.306a6.352 6.352 0 0 1 -3.415 1.592 5.778 5.778 0 0 1 -3.56-1.13c-12.824-8.345-25.842-15.87-38.552-24.455-4.386 12.211-8.573 24.445-12.717 36.7-3.515 10.39-7 20.791-10.545 31.2a11.666 11.666 0 0 1 -5.5 6.957c-15.361 8.231-29.548 18.736-45.437 25.83 13.572-40.794 28.046-81.134 42.869-121.818a864.927 864.927 0 0 1 -67.405-60.105l51.657-18.807 32.535 33.041c3.233-8.974 5.879-18.04 8.457-27.137 1.905-6.724 3.774-13.465 5.811-20.2a7.675 7.675 0 0 1 5.275-5.645c15.31-5.593 29.785-11.9 45.268-17.212-2.984 7.945-5.891 15.735-8.752 23.449q-1.83 4.937-3.637 9.836c-2.472 6.7-4.918 13.376-7.356 20.066q-.942 2.583-1.882 5.171-1.625 4.475-3.251 8.973c-2.861 7.916-5.73 15.91-8.64 24.071 5.112 3.508 10.206 6.846 15.331 10.02 1.95 1.208 3.9 2.4 5.865 3.557q6.406 3.779 12.95 7.181c1.93 1 3.879 1.965 5.837 2.914q3.024 1.466 6.1 2.848 1.668.748 3.357 1.472a214.417 214.417 0 0 0 21.638 7.971c-13.571 12.01-28.319 22.157-42.301 33.66zm-1.189-197.836a8.115 8.115 0 0 1 -4.055.388 6.984 6.984 0 0 1 -3.657-2.233c-8.5-9.112-17.353-17.92-26.073-26.841q-4.359-4.459-8.658-8.974c-3.813-4.018-7.569-8.087-11.224-12.242l-1.19.648c4.117 20.526 8.235 41.052 12.48 62.213l-41.449 13.253c-12.071-60.275-23.684-120.167-35.191-180.484 20.856-3.271 41.164-4.628 62.061-6.553a64.308 64.308 0 0 1 37.434 7.931c32.438 16.83 42.958 74.419 4.062 89.716a752 752 0 0 0 59.233 49.9c-14.575 4.958-29.165 8.555-43.773 13.278z" />
              </svg>
              <span className="title is-7 is-caps has-text-primary pl-2">
                Hit For Six
              </span>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              role="button"
              title="Menu"
              tabIndex={0}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              onKeyDown={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <a
                className="navbar-item"
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL2hpdGZvcnNpeC9mZWVkLnhtbA?sa=X&ved=0CAMQ4aUDahcKEwjojIXe37btAhUAAAAAHQAAAAAQAQ&hl=en-GB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img
                    src={google}
                    alt="Google Podcasts"
                    width="110px"
                    height="34px"
                  />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://open.spotify.com/show/3fuWZQQGODHOV2b81Df61D?si=4sE-ncl6QEqAcosIPnE5RQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img
                    src={spotify}
                    alt="Spotify"
                    width="116px"
                    height="28px"
                  />
                </span>
              </a>

              <a
                className="navbar-item"
                href="https://podcasts.apple.com/us/podcast/hit-for-six/id1507432062"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img
                    src={apple}
                    alt="Apple Podcasts"
                    width="115px"
                    height="28px"
                  />
                </span>
              </a>
            </div>
            <div className="navbar-end has-text-centered has-text-weight-semibold">
              <Link className="navbar-item" to="/podcast">
                <span className="icon has-text-primary">
                  <FontAwesomeIcon icon={faPodcast} />
                </span>
                <span>&nbsp;Podcast</span>
              </Link>
              <Link className="navbar-item" to="/blog">
                <span className="icon has-text-primary">
                  <FontAwesomeIcon icon={faNewspaper} />
                </span>
                <span>&nbsp;Blog</span>
              </Link>
              <Link className="navbar-item" to="/about">
                <span className="icon has-text-primary">
                  <FontAwesomeIcon icon={faInfoCircle} />
                </span>
                <span>&nbsp;About</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
