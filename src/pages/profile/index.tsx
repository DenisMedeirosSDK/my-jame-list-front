import { useSession } from 'next-auth/react';
import NextLink from 'next/link';
import { FaTwitch } from 'react-icons/fa';
import { Header } from '../../components/header';

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { data: session } = useSession();

//   return {
//     props: {
//       twitchChannel,
//     },
//   };
// };
export default function App() {
  const { data: session } = useSession();
  const twitchChannel = `https://www.twitch.tv/${session?.user?.name}`;

  return (
    <div className="bg-cyberpunk h-screen w-screen bg-no-repeat bg-contain bg-left-top bg-opacity-80">
      <div className="max-w-screen-xl mr-auto ml-auto h-screen">
        <header className="pt-10">
          <Header />
        </header>
        <section>
          <div className="mt-36 flex flex-row">
            <figure className="w-80 h-80">
              <img
                src={session?.user?.image || '/static/images/user.png'}
                alt={session?.user?.name}
                className="w-full h-full rounded-lg"
              />
            </figure>
            <div className="ml-14">
              <h1 className="text-9xl font-bold text-white">
                {session?.user?.name}
              </h1>
              <NextLink href={twitchChannel}>
                <a className="text-white text-2xl flex items-center gap-2">
                  <FaTwitch />
                  <strong>twitch.tv/</strong>
                  {session?.user?.name}
                </a>
              </NextLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
