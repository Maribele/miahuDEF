import { Component, inject } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"
import { GoogleFormService } from "../../services/google-form.service"

@Component({
  selector: "app-registration-form",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: "./registration-form.component.html",
  styles: [],
})
export class RegistrationFormComponent {
  private googleFormService = inject(GoogleFormService)

  formData = {
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    purchaseProof: null as File | null,
  }

  isSubmitting = false
  showSuccessModal = false

  onFileSelected(event: any) {
    const file = event.target.files[0]
    if (file) {
      this.formData.purchaseProof = file
    }
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.isSubmitting = true

      // Simular envío del formulario
      setTimeout(() => {
        this.showSuccessModal = true
        this.isSubmitting = false
        this.resetForm()
      }, 2000)
    }
  }

  isFormValid(): boolean {
    return !!(
      this.formData.firstName &&
      this.formData.lastName &&
      this.formData.email &&
      this.formData.company &&
      this.formData.purchaseProof
    )
  }

  resetForm() {
    this.formData = {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      purchaseProof: null,
    }
  }

  closeSuccessModal() {
    this.showSuccessModal = false
  }
}
