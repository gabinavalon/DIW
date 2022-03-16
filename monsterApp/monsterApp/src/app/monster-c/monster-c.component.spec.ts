import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterCComponent } from './monster-c.component';

describe('MonsterCComponent', () => {
  let component: MonsterCComponent;
  let fixture: ComponentFixture<MonsterCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
