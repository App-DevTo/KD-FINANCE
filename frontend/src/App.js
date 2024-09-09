import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import { ResetPasswordPage, SignUpPage } from './components/authentication/auth';

function App() {
  return (
    <>
      <Navbar />
      <SignUpPage />
      <ResetPasswordPage/>
      <Footer />
    </>
  );
}

export default App;
