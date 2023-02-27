import React from "react";
import "../Styles/LeftMenu.css";
import Track from "../imgs/track.png";
import { BsFillVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";

function TrackList({ trackName, artistName }) {
  return (
    <div className="trackList">
      <div className="top">
        <img src={Track} />
        <p>
          {trackName} <span>{artistName}</span>
        </p>
      </div>

      <div className="bottom">
        <i>
          <BsFillVolumeUpFill/>
        </i>

        <input type="range"/>

        <i>
          <BsMusicNoteList/>
        </i>

        <i>
          <FaDesktop/>
        </i>
      </div>
    </div>
  );
}

export {TrackList};