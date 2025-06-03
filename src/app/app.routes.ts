import { HomeComponent } from "./components/home/home.component";
import { TerminosComponent } from "./components/terminos/terminos.component";
import { PrivacidadComponent } from "./components/privacidad/privacidad.component";
import { Routes } from "@angular/router";


export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "terminos",
    component: TerminosComponent,
  },
  {
    path: "privacidad",
    component: PrivacidadComponent,
  },
  {
    path: "**",
    redirectTo: "",
  },
];
