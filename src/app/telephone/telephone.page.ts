import { Component, OnInit } from '@angular/core';
import {Plugins} from '@capacitor/core';
const { Device } = Plugins;
const { Network } = Plugins;


@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.page.html',
  styleUrls: ['./telephone.page.scss'],
})
export class TelephonePage implements OnInit {

infosDevice = new Map<string, string>() ;
infosConnexion = new Map<string, string>();

  constructor() { }



  ngOnInit() {
    /**
     * On récupère les infos sur l'appareil en cours
     */
    Device.getInfo().then((infos) => {
      for (const [key, value] of Object.entries(infos)) {
        this.infosDevice.set(key, value);
      }
    });

    /**
     * On récupère les information sur le réseau
     */
    Network.getStatus().then((statut) => {
      for (const [key, value] of Object.entries(statut)) {
        this.infosConnexion.set(key, value);
      }
    });
  }

}
