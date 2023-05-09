import React, { Component } from 'react'

import SongService from '../services/SongService';
class UpdateSongComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            songName: '',
            artistName: '',
            duration: ''
        }
        this.changesongNameHandler = this.changesongNameHandler.bind(this);
        this.changeartistNameHandler = this.changeartistNameHandler.bind(this);
        this.updateSong = this.updateSong.bind(this);
    }
    componentDidMount() {
        SongService.getsongById(this.state.id).then((res) => {
            let song = res.data;
            this.setState({
                songName: song.songName,
                artistName: song.artistName,
                duration: song.duration
            });
        });
    }
    updateSong = (e) => {
        e.preventDefault();
        let song = { songName: this.state.songName, 
            artistName: this.state.artistName, duration: this.state.duration };
        console.log('song => ' + JSON.stringify(song));
        console.log('id => ' + JSON.stringify(this.state.id));
        SongService.updateSong(song, this.state.id).then(res => {
            this.props.history.push('/songs');
        });
    }
    changesongNameHandler = (event) => {
        this.setState({ songName: event.target.value });
    }
    changeartistNameHandler = (event) => {
        this.setState({ artistName: event.target.value });
    }
    changedurationHandler = (event) => {
        this.setState({ duration: event.target.value });
    }
    cancel() {
        this.props.history.push('/songs');
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Song</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> First Name: </label>
    <input placeholder="First Name" name="songName" className="form-control"
        value={this.state.songName} onChange={this.changesongNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Last Name: </label>
      <input placeholder="Last Name" name="artistName" className="form-control"
         value={this.state.artistName} onChange={this.changeartistNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email Id: </label>
    <input placeholder="Email Address" name="duration" className="form-control"
          value={this.state.duration} onChange={this.changedurationHandler} />
                                    </div>
   <button className="btn btn-success" onClick={this.updateSong}>Save</button>
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
export default UpdateSongComponent