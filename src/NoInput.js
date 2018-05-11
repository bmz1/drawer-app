import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


/**
* Dialog with action buttons. The actions are passed in as an array of React objects,
* in this example [FlatButtons](/#/components/flat-button).
*
* You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
*/
export default class NoInput extends React.Component {


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
          open={this.props.noinput}
          onRequestClose={this.props.handleClose}
        >
          Hiba! Adj meg egy nevet!
        </Dialog>


      </div>
    );
  }
}
