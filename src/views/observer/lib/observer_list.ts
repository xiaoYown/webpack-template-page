class ObserverList {

  observerList: Array<any> = [];

  constructor (options: any) {
  }
  mod (method: string, index: number, observer: any, len: number = 1) {
    switch (method) {
      case 'add':
        this.observerList.push(observer);
        break;
      case 'rem':
        this.observerList.splice(index, len);
      case 'empty':
        this.observerList = [];
        break;
      default:
        console.log('method error');
      }
    return this.observerList;
  }
  get (index: number) {
    return this.observerList[index];
  }
  indexOf (observer: any) {
    return this.observerList.indexOf(observer);
  }
}

function CreateObserverList (params: any) {
  return new ObserverList(params);
}

export default ObserverList
