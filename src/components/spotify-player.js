import * as React from "react";

function SpotifyPlayer(props) {
  return (
    <iframe
      title="Latest episode player from Spotify"
      src={`https://open.spotify.com/embed-podcast/episode/${props.URI.split(
        /:/
      ).pop()}`}
      width="100%"
      height="232"
      loading="lazy"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  );
}

export default SpotifyPlayer;
