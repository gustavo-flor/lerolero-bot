import getRandomItem from '../../utils/getRandomItem';
import sentences from './sentences';

const lerolero = () => {
  const type = getRandomItem(Object.keys(sentences)) as string;

  const [
    introduction, 
    development, 
    complement, 
    conclusion
  ] = sentences[type];

  return (
    getRandomItem(introduction) +
    getRandomItem(development) +
    getRandomItem(complement) +
    getRandomItem(conclusion)
  );
}  

export default lerolero;
