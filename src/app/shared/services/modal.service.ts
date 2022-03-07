import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogueComponent } from 'src/app/components/dialogue/component/dialogue.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private modalService: NgbModal) {}

  public showModal() {
    const modale = this.modalService.open(DialogueComponent);
    // modale.componentInstance.titolo = titolo;
    // modale.componentInstance.content = content;
    // modale.componentInstance.type = type;
  }
}
