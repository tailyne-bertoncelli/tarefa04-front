import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Carro } from 'src/app/models/carro';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})

export class CarroslistComponent {
    lista: Carro[] = [];

    carroSelecionadaParaEdicao: Carro = new Carro();
    indiceSelecionadoParaEdicao!: number;

    modalService = inject(NgbModal);
    carroService = inject(CarroService);

    constructor() {
        this.listAll();
    }

    listAll() {
        this.carroService.listAll().subscribe({
            next: lista => { 
                this.lista = lista;
            },
            error: erro => { 
                alert('Observe o erro no console!');
                console.error(erro);
            }
        });
    }

    exemploErro() {
        this.carroService.exemploErro().subscribe({
            next: lista => { 
                this.lista = lista;
            },
            error: erro => {
                alert('Observe o erro no console!');
                console.error(erro);
            }
        });
    }

    adicionar(modal: any) {
        this.carroSelecionadaParaEdicao = new Carro();
        this.modalService.open(modal, { size: 'sm' });
    }

    editar(modal: any, carro: Carro, indice: number) {
        this.carroSelecionadaParaEdicao = Object.assign({}, carro); 
        this.indiceSelecionadoParaEdicao = indice;
        this.modalService.open(modal, { size: 'sm' });
    }

    addOuEditarCarro(carro: Carro) {
        this.listAll();
        this.modalService.dismissAll();
    }
}
