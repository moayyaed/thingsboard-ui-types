import { RequestConfig } from './http-utils';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { WidgetsBundle } from '@shared/models/widgets-bundle.model';
import { Widget, WidgetType, widgetType, WidgetTypeDetails, WidgetTypeInfo } from '@shared/models/widget.models';
import { UtilsService } from '@core/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import { ResourcesService } from '../services/resources.service';
import { WidgetInfo } from '@app/modules/home/models/widget-component.models';
import { WidgetTypeId } from '@shared/models/id/widget-type-id';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class WidgetService {
    private http;
    private utils;
    private resources;
    private translate;
    private router;
    private allWidgetsBundles;
    private systemWidgetsBundles;
    private tenantWidgetsBundles;
    private widgetTypeInfosCache;
    private widgetsInfoInMemoryCache;
    private loadWidgetsBundleCacheSubject;
    constructor(http: HttpClient, utils: UtilsService, resources: ResourcesService, translate: TranslateService, router: Router);
    getWidgetScopeVariables(): string[];
    getAllWidgetsBundles(config?: RequestConfig): Observable<Array<WidgetsBundle>>;
    getSystemWidgetsBundles(config?: RequestConfig): Observable<Array<WidgetsBundle>>;
    getTenantWidgetsBundles(config?: RequestConfig): Observable<Array<WidgetsBundle>>;
    getWidgetBundles(pageLink: PageLink, config?: RequestConfig): Observable<PageData<WidgetsBundle>>;
    getWidgetsBundle(widgetsBundleId: string, config?: RequestConfig): Observable<WidgetsBundle>;
    saveWidgetsBundle(widgetsBundle: WidgetsBundle, config?: RequestConfig): Observable<WidgetsBundle>;
    deleteWidgetsBundle(widgetsBundleId: string, config?: RequestConfig): Observable<Object>;
    getBundleWidgetTypes(bundleAlias: string, isSystem: boolean, config?: RequestConfig): Observable<Array<WidgetType>>;
    getBundleWidgetTypesDetails(bundleAlias: string, isSystem: boolean, config?: RequestConfig): Observable<Array<WidgetTypeDetails>>;
    getBundleWidgetTypeInfos(bundleAlias: string, isSystem: boolean, config?: RequestConfig): Observable<Array<WidgetTypeInfo>>;
    loadBundleLibraryWidgets(bundleAlias: string, isSystem: boolean, config?: RequestConfig): Observable<Array<Widget>>;
    getWidgetType(bundleAlias: string, widgetTypeAlias: string, isSystem: boolean, config?: RequestConfig): Observable<WidgetType>;
    saveWidgetTypeDetails(widgetInfo: WidgetInfo, id: WidgetTypeId, bundleAlias: string, createdTime: number, config?: RequestConfig): Observable<WidgetTypeDetails>;
    saveImportedWidgetTypeDetails(widgetTypeDetails: WidgetTypeDetails, config?: RequestConfig): Observable<WidgetTypeDetails>;
    deleteWidgetType(bundleAlias: string, widgetTypeAlias: string, isSystem: boolean, config?: RequestConfig): Observable<Object>;
    getWidgetTypeById(widgetTypeId: string, config?: RequestConfig): Observable<WidgetTypeDetails>;
    getWidgetTemplate(widgetTypeParam: widgetType, config?: RequestConfig): Observable<WidgetInfo>;
    createWidgetInfoCacheKey(bundleAlias: string, widgetTypeAlias: string, isSystem: boolean): string;
    getWidgetInfoFromCache(bundleAlias: string, widgetTypeAlias: string, isSystem: boolean): WidgetInfo | undefined;
    putWidgetInfoToCache(widgetInfo: WidgetInfo, bundleAlias: string, widgetTypeAlias: string, isSystem: boolean): void;
    private widgetTypeUpdated;
    private widgetsBundleDeleted;
    private deleteWidgetInfoFromCache;
    private deleteWidgetsBundleFromCache;
    private loadWidgetsBundleCache;
    private invalidateWidgetsBundleCache;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WidgetService>;
}
