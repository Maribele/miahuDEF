import { type ComponentFixture, TestBed } from "@angular/core/testing"
import { FormsModule } from "@angular/forms"
import { RouterTestingModule } from "@angular/router/testing"
import { HttpClientTestingModule } from "@angular/common/http/testing"
import { RegistrationFormComponent } from "./registration-form.component"

describe("RegistrationFormComponent", () => {
  let component: RegistrationFormComponent
  let fixture: ComponentFixture<RegistrationFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationFormComponent, FormsModule, RouterTestingModule, HttpClientTestingModule],
    }).compileComponents()

    fixture = TestBed.createComponent(RegistrationFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })

  it("should validate form correctly", () => {
    // Form should be invalid initially
    expect(component.isFormValid()).toBeFalsy()

    // Fill form data
    component.formData = {
      firstName: "Test",
      lastName: "User",
      email: "test@example.com",
      company: "Test Company",
      purchaseProof: new File(["test"], "test.pdf", { type: "application/pdf" }),
    }

    expect(component.isFormValid()).toBeTruthy()
  })

  it("should reset form", () => {
    component.formData.firstName = "Test"
    component.resetForm()

    expect(component.formData.firstName).toBe("")
    expect(component.formData.lastName).toBe("")
    expect(component.formData.email).toBe("")
  })
})
