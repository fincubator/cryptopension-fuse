import type { NextPage } from 'next';
import Dashboard from './components/Dashboard';
import StickyBanner from './components/StickyBanner'; // Adjust the import path as necessary
//import Circle from './components/Circle';

const Home: NextPage = () => {
  return (
    <div>

      <Dashboard />

      <StickyBanner />
    </div>
  );
};

export default Home;


