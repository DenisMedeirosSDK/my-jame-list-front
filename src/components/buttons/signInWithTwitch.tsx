import { signIn } from 'next-auth/react';
import { FaTwitch } from 'react-icons/fa';

export function SignInWithTwitch() {
  function handleSignInWithTwitch() {
    signIn('twitch');
  }
  return (
    <button
      onClick={handleSignInWithTwitch}
      className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded flex align-middle items-center"
    >
      <figure className="mr-2">
        <FaTwitch size={24} />
      </figure>
      Conectar com Twitch
    </button>
  );
}
