import { useState } from 'react';

import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
    setModalIsOpen(true);
    }

    function closeModalHandler() {
    setModalIsOpen(false);
    }

    return (
    <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
        <button className='btn' onClick={deleteHandler}>
            Delete
        </button>
        </div>
        {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
        {modalIsOpen && <Modal text='Are you sure?' onClose={closeModalHandler} />}
    </div>
    );
}

export default Todo;