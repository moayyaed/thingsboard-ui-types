import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, Injector, NgZone, OnDestroy, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from '@core/services/utils.service';
import { AuthService } from '@core/auth/auth.service';
import { Dashboard, DashboardConfiguration, WidgetLayout } from '@app/shared/models/dashboard.models';
import { DashboardContext, DashboardPageLayoutContext, DashboardPageLayouts, DashboardPageScope, IDashboardController } from './dashboard-page.models';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthUser } from '@shared/models/user.model';
import { Widget, WidgetInfo, WidgetPosition, widgetType } from '@shared/models/widget.models';
import { DialogService } from '@core/services/dialog.service';
import { EntityService } from '@core/http/entity.service';
import { DashboardUtilsService } from '@core/services/dashboard-utils.service';
import { DashboardService } from '@core/http/dashboard.service';
import { DashboardContextMenuItem, IDashboardComponent, WidgetContextMenuItem } from '../../models/dashboard-component.models';
import { WidgetComponentService } from '../../components/widget/widget-component.service';
import { UntypedFormBuilder } from '@angular/forms';
import { ItemBufferService } from '@core/services/item-buffer.service';
import { MatDialog } from '@angular/material/dialog';
import { EditWidgetComponent } from '@home/components/dashboard-page/edit-widget.component';
import { TranslateService } from '@ngx-translate/core';
import { ImportExportService } from '@shared/import-export/import-export.service';
import { AuthState } from '@app/core/auth/auth.models';
import { Overlay } from '@angular/cdk/overlay';
import { DashboardWidgetSelectComponent } from '@home/components/dashboard-page/dashboard-widget-select.component';
import { MobileService } from '@core/services/mobile.service';
import { DomSanitizer } from '@angular/platform-browser';
import { IAliasController } from '@core/api/widget-api.models';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { HasDirtyFlag } from '@core/guards/confirm-on-exit.guard';
import * as i0 from "@angular/core";
export declare class DashboardPageComponent extends PageComponent implements IDashboardController, HasDirtyFlag, OnInit, AfterViewInit, OnDestroy {
    protected store: Store<AppState>;
    private window;
    private document;
    private breakpointObserver;
    private route;
    private router;
    private utils;
    private dashboardUtils;
    private authService;
    private entityService;
    private dialogService;
    private widgetComponentService;
    private dashboardService;
    private itembuffer;
    private importExport;
    private mobileService;
    private fb;
    private dialog;
    translate: TranslateService;
    private popoverService;
    private renderer;
    private ngZone;
    private embeddedValue;
    private overlay;
    private viewContainerRef;
    private cd;
    private sanitizer;
    elRef: ElementRef;
    private injector;
    private forcePristine;
    get isDirty(): boolean;
    set isDirty(value: boolean);
    authState: AuthState;
    authUser: AuthUser;
    dashboardPageClass: string;
    embedded: boolean;
    currentState: string;
    private hideToolbarValue;
    set hideToolbar(hideToolbar: boolean);
    get hideToolbar(): boolean;
    syncStateWithQueryParam: boolean;
    dashboard: Dashboard;
    dashboardConfiguration: DashboardConfiguration;
    parentDashboard?: IDashboardComponent;
    popoverComponent?: TbPopoverComponent;
    parentAliasController?: IAliasController;
    dashboardContainer: ElementRef<HTMLElement>;
    prevDashboard: Dashboard;
    iframeMode: boolean;
    widgetEditMode: boolean;
    singlePageMode: boolean;
    forceFullscreen: boolean;
    readonly: boolean;
    isMobileApp: boolean;
    isFullscreen: boolean;
    isEdit: boolean;
    isEditingWidget: boolean;
    isEditingWidgetClosed: boolean;
    isMobile: boolean;
    forceDashboardMobileMode: boolean;
    isAddingWidget: boolean;
    isAddingWidgetClosed: boolean;
    filterWidgetTypes: widgetType[];
    isToolbarOpened: boolean;
    isToolbarOpenedAnimate: boolean;
    isRightLayoutOpened: boolean;
    editingWidget: Widget;
    editingWidgetLayout: WidgetLayout;
    editingWidgetOriginal: Widget;
    editingWidgetLayoutOriginal: WidgetLayout;
    editingWidgetSubtitle: string;
    editingLayoutCtx: DashboardPageLayoutContext;
    thingsboardVersion: string;
    translatedDashboardTitle: string;
    currentDashboardId: string;
    currentCustomerId: string;
    currentDashboardScope: DashboardPageScope;
    setStateDashboardId: boolean;
    addingLayoutCtx: DashboardPageLayoutContext;
    mainLayoutSize: {
        width: string;
        height: string;
    };
    rightLayoutSize: {
        width: string;
        height: string;
    };
    private dashboardLogoCache;
    private defaultDashboardLogo;
    private dashboardResize$;
    dashboardCtx: DashboardContext;
    layouts: DashboardPageLayouts;
    updateBreadcrumbs: EventEmitter<any>;
    private rxSubscriptions;
    get toolbarOpened(): boolean;
    set toolbarOpened(toolbarOpened: boolean);
    get rightLayoutOpened(): boolean;
    set rightLayoutOpened(rightLayoutOpened: boolean);
    editWidgetComponent: EditWidgetComponent;
    dashboardWidgetSelectComponent: DashboardWidgetSelectComponent;
    constructor(store: Store<AppState>, window: Window, document: Document, breakpointObserver: BreakpointObserver, route: ActivatedRoute, router: Router, utils: UtilsService, dashboardUtils: DashboardUtilsService, authService: AuthService, entityService: EntityService, dialogService: DialogService, widgetComponentService: WidgetComponentService, dashboardService: DashboardService, itembuffer: ItemBufferService, importExport: ImportExportService, mobileService: MobileService, fb: UntypedFormBuilder, dialog: MatDialog, translate: TranslateService, popoverService: TbPopoverService, renderer: Renderer2, ngZone: NgZone, embeddedValue: any, overlay: Overlay, viewContainerRef: ViewContainerRef, cd: ChangeDetectorRef, sanitizer: DomSanitizer, elRef: ElementRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private init;
    private updateDashboardCss;
    private cleanupDashboardCss;
    private reset;
    ngOnDestroy(): void;
    runChangeDetection(): void;
    openToolbar(): void;
    closeToolbar(): void;
    showCloseToolbar(): boolean;
    hideFullscreenButton(): boolean;
    toolbarAlwaysOpen(): boolean;
    private hideToolbarSetting;
    displayTitle(): boolean;
    private getTranslatedDashboardTitle;
    displayExport(): boolean;
    displayUpdateDashboardImage(): boolean;
    displayDashboardTimewindow(): boolean;
    displayDashboardsSelect(): boolean;
    displayEntitiesSelect(): boolean;
    displayFilters(): boolean;
    showDashboardLogo(): boolean;
    get dashboardLogo(): string;
    showRightLayoutSwitch(): boolean;
    toggleLayouts(): void;
    openRightLayout(): void;
    private updateLayoutSizes;
    private updateMainLayoutSize;
    private updateRightLayoutSize;
    private calculateWidth;
    isPublicUser(): boolean;
    isTenantAdmin(): boolean;
    isSystemAdmin(): boolean;
    exportDashboard($event: Event): void;
    openEntityAliases($event: Event): void;
    openFilters($event: Event): void;
    openDashboardSettings($event: Event): void;
    manageDashboardStates($event: Event): void;
    manageDashboardLayouts($event: Event): void;
    private updateDashboardLayouts;
    private updateStates;
    importWidget($event: Event): void;
    private editMissingAliases;
    currentDashboardIdChanged(dashboardId: string): void;
    toggleDashboardEditMode(): void;
    saveDashboard(): void;
    openDashboardState(state: string, openRightLayout?: boolean): void;
    private updateLayouts;
    private updateLayout;
    private setEditMode;
    private resetHighlight;
    private entityAliasesUpdated;
    private filtersUpdated;
    private notifyDashboardToggleEditMode;
    private notifyDashboardUpdated;
    helpLinkIdForWidgetType(): string;
    addWidget($event: Event, layoutCtx?: DashboardPageLayoutContext): void;
    onAddWidgetClosed(): void;
    detailsDrawerOpenedStart(): void;
    detailsDrawerClosed(): void;
    private addWidgetToLayout;
    private selectTargetLayout;
    private addWidgetToDashboard;
    addWidgetFromType(widget: WidgetInfo): void;
    onRevertWidgetEdit(): void;
    saveWidget(): void;
    onEditWidgetClosed(): void;
    editWidget($event: Event, layoutCtx: DashboardPageLayoutContext, widget: Widget): void;
    copyWidget($event: Event, layoutCtx: DashboardPageLayoutContext, widget: Widget): void;
    copyWidgetReference($event: Event, layoutCtx: DashboardPageLayoutContext, widget: Widget): void;
    pasteWidget($event: Event, layoutCtx: DashboardPageLayoutContext, pos: WidgetPosition): void;
    pasteWidgetReference($event: Event, layoutCtx: DashboardPageLayoutContext, pos: WidgetPosition): void;
    removeWidget($event: Event, layoutCtx: DashboardPageLayoutContext, widget: Widget): void;
    exportWidget($event: Event, layoutCtx: DashboardPageLayoutContext, widget: Widget): void;
    widgetClicked($event: Event, layoutCtx: DashboardPageLayoutContext, widget: Widget): void;
    widgetMouseDown($event: Event, layoutCtx: DashboardPageLayoutContext, widget: Widget): void;
    prepareDashboardContextMenu(layoutCtx: DashboardPageLayoutContext): Array<DashboardContextMenuItem>;
    prepareWidgetContextMenu(layoutCtx: DashboardPageLayoutContext, widget: Widget): Array<WidgetContextMenuItem>;
    clearSelectedWidgetBundle(): void;
    editWidgetsTypesToDisplay($event: Event): void;
    updateDashboardImage($event: Event): void;
    toggleVersionControl($event: Event, versionControlButton: MatButton): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardPageComponent, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, { optional: true; }, null, null, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardPageComponent, "tb-dashboard-page", never, { "embedded": "embedded"; "currentState": "currentState"; "hideToolbar": "hideToolbar"; "syncStateWithQueryParam": "syncStateWithQueryParam"; "dashboard": "dashboard"; "parentDashboard": "parentDashboard"; "popoverComponent": "popoverComponent"; "parentAliasController": "parentAliasController"; }, {}, never, never, false, never>;
}
