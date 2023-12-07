import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';


export const OAuth = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)
      const result = await signInWithPopup(auth, provider)

      const { displayName, email, photoURL } = result.user

      const res = await fetch('/api/auth/google', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: displayName, email: email, photo: photoURL })
      })
      const data = await res.json()
      console.log(data);
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log('Could no sign in with google', error)
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-red-700 btn_auth"
    >
      Continue with Google
    </button>
  );
}
