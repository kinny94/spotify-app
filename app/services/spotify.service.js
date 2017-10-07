"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var SpotifyService = (function () {
    function SpotifyService(_http) {
        this._http = _http;
        // this.searchUrl = ''; 
        this.clientId = "cd21e1cb08294f23bdf125bcaeecc5e7";
        this.clientSecret = "df5e239f902841519e8d9c6b4bfdc56b";
    }
    SpotifyService.prototype.searchMusic = function (str, type) {
        if (type === void 0) { type = "artist"; }
        //this.redirectUrl = "https%3A%2F%2Fapi.spotify.com%2Fv1%2Fsearch%3Fquery%3Daerosmith%26offset%3D0%26limit%3D20%26type%3Dartist%26market%3DUS";
        this.searchUrl = "https://api.spotify.com/v1/search?client_id=" + this.clientId + "query=" + str + "&offset=0&limit=20&type=" + type + "&market=US";
        console.log(this.searchUrl);
        return this._http.get(this.searchUrl).map(function (res) { return res.json(); });
    };
    SpotifyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SpotifyService);
    return SpotifyService;
}());
exports.SpotifyService = SpotifyService;
//# sourceMappingURL=spotify.service.js.map