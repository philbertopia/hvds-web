import Layout from '../components/Layout';
import "@/styles/globals.css";
import { ChatProvider } from '../context/ChatContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChatProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChatProvider>
  );
}

export default MyApp;
