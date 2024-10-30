import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RavensListItemComponent } from './ravens-list-item.component';

describe('RavensListItemComponent', () => {
  let component: RavensListItemComponent;
  let fixture: ComponentFixture<RavensListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RavensListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RavensListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
