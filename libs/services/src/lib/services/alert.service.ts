import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastr: ToastrService) { }

  showSuccess(title: string, message: string, duration: number) {
    this.toastr.success(`${title}`, `${message}`, {
      closeButton: true,
      timeOut: duration
    });
  }

  showError(title: string, message: string, duration: number) {
    this.toastr.error(`${title}`, `${message}`, {
      closeButton: true,
      timeOut: duration
    });
  }



}
