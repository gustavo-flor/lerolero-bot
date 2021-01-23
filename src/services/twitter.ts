import Twitter from 'twitter';
import lerolero from 'lerolero';

import { 
  TWITTER_CONSUMER_KEY, 
  TWITTER_CONSUMER_SECRET, 
  TWITTER_ACCESS_TOKEN_KEY, 
  TWITTER_ACCESS_TOKEN_SECRET 
} from '../environment';

// const client = new Twitter({
//   consumer_key: TWITTER_CONSUMER_KEY,
//   consumer_secret: TWITTER_CONSUMER_SECRET,
//   access_token_key: TWITTER_ACCESS_TOKEN_KEY,
//   access_token_secret: TWITTER_ACCESS_TOKEN_SECRET,
// });

const tweetar = async () => {
  try {
    const status = lerolero() as string;

    console.log(status);
    // await client.post('statuses/update', { status });
  } catch (e) {
    console.log('Erro: ', e);
  }
}

export default async () => {
  await tweetar(); 

  const tweetInterval = 3600000;
  setInterval(async () => await tweetar(), tweetInterval);
}