import React, { Component } from 'react'
import SongService from '../services/SongService'
class ViewSongComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            song: {}
        }
    }
    componentDidMount() {
        SongService.getsongById(this.state.id).then(res => {
            this.setState({ song: res.data });
        })
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View song Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> song Name: </label>
                            <div> {this.state.song.songName}</div>
                        </div>
                        <div className="row">
                            <label> song Artist: </label>
                            <div> {this.state.song.artistName}</div>
                        </div>
                        <div className="row">
                            <label> song Duration: </label>
                            <div> {this.state.song.duration}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ViewSongComponent