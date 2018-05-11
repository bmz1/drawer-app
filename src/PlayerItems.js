import React, { Component } from "react";
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';




class PlayerItems extends Component {
  constructor(props) {
    super(props);

    this.createPlayers = this.createPlayers.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createPlayers(item) {
    return <div key={item.key}>
      <ListItem primaryText={item.text}
        onClick={() => this.delete(item.key)}
        leftAvatar={<Avatar src={`https://robohash.org/${item.key}.png`} />}
      />
      <Divider />
    </div>
  }


  render() {
    var playerEntries = this.props.entries;
    var listItems = playerEntries.map(this.createPlayers);

    return (
      

        <List>
          {listItems}

        </List>

      
    );
  }
};

export default PlayerItems;