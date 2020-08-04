import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function ConfirmModal({ message, show, close, confirm }) {

	return (
    <div className="Modal-wrapper confirm-modal">
      <Modal
          open={show}
      >
        <div className="Modal-body">
          <h2>{ message }</h2>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => confirm()}
            >
              Yeah
            </Button>
            <br/>
            <br/>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                close();
              }}
            >
              Nah
            </Button>
        </div>
      </Modal>
    </div>
	);
}

export default ConfirmModal;