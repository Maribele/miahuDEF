import { TestBed } from "@angular/core/testing"
import { HttpClientTestingModule } from "@angular/common/http/testing"
import { GoogleFormService } from "./google-form.service"

describe("GoogleFormService", () => {
  let service: GoogleFormService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
    service = TestBed.inject(GoogleFormService)
  })

  it("should be created", () => {
    expect(service).toBeTruthy()
  })

  it("should submit form data", () => {
    const mockFormData = {
      firstName: "Test",
      lastName: "User",
      email: "test@example.com",
      company: "Test Company",
    }

    service.submitForm(mockFormData).subscribe((response) => {
      expect(response.success).toBeTruthy()
    })
  })

  it("should upload file", () => {
    const mockFile = new File(["test"], "test.pdf", { type: "application/pdf" })

    service.uploadFile(mockFile).subscribe((response) => {
      expect(response.success).toBeTruthy()
      expect(response.fileUrl).toBeDefined()
    })
  })
})
