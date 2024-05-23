import { Hero } from './components/hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'React Modal',
  description: 'A react component unified modal ✨',
  openGraph: {
    title: 'React Modal',
    description: 'A react component unified modal ✨',
    url: 'https://rc-unmodal.vercel.app/',
    siteName: 'React Modal',
    locale: 'en-US',
    type: 'website',
  },
  themeColor: '#000000',
};

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}
