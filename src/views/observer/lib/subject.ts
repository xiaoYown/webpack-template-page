import ObserverList from './observer_list';

class Subject {
  observers: any = ObserverList();

  mod (method: string, observer: any, index: number, len: number = 1) {
    this.observers.mod(method, observer, index, len);
  }
  notify (context) {
    this.observers.forEach(observer => {
      observer.update(context)
    })
  }
}

function CreateSubject () {
  return new Subject();
} 