import { type ComponentFixture, TestBed } from "@angular/core/testing"
import { VideoPlayerComponent } from "./video-player.component"
import { By } from "@angular/platform-browser"

describe("VideoPlayerComponent", () => {
  let component: VideoPlayerComponent
  let fixture: ComponentFixture<VideoPlayerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoPlayerComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(VideoPlayerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })

  it("should have default video URL", () => {
    expect(component.videoUrl).toEqual("assets/videos/promo-gatos.mp4")
  })

  it("should have default poster URL", () => {
    expect(component.posterUrl).toEqual("assets/imagenes/video-poster.jpg")
  })

  it("should have video element", () => {
    const videoElement = fixture.debugElement.query(By.css("video"))
    expect(videoElement).toBeTruthy()
  })

  it("should have play button when not playing", () => {
    component.isPlaying.set(false)
    fixture.detectChanges()
    const playButton = fixture.debugElement.query(By.css(".play-button"))
    expect(playButton).toBeTruthy()
  })

  it("should not have play button when playing", () => {
    component.isPlaying.set(true)
    fixture.detectChanges()
    const playButton = fixture.debugElement.query(By.css(".play-button"))
    expect(playButton).toBeFalsy()
  })

  it("should have controls when playing", () => {
    component.isPlaying.set(true)
    fixture.detectChanges()
    const controls = fixture.debugElement.query(By.css(".absolute.bottom-4"))
    expect(controls).toBeTruthy()
  })

  it("should format time correctly", () => {
    expect(component.formatTime(65)).toEqual("1:05")
    expect(component.formatTime(125)).toEqual("2:05")
    expect(component.formatTime(3661)).toEqual("61:01")
  })
})
