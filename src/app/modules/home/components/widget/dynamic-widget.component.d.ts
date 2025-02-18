import { PageComponent } from '@shared/components/page.component';
import { Injector, OnDestroy, OnInit } from '@angular/core';
import { IDynamicWidgetComponent } from '@home/models/widget-component.models';
import { HttpErrorResponse } from '@angular/common/http';
import { RafService } from '@core/services/raf.service';
import { NotificationHorizontalPosition, NotificationType, NotificationVerticalPosition } from '@core/notification/notification.models';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class DynamicWidgetComponent extends PageComponent implements IDynamicWidgetComponent, OnInit, OnDestroy {
    executingRpcRequest: boolean;
    rpcEnabled: boolean;
    rpcErrorText: string;
    rpcRejection: HttpErrorResponse | Error;
    [key: string]: any;
    validators: typeof Validators;
    raf: RafService;
    fb: UntypedFormBuilder;
    readonly $injector: Injector;
    readonly ctx: import("@home/models/widget-component.models").WidgetContext;
    readonly errorMessages: string[];
    readonly widgetTitlePanel: import("@angular/core").TemplateRef<any>;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    clearRpcError(): void;
    showSuccessToast(message: string, duration?: number, verticalPosition?: NotificationVerticalPosition, horizontalPosition?: NotificationHorizontalPosition, target?: string): void;
    showErrorToast(message: string, verticalPosition?: NotificationVerticalPosition, horizontalPosition?: NotificationHorizontalPosition, target?: string): void;
    showToast(type: NotificationType, message: string, duration: number, verticalPosition?: NotificationVerticalPosition, horizontalPosition?: NotificationHorizontalPosition, target?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicWidgetComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DynamicWidgetComponent, never, never, {}, {}, never, never, false, never>;
}
