import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { User } from '../model/user';
import { environment } from '../../environments/environment';
import { Configuration } from '../util/config';
import { JwtResponse } from '../model/jwt.response';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from './loader.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private http: HttpClient,
        private router: Router,
        private toaster: ToastrService,
        private loaderService: LoaderService) {
    }

    login(username: string, password: string) {
        return this.http.post<JwtResponse>(Configuration.getApiUrl() + '/' + Configuration.getLoginUrl(), { username, password })
            .pipe(map(response => {
                Configuration.udpateToken(response);
            }));
    }

    logout() {
        Configuration.clearToken();
        this.router.navigate(['/login']);
    }

    resetPassword(email: string) {
        return this.http.post<JwtResponse>(Configuration.getApiUrl() + '/noauth/reset-password', { email })
            .pipe(map(response => {
                debugger;
            }));
    }

    checkSessionToken() {
        let token = sessionStorage.getItem('token');
        debugger;
        if (token) {
            let headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            });
            let options = { headers: headers };
            this.http.post<JwtResponse>(Configuration.getApiUrl() + '/' + Configuration.getUpdateTokenUrl(), null, options)
                .pipe(first())
                .subscribe(
                    data => {
                        Configuration.udpateToken(data);
                        this.router.navigate(['/home']);
                    },
                    error => {
                        this.toaster.error('Authntication Failed', 'Invalid session. Please try again.');
                        this.logout();
                    });
            this.loaderService.unmask();
        } else {
            debugger;
            this.logout();
            this.loaderService.unmask();
        }
    }
}