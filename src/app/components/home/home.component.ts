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
      id: "consumo-cuidado",
      name: "Consumo Cuidado",
      logo: "assets/imagenes/companies/consumo-cuidado.jpg",
      phrase: "Productos naturales y sostenibles para el cuidado de tu mascota",
    },
    {
      id: "food-for-joe",
      name: "Food for Joe",
      logo: "assets/imagenes/companies/food-for-joe.jpg",
      phrase: "Alimentación premium y natural para gatos exigentes",
    },
    {
      id: "natulim",
      name: "Natulim",
      logo: "assets/imagenes/companies/natulim.jpg",
      phrase: "Productos de limpieza naturales y seguros para mascotas",
    },
    {
      id: "my-vet-nutritionist",
      name: "My Vet Nutritionist",
      logo: "assets/imagenes/companies/my-vet-nutritionist.jpg",
      phrase: "Consultoría nutricional veterinaria personalizada",
    },
    {
      id: "patitas-and-co",
      name: "Patitas and CO",
      logo: "assets/imagenes/companies/patitas-and-co.jpg",
      phrase: "Accesorios y juguetes únicos para gatos felices",
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
      phrase: "Tecnología GPS para el seguimiento y seguridad de tu gato",
    },
    {
      id: "pets-and-vets",
      name: "Pets & Vets",
      logo: "assets/imagenes/logos/pets-and-vets.jpg",
      phrase: "Servicios veterinarios y productos de salud para mascotas",
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
