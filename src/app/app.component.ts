import { Component, OnInit } from '@angular/core';

import { PdfService } from 'src/app/shared/services/pdf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public lines: Array<string>;

  constructor(
    private _pdfService: PdfService
  ) { }

  ngOnInit() {
    // Service with parsing, set pdf file or url with pdf as parametr.
    this._pdfService.parse('assets/kontoauszug.pdf')
      .then((lines: Array<string>) => {
        this.lines = lines;
      });
  }
}
