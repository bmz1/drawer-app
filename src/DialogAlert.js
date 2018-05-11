import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


/**
* Dialog with action buttons. The actions are passed in as an array of React objects,
* in this example [FlatButtons](/#/components/flat-button).
*
* You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
*/
export default class DialogAlert extends React.Component {


  render() {
    const actions = [
      <FlatButton
        label="Bezárás"
        primary={true}
        onClick={this.props.handleClose}
      />,

    ];

    return (
      <div>

        <Dialog
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.handleClose}
        >
          Legalább 2 csapatot, és 2 játékost hozzá kell adni a sorsoláshoz, valamint a csapatok és a játékosok számának egyenlőnek kell lennie.
        </Dialog>


      </div>
    );
  }
}
