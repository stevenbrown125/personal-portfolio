import React from 'react';
import { FaTwitter, FaHeart, FaRetweet } from 'react-icons/fa';

export default function TweetFeed() {
  return (
    <section>
      <h2 className="mark">
        <FaTwitter /> @Design4TheWeb Tweets
      </h2>
      {tweetsArray.map((tweet) => (
        <div className="tweet" key={tweet.id}>
          <p>
            <a
              href={`https://twitter.com/Design4TheWeb/status/${tweet.id_str}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>{' '}
            {tweet.full_text}
          </p>
          <ul>
            <li>
              <a
                href={`https://twitter.com/Design4TheWeb/status/${tweet.id_str}/likes`}
                target="_blank"
                rel="noreferrer"
              >
                <span className="likes">
                  <FaHeart />
                </span>
                {tweet.favorite_count}
              </a>
            </li>
            <li>
              <a
                href={`https://twitter.com/Design4TheWeb/status/${tweet.id_str}/retweets`}
                target="_blank"
                rel="noreferrer"
              >
                <span className="retweet">
                  <FaRetweet />
                </span>
                {tweet.retweet_count}
              </a>
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
}
