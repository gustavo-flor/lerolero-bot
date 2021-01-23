import puppeteer from 'puppeteer';

const SENTENCE_SELECTOR = '.sentence';

const getSentence = () => document.querySelector(SENTENCE_SELECTOR)?.textContent ?? '';

export default async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://lerolero.com/');
  
  const sentence = await page.evaluate(getSentence);

  await browser.close();

  return sentence;
}
