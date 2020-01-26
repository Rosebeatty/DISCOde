import React, { Component } from 'react'
import { render } from 'react-dom'
import AudioPlayer from 'react-playlist-player'
import { withAuth } from '../lib/AuthProvider'

class Player extends Component {
  state = {
    currentPlayList: {}
  }

  loadPlayList = () =>
    this.setState({
      currentPlayList: {
        playlistCoverUrl: 'horizon.png',
        playlistName: 'On the Horizon',
        bandName: 'Rise & Tulord Scroll',
        songs: [
          {
            position: '1',
            songName: 'On the Horizon',
            songUrl: 'OnthehorizonFull.mp3'
          },
          {
            position: '2',
            songName: 'bar',
            songUrl: 'path/to/songUrl'
          },
          {
            position: '3',
            songName: 'baz',
            songUrl: 'path/to/songUrl'
          }
        ],
        type: 'album'
      }
    })

  render() {
    return (
      <div className={'Demo'}>
        <button className={'Demo__load-btn'} onClick={this.loadPlayList}>
          Play On the Horizon
        </button>
        <AudioPlayer currentPlayList={this.state.currentPlayList} onToggle={({audioPlaying}) => console.log({audioPlaying})}/>
      </div>
    )
  }
}

// render(<Player />, document.querySelector('#demo'))

export default withAuth(Player)