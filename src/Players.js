import React, { Component } from "react";
import PlayerItems from "./PlayerItems";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  marginRight: 12,
};

class Players extends Component {

  render() {
    return (
      <div className="PlayerAddMain">
        <div className="header">
          <form onSubmit={this.props.playersubmit}>
            
              <TextField
                hintText="Adj hozzá egy játékost"
                floatingLabelText="Játékos"
                floatingLabelFixed={true}
                onChange={this.props.onChange}
                value={this.props.value}
                disabled={this.props.disabled}
              />
           
              <div>
                <RaisedButton
                  label="Hozzáadás"
                  type="submit"
                  primary={true}
                  style={style}
                  disabled={this.props.disabled}
                />
              </div>
           
          </form>
        </div> <br />
        <PlayerItems entries={this.props.playerentries}
          delete={this.props.playerdelete} />
      </div>
    );
  }
}

export default Players;
