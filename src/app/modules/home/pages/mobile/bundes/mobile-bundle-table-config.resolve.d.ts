import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { MobileAppBundleInfo } from '@shared/models/mobile-app.models';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MobileAppService } from '@core/http/mobile-app.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class MobileBundleTableConfigResolver {
    private datePipe;
    private mobileAppService;
    private translate;
    private dialog;
    private router;
    private store;
    private readonly config;
    private openingEditDialog;
    constructor(datePipe: DatePipe, mobileAppService: MobileAppService, translate: TranslateService, dialog: MatDialog, router: Router, store: Store<AppState>);
    resolve(_route: ActivatedRouteSnapshot): EntityTableConfig<MobileAppBundleInfo>;
    private configureCellActions;
    private editBundle;
    private configurationApp;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileBundleTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MobileBundleTableConfigResolver>;
}
