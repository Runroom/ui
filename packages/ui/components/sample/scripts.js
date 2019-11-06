import { events } from '@runroom/purejs';

events.onDocumentReady(() => {
  document.querySelector('button').addEventListener('click', () => alert('Oh yeah!'));
});
