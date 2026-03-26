import { Component } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-pdf-viewer-extended',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule],
  templateUrl: './pdf-viewer-extended.component.html',
  styleUrl: './pdf-viewer-extended.component.css'
})
export class PdfViewerExtendedComponent {
  pdfSrc = 'assets/sample.pdf';
}
