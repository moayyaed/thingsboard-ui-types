import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityId } from '@shared/models/id/entity-id';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { PageLink } from '@shared/models/page/page-link';
import { EntityVersion } from '@shared/models/vc.models';
import { EntitiesVersionControlService } from '@core/http/entities-version-control.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BranchAutocompleteComponent } from '@shared/components/vc/branch-autocomplete.component';
import { TbPopoverService } from '@shared/components/popover.service';
import { MatButton } from '@angular/material/button';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { AdminService } from '@core/http/admin.service';
import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class EntityVersionsTableComponent extends PageComponent implements OnInit, AfterViewInit, OnDestroy {
    protected store: Store<AppState>;
    private entitiesVersionControlService;
    private adminService;
    private popoverService;
    private renderer;
    private cd;
    private viewContainerRef;
    private elementRef;
    private fb;
    private zone;
    branchAutocompleteComponent: BranchAutocompleteComponent;
    singleEntityMode: boolean;
    popoverComponent: TbPopoverComponent;
    onBeforeCreateVersion: () => Observable<any>;
    displayedColumns: string[];
    pageLink: PageLink;
    textSearchMode: boolean;
    dataSource: EntityVersionsDatasource;
    hidePageSize: boolean;
    branch: string;
    activeValue: boolean;
    dirtyValue: boolean;
    externalEntityIdValue: EntityId;
    viewsInited: boolean;
    isReadOnly: Observable<boolean>;
    textSearch: import("@angular/forms").FormControl<string>;
    private componentResize$;
    private destroy$;
    set active(active: boolean);
    set externalEntityId(externalEntityId: EntityId);
    entityId: EntityId;
    entityName: string;
    versionRestored: EventEmitter<void>;
    searchInputField: ElementRef;
    paginator: MatPaginator;
    sort: MatSort;
    constructor(store: Store<AppState>, entitiesVersionControlService: EntitiesVersionControlService, adminService: AdminService, popoverService: TbPopoverService, renderer: Renderer2, cd: ChangeDetectorRef, viewContainerRef: ViewContainerRef, elementRef: ElementRef, fb: FormBuilder, zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    branchChanged(newBranch: string): void;
    ngAfterViewInit(): void;
    toggleCreateVersion($event: Event, createVersionButton: MatButton): void;
    toggleComplexCreateVersion($event: Event, complexCreateVersionButton: MatButton): void;
    toggleShowVersionDiff($event: Event, diffVersionButton: MatButton, entityVersion: EntityVersion): void;
    toggleRestoreEntityVersion($event: Event, restoreVersionButton: MatButton, entityVersion: EntityVersion): void;
    toggleRestoreEntitiesVersion($event: Event, restoreEntitiesVersionButton: MatButton, entityVersion: EntityVersion): void;
    versionIdContent(entityVersion: EntityVersion): string;
    enterFilterMode(): void;
    exitFilterMode(): void;
    private initFromDefaultBranch;
    updateData(): void;
    private resetSortAndFilter;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityVersionsTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityVersionsTableComponent, "tb-entity-versions-table", never, { "singleEntityMode": "singleEntityMode"; "popoverComponent": "popoverComponent"; "onBeforeCreateVersion": "onBeforeCreateVersion"; "active": "active"; "externalEntityId": "externalEntityId"; "entityId": "entityId"; "entityName": "entityName"; }, { "versionRestored": "versionRestored"; }, never, never, false, never>;
}
declare class EntityVersionsDatasource implements DataSource<EntityVersion> {
    private entitiesVersionControlService;
    private entityVersionsSubject;
    private pageDataSubject;
    pageData$: Observable<PageData<EntityVersion>>;
    dataLoading: boolean;
    constructor(entitiesVersionControlService: EntitiesVersionControlService);
    connect(collectionViewer: CollectionViewer): Observable<EntityVersion[] | ReadonlyArray<EntityVersion>>;
    disconnect(collectionViewer: CollectionViewer): void;
    loadEntityVersions(singleEntityMode: boolean, branch: string, externalEntityId: EntityId, pageLink: PageLink): Observable<PageData<EntityVersion>>;
    fetchEntityVersions(singleEntityMode: boolean, branch: string, externalEntityId: EntityId, pageLink: PageLink): Observable<PageData<EntityVersion>>;
    isEmpty(): Observable<boolean>;
    total(): Observable<number>;
}
export {};
