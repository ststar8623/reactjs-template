import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})
class Testing extends Component {
  render() {
    const { user, tweets } = this.props;

    const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>);
    return (
      <div>
        <h1>This is inside Testing component</h1>
        <h1>{user.name}</h1>
        <ul>{mappedTweets}</ul>
      </div>
    );
  }
}

export default Testing;