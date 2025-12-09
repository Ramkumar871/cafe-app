import { useState } from 'react';
import Button from '../../ui/Button';
import {useDispatch} from 'react-redux'
import { updateUsername } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();

    if(!username) return
    dispatch(updateUsername(username));
    navigate('/menu')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-3">👋 Welcome! Please enter your name:</p>

      <input
        className="input w-72 mb-8 "
        type="text"
        placeholder="Your first name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
