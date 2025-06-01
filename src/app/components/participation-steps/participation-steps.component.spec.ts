import { type ComponentFixture, TestBed } from "@angular/core/testing"

import { ParticipationStepsComponent } from "./participation-steps.component"

describe("ParticipationStepsComponent", () => {
  let component: ParticipationStepsComponent
  let fixture: ComponentFixture<ParticipationStepsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipationStepsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ParticipationStepsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })

  it("should have 3 steps", () => {
    expect(component.steps.length).toBe(3)
  })

  it("should have correct step titles", () => {
    expect(component.steps[0].title).toBe("Compra el libro")
    expect(component.steps[1].title).toBe("Regístrate")
    expect(component.steps[2].title).toBe("Participa")
  })
})
