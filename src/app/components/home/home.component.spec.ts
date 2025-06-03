import { type ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { HomeComponent } from "./home.component"
import { VideoPlayerComponent } from "../video-player/video-player.component"
import { By } from "@angular/platform-browser"

describe("HomeComponent", () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, RouterTestingModule, VideoPlayerComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })

  it("should have a video player component", () => {
    const videoPlayerElement = fixture.debugElement.query(By.directive(VideoPlayerComponent))
    expect(videoPlayerElement).toBeTruthy()
  })

  it("should have correct video URL", () => {
    const videoPlayerElement = fixture.debugElement.query(By.directive(VideoPlayerComponent))
    const videoPlayerComponent = videoPlayerElement.componentInstance
    expect(videoPlayerComponent.videoUrl).toEqual("assets/videos/promo-gatos.mp4")
  })

  it("should have correct poster URL", () => {
    const videoPlayerElement = fixture.debugElement.query(By.directive(VideoPlayerComponent))
    const videoPlayerComponent = videoPlayerElement.componentInstance
    expect(videoPlayerComponent.posterUrl).toEqual("assets/imagenes/video-poster.jpg")
  })

  it("should have hero section with title", () => {
    const titleElement = fixture.debugElement.query(By.css("h1"))
    expect(titleElement.nativeElement.textContent).toContain("El manual purrfecto para michis & humanos")
  })
})
