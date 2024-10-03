import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PageLink } from '@shared/models/page/page-link';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { WidgetContext } from '@home/models/widget-component.models';
import { MatPaginator } from '@angular/material/paginator';
import { GatewayLogData, GatewayStatus, LogLink } from './gateway-widget.models';
import * as i0 from "@angular/core";
export declare class GatewayLogsComponent implements OnInit, AfterViewInit {
    pageLink: PageLink;
    dataSource: MatTableDataSource<GatewayLogData>;
    displayedColumns: string[];
    ctx: WidgetContext;
    dialogRef: MatDialogRef<any>;
    searchInputField: ElementRef;
    sort: MatSort;
    paginator: MatPaginator;
    textSearchMode: boolean;
    logLinks: Array<LogLink>;
    activeLink: LogLink;
    gatewayLogLinks: Array<LogLink>;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private updateWidgetTitle;
    private updateData;
    onTabChanged(link: LogLink): void;
    statusClass(status: GatewayStatus): string;
    statusClassMsg(status?: GatewayStatus): string;
    trackByLogTs(_: number, log: GatewayLogData): number;
    private changeSubscription;
    static ɵfac: i0.ɵɵFactoryDeclaration<GatewayLogsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GatewayLogsComponent, "tb-gateway-logs", never, { "ctx": "ctx"; "dialogRef": "dialogRef"; }, {}, never, never, false, never>;
}
