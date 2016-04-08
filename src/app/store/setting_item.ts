/// <reference path="../../../typings/node-uuid/node-uuid-global.d.ts" />
import { Map } from 'immutable';

export class SettingItem {
  _data: Map<string, any>;

  get uuid() {
    return <string> this._data.get('uuid');
  }

  get name() {
    return <string> this._data.get('name');
  }

  setName(value: string) {
    return new SettingItem(this._data.set('name', value));
  }

  get value() {
    return <string> this._data.get('value');
  }

  setValue(value: string) {
    console.info('set value...${value}');
    return new SettingItem(this._data.set('value', value));
  }

  get completed() {
    return <boolean> this._data.get('completed');
  }

  setCompleted(value: boolean) {
    return new SettingItem(this._data.set('completed', value));
  }

  constructor(data: any = undefined) {
    data = data || { name: '[no name]', value: '', completed: false, uuid: uuid.v4() };
    this._data = Map<string, any>(data);
  }
}
