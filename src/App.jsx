import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Layout from './components/Layout';
import { CollectionPage } from './pages/CollectionPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import TermsConditionsPage from './pages/TermsConditionsPage.jsx';
import { ReturnPolicyPage } from './pages/ReturnPolicyPage.jsx';
import Privacy from './pages/Privacy.jsx';
import { CartPage } from './pages/CartPage.jsx';
import { CheckoutPage } from './pages/CheckoutPage.jsx';
import { CartProvider } from './CartProvider.jsx';
import { ScrollToTop } from './ScrollToTop.jsx';



export default function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="collection" element={<CollectionPage />} />
         <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
         <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path='privacy-policy' element={<Privacy />} />
        <Route path='return-policy' element={<ReturnPolicyPage />} />
        <Route path="terms-and-conditions" element={<TermsConditionsPage />} />  
        </Route>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}