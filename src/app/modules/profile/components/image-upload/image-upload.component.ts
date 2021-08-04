import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.sass'],
})
export class ImageUploadComponent implements OnInit {
  @Input() public image: string | null | undefined;

  @Output() public imageUploaded: EventEmitter<File> = new EventEmitter();

  public fileDraggedOver: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public get backgroundImageUrl(): string {
    return `url('${this.image}')`;
  }

  public onDragEnter(): void {
    this.fileDraggedOver = true;
  }

  public onDragLeave(): void {
    this.fileDraggedOver = false;
  }

  public onDrop(): void {
    this.fileDraggedOver = false;
  }

  public onInput(e: Event): void {
    const input = e.target as HTMLInputElement;

    if (!input.files) {
      return;
    }

    const [file] = Array.from(input.files);

    this.imageUploaded.emit(file);
  }
}
