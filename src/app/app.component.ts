import { Component } from '@angular/core';
import * as Editor from './ckeditor5/build/ckeditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public Editor = Editor;

  title = 'ck-test';

  cfg = {
    toolbar: {
      items: [
        'heading',
        '|',
        'fontSize',
        'bold',
        'link',
        'bulletedList',
        'numberedList',
        'removeFormat',
        '|',
        'indent',
        'outdent',
        'alignment',
        '|',
        'insertTable',
        'undo',
        'redo',
      ],
    },
    language: 'de',
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells',
        'tableCellProperties',
        'tableProperties',
      ],
    },
    licenseKey: '',
  };
}
