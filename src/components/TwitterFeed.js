import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { FaTwitter, FaHeart, FaRetweet } from "react-icons/fa"

const TweetStyles = styled.div`
  padding: 0.4rem 0.8rem;
  margin: 0.6rem;
  div {
    border-bottom: 1px solid var(--grey);
  }
  div:last-child {
    border-bottom: none;
  }
  ul {
    list-style: none;
    text-align: right;
  }
  li {
    display: inline;
    margin: 3rem;
    position: relative;
  }
  li a {
    color: var(--black);
  }
  li a:hover {
    text-decoration: none;
    svg {
      transform: scale(1.3);
    }
  }
  svg {
    transition: transform 0.2s ease-in-out;
  }
  a {
    text-decoration: none;
    color: var(--blue);
  }

  a:hover {
    text-decoration: underline;
  }
  .likes {
    color: #e0245e;
  }
  .retweet {
    color: #3ebf63;
  }
  p {
    font-size: 95%;
  }
  .tweet-caption {
    color: var(--black);
    font-style: italic;
  }
  @media only screen and (max-width: 800px) {
    .tweet:last-child {
      display: none;
    }
  }
`

export default function TweetFeed({ items }) {
  const data = useStaticQuery(graphql`
    query {
      tweets: allTwitterStatusesUserTimelineLatestTweets(limit: 3) {
        nodes {
          id
          created_at
          favorite_count
          retweet_count
          full_text
          id_str
        }
      }
    }
  `)

  const tweetsArray = data.tweets.nodes

  return (
    <TweetStyles>
      <h2>
        <span className="mark">
          <FaTwitter /> @Design4TheWeb Tweets
        </span>
      </h2>
      {tweetsArray.map(tweet => (
        <div className="tweet" key={tweet.id}>
          <p className="tweet-caption">
            <a
              href={"https://twitter.com/Design4TheWeb/status/" + tweet.id_str}
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
              @Design4TheWeb Tweeted on{" "}
              {tweet.created_at.split(" ")[0] +
                ", " +
                tweet.created_at.split(" ")[1] +
                " " +
                +tweet.created_at.split(" ")[2]}
            </a>
          </p>
          <p>{tweet.full_text}</p>
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
    </TweetStyles>
  )
}
