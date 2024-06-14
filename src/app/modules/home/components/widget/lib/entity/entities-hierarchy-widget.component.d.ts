import { AfterViewInit, ElementRef, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetContext } from '@home/models/widget-component.models';
import { UtilsService } from '@core/services/utils.service';
import { Overlay } from '@angular/cdk/overlay';
import { LoadNodesCallback, NavTreeEditCallbacks, NodeSearchCallback, NodeSelectedCallback, NodesInsertedCallback } from '@shared/components/nav-tree.component';
import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class EntitiesHierarchyWidgetComponent extends PageComponent implements OnInit, AfterViewInit, OnDestroy {
    protected store: Store<AppState>;
    private elementRef;
    private overlay;
    private viewContainerRef;
    private utils;
    private fb;
    ctx: WidgetContext;
    searchInputField: ElementRef;
    toastTargetId: string;
    textSearchMode: boolean;
    textSearch: import("@angular/forms").FormControl<string>;
    nodeEditCallbacks: NavTreeEditCallbacks;
    private settings;
    private widgetConfig;
    private subscription;
    private datasources;
    private nodesMap;
    private pendingUpdateNodeTasks;
    private nodeIdCounter;
    private nodeRelationQueryFunction;
    private nodeIconFunction;
    private nodeTextFunction;
    private nodeDisabledFunction;
    private nodeOpenedFunction;
    private nodeHasChildrenFunction;
    private nodesSortFunction;
    private searchAction;
    private destroy$;
    constructor(store: Store<AppState>, elementRef: ElementRef, overlay: Overlay, viewContainerRef: ViewContainerRef, utils: UtilsService, fb: FormBuilder);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onDataUpdated(): void;
    onEditModeChanged(): void;
    private initializeConfig;
    private enterFilterMode;
    exitFilterMode(): void;
    private updateNodeData;
    loadNodes: LoadNodesCallback;
    onNodeSelected: NodeSelectedCallback;
    onNodesInserted: NodesInsertedCallback;
    searchCallback: NodeSearchCallback;
    private updateNodeStyle;
    private prepareNodes;
    private prepareNodeText;
    private prepareNodeIcon;
    private datasourceToNode;
    private loadChildren;
    private prepareNodeRelationQuery;
    private prepareNodeRelationsQueryFilter;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntitiesHierarchyWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntitiesHierarchyWidgetComponent, "tb-entities-hierarchy-widget", never, { "ctx": "ctx"; }, {}, never, never, false, never>;
}
