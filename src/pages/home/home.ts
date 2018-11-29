import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Reg=RegistroPage;
  Correo='';
  Contrasena='';
  Usuario=[ {id: '', Correo:'', Contrasena:''}]
  usu=[];
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public storage: Storage) {
    this.storage.keys()
                .then(keys=> {
                    if (keys.some(key => key == 'usu')){
                      this.storage.get('usu')
                      .then(usu => {
                        this.usu = JSON.parse(usu);
                      })
                    }
                })

              }

  clickRegistrarse(){
    this.navCtrl.push(this.Reg, {usu:this.Usuario});
  }
  clickEntrar(){
    let index= this.Usuario.findIndex(u=> u.Correo == this.Correo);
    let index2= this.Usuario.findIndex(c=> c.Contrasena == this.Contrasena);

    if(index== index2)
    {
      const alert = this.alertCtrl.create(
        {
          title: 'Log in exitoso',
          subTitle: 'Tu registro está completo',
          buttons: ['Ok']
        });
        alert.present();
    }
    else
    {
      const alert2 = this.alertCtrl.create(
        {
          title: 'Ooops!',
          subTitle: 'Tu registro tiene un error',
          buttons: ['Ok']
        });
        alert2.present();
    }
  }
}
this.Correo="";
this.Contrasena="";