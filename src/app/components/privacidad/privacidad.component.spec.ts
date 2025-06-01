import { type ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing"

import { PrivacidadComponent } from "./privacidad.component"

describe("PrivacidadComponent", () => {
  let component: PrivacidadComponent
  let fixture: ComponentFixture<PrivacidadComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacidadComponent, RouterTestingModule],
    }).compileComponents()

    fixture = TestBed.createComponent(PrivacidadComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
