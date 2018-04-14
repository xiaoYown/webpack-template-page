class Watcher {
  $el: Element;
  $observer: any;

  constructor (options: any) {
    this.$el = options.el;
    this.$observer = options.observer;
    
    this.initMethods();
    this.bind(options.event);
  }
  initMethods () {
    let key: any;
    function bind (fn, ctx) {
      return function (a) {
        var l = arguments.length
        return l
            ? l > 1
            ? fn.apply(ctx, arguments)
            : fn.call(ctx, a)
            : fn.call(ctx)
      }
    }
    for (key in this) {
      if (typeof this[key] === 'function') {
        this[key] = bind(this[key], this)
      }
    }
  }
  update () {
    let data: any = {
      html: 'update time: ' + new Date().toLocaleString()
    }
    this.$observer.setState(data)
  }
  bind (event: string) {
    console.log(event)
    this.$el.addEventListener(event, this.update);
  }
}

function CreateWatcher (options: any) {
  return new Watcher(options);
}

export default CreateWatcher;
