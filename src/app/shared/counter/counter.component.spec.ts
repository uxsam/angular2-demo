import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { CounterComponent } from './counter.component';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { By } from "@angular/platform-browser";
describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let debugElement:DebugElement;
  let htmlElement:HTMLElement;

  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      declarations:[CounterComponent]
    }).compileComponents();
  }));
  beforeEach(()=>{
    fixture = TestBed.createComponent(CounterComponent);
    component=fixture.componentInstance;
    fixture.detectChanges();
    debugElement=fixture.debugElement.query(By.css('p'));
    htmlElement=debugElement.nativeElement;
  });
  it('increase counter by 1',()=>{
    const intialValue=component.counter;
    component.increment();
    fixture.detectChanges();
    expect(component.counter).toBeGreaterThan(intialValue);
  });
  it('should display the current number of the counter',()=>{
    expect(htmlElement.textContent).toEqual('counter 1 ');
  });

 
});
