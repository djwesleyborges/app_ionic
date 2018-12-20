import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http'; // import http e response para chamada de API
import { TestePage } from '../teste/teste';
import 'rxjs/add/operator/map'; // importando o map usado na conversao do json

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private url:string = 'https://jsonplaceholder.typicode.com/todos/';  // url da api
  public usuarios: Array<{}>; // Array de Objetos

  constructor(
    public navCtrl: NavController,
    public http: Http // criando um construtor http do tipo Http que importamos
    ) {
      //fazendo a requisicao na api
      this.http.get(this.url)
      .map(res => res.json()) // o que vinher na resposta, converte para json
      .subscribe(data => {  // data onde fica os dados (objetos da requisição)
        //console.log(data);
        this.usuarios = data;
      });

  }

  getUserInfo(id){
    console.log(id);
    console.log(this.url);
    this.navCtrl.push(TestePage, 
      {
        'user_id':id,
        'api_url': this.url
      });
  }

}