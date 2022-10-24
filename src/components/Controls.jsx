import React from 'react';
import {FaPlay} from "react-icons/fa"
import {IoPlayForward, IoPlayBack} from "react-icons/io5"
import {BsPauseFill} from "react-icons/bs"

function Controls(props) {
  return (
    <div className='controls'>
        <button onClick={() => props.skipSong(false)} className="skipBtn">
            <IoPlayBack />
        </button>
        <button onClick={() => props.setIsPlaying(!props.isPlaying)} className="playBtn">
            {props.isPlaying ? <BsPauseFill />  : <FaPlay />}
        </button>
        <button onClick={() => props.skipSong(true)} className="skipBtn">
            <IoPlayForward />
        </button>
        
        
    </div>
  )
}

export default Controls