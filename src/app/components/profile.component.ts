import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import {GithubService} from './../services/github.service'

@Component({
  selector: 'profile',
  templateUrl: "./profile.component.html"
})
export class ProfileComponent {

    user: any
    repos: any[]
    @Input() search: string;

    constructor(private _githubService: GithubService) {
        //this._githubService.getUser().then(user => console.log(user))
        // this.getGithubUser()
        // this.getRepos()
        this.user = false
    }

    ngOnChanges(changes: SimpleChanges) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add 'implements OnChanges' to the class.
        //console.log(this.search)
        //this._githubService.updateUser(this.search)
        this.searchUser()
    }

    async getGithubUser() {
        let user = await this._githubService.getUser()
        this.user = user
    }
    async getRepos() {
        let repos = await this._githubService.getRepos()
        this.repos = repos
    }

    searchUser() {
        this._githubService.updateUser(this.search)
        this.getGithubUser()
        this.getRepos()
    }
}
