import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTodosComponent } from './update-todos.component';

describe('UpdateTodosComponent', () => {
  let component: UpdateTodosComponent;
  let fixture: ComponentFixture<UpdateTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTodosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
