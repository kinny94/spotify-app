import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
    private searchUrl:string;
    private clientId:string;
    private clientSecret:string;
    private redirect:string;

    constructor(private _http:Http){
       // this.searchUrl = ''; 
       this.clientId = "cd21e1cb08294f23bdf125bcaeecc5e7";
       this.clientSecret = "df5e239f902841519e8d9c6b4bfdc56b";
    }

    searchMusic(str:string, type="artist"){
        //this.redirectUrl = "https%3A%2F%2Fapi.spotify.com%2Fv1%2Fsearch%3Fquery%3Daerosmith%26offset%3D0%26limit%3D20%26type%3Dartist%26market%3DUS";
        this.searchUrl = "https://api.spotify.com/v1/search?client_id=" + this.clientId + "query=" + str + "&offset=0&limit=20&type=" + type + "&market=US";
        console.log(this.searchUrl);
        return this._http.get(this.searchUrl).map(res => res.json());
    }
}