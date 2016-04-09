import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
// import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

// import {HomeCmp} from '../home/home';
// import {SettingsCmp} from '../settings/settings';
// import {SettingList} from '../../services/setting_list';
import {AboutCmp} from './aboutpage/about';

@Component({
  selector: 'app',
  viewProviders: [HTTP_PROVIDERS],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES] // test MATERIAL_DIRECTIVES]
})
@RouteConfig([
  // { path: '/', component: HomeCmp, as: 'Home' },
  // { path: '/settings', component: SettingsCmp, as: 'Settings' },
  { path: '/about', component: AboutCmp, as: 'About' }
])
export class AppCmp {}
