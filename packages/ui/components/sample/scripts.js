import events from '@runroom/purejs/lib/events';

events.onDocumentReady(() => {
  document.querySelector('button').addEventListener('click', () => alert('Oh yeah!'));
});
