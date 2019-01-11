import {
  Component,
  ViewEncapsulation,
  ChangeDetectorRef,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  OnInit,
  HostListener
} from '@angular/core';

@Component({
  templateUrl: './lazy-image.component.html',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LazyImageComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef, private el: ElementRef) { }

  @Input() src: string;
  @Input() alt: string;

  @Output() isVisible = new EventEmitter();

  state = {
    visible: false,
    loaded: false
  };

  private setState(key, value) {
    this.state = { ...this.state, [key]: value };
    this.cd.detectChanges();
  }

  private calcVisibility() {
    const rect = this.el.nativeElement.getBoundingClientRect().top;
    if (rect <= window.innerHeight && !this.state.visible) {
      this.setState('visible', true);
      this.customEmit(true);
    }
  }

  ngOnInit() {
    this.calcVisibility();
  }

  @HostListener('window:scroll', ['$event'])
  onscroll(e) {
    this.calcVisibility();
  }

  onLoad() {
    setTimeout(() => {
      this.setState('loaded', true);
    }, 2000);
  }

  // Making public methods
  @Input()
  public log = () => {
    const state = this.state;
    console.log(state);
  }

  // Custom Events
  private customEmit(val) {
    this.isVisible.emit(val);
    const domEvent = new CustomEvent('is-visible');
    this.el.nativeElement.dispatchEvent(domEvent);
  }

}
