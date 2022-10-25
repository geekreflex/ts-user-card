import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import Modal from '../components/Modal';
import { closeModal, openModal } from '../features/modalSlice';

const Home = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.modal);
  return (
    <div>
      <button onClick={() => dispatch(!isOpen ? openModal() : closeModal())}>
        Show Modal
      </button>
      <h2>Welcome to Typescript</h2>
      {isOpen && <Modal />}
    </div>
  );
};

export default Home;
