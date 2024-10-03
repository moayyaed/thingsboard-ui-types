import { Store } from '@ngrx/store';
import { AppState } from '../core.state';
import { HomeSection, MenuId, MenuSection } from '@core/services/menu.models';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class MenuService {
    private store;
    private router;
    private currentMenuSections;
    private menuSections$;
    private homeSections$;
    private availableMenuSections$;
    private availableMenuLinks$;
    constructor(store: Store<AppState>, router: Router);
    private buildMenu;
    private updateOpenedMenuSections;
    private allMenuLinks;
    private allMenuSections;
    menuSections(): Observable<Array<MenuSection>>;
    homeSections(): Observable<Array<HomeSection>>;
    availableMenuLinks(): Observable<Array<MenuSection>>;
    availableMenuSections(): Observable<Array<MenuSection>>;
    menuLinkById(id: MenuId | string): Observable<MenuSection | undefined>;
    menuLinksByIds(ids: string[]): Observable<Array<MenuSection>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MenuService>;
}
