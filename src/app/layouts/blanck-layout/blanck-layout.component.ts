import { Component } from '@angular/core';
import { NavBlanckComponent } from "../../components/nav-blanck/nav-blanck.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-blanck-layout',
  standalone: true,
  imports: [NavBlanckComponent, RouterOutlet, FooterComponent],
  templateUrl: './blanck-layout.component.html',
  styleUrl: './blanck-layout.component.scss'
})
export class BlanckLayoutComponent {

}
