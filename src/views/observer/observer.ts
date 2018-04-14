import Observer from './lib/observer';
import Watcher from './lib/watcher';

let observer = Observer({
  el: document.getElementById('observer-el'),
  html: 'start time: ' + new Date().toLocaleString()
});

let watcher = Watcher({
  el: document.getElementById('watcher-el'),
  observer,
  event: 'click'
})

setInterval(function () {
  watcher.update()
}, 3000)
