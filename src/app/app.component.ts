import { Component } from '@angular/core';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { PdfViewerExtendedComponent } from './pdf-viewer-extended/pdf-viewer-extended.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VideoPlayerComponent, PdfViewerComponent, PdfViewerExtendedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
