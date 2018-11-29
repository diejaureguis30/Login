import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  usu=[];
  home=HomePage;
  Correo='';
  Contrasena='';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.usu=this.navParams.get('usu');
  }
  
  ionViewDidLoad(){
    console.log('ionViewDidLoad RegistroPage');
  }

  clickListo()
  {
    if(this.Correo.length>0)
    {
      
      this.usu.push({
      Correo:this.Correo,
      Contrasena:this.Contrasena
      });
    
    this.navCtrl.pop();

    }
    else{
      const alert = this.alertCtrl.create(
      {
        title: 'Ooops!',
        subTitle: 'Tu registro le falta algo',
        buttons: ['Ok']
      });
      alert.present();
    }
  }


}
