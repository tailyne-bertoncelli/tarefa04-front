import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
    selector: 'app-livrosdetail',
    templateUrl: './livrosdetail.component.html',
    styleUrls: ['./livrosdetail.component.scss']
})
export class LivrosdetailComponent {
    @Input() livro: Livro = new Livro();
    @Output() retorno = new EventEmitter<Livro>();
    
    livroService = inject(LivroService);

    constructor(){}

    salvar(){
        this.livroService.save(this.livro).subscribe({
            next: livro => {
                this.retorno.emit(this.livro);
            },
            error: erro => {
                alert('Observe o console!');
                console.error(erro);
            }
        })
    }
}
