import { List } from 'immutable';
import { SettingItem } from './setting_item';

export interface ITodoAction {
  type: string;
  text?: string;
  itemId?: string;
  completed?: boolean;
}

export function reducer(state: List<SettingItem> = List<SettingItem>(), action: ITodoAction) {

  function indexOf(uuid: string) {
    return state.findIndex((i: SettingItem) => i.uuid === action.itemId);
  }

  function createItemObj(text: string) {
    if (!text) {
      return new SettingItem();
    }
    if (text.indexOf('|') >= 0) {
      // parse the text for name|value format
      let tokens = text.split('|');
      if (tokens.length > 1) {
        return new SettingItem({name: tokens[0], value: tokens[1], completed: false, uuid: uuid.v4()});
      }
    }
    return new SettingItem({name: '[no name]', value: text, completed: false, uuid: uuid.v4()});
  }

  switch (action.type) {
    case 'ADD':
      return state.push(createItemObj(action.text));
    case 'REMOVE':
      return List<SettingItem>(state.filter((i: SettingItem) => i.uuid !== action.itemId));
    case 'UPDATE_ITEM_VALUE':
      return state.update(indexOf(action.itemId), (i: SettingItem) => i.setValue(action.text));
    case 'UPDATE_ITEM_COMPLETION':
      return state.update(indexOf(action.itemId), (i: SettingItem) => i.setCompleted(action.completed));
    default:
      return state;
  }

}
