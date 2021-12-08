import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService, IGroups, IProjects, IUsers } from '../services/home.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [],
})
export class HomeComponent implements OnInit {
    public users$: Observable<IUsers[]>;
    public groups$: Observable<IGroups[]>;
    public projects$: Observable<IProjects[]>;

    ngOnInit(): void {
        this.users$ = this.homeService.getUsers();
        this.groups$ = this.homeService.getGroups();
        this.projects$ = this.homeService.getProjects();
    }
    constructor(private readonly homeService: HomeService) {}
}
