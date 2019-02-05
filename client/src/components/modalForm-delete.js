import React, { Component } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

class ModalForm extends Component {
  state = { modalOpen: false };

  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  handleRemoveAndClose = () => {
    this.setState({ modalOpen: false });
    //props.onRemove from EditPage
    this.props.onRemove();
  };

  render() {
    return (
      <div>
        <Modal
          trigger={
            <Button onClick={this.handleOpen} color={"red"}>
              Delete
            </Button>
          }
          open={this.state.modalOpen}
          onClose={this.handleClose}
          basic
          size={"small"}
        >
          <Header icon="warning" content="Delete Item" />
          <Modal.Content>
            <p>Are you sure to delete this item?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button color="red" onClick={this.handleRemoveAndClose}>
              <Icon name="remove" /> Remove
            </Button>
            <Button color="green" onClick={this.handleClose}>
              <Icon name="checkmark" /> Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default ModalForm;
