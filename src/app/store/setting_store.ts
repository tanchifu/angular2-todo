import { List } from 'immutable';
import { SettingItem } from './setting_item';
import { createStore } from 'redux';
import { reducer, ITodoAction } from './reducer';

export default class SettingStore {
  store: Redux.Store;

  constructor() {
    const storedItemsString = <string> localStorage.getItem('settingList') || '[]';
    const storedItems = <Array<any>> JSON.parse(storedItemsString);
    const items = List<SettingItem>(storedItems.map(i => new SettingItem(i._data)));
    this.store = createStore(reducer, items);

    this.store.subscribe(() => {
      localStorage.setItem('settingList', JSON.stringify(this.items.toJS()));
    });
  }


  get items(): List<SettingItem> {
    return this.store.getState();
  }

  dispatch(action: ITodoAction) {
    this.store.dispatch(action);
  }
}
