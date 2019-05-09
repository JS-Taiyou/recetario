import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() vistaCambiada = new EventEmitter<boolean>();

  onSelect(param: boolean) {
    this.vistaCambiada.emit(param);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
