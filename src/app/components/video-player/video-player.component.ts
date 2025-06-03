import { Component, type ElementRef, ViewChild, signal, Input } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-video-player",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="video-container relative w-full max-w-4xl mx-auto">
      <!-- Video element -->
      <video 
        #videoElement
        class="w-full h-auto rounded-lg shadow-lg"
        [poster]="posterUrl"
        preload="metadata"
        (loadedmetadata)="onVideoLoaded()"
        (play)="onVideoPlay()"
        (pause)="onVideoPause()"
        (ended)="onVideoEnded()">
        <source [src]="videoUrl" type="video/mp4">
        Tu navegador no soporta el elemento video.
      </video>

      <!-- Overlay con botón play -->
      <div *ngIf="!isPlaying()" 
           class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg cursor-pointer"
           (click)="playVideo()">
        <button class="play-button bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 transition-all duration-300 transform hover:scale-110">
          <svg class="w-12 h-12 text-[#ff74ba]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </button>
      </div>

      <!-- Controles personalizados -->
      <div *ngIf="isPlaying()" 
           class="absolute bottom-4 left-4 right-4 flex items-center space-x-4 bg-black bg-opacity-50 rounded-lg p-2">
        <button (click)="togglePlayPause()" class="text-white hover:text-gray-300">
          <svg *ngIf="isPlaying()" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
          <svg *ngIf="!isPlaying()" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </button>
        
        <div class="flex-1 bg-gray-600 rounded-full h-2">
          <div class="bg-[#ff74ba] h-2 rounded-full transition-all duration-300" 
               [style.width.%]="progress()"></div>
        </div>
        
        <span class="text-white text-sm">{{ formatTime(currentTime()) }} / {{ formatTime(duration()) }}</span>
      </div>
    </div>
  `,
  styles: [
    `
    .video-container {
      position: relative;
    }
    
    .play-button {
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }
    
    video::-webkit-media-controls {
      display: none !important;
    }
    
    video::-webkit-media-controls-enclosure {
      display: none !important;
    }
  `,
  ],
})
export class VideoPlayerComponent {
  @ViewChild("videoElement") videoElement!: ElementRef<HTMLVideoElement>

  // Inputs para configurar desde el componente padre
  @Input() videoUrl = "assets/videos/promo-gatos.mp4"
  @Input() posterUrl = "assets/imagenes/video-poster.jpg"

  // Signals para el estado del video
  isPlaying = signal(false)
  progress = signal(0)
  currentTime = signal(0)
  duration = signal(0)

  playVideo() {
    const video = this.videoElement.nativeElement
    video.play().catch((error) => {
      console.error("Error al reproducir el video:", error)
    })
  }

  pauseVideo() {
    const video = this.videoElement.nativeElement
    video.pause()
  }

  togglePlayPause() {
    const video = this.videoElement.nativeElement
    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  }

  onVideoLoaded() {
    const video = this.videoElement.nativeElement
    this.duration.set(video.duration)

    // Actualizar progreso cada segundo
    video.addEventListener("timeupdate", () => {
      this.currentTime.set(video.currentTime)
      this.progress.set((video.currentTime / video.duration) * 100)
    })
  }

  onVideoPlay() {
    this.isPlaying.set(true)
  }

  onVideoPause() {
    this.isPlaying.set(false)
  }

  onVideoEnded() {
    this.isPlaying.set(false)
    this.progress.set(0)
    this.currentTime.set(0)
  }

  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }
}
