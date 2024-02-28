import {Component, OnDestroy, OnInit} from '@angular/core';
import {map, Observable, Subject, takeUntil, timer} from 'rxjs';

@Component({
  selector: 'app-task-2',
  template: '<h1>Task #2</h1>',
})
export class Task2Component implements OnInit, OnDestroy{

  private isSubscribed = false;
  private destroy$ = new Subject<void>();

  constructor() {

  }

  ngOnInit() {
    this.task2();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Допиши функцию.
   *
   * 1. Принимает на входе поток Observable.
   * 2. Код функции выполняет какую-то полезную работу с данными потока.
   * 3. Функция должна вернуть новый поток Observable.
   * 4. В случаи повторного вызова getData, отписаться от существующего потока.
   *
   * @param stream$
   */
  private getData<T>(stream$: Observable<T>): Observable<T> {


    if (this.isSubscribed) {
      this.destroy$.next();
      this.isSubscribed = false;
    }

    this.isSubscribed = true;
    return stream$.pipe(
      takeUntil(this.destroy$));
  }

  /**
   *
   * @private
   */
  private task2(): void {


    this.getData(timer(3000))
      .pipe(
        map(() => `Request #1`),
      ).subscribe((value) => console.log(value));


    this.getData(timer(2000))
      .pipe(
        map(() => `Request #2`),
      ).subscribe((value) => console.log(value));


    this.getData(timer(1000))
      .pipe(
        map(() => `Request #3`),
      ).subscribe((value) => console.log(value));
  }
}
