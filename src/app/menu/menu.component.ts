import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  profissao= 'Psicóloga';
  primeiroNome = 'Maria';
  ultimoNome = 'Graziela';

  obterNomeCompleto(): string {

    return `${this.primeiroNome} ${this.ultimoNome}`;

  }

}
