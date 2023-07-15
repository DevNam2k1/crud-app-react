import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createUser } from '../services/UserServices';
import { toast } from 'react-toastify';

const ModalAddNew = (props) => {
    const { show, handleClose , handleUpdateTables} = props;

    const [firstName, setFirstName] = useState();
    const [email, setEmail] = useState();
    const [lastName, setLastName] = useState();

    const handleSaveUser = async () => {
        let res = await createUser(firstName +" "+ lastName, "Developer")
            console.log(">>>>> Checke data: ", res)
        if(res && res.id) {
            handleClose('')
            setEmail('')
            setFirstName('')
            setLastName('')
            handleUpdateTables({first_name: firstName, id: res.id, email:"fake"+ Math.floor(Math.random() * 100)+"@gmail.com", last_name: lastName})
            toast.success("Add a new user successfully!!")
        } else {
            toast.error("Add a new user failed!!!")
        }
    }


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>ADD NEW USER</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div class="mb-3">
                        <label class="form-label">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">First Name</label>
                        <input type="text" className="form-control"
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Last Name</label>
                        <input type="text" className="form-control"
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleSaveUser()}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalAddNew