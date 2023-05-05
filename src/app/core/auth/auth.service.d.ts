import { NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest, LoginResponse } from '@shared/models/login.models';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { RequestConfig } from '../http/http-utils';
import { UserService } from '../http/user.service';
import { Store } from '@ngrx/store';
import { AppState } from '../core.state';
import { AuthState } from '@core/auth/auth.models';
import { TranslateService } from '@ngx-translate/core';
import { TimeService } from '@core/services/time.service';
import { UtilsService } from '@core/services/utils.service';
import { MatDialog } from '@angular/material/dialog';
import { OAuth2ClientInfo } from '@shared/models/oauth2.models';
import { TwoFactorAuthProviderType, TwoFaProviderInfo } from '@shared/models/two-factor-auth.models';
import { UserPasswordPolicy } from '@shared/models/settings.models';
import * as i0 from "@angular/core";
export declare class AuthService {
    private store;
    private http;
    private userService;
    private timeService;
    private router;
    private route;
    private zone;
    private utils;
    private translate;
    private dialog;
    constructor(store: Store<AppState>, http: HttpClient, userService: UserService, timeService: TimeService, router: Router, route: ActivatedRoute, zone: NgZone, utils: UtilsService, translate: TranslateService, dialog: MatDialog);
    redirectUrl: string;
    oauth2Clients: Array<OAuth2ClientInfo>;
    twoFactorAuthProviders: Array<TwoFaProviderInfo>;
    private refreshTokenSubject;
    private jwtHelper;
    private static _storeGet;
    private static isTokenValid;
    static isJwtTokenValid(): boolean;
    private static clearTokenData;
    static getJwtToken(): string;
    reloadUser(): void;
    login(loginRequest: LoginRequest): Observable<LoginResponse>;
    checkTwoFaVerificationCode(providerType: TwoFactorAuthProviderType, verificationCode: number): Observable<LoginResponse>;
    publicLogin(publicId: string): Observable<LoginResponse>;
    sendResetPasswordLink(email: string): Observable<Object>;
    activate(activateToken: string, password: string, sendActivationMail: boolean): Observable<LoginResponse>;
    resetPassword(resetToken: string, password: string): Observable<LoginResponse>;
    changePassword(currentPassword: string, newPassword: string, config?: RequestConfig): Observable<LoginResponse>;
    getUserPasswordPolicy(): Observable<UserPasswordPolicy>;
    activateByEmailCode(emailCode: string): Observable<LoginResponse>;
    resendEmailActivation(email: string): Observable<Object>;
    loginAsUser(userId: string): Observable<LoginResponse>;
    logout(captureLastUrl?: boolean, ignoreRequest?: boolean): void;
    private notifyUserLoaded;
    gotoDefaultPlace(isAuthenticated: boolean): void;
    loadOAuth2Clients(): Observable<Array<OAuth2ClientInfo>>;
    getAvailableTwoFaLoginProviders(): Observable<Array<TwoFaProviderInfo>>;
    forceDefaultPlace(authState?: AuthState, path?: string, params?: any): boolean;
    defaultUrl(isAuthenticated: boolean, authState?: AuthState, path?: string, params?: any): UrlTree;
    private loadUser;
    private showLoginErrorDialog;
    private procceedJwtTokenValidate;
    private loadSystemParams;
    refreshJwtToken(loadUserElseStoreJwtToken?: boolean): Observable<LoginResponse>;
    private validateJwtToken;
    refreshTokenPending(): boolean;
    setUserFromJwtToken(jwtToken: any, refreshToken: any, notify: any): Observable<boolean>;
    private updateAndValidateTokens;
    parsePublicId(): string;
    private notifyUnauthenticated;
    private notifyAuthenticated;
    private notifyUserLang;
    private updateAndValidateToken;
    private clearJwtToken;
    private userForceFullscreen;
    private userHasProfile;
    private userHasDefaultDashboard;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthService>;
}
