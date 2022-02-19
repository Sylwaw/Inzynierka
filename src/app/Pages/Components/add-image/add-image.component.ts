import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css'],
})
export class AddImageComponent implements OnInit {
  public progress: number;
  public message: string;s
  @Output() public onUploadFinished = new EventEmitter();
  @Output() nameImage = new EventEmitter<string>();
  constructor(private messageService: MessageService,
    private http: HttpClient) {}

  uploadedFiles: any[] = [];

  ngOnInit(): void {
    console.log('test');
  }

  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post('https://localhost:5001/api/photo/addPhoto', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Zdjęcie wczytane.';
          this.nameImage.emit(fileToUpload.name);
          this.onUploadFinished.emit(event.body);
        }
      });
  }

  onUpload(event) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({
      severity: 'info',
      summary: 'File Uploaded',
      detail: 'Zdjęcie wczytane',
    });
  }
}
