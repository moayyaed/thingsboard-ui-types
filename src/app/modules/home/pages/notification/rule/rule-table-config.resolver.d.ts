import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { NotificationRule } from '@shared/models/notification.models';
import { NotificationService } from '@core/http/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CustomTranslatePipe } from '@shared/pipe/custom-translate.pipe';
import * as i0 from "@angular/core";
export declare class RuleTableConfigResolver {
    private notificationService;
    private translate;
    private dialog;
    private datePipe;
    private customTranslate;
    private readonly config;
    constructor(notificationService: NotificationService, translate: TranslateService, dialog: MatDialog, datePipe: DatePipe, customTranslate: CustomTranslatePipe);
    resolve(route: ActivatedRouteSnapshot): EntityTableConfig<NotificationRule>;
    private configureCellActions;
    private editRule;
    private onTargetAction;
    private toggleEnableMode;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RuleTableConfigResolver>;
}
