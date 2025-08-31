import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import data from '../gfg-showcase/public/data.json';

export default function DetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const item = data.find((entry) => entry.slug === slug);

  if (!item) return <p className="text-center mt-10">Loading...</p>;

  return (
    <>
      <Navbar />
      <main className="px-6 py-10 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gfgGreen mb-4">{item.title}</h1>
        <p className="text-base mb-6">{item.description}</p>

        {item.content && (
          <ReactMarkdown className="prose dark:prose-invert">{item.content}</ReactMarkdown>
        )}
      </main>
      <Footer />
    </>
  );
}