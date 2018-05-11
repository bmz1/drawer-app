import React, { Component } from "react";
import TeamItems from "./TeamItems";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  marginRight: 12,
};

class Teams extends Component {

  render() {
    return (
      <div className="PlayerAddMain">
        <div className="header">
          <form onSubmit={this.props.teamsubmit}>
            
              <TextField
                hintText="Adj hozzá egy csapatot"
                floatingLabelText="Csapat"
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
        <TeamItems entries={this.props.teamentries}
          delete={this.props.teamdelete} />
      </div>
    );
  }
}

export default Teams;
