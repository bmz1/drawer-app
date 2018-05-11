import React, { Component } from "react";
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';


class Match extends Component {

  render() {


    var teamProp = this.props.teamprop;
    var playerProp = this.props.playerprop;
    var randTeam = teamProp.sort(function (a, b) {
      return 0.5 - Math.random();
    });
    var randPlayer = playerProp.sort(function (a, b) {
      return 0.5 - Math.random();
    });


    var result = randPlayer.map((x, i) => [x, randTeam[i]]);
    var showResult = result.map(([a, b]) => <div key={`${a.key}-${b.key}`}>
      <ListItem primaryText={`${a.text} - ${b.text}`}
        leftAvatar={<Avatar src={`https://robohash.org/${a.key}.png`} />}
        rightAvatar={<Avatar src={`https://robohash.org/${b.key}.png`} />}
      />
      <Divider />
    </div>
    )

    return (
      <div className="result">
        <div className="display-4 draw bg-dark text-light">A sorsolás eredménye:</div>
        <ul className="theList text-center result">

          <h3>
            

              <List>
                {
                  showResult
                }

              </List>

            

          </h3>

        </ul>
      </div>
    );
  }
};

export default Match;
