import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"

@Component({
  selector: "app-participation-steps",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./participation-steps.component.html",
  styles: [],
})
export class ParticipationStepsComponent {
  steps = [
    {
      number: 1,
      title: "Compra el libro",
      description: "Adquiere el Manual purrfecto para michis y humanos en Amazon.",
      icon: "shopping-bag",
    },
    {
      number: 2,
      title: "Regístrate",
      description: "Completa el formulario y sube el comprobante de compra.",
      icon: "user-plus",
    },
    {
      number: 3,
      title: "Participa",
      description: "¡Ya estás en el sorteo que se realizará el 31 de julio!",
      icon: "gift",
    },
  ]
}
