import { OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HasConfirmForm } from '@core/guards/confirm-on-exit.guard';
import { MobileAppService } from '@core/http/mobile-app.service';
import { BadgePosition, MobileAppSettings } from '@shared/models/mobile-app.models';
import * as i0 from "@angular/core";
export declare class MobileAppSettingsComponent extends PageComponent implements HasConfirmForm, OnDestroy {
    protected store: Store<AppState>;
    private mobileAppService;
    private fb;
    mobileAppSettingsForm: FormGroup;
    mobileAppSettings: MobileAppSettings;
    private readonly destroy$;
    badgePositionTranslationsMap: Map<BadgePosition, string>;
    constructor(store: Store<AppState>, mobileAppService: MobileAppService, fb: FormBuilder);
    ngOnDestroy(): void;
    private buildMobileAppSettingsForm;
    private processMobileAppSettings;
    private androidEnableChanged;
    private iosEnableChanged;
    save(): void;
    confirmForm(): FormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileAppSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MobileAppSettingsComponent, "tb-mobile-app-settings", never, {}, {}, never, never, false, never>;
}
