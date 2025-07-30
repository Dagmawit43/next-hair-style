import '../styles/globals.css';
import Navbar from '../components/Navbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">
        <Component {...pageProps} />
      </main>
    </>
  );
}
