/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TodoService } from '../todo.service';
import { TodoAppComponent } from '../todo-app/todo-app.component';

describe('Component: TodoApp', () => {

  beforeEachProviders(() => [TodoService]);
  
  it('should create an instance', inject([TodoService], (service: TodoService) => {
    let component = new TodoAppComponent(service);
    expect(component).toBeTruthy();
  }));
});
