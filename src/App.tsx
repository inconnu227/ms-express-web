import { Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GridBackground } from '@/components/ui/GridBackground';
import { HomePage } from '@/pages/Home';
import { DownloadPage } from '@/pages/Download';
import { ContactPage } from '@/pages/Contact';
import { TermsPage } from '@/pages/Terms';
import { PrivacyPage } from '@/pages/Privacy';

export default function App() {
  return (
    <>
      <GridBackground />
      <Navbar />
      <main className="relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legal/terms" element={<TermsPage />} />
          <Route path="/legal/privacy" element={<PrivacyPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}