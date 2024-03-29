import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ExploreModel =(props)=> {

const {toggleExploreModel, exploreModel} = props
    return (
            <div>
            <Modal isOpen={exploreModel} toggle={toggleExploreModel} >
                <ModalHeader toggle={toggleExploreModel}>Explore New Things through gaming!</ModalHeader>
                <ModalBody>
                    Are You Sure Want to Explore?
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={toggleExploreModel}>
                    Proceed
                </Button>{' '}
                <Button color="secondary" onClick={toggleExploreModel}>
                    Cancel
                </Button>
                </ModalFooter>
            </Modal>
            </div>
        );
}

export default ExploreModel;