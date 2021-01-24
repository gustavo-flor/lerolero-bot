import marxist from './marxist';
import developer from './developer';
import psychoanalyst from './psychoanalyst';

interface SentenceGroup {
  [key: string]: string[][]
}

const sentences: SentenceGroup = {
  marxist,
  developer,
  psychoanalyst
}

export default sentences;
