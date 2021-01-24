import Twitter from 'twitter';

import lerolero from './lerolero';

import { 
  TWITTER_BEARER_TOKEN,
  TWITTER_CONSUMER_KEY, 
  TWITTER_CONSUMER_SECRET, 
  TWITTER_ACCESS_TOKEN_KEY, 
  TWITTER_ACCESS_TOKEN_SECRET 
} from '../environments';

const client = new Twitter({
  bearer_token: TWITTER_BEARER_TOKEN,
  consumer_key: TWITTER_CONSUMER_KEY,
  consumer_secret: TWITTER_CONSUMER_SECRET,
  access_token_key: TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: TWITTER_ACCESS_TOKEN_SECRET
});

const tweetar = async () => {
  try {
    const status = await lerolero();

    await client.post('statuses/update', { status });
  } catch (exception) {
    console.error('[ERROR]', exception);
  }
}

export default async () => {
  await tweetar(); 

  const tweetInterval = 3600000;
  setInterval(async () => await tweetar(), tweetInterval);
}