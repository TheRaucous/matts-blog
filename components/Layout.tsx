import { ThemeProvider } from 'next-themes';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <ThemeProvider themes={['light', 'dark', 'blackout']}>
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default Layout;
