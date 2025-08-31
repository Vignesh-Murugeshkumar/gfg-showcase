import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import data from '../gfg-showcase/public/data.json';

export default function Home() {
  const [query, setQuery] = useState('');

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <main className="px-6 py-10 max-w-5xl mx-auto">
        <SearchBar query={query} setQuery={setQuery} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredData.map((item) => (
            <Card key={item.slug} {...item} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}