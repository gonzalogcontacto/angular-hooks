import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { ContactoUsuario } from 'src/app/model/contacto.usuario';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
	public usuario: ContactoUsuario;
	public show_data: ContactoUsuario;
	
	constructor(){
		this.usuario = new ContactoUsuario('','','','');
	}

	ngOnInit() {

	}

	onSubmit(form: Form){
		this.show_data = this.usuario;
    console.log(this.show_data);
    console.log(form);
    
	}

}
