import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const LogoutModel =(props)=> {

const {toggleModel, model} = props
    return (
            <div>
            <Modal isOpen={model} toggle={toggleModel} >
                <ModalHeader toggle={toggleModel}>Logout</ModalHeader>
                <ModalBody>
                    Are You Sure Want to logout?
                </ModalBody>
                <ModalFooter>
                <Button color="danger" onClick={toggleModel}>
                    Yes
                </Button>{' '}
                <Button color="secondary" onClick={toggleModel}>
                    Cancel
                </Button>
                </ModalFooter>
            </Modal>
            </div>
        );
}

export default LogoutModel;