import { DashboardService } from '@core/http/dashboard.service';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Dashboard, DashboardLayoutId } from '@shared/models/dashboard.models';
import { EntityAliases } from '@shared/models/alias.models';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DashboardUtilsService } from '@core/services/dashboard-utils.service';
import { EntityService } from '@core/http/entity.service';
import { Widget, WidgetTypeDetails } from '@shared/models/widget.models';
import { ItemBufferService } from '@core/services/item-buffer.service';
import { BulkImportRequest, BulkImportResult, ImportWidgetResult } from './import-export.models';
import { EntityType } from '@shared/models/entity-type.models';
import { UtilsService } from '@core/services/utils.service';
import { WidgetService } from '@core/http/widget.service';
import { WidgetsBundle } from '@shared/models/widgets-bundle.model';
import { ImportEntitiesResultInfo, ImportEntityData } from '@shared/models/entity.models';
import { RequestConfig } from '@core/http/http-utils';
import { RuleChainImport, RuleChainType } from '@shared/models/rule-chain.models';
import { RuleChainService } from '@core/http/rule-chain.service';
import { DeviceProfileService } from '@core/http/device-profile.service';
import { DeviceProfile } from '@shared/models/device.models';
import { TenantProfile } from '@shared/models/tenant.model';
import { TenantProfileService } from '@core/http/tenant-profile.service';
import { DeviceService } from '@core/http/device.service';
import { AssetService } from '@core/http/asset.service';
import { EdgeService } from '@core/http/edge.service';
import { AssetProfileService } from '@core/http/asset-profile.service';
import { AssetProfile } from '@shared/models/asset.models';
import { ImageService } from '@core/http/image.service';
import { ImageResourceInfo, ImageResourceType } from '@shared/models/resource.models';
import * as i0 from "@angular/core";
export type editMissingAliasesFunction = (widgets: Array<Widget>, isSingleWidget: boolean, customTitle: string, missingEntityAliases: EntityAliases) => Observable<EntityAliases>;
export declare class ImportExportService {
    private window;
    private document;
    private store;
    private translate;
    private dashboardService;
    private dashboardUtils;
    private widgetService;
    private deviceProfileService;
    private assetProfileService;
    private tenantProfileService;
    private entityService;
    private ruleChainService;
    private deviceService;
    private assetService;
    private edgeService;
    private imageService;
    private utils;
    private itembuffer;
    private dialog;
    constructor(window: Window, document: Document, store: Store<AppState>, translate: TranslateService, dashboardService: DashboardService, dashboardUtils: DashboardUtilsService, widgetService: WidgetService, deviceProfileService: DeviceProfileService, assetProfileService: AssetProfileService, tenantProfileService: TenantProfileService, entityService: EntityService, ruleChainService: RuleChainService, deviceService: DeviceService, assetService: AssetService, edgeService: EdgeService, imageService: ImageService, utils: UtilsService, itembuffer: ItemBufferService, dialog: MatDialog);
    exportImage(type: ImageResourceType, key: string): void;
    importImage(): Observable<ImageResourceInfo>;
    exportDashboard(dashboardId: string): void;
    importDashboard(onEditMissingAliases: editMissingAliasesFunction): Observable<Dashboard>;
    exportWidget(dashboard: Dashboard, sourceState: string, sourceLayout: DashboardLayoutId, widget: Widget, widgetTitle: string): void;
    importWidget(dashboard: Dashboard, targetState: string, onEditMissingAliases: editMissingAliasesFunction, targetLayoutFunction: () => Observable<DashboardLayoutId>, onAliasesUpdateFunction: () => void, onFiltersUpdateFunction: () => void): Observable<ImportWidgetResult>;
    exportWidgetType(widgetTypeId: string): void;
    exportWidgetTypes(widgetTypeIds: string[]): Observable<void>;
    importWidgetType(): Observable<WidgetTypeDetails>;
    exportWidgetsBundle(widgetsBundleId: string): void;
    private exportWidgetsBundleWithWidgetTypes;
    private exportWidgetsBundleWithWidgetTypeFqns;
    importWidgetsBundle(): Observable<WidgetsBundle>;
    private prepareWidgetType;
    bulkImportEntities(entitiesData: BulkImportRequest, entityType: EntityType, config?: RequestConfig): Observable<BulkImportResult>;
    importEntities(entitiesData: ImportEntityData[], entityType: EntityType, updateData: boolean, importEntityCompleted?: () => void, config?: RequestConfig): Observable<ImportEntitiesResultInfo>;
    exportRuleChain(ruleChainId: string): void;
    importRuleChain(expectedRuleChainType: RuleChainType): Observable<RuleChainImport>;
    private processOldRuleChainConnections;
    exportDeviceProfile(deviceProfileId: string): void;
    importDeviceProfile(): Observable<DeviceProfile>;
    exportAssetProfile(assetProfileId: string): void;
    importAssetProfile(): Observable<AssetProfile>;
    exportTenantProfile(tenantProfileId: string): void;
    importTenantProfile(): Observable<TenantProfile>;
    private processCSVCell;
    exportCsv(data: {
        [key: string]: any;
    }[], filename: string): void;
    exportText(data: string | Array<string>, filename: string): void;
    exportJSZip(data: object, filename: string): Observable<void>;
    private prepareRuleChain;
    private prepareRuleChainMetaData;
    private validateImportedRuleChain;
    private validateImportedDeviceProfile;
    private validateImportedAssetProfile;
    private validateImportedTenantProfile;
    private sumObject;
    private handleExportError;
    private validateImportedImage;
    private validateImportedDashboard;
    private validateImportedWidget;
    private validateImportedWidgetTypeDetails;
    private validateImportedWidgetsBundle;
    private saveImportedDashboard;
    private addImportedWidget;
    private processEntityAliases;
    private prepareAliasesInfo;
    private prepareEntityAlias;
    private openImportDialog;
    private exportToPc;
    private exportJson;
    private downloadFile;
    private prepareDashboardExport;
    private prepareProfileExport;
    private prepareExport;
    private prepareImport;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImportExportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ImportExportService>;
}
