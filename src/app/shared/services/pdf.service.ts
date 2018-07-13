import { Injectable } from '@angular/core';
import * as pdfjs from 'pdfjs-dist';

@Injectable({
    providedIn: 'root'
})
export class PdfService {

    constructor() {
        // Set worker.
        pdfjs.GlobalWorkerOptions.workerSrc = 'assets/pdf.worker.entry.js';
    }

    parse(pdfUrl) {
        return pdfjs.getDocument(pdfUrl)
            .then(pdf => {

                // Get number of pages in pdf.
                const numPages = pdf.pdfInfo.numPages;

                // Every page as promise.
                const countPromises = [];

                // Map pages.
                for (let j = 1; j <= numPages; j++) {

                    // Get current page.
                    const getPage = pdf.getPage(j);

                    // Create promise with current page.
                    countPromises.push(getPage.then(page => {

                        // Get text from page.
                        const textContent = page.getTextContent();

                        // Get object with some data (include string).
                        return textContent.then(txt => {

                            // Get string.
                            return txt.items.map(s => s.str);
                        });
                    }));
                }

                return Promise.all(countPromises).then(pages => {
                    // Join arrays with pages to one array.
                    return pages.reduce((a, b) => [...a, ...b]);
                });
            });
    }
}
