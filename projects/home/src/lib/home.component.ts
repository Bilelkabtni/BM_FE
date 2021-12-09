import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService, IGroups, IProjects, IUsers } from './home.service';

@Component({
    selector: 'lib-home',
    templateUrl: '/home.component.html',
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
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
