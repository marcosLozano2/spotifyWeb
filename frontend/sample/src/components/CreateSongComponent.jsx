import React, { Component } from 'react'

import SongService from '../services/SongService';
class CreateSongComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // step 2
            id: this.props.match.params.id,
            songName: '',
            artistName: '',
            duration: ''
        }
        this.changeSongNameHandler = this.changeSongNameHandler.bind(this);
        this.changeArtistNameHandler = this.changeArtistNameHandler.bind(this);
        this.saveOrUpdateSong = this.saveOrUpdateSong.bind(this);
    }
    // step 3
    componentDidMount() {
        // step 4
        if (this.state.id === '_add') {
            return
        } else {
            SongService.getsongById(this.state.id).then((res) => {
                let song = res.data;
                this.setState({
                    songName: song.songName,
                    artistName: song.artistName,
                    duration: song.duration
                });
            });
        }
    }
    saveOrUpdateSong = (e) => {
        e.preventDefault();
        let song = { songName: this.state.songName, 
            artistName: this.state.artistName, duration: this.state.duration };
        console.log('song => ' + JSON.stringify(song));
        // step 5
        if (this.state.id === '_add') {
            SongService.createSong(song).then(res => {
                this.props.history.push('/songs');
            });
        } else {
            SongService.updateSong(song, this.state.id).then(res => {
                this.props.history.push('/songs');
            });
        }
    }
    changeSongNameHandler = (event) => {
        this.setState({ songName: event.target.value });
    }
    changeArtistNameHandler = (event) => {
        this.setState({ artistName: event.target.value });
    }
    changeDurationHandler = (event) => {
        this.setState({ duration: event.target.value });
    }
    cancel() {
        this.props.history.push('/songs');
    }
    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Song</h3>
        } else {
            return <h3 className="text-center">Update Song</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Song Name: </label>
   <input placeholder="Song name" name="songName" className="form-control"
       value={this.state.songName} onChange={this.changeSongNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Artist Name: </label>
   <input placeholder="Artist Name" name="artistName" className="form-control"
       value={this.state.artistName} onChange={this.changeArtistNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Duration: </label>
    <input placeholder="Duration" name="duration" className="form-control"
             value={this.state.duration} onChange={this.changeDurationHandler} />
                                    </div>
   <button className="btn btn-success" onClick={this.saveOrUpdateSong}>
             Save</button>
   <button className="btn btn-danger" onClick={this.cancel.bind(this)} 
              style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreateSongComponent