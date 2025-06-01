import { type ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing"

import { TerminosComponent } from "./terminos.component"

describe("TerminosComponent", () => {
  let component: TerminosComponent
  let fixture: ComponentFixture<TerminosComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerminosComponent, RouterTestingModule],
    }).compileComponents()

    fixture = TestBed.createComponent(TerminosComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
