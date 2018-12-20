import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the TestePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teste',
  templateUrl: 'teste.html',
})
export class TestePage {

  public user: any = {};

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public http: Http
  ) {

    let url = this.navParams.get('api_url');
    let user_id = this.navParams.get('user_id');

    //fazendo a requisicao na api
    this.http.get(url + user_id)
      .map(res => res.json()) // o que vinher na resposta, converte para json
      .subscribe(data => {  // data onde fica os dados (objetos da requisição)
        console.log(data);
        this.user = data;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestePage');
  }



}