import { Component } from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
    selector: 'my-app',
    template: `
    <app-header-layout has-scrolling-region>
      <app-header fixed>
        <app-toolbar>
          <div title spacer>All heroes</div>
        </app-toolbar>
      </app-header>
      <div>My application content</div>
    </app-header-layout>
  `,
  styles: [`
    app-toolbar {
      background: var(--primary-color);
      color: var(--dark-theme-text-color);
    }
  `],
  directives: [
    PolymerElement('app-header-layout'),
    PolymerElement('app-header'),
    PolymerElement('app-toolbar')
  ]
})
export class AppComponent { }
