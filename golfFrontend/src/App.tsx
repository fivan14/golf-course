import {useState} from 'react'
import Login from './components/Login/Login'
import Modal from './ui/Modal';
import Navbar from './components/Navbar/Navbar'
import { useModal } from "./ui/ModalContext";

const App = () => {
  return (
    <>
    <Navbar/>
      <Modal>
        <Login></Login>
      </Modal>
    </>
  );
}

export default App;
