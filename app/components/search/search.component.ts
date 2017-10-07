import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'; 
import {SpotifyService} from '../../services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    providers: [SpotifyService, useFactory:()=>{
        
    }]
})

export class SearchComponent {

    searchStr:string;

    constructor(private _spotifyService:SpotifyService){

    }

    searchMusic(){
        //console.log(this.searchStr);
        this._spotifyService.searchMusic(this.searchStr).subscribe(res => { console.log(res.artist.items)});
    }
}
