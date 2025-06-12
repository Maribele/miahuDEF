import { Component, type OnInit, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { VideoPlayerComponent } from "../video-player/video-player.component";

interface Company {
  id: string;
  name: string;
  logo: string;
  phrase: string;
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
  selectedCompany = signal<Company | null>(null);

  companies: Company[] = [
    {
      id: "antrozoologia",
      name: "Antrozoologia",
      logo: "assets/imagenes/companies/antrozoologia.jpg",
      phrase: "Curso: Conociendo a tu gato",
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
      phrase: "Asesoría con la veterinaria Sara Martín, experta en nutrición",
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
      phrase: "Nueces de lavado, bayetas de celulosa, algas nori y aceite esencial de lavanda",
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
      phrase: "Consulta con la etóloga felina Ana Ballester",
    },
  ];

  ngOnInit() {
    // Inicialización si necesitas
  }

  openCompanyModal(companyId: string) {
    const company = this.companies.find((c) => c.id === companyId);
    if (company) {
      this.selectedCompany.set(company);
      document.body.style.overflow = "hidden"; // Bloquear scroll
    }
  }

  closeModal() {
    this.selectedCompany.set(null);
    document.body.style.overflow = "auto"; // Restaurar scroll
  }

  onBackdropClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

  // Método para asignar clases CSS dinámicamente a la imagen ampliada del modal
  getScaleClass(companyId: string): string {
    // Ejemplo simple, puedes ajustar estilos específicos por empresa si quieres
    switch (companyId) {
      case "food-for-joe":
      case "terra-market":
      case "tractive":
        return "scale-100";
      case "natulim":
        return "scale-90";
      case "my-vet-nutritionist":
      case "patitas-and-co":
      case "pets-and-vets":
        return "scale-95";
      default:
        return "scale-100";
    }
  }
}
