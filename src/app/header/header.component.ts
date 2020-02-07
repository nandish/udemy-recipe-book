import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
    isAuthenticated = false;
    private userSub: Subscription;

    constructor(private dataStorageService: DataStorageService,
                private authService: AuthService,
                private store: Store<fromApp.AppState>) { }

    ngOnInit() {
        this.userSub = this.store.select('auth')
            .pipe(
                map(authState => authState.user)
            )
            .subscribe(user => {
                this.isAuthenticated = !!user; // !user ? false : true;
            });
    }

    onLogout() {
        this.authService.logout();
    }
    onSaveData() {
        this.dataStorageService.storeRecipes();
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe();
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
}
