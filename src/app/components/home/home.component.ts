import { Component, type OnInit, signal } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"
import { VideoPlayerComponent } from "../video-player/video-player.component"

interface Company {
  id: string
  name: string
  logo: string
  phrase: string
}

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterModule, VideoPlayerComponent],
  templateUrl: "./home.component.html",
  styles: [
    `
    .clip-diagonal {
      clip-path: polygon(0 100%, 100% 100%, 100% 0);
    }
    
    .modal-backdrop {
      backdrop-filter: blur(4px);
    }
  `,
  ],
})
export class HomeComponent implements OnInit {
  // Signal para controlar el modal
  selectedCompany = signal<Company | null>(null)

  // Datos de las empresas colaboradoras
  companies: Company[] = [
    {
      id: "---",
      name: "Consumo Cuidado",
      logo: "",
      phrase: "",
    },
    {
      id: "food-for-joe",
      name: "Food for Joe",
      logo: "assets/imagenes/companies/food-for-joe.jpg",
      phrase: "Alimentos naturales para michis",
    },
    {
      id: "natulim",
      name: "Natulim",
      logo: "assets/imagenes/companies/natulim.jpg",
      phrase: "Tierra de Sommieres (limpiador de pipí y vómitos), detergente y fregasuelos.",
    },
    {
      id: "my-vet-nutritionist",
      name: "My Vet Nutritionist",
      logo: "assets/imagenes/companies/my-vet-nutritionist.jpg",
      phrase: "Asesoría de nutrición especializada con Sara Martín",
    },
    {
      id: "patitas-and-co",
      name: "Patitas and CO",
      logo: "assets/imagenes/companies/patitas-and-co.jpg",
      phrase: "10 latas de milo y lola",
    },
    {
      id: "terra-market",
      name: "Terra Market",
      logo: "assets/imagenes/companies/terra-market.jpg",
      phrase: "Marketplace de productos sostenibles para mascotas",
    },
    {
      id: "tractive",
      name: "Tractive",
      logo: "assets/imagenes/companies/tractive.jpg",
      phrase: "2 GPS con suscripción para un año",
    },
    {
      id: "pets-and-vets",
      name: "Pets & Vets",
      logo: "assets/imagenes/companies/pets-and-vets.jpg",
      phrase: "Consulta de etología felina con Ana Ballester",
    },
  ]

  ngOnInit() {
    // Inicialización del componente
  }

  openCompanyModal(companyId: string) {
    const company = this.companies.find((c) => c.id === companyId)
    if (company) {
      this.selectedCompany.set(company)
      // Prevenir scroll del body cuando el modal está abierto
      document.body.style.overflow = "hidden"
    }
  }

  closeModal() {
    this.selectedCompany.set(null)
    // Restaurar scroll del body
    document.body.style.overflow = "auto"
  }

  // Cerrar modal al hacer clic en el backdrop
  onBackdropClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.closeModal()
    }
  }
}
