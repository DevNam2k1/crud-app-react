import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUsers';
import Container from 'react-bootstrap/Container';
import ModalAddNew from './components/ModalAddNew';
import { useState } from 'react';

function App() {

  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false)

  const hadleClose = () => {
    setIsShowModalAddNew(false)
  }

  return (
    <>
      <div className='app-container'>
        <Header />
        <Container>
          <div className='my-5'>
            <span><h4>List Users</h4></span>
            <div class="col-md-12 bg-light text-center">
              <button type="button" class="btn btn-success"
              onClick={() => setIsShowModalAddNew(true)}
              >ADD NEW USER</button>
            </div>
          </div>
          <TableUsers />
        </Container>

        <ModalAddNew show={isShowModalAddNew} handleClose={hadleClose} />
      </div>
    </>
  );
}

export default App;
