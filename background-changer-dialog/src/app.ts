import { createDialog } from './components/dialog/dialog';

const bgButton = document.querySelector('#bg-button');
const textButton = document.querySelector('#text-button');

const colorDialog = createDialog('.dialog');

bgButton?.addEventListener('click', () => {
  colorDialog.open(result => {
    document.body.style.backgroundColor = result.submitter?.innerText.toLowerCase() || 'white';
  });
});

textButton?.addEventListener('click', () => {
  colorDialog.open(result => {
    document.body.style.color = result.submitter?.innerText.toLowerCase() || 'white';
  });
});
