import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {DynamicComponent} from "../dynamic/dynamic.component";


@Component({
  selector: 'app-task-4',
  template: `<h1>Task #4</h1>
  <br>
  <app-dynamic></app-dynamic>
  <app-dynamic></app-dynamic>
  <app-dynamic></app-dynamic>
  <app-dynamic></app-dynamic>
  <app-dynamic></app-dynamic>
  <app-dynamic></app-dynamic>
  `,
})
export class Task4Component implements AfterViewInit{
  @ViewChildren(DynamicComponent, {read: ElementRef}) viewChildren!: QueryList<ElementRef>;

  constructor() {
  }

  ngAfterViewInit() {
    this.viewChildren.forEach((el, index) => {
      if ((index + 1) % 2 == 0) {
        el.nativeElement.classList.add('selected');
      }
    });
  }


  /**
   * Задача:
   *
   * Поставьте каждому четному элементу <app-dynamic> во вью CSS класс ".selected",
   * не изменяя шаблон компонента, используя только инструменты Angular.
   */

}
