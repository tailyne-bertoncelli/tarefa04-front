import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Carro } from 'src/app/models/carro';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-carrosdetail',
  templateUrl: './carrosdetail.component.html',
  styleUrls: ['./carrosdetail.component.scss']
})
export class CarrosdetailComponent {
    @Input() carro: Carro = new Carro();
    @Output() retorno = new EventEmitter<Carro>();

    carroService = inject(CarroService);

    constructor(){}

    salvar(){
        this.carroService.save(this.carro).subscribe({
            next: carro =>{
                this.retorno.emit(this.carro);
            },
            error: erro => {
                alert('Observe o erro no console');
                console.error(erro);
            }
        });
    }
}
