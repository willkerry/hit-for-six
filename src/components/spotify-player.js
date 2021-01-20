import * as React from "react";

function SpotifyPlayer(props) {
  const title = props.title;
  const uri = props.URI;
  const splitAndPoppedURI = uri.split(/:/).pop();
  const url =
    `https://open.spotify.com/embed-podcast/episode/` + splitAndPoppedURI;

  const srcdoc =
    `<html>

    <head>
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
        <style>
            *,
            *::before,
            *::after {
                box-sizing: inherit;
            }
    
            html {
                font-size: 8px;
            }
    
            body {
                margin: 0;
                padding: 0;
                background: transparent;
                font-size: 2rem;
                -webkit-font-smoothing: antialiased;
                font-family: 'Inter', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            }
    
            a.box {
                position: relative;
                background: #8b0b09;
    
                display: block;
                z-index: 1;
                padding: 2rem;
                cursor: pointer;
                text-decoration: none;
                border-radius: 1rem;
    
            }
    
            a.box::before {
                position: absolute;
                border-radius: 1rem;
                content: '';
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background-image: linear-gradient(141deg, #6f0807 0%, #a70d0b 71%, #b90e0c 100%);
                z-index: -1;
                transition: opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1);
                opacity: 0;
            }
    
            .overlay {
                position: absolute;
                content: '';
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 2;
            }
    
            a.box:hover::before {
                opacity: 1;
            }
    
            .columns {
                display: flex;
                align-items: center;
                margin: -16px;
            }
    
            .column-1 {
                display: block;
                padding: 16px;
                flex: none;
                filter: blur(6px);
            }
    
            .column-2 {
                display: block;
                flex-basis: 0;
                flex-grow: 1;
                flex-shrink: 1;
                cursor: pointer;
                filter: blur(6px);
            }
    
            .title {
                font-weight: bold;
                font-size: 3rem;
                line-height: 4rem;
                margin-bottom: 1.5rem;
    
            }
    
            .artist {
                font-size: 2rem;
                opacity: 0.75;
                cursor: pointer;
                color: rgb(255, 255, 255);
            }
    
            a {
                color: #fff;
            }
    
            .column-3 {
                flex: none;
                margin-right: 1.5rem;
                margin-bottom: 1.5rem;
                display: block;
                padding: 0.75rem;
                margin-top: auto;
                filter: blur(6px);
            }
    
            .art-box {
                background-color: #262626;
                width: 200px;
                height: 200px;
                border-radius: 6px;
                box-shadow: 0 9px 9px 0 rgba(0, 0, 0, 0.1), 0 0 29px 0 rgba(0, 0, 0, 0.1);
                display: block;
            }
    
            .button {
                background-color: #B90E0C;
                color: #fff;
                cursor: pointer;
                justify-content: center;
                padding-bottom: calc(1em - 1px);
                padding-left: 1em;
                padding-right: 1em;
                padding-top: calc(1em - 1px);
                text-align: center;
                align-items: center;
                border: 1px solid transparent;
                border-radius: 4px;
                box-shadow: none;
                font-size: 2rem;
            }
    
            .button:hover {
                background-color: #ad0d0b;
            }
        </style>
    </head>
    
    <body>
        <a href='` +
    url +
    `' class='box'>
            <div class="overlay">
                <div class="button">Load player</div>
            </div>
            <div class='columns'>
                <div class='column-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" class='art-box' width="200" height="200">
                        <circle fill="#b90e0c" cx="100" cy="100" r="64" />
                        <path fill="#fff"
                            d="M115.5 53.4l.4 23.1c-1.1-1-34.6 5.5-38.8 8.7l-4.5-22.4c10.4-8.5 34.8-11.4 42.9-9.4zM77 116.1l-4.4-23.4c11.2-5.8 38.8-11.9 51.3-11.3l6.5 19.7c-13.2 7.2-38.3 13.9-53.4 15zm17.3 30.5c-14.9-1-17.7-22.5-5-28.1 10.9-2.1 14.7-.9 36.4-12.3l5.6 17.2c-14.6 8.1-26.2 22.5-37 23.2z" />
                    </svg>
                </div>
                <div class='column-2'>
                    <div class='title'>` + title + `</div>
                    <div class='artist'>Hit For Six</div>
                </div>
                <div class='column-3'><svg height="40" width="40"
                        style="border-radius:50%;box-shadow:0 2px 4px 0 rgba(0,0,0,.25)">
                        <path
                            d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20zm-3.242-14.066l8.99-5.011a.48.48 0 0 0 0-.846l-8.99-5.01c-.337-.189-.758.046-.758.422V25.51c0 .376.421.61.758.423z"
                            fill="#fff" />
                    </svg></div>
            </div>
        </a>
    </body>
    
    </html>`;
  return (
    <iframe
      title="Latest episode player from Spotify"
      srcdoc={srcdoc}
      src={url}
      width="100%"
      height="232"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
      scrolling="no"
    ></iframe>
  );
}

export default SpotifyPlayer;
