import React, { Component } from "react";
import Players from './Players';
import Teams from './Teams';
import Match from './Match';
import './index.css';
import DialogAlert from './DialogAlert';
import NoInput from './NoInput';
import RaisedButton from 'material-ui/RaisedButton';
import AppBarTop from './AppBar.js'

class Drawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playeritems: [],
      teamitems: [],
      showResult: false,
      open: false,
      noinput: false,
      playervalue: '',
      teamvalue: ''
    };

    this.addPlayer = this.addPlayer.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);
    this.addTeam = this.addTeam.bind(this);
    this.deleteTeam = this.deleteTeam.bind(this);
    this._onButtonClick = this._onButtonClick.bind(this);
    this._reset = this._reset.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.noInputClose = this.noInputClose.bind(this);
    this.handlePlayerValue = this.handlePlayerValue.bind(this);
    this.handleTeamValue = this.handleTeamValue.bind(this);

  }

  addPlayer(event) {
    event.preventDefault();
    if (this.state.playervalue !== "") {
      
        var newItem = {
          text: this.state.playervalue,
          key: Date.now()
        };


        this.setState((prevState) => {
          return {
            playeritems: prevState.playeritems.concat([newItem])
          };

        });

        this.setState({ playervalue: '' });

        console.log(this.state.playeritems);


      } 
    else {
      this.setState({ noinput: true });
    }
  }

  deletePlayer(key) {
    if (!this.state.showResult) {
      var filteredItems = this.state.playeritems.filter(
        function (item) {
          return (item.key !== key);
        })

      this.setState({
        playeritems: filteredItems
      });
    }
  }

  handlePlayerValue(event) {

    this.setState({ playervalue: event.target.value });

  }

  handleTeamValue(event) {

    this.setState({ teamvalue: event.target.value });

  }

  addTeam(e) {
    e.preventDefault();
    if (this.state.teamvalue !== "") {
      
        var newItem = {
          text: this.state.teamvalue,
          key: Date.now()
        };


        this.setState((prevState) => {
          return {
            teamitems: prevState.teamitems.concat([newItem])
          };


        });
        this.setState({ teamvalue: '' });


        console.log(this.state.teamitems);

      } 

    else {
      this.setState({ noinput: true });
    }
  }

  deleteTeam(key) {
    if (!this.state.showResult) {
      var filteredItems = this.state.teamitems.filter(
        function (item) {
          return (item.key !== key);
        })

      this.setState({
        teamitems: filteredItems
      });
    }
  }

  _onButtonClick() {
    if (this.state.playeritems.length >= 2 && this.state.teamitems.length >= 2 && this.state.playeritems.length === this.state.teamitems.length) {
      this.setState({
        showResult: true,
      });
    } else {
      this.setState({ open: true });
    }
  }


  handleClose = () => {
    this.setState({ open: false });
  };

  noInputClose = () => {
    this.setState({ noinput: false });
  };



  _reset() {

    this.setState({
      showResult: false,
      playeritems: [],
      teamitems: []
    });
  }


  render() {

    var newTeamArray = this.state.teamitems.slice(0);
    var newPlayerArray = this.state.playeritems.slice(0);

    return (
      <div>
        
          <AppBarTop />
        

        <div className="container">


          <h1><span className="bg-dark text-light">Drawer <small>játékos-csapat sorsoló</small></span></h1>

          <div className="row">
            <div className="col">
              <p className="bg-dark text-light">Megadjuk a játékosok nevét, és a kívánt csapatokat.
              A sorsolás gombra kattintva a program véletlenszerűen hozzárendel a játékoshoz egy csapatot. 
              Törléshez kattints a már hozzáadott játékosra vagy csapatra.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Players
                playersubmit={this.addPlayer}
                onChange={this.handlePlayerValue}
                value={this.state.playervalue}
                playerentries={this.state.playeritems}
                playerdelete={this.deletePlayer}
                disabled={this.state.showResult}
              />

            </div>
            <div className="col-md-6">
              <Teams
                teamsubmit={this.addTeam}
                onChange={this.handleTeamValue}
                value={this.state.teamvalue}
                teamentries={this.state.teamitems}
                teamdelete={this.deleteTeam}
                disabled={this.state.showResult}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="d-flex justify-content-center">
              {this.state.showResult ?
                <Match teamprop={newTeamArray} playerprop={newPlayerArray} /> :
                null
              }

            </div>
          </div> <br />
          <div className="d-flex justify-content-center resetdiv">
            
              <RaisedButton type="submit" onClick={this._onButtonClick} label="Eredmény" secondary={true} />
            
          </div>
          
            <div>

              <DialogAlert open={this.state.open} handleClose={this.handleClose} />
            </div>
          

          
            <div>

              <NoInput noinput={this.state.noinput} handleClose={this.noInputClose} />
            </div>
          


          <div className="d-flex justify-content-end resetdiv">
            {this.state.showResult ?
              <button type="submit" className="btn btn-danger btn-lg active" onClick={this._reset}>Reset</button> :
              null
            }
          </div>

        </div>

      </div>



    )
  }
}

export default Drawer;
