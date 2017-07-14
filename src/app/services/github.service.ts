import {Injectable} from "@angular/core"
import {Http, Headers} from "@angular/http"
import {Observable} from "rxjs"
import "rxjs/add/operator/map"
import "rxjs/add/operator/toPromise"

@Injectable()
export class GithubService {
    private username: string
    private clientId = '62393cc821cf63178731'
    private clientSecret = '3b89234b289582dbd68a18dd9cb4414a222a853b'

    constructor(private _http: Http) {
        console.log("Github service ready.")
        //this.username = 'bradtraversy'
    }

    async getUser() {
        let response = await this._http.get(`https://api.github.com/users/${this.username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`).toPromise()
        return response.json()
    }

    async getRepos() {
         let response = await this._http.get(`https://api.github.com/users/${this.username}/repos?client_id=${this.clientId}&client_secret=${this.clientSecret}`).toPromise()
        return response.json()
    }

    updateUser(username: string) {
        //console.log(this.username)
        this.username = username
        //console.log(this.username)
    }
}