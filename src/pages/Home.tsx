import { useAppDispatch, useAppSelector } from '../app/hooks';
import Modal from '../components/Modal';
import { openModal, closeModal } from '../features/modalSlice';

const Home = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.modal);

  const onOpenModal = () => {
    dispatch(openModal('create_update_user'));
  };

  const onCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <button onClick={!isOpen ? onOpenModal : onCloseModal}>
        {isOpen ? 'Close Modal' : 'Create New User'}
      </button>
      <h2>Welcome to Typescript</h2>
      <Modal />
    </div>
  );
};

export default Home;
