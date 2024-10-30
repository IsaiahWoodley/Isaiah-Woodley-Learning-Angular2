import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RavensListComponent } from './ravens-list.component';

describe('RavensListComponent', () => {
  let component: RavensListComponent;
  let fixture: ComponentFixture<RavensListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RavensListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RavensListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
