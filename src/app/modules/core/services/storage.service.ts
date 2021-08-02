import { Injectable } from '@angular/core';

import { Storage } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  public async uploadProfilePicture(files: FileList): Promise<void> {
    const file = files[0];

    console.log(file);
    // lastModified: 1601321438000;
    // name: 'Blue_phoenix_symbol_by_animallovers626-d53tlvi.png';
    // size: 59546;
    // type: 'image/png';

    try {
      await Storage.put(file.name, file, {
        contentType: file.type, // contentType is optional
      });
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  }
}
