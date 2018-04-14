class Observer {
  $el: Element;
  $options: any;
  $state: any = {};

  constructor (options: any) {
    this.$el = options.el;
    this.$options = options;

    this.create();
    this.mount();
  }
  create () {
    this.$state.html = this.$options.html;
  }
  update (state: any) {
    this.setState(state);
  }
  setState (state: any) {
    let key: string | number;
    for (key in state) {
      this.$state[key] = state[key];
    }
    this.mount();
  }
  mount () {
    let child: Element = document.createElement('h4');
    child.innerHTML = this.$state.html;
    this.$el.innerHTML = ''
    this.$el.appendChild(child);
  }
}

function CreateObserver (options: any) {
  return new Observer(options);
}

export default CreateObserver;
