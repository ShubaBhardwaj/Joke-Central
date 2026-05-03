import React from 'react';

const JokeCard = ({ joke }) => {
  return (
    <div className="joke-card">
      <div className="joke-id">{joke.id}</div>
      <div className="joke-content">
        "{joke.content}"
      </div>
      <div className="joke-footer">
        <div className="joke-categories">
          {joke.categories && joke.categories.length > 0 ? (
            joke.categories.map((category, index) => (
              <span key={index} className="joke-category">
                {category}
              </span>
            ))
          ) : (
            <span className="no-category">Uncategorized</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default JokeCard;
