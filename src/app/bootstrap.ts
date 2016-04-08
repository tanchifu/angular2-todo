import {bootstrap} from 'angular2/platform/browser';
import TodoStore from './store/setting_store';
import TodoList from './todolist/todolist';

bootstrap(TodoList, [TodoStore]);
