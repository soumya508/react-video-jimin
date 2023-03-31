import {Component} from 'react'

import ReactPlayer from 'react-player'

import './index.css'

const videoURL = 'https://youtu.be/EPHzD5nieRk'

class VideoPlayer extends Component {
  state = {
    isPlaying: false,
  }

  onClickPlay = () => {
    this.setState(prevState => ({isPlaying: !prevState.isPlaying}))
  }

  render() {
    const {isPlaying} = this.state
    const btnText = isPlaying ? 'Pause' : 'Play'

    return (
      <div className="video-container">
        <h1 className="heading">Video Player</h1>
        <h1 className="heading2">
          Jimin at SBS Music Awards short and sweet Interview!!
        </h1>
        <div className="responsive-container">
          <ReactPlayer url={videoURL} controls volume={1} playing={isPlaying} />
        </div>
        <button type="button" className="button" onClick={this.onClickPlay}>
          {btnText}
        </button>
      </div>
    )
  }
}

export default VideoPlayer
