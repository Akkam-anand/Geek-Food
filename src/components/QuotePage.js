import React from 'react';
import QuoteCard from './QuoteCard';
import quotesData from './quotes.json';
import './QuotePage.css';

function QuotePage() {
  return (
    <div className="quote-page">
      {quotesData.map((item) => (
        <QuoteCard
          key={item.id}
          quote={item.quote}
          author={item.author}
        />
      ))}
    </div>
  );
}

export default QuotePage;