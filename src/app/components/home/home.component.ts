import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./home.component.html",
  styles: [
    `
    .clip-diagonal {
      clip-path: polygon(0 100%, 100% 100%, 100% 0);
    }
  `,
  ],
})
export class HomeComponent implements OnInit {
  companies = [
    {
      name: "Consumo Cuidado",
      logo: "assets/imagenes/companies/consumo-cuidado.jpg",
      description: "Productos ecológicos para gatos y humanos.",
    },
    {
      name: "Food for Joe",
      logo: "assets/imagenes/companies/food-for-joe.jpg",
      description: "Alimento natural para gatos.",
    },
    {
      name: "Natulim",
      logo: "assets/imagenes/companies/natulim.jpg",
      description: "Productos sostenibles para la limpieza.",
    },
    {
      name: "My Vet Nutritionist",
      logo: "assets/imagenes/companies/my-vet-nutritionist.jpg",
      description: "Asesoramiento nutricional online para gatos.",
    },
    {
      name: "Patitas and CO",
      logo: "assets/imagenes/companies/patitas-and-co.jpg",
      description: "Alimento de la marca Milo y Lola.",
    },
    {
      name: "Terra Market",
      logo: "assets/imagenes/companies/terra-market.jpg",
      description: "Artículos naturales y zero waste para gatos y humanos.",
    },
    {
      name: "Tractive",
      logo: "assets/imagenes/companies/tractive.jpg",
      description: "2 localizadores GPS con suscripción anual para gatos.",
    },
    {
      name: "Pets & Vets",
      logo: "assets/imagenes/companies/pets-and-vets.jpg",
      description: "Consultoría en etología felina online.",
    },
  ]

  selectedCompany: any = null
  showModal = false

  ngOnInit() {
    // Inicialización del componente
  }

  playVideo() {
    const video = document.getElementById("promo-gatos.mp4") as HTMLVideoElement
    if (video) {
      video.play()
    }
  }

  openModal(company: any) {
    this.selectedCompany = company
    this.showModal = true
  }

  closeModal() {
    this.showModal = false
    this.selectedCompany = null
  }
}
