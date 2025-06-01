import { type ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { HomeComponent } from "./home.component"

describe("HomeComponent", () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, RouterTestingModule],
    }).compileComponents()

    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })

  it("should have companies array", () => {
    expect(component.companies).toBeDefined()
    expect(component.companies.length).toBeGreaterThan(0)
  })

  it("should open modal when company is selected", () => {
    const testCompany = component.companies[0]
    component.openModal(testCompany)

    expect(component.selectedCompany).toEqual(testCompany)
    expect(component.showModal).toBeTruthy()
  })

  it("should close modal", () => {
    component.closeModal()

    expect(component.selectedCompany).toBeNull()
    expect(component.showModal).toBeFalsy()
  })
})
