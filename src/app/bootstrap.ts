import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {AppCmp} from './app';
// import {MATERIAL_PROVIDERS} from 'ng2-material/all';
// import TodoStore from './store/setting_store';
// import TodoList from './todolist/todolist';
// import SettingStore from './services/setting_store';

// bootstrap(TodoList, [TodoStore]);

bootstrap(AppCmp, [
    ROUTER_PROVIDERS, // test MATERIAL_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
