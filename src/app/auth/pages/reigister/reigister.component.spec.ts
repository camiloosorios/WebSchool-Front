import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReigisterComponent } from './reigister.component';

describe('ReigisterComponent', () => {
  let component: ReigisterComponent;
  let fixture: ComponentFixture<ReigisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReigisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReigisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
