import { Injectable } from '@angular/core';
import { Storage } from 'aws-amplify';
import { from, Observable } from 'rxjs';
import aws_exports from 'src/aws-exports';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  public async uploadFileToS3(file: File): Promise<string | undefined> {
    let url: string | undefined;

    try {
      const response = await Storage.put(file.name, file, { contentType: file.type }); // Content type is optional
      const { key } = response as Object & { key: string };

      url = `https://${aws_exports.aws_user_files_s3_bucket}.s3.amazonaws.com/public/${key}`;
    } catch (error) {
      console.error('Error uploading file: ', error);
    }

    return url;
  }

  public uploadFileToS3Observable(file: File): Observable<string | undefined> {
    return from(this.uploadFileToS3(file));
  }

  public async deleteFileFromS3(key: string): Promise<any> {
    return Storage.remove(key);
  }
}
