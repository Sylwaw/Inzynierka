import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {

  constructor(private router: Router, private messageService: MessageService) { }

  uploadedFiles: any[] = [];

  ngOnInit() {
  }

    // onUpload(event) {
    //     for (const file of event.files) {
    //         this.uploadedFiles.push(file);
    //     }

    //     this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    // }

  nextPage() {
    this.router.navigateByUrl('/add/details');
}

prevPage() {
  this.router.navigateByUrl('/add/data');
}

}
