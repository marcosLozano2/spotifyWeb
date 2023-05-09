import React, { Component } from 'react';
import SongService from '../services/SongService';

class ListSongsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      role: props.location.state ? props.location.state.role : 'user'
    }
  }

  componentDidMount() {

    SongService.getSongs().then((res) => {
      this.setState({ songs: res.data });
    });
  }

  deleteSong(id) {
    SongService.deleteSong(id).then(res => {
        this.setState({ songs: this.state.songs.
                            filter(song => song.id !== id) });
    });
}
viewSong(id) {
    this.props.history.push(`/view-song/${id}`);
}
editSong(id) {
    this.props.history.push(`/add-song/${id}`);
}
componentDidMount() {
    SongService.getSongs().then((res) => {
        this.setState({ songs: res.data });
    });
}
addSong() {
    this.props.history.push('/add-song/_add');
}
  render() {
    const { isAdmin } = this.state;

    return (
      <div>
        <h2 className="text-center">Song List</h2>
        <br />
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Song name</th>
                <th> Artist</th>
                <th> Duration</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.songs.map(
                  song => (
                    <tr key={song.id}>
                      <td> {song.songName} </td>
                      <td> {song.artistName} </td>
                      <td> {song.duration}</td>
                      <td>
                        {this.state.role === 'admin' && (
                          <>
                            <button
                              onClick={() => this.editSong(song.id)}
                              className="btn btn-info"
                            >
                              Update
                            </button>
                            <button
                              style={{ marginLeft: "10px" }}
                              onClick={() => this.deleteSong(song.id)}
                              className="btn btn-danger"
                            >
                              Delete
                            </button>
                          </>
                        )}
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => this.viewSong(song.id)}
                          className="btn btn-info"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  )
                )
              }
            </tbody>
          </table>
          {this.state.role === 'admin' && (
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => this.addSong()}
              className="btn btn-info"
            >
              Add
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default ListSongsComponent;
