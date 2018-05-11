import React, { Component } from "react";
//import MobileTearSheet from 'https://raw.githubusercontent.com/callemall/material-ui/master/docs/src/app/components/MobileTearSheet.js';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import Avatar from 'material-ui/Avatar';

class TeamItems extends Component {
  constructor(props) {
    super(props);

    this.createTeams = this.createTeams.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createTeams(item) {

    return <div key={item.key}>
      <ListItem primaryText={item.text}
        onClick={() => this.delete(item.key)}
        leftAvatar={<Avatar src={`https://robohash.org/${item.key}.png`} />}
      />
      <Divider />
    </div>

  }


  render() {
    var teamEntries = this.props.entries;
    var listItems = teamEntries.map(this.createTeams);

    return (

      

        <List>
          {listItems}

        </List>

      
    );
  }
};

export default TeamItems;
