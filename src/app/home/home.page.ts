import { Component, OnInit } from '@angular/core';
import { Analytics } from 'capacitor-analytics';
const analytics = new Analytics();

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  screen_name = `My Cooler Screen`;

  user_id = `1337`;
  user_prop_key = `time_spent`;
  user_prop_value = `4:20`;

  event_name = `tap_button`;
  event_prop_key = `times`;
  event_prop_value = 0;

  constructor() {}

  ngOnInit() {}

  instance() {
    analytics.instance().then(r => alert(r.id));
  }

  reset() {
    analytics.reset().then(() => alert(`SUCCESS`));
  }

  setScreen() {
    analytics
      .setScreen({
        name: this.screen_name
      })
      .then(() => alert(`SUCCESS`));
  }

  setUserID() {
    analytics
      .setUserID({
        value: this.user_id
      })
      .then(() => alert(`SUCCESS`));
  }

  setUserProp() {
    analytics
      .setUserProp({ key: this.user_prop_key, value: this.user_prop_value })
      .then(() => alert(`SUCCESS`));
  }

  logEvent() {
    const params = {};
    params[this.event_prop_key] = JSON.stringify(this.event_prop_value++);
    analytics
      .logEvent({ name: this.event_name, params: params })
      .then(() => alert(`SUCCESS`));
  }
}
