import type { Routes } from "@angular/router"
import { HomeComponent } from "./components/home/home.component"
import { RegistrationFormComponent } from "./components/registration-form/registration-form.component"
import { ParticipationStepsComponent } from "./components/participation-steps/participation-steps.component"
import { PrivacidadComponent } from "./components/privacidad/privacidad.component"
import { TerminosComponent } from "./components/terminos/terminos.component"

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "registro", component: RegistrationFormComponent },
  { path: "pasos", component: ParticipationStepsComponent },
  { path: "privacidad", component: PrivacidadComponent },
  { path: "terminos", component: TerminosComponent },
  { path: "**", redirectTo: "" },
]
