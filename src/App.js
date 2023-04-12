import './App.css';
import { Sidebar } from './components/Sidebar';
import { AverageRating } from './components/Average-Rating';
import { Reviews } from './components/Reviews';
import { SentimentAnalysis } from './components/Sentiment-Analysis';
import { WebsiteVisitors } from './components/Website-Visitors';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Reviews />
      <AverageRating />
      <SentimentAnalysis />
      <WebsiteVisitors />
    </div>
  );
}

export default App;
