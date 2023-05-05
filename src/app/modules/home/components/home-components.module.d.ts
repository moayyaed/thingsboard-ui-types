import * as i0 from "@angular/core";
import * as i1 from "@home/components/router-tabs.component";
import * as i2 from "@home/components/entity/entities-table.component";
import * as i3 from "@home/components/entity/add-entity-dialog.component";
import * as i4 from "@home/components/details-panel.component";
import * as i5 from "@home/components/entity/entity-details-panel.component";
import * as i6 from "@home/components/entity/entity-details-page.component";
import * as i7 from "@home/components/audit-log/audit-log-table.component";
import * as i8 from "@home/components/audit-log/audit-log-details-dialog.component";
import * as i9 from "@home/components/event/event-content-dialog.component";
import * as i10 from "@home/components/event/event-table-header.component";
import * as i11 from "@home/components/event/event-table.component";
import * as i12 from "@home/components/event/event-filter-panel.component";
import * as i13 from "@home/components/edge/edge-downlink-table-header.component";
import * as i14 from "@home/components/edge/edge-downlink-table.component";
import * as i15 from "@home/components/relation/relation-table.component";
import * as i16 from "@home/components/relation/relation-dialog.component";
import * as i17 from "@home/components/relation/relation-filters.component";
import * as i18 from "@home/components/alarm/alarm-table-header.component";
import * as i19 from "@home/components/alarm/alarm-table.component";
import * as i20 from "@home/components/alarm/alarm-assignee-panel.component";
import * as i21 from "@home/components/alarm/alarm-assignee-select.component";
import * as i22 from "@home/components/alarm/alarm-assignee-select-panel.component";
import * as i23 from "@home/components/alarm/alarm-filter-config.component";
import * as i24 from "@home/components/attribute/attribute-table.component";
import * as i25 from "@home/components/attribute/add-attribute-dialog.component";
import * as i26 from "@home/components/attribute/edit-attribute-value-panel.component";
import * as i27 from "@home/components/alias/aliases-entity-select-panel.component";
import * as i28 from "@home/components/alias/aliases-entity-select.component";
import * as i29 from "@home/components/alias/aliases-entity-autocomplete.component";
import * as i30 from "@home/components/alias/entity-aliases-dialog.component";
import * as i31 from "@home/components/alias/entity-alias-dialog.component";
import * as i32 from "@home/components/dashboard/dashboard.component";
import * as i33 from "@home/components/widget/widget-container.component";
import * as i34 from "@home/components/widget/widget.component";
import * as i35 from "@home/components/widget/legend.component";
import * as i36 from "@home/components/widget/widget-settings.component";
import * as i37 from "@home/components/widget/widget-config.component";
import * as i38 from "@home/components/entity/entity-filter-view.component";
import * as i39 from "@home/components/entity/entity-filter.component";
import * as i40 from "@home/components/alias/entity-alias-select.component";
import * as i41 from "@home/components/widget/data-keys.component";
import * as i42 from "@home/components/widget/data-key-config.component";
import * as i43 from "@home/components/widget/data-key-config-dialog.component";
import * as i44 from "@home/components/widget/legend-config.component";
import * as i45 from "@home/components/widget/action/manage-widget-actions.component";
import * as i46 from "@home/components/widget/action/widget-action-dialog.component";
import * as i47 from "@home/components/widget/action/custom-action-pretty-resources-tabs.component";
import * as i48 from "@home/components/widget/action/custom-action-pretty-editor.component";
import * as i49 from "@home/components/widget/action/mobile-action-editor.component";
import * as i50 from "@home/components/widget/dialog/custom-dialog-container.component";
import * as i51 from "@home/components/import-export/import-dialog.component";
import * as i52 from "@home/components/import-export/import-dialog-csv.component";
import * as i53 from "@home/components/dashboard/select-target-layout-dialog.component";
import * as i54 from "@home/components/dashboard/select-target-state-dialog.component";
import * as i55 from "@home/components/attribute/add-widget-to-dashboard-dialog.component";
import * as i56 from "@home/components/import-export/table-columns-assignment.component";
import * as i57 from "@home/components/filter/boolean-filter-predicate.component";
import * as i58 from "@home/components/filter/string-filter-predicate.component";
import * as i59 from "@home/components/filter/numeric-filter-predicate.component";
import * as i60 from "@home/components/filter/complex-filter-predicate.component";
import * as i61 from "@home/components/filter/complex-filter-predicate-dialog.component";
import * as i62 from "@home/components/filter/filter-predicate.component";
import * as i63 from "@home/components/filter/filter-predicate-list.component";
import * as i64 from "@home/components/filter/key-filter-list.component";
import * as i65 from "@home/components/filter/key-filter-dialog.component";
import * as i66 from "@home/components/filter/filter-dialog.component";
import * as i67 from "@home/components/filter/filters-dialog.component";
import * as i68 from "@home/components/filter/filter-select.component";
import * as i69 from "@home/components/filter/filter-text.component";
import * as i70 from "@home/components/filter/filters-edit.component";
import * as i71 from "@home/components/filter/filters-edit-panel.component";
import * as i72 from "@home/components/filter/user-filter-dialog.component";
import * as i73 from "@home/components/filter/filter-user-info.component";
import * as i74 from "@home/components/filter/filter-user-info-dialog.component";
import * as i75 from "@home/components/filter/filter-predicate-value.component";
import * as i76 from "@home/components/profile/tenant-profile-autocomplete.component";
import * as i77 from "@home/components/profile/tenant/default-tenant-profile-configuration.component";
import * as i78 from "@home/components/profile/tenant/tenant-profile-configuration.component";
import * as i79 from "@home/components/profile/tenant-profile-data.component";
import * as i80 from "@home/components/profile/tenant-profile.component";
import * as i81 from "@home/components/profile/tenant-profile-dialog.component";
import * as i82 from "@home/components/profile/device-profile-autocomplete.component";
import * as i83 from "@home/components/profile/device/default-device-profile-configuration.component";
import * as i84 from "@home/components/profile/device/device-profile-configuration.component";
import * as i85 from "@home/components/profile/device/default-device-profile-transport-configuration.component";
import * as i86 from "@home/components/profile/device/mqtt-device-profile-transport-configuration.component";
import * as i87 from "@home/components/profile/device/coap-device-profile-transport-configuration.component";
import * as i88 from "@home/components/profile/device/device-profile-transport-configuration.component";
import * as i89 from "@home/components/profile/alarm/create-alarm-rules.component";
import * as i90 from "@home/components/profile/alarm/alarm-rule.component";
import * as i91 from "@home/components/profile/alarm/alarm-rule-condition-dialog.component";
import * as i92 from "@home/components/profile/alarm/alarm-rule-condition.component";
import * as i93 from "@home/components/profile/alarm/device-profile-alarm.component";
import * as i94 from "@home/components/profile/alarm/device-profile-alarms.component";
import * as i95 from "@home/components/profile/device-profile.component";
import * as i96 from "@home/components/profile/device-profile-dialog.component";
import * as i97 from "@home/components/profile/add-device-profile-dialog.component";
import * as i98 from "@home/components/device/device-info-filter.component";
import * as i99 from "@home/components/profile/asset-profile.component";
import * as i100 from "@home/components/profile/asset-profile-dialog.component";
import * as i101 from "@home/components/profile/asset-profile-autocomplete.component";
import * as i102 from "@home/components/rule-chain/rule-chain-autocomplete.component";
import * as i103 from "@home/components/profile/alarm/alarm-schedule-info.component";
import * as i104 from "@home/components/profile/device-profile-provision-configuration.component";
import * as i105 from "@home/components/profile/alarm/alarm-schedule.component";
import * as i106 from "@home/components/profile/alarm/alarm-dynamic-value.component";
import * as i107 from "@home/components/profile/alarm/alarm-duration-predicate-value.component";
import * as i108 from "@home/components/wizard/device-wizard-dialog.component";
import * as i109 from "@home/components/profile/alarm/alarm-schedule-dialog.component";
import * as i110 from "@home/components/profile/alarm/edit-alarm-details-dialog.component";
import * as i111 from "@home/components/sms/sms-provider-configuration.component";
import * as i112 from "@home/components/sms/aws-sns-provider-configuration.component";
import * as i113 from "@home/components/sms/smpp-sms-provider-configuration.component";
import * as i114 from "@home/components/sms/twilio-sms-provider-configuration.component";
import * as i115 from "@home/components/dashboard-page/dashboard-toolbar.component";
import * as i116 from "@home/components/dashboard-page/dashboard-page.component";
import * as i117 from "@home/components/dashboard-page/dashboard-state.component";
import * as i118 from "@home/components/dashboard-page/layout/dashboard-layout.component";
import * as i119 from "@home/components/dashboard-page/edit-widget.component";
import * as i120 from "@home/components/dashboard-page/dashboard-widget-select.component";
import * as i121 from "@home/components/dashboard-page/add-widget-dialog.component";
import * as i122 from "@home/components/dashboard-page/layout/manage-dashboard-layouts-dialog.component";
import * as i123 from "@home/components/dashboard-page/dashboard-settings-dialog.component";
import * as i124 from "@home/components/dashboard-page/states/manage-dashboard-states-dialog.component";
import * as i125 from "@home/components/dashboard-page/states/dashboard-state-dialog.component";
import * as i126 from "@home/components/dashboard-page/dashboard-image-dialog.component";
import * as i127 from "@home/components/widget/dialog/embed-dashboard-dialog.component";
import * as i128 from "@home/components/dashboard-page/widget-types-panel.component";
import * as i129 from "@home/components/profile/queue/tenant-profile-queues.component";
import * as i130 from "@home/components/queue/queue-form.component";
import * as i131 from "@home/components/vc/repository-settings.component";
import * as i132 from "@home/components/vc/version-control.component";
import * as i133 from "@home/components/vc/entity-versions-table.component";
import * as i134 from "@home/components/vc/entity-version-create.component";
import * as i135 from "@home/components/vc/entity-version-restore.component";
import * as i136 from "@home/components/vc/entity-version-diff.component";
import * as i137 from "@home/components/vc/complex-version-create.component";
import * as i138 from "@home/components/vc/entity-types-version-create.component";
import * as i139 from "@home/components/vc/entity-types-version-load.component";
import * as i140 from "@home/components/vc/complex-version-load.component";
import * as i141 from "@home/components/vc/remove-other-entities-confirm.component";
import * as i142 from "@home/components/vc/auto-commit-settings.component";
import * as i143 from "@home/components/profile/tenant/rate-limits/rate-limits-list.component";
import * as i144 from "@home/components/profile/tenant/rate-limits/rate-limits.component";
import * as i145 from "@home/components/profile/tenant/rate-limits/rate-limits-text.component";
import * as i146 from "@home/components/profile/tenant/rate-limits/rate-limits-details-dialog.component";
import * as i147 from "@home/components/notification/send-notification-button.component";
import * as i148 from "@angular/common";
import * as i149 from "@app/shared/shared.module";
import * as i150 from "@home/components/shared-home-components.module";
import * as i151 from "@home/components/widget/lib/settings/widget-settings.module";
import * as i152 from "@home/components/profile/device/lwm2m/lwm2m-profile-components.module";
import * as i153 from "@home/components/profile/device/snmp/snmp-device-profile-transport.module";
import * as i154 from "@home/components/dashboard-page/states/states-controller.module";
import * as i155 from "@home/components/device/device-credentials.module";
import * as i156 from "@home/components/profile/device/common/device-profile-common.module";
export declare class HomeComponentsModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<HomeComponentsModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<HomeComponentsModule, [typeof i1.RouterTabsComponent, typeof i2.EntitiesTableComponent, typeof i3.AddEntityDialogComponent, typeof i4.DetailsPanelComponent, typeof i5.EntityDetailsPanelComponent, typeof i6.EntityDetailsPageComponent, typeof i7.AuditLogTableComponent, typeof i8.AuditLogDetailsDialogComponent, typeof i9.EventContentDialogComponent, typeof i10.EventTableHeaderComponent, typeof i11.EventTableComponent, typeof i12.EventFilterPanelComponent, typeof i13.EdgeDownlinkTableHeaderComponent, typeof i14.EdgeDownlinkTableComponent, typeof i15.RelationTableComponent, typeof i16.RelationDialogComponent, typeof i17.RelationFiltersComponent, typeof i18.AlarmTableHeaderComponent, typeof i19.AlarmTableComponent, typeof i20.AlarmAssigneePanelComponent, typeof i21.AlarmAssigneeSelectComponent, typeof i22.AlarmAssigneeSelectPanelComponent, typeof i23.AlarmFilterConfigComponent, typeof i24.AttributeTableComponent, typeof i25.AddAttributeDialogComponent, typeof i26.EditAttributeValuePanelComponent, typeof i27.AliasesEntitySelectPanelComponent, typeof i28.AliasesEntitySelectComponent, typeof i29.AliasesEntityAutocompleteComponent, typeof i30.EntityAliasesDialogComponent, typeof i31.EntityAliasDialogComponent, typeof i32.DashboardComponent, typeof i33.WidgetContainerComponent, typeof i34.WidgetComponent, typeof i35.LegendComponent, typeof i36.WidgetSettingsComponent, typeof i37.WidgetConfigComponent, typeof i38.EntityFilterViewComponent, typeof i39.EntityFilterComponent, typeof i40.EntityAliasSelectComponent, typeof i41.DataKeysComponent, typeof i42.DataKeyConfigComponent, typeof i43.DataKeyConfigDialogComponent, typeof i44.LegendConfigComponent, typeof i45.ManageWidgetActionsComponent, typeof i46.WidgetActionDialogComponent, typeof i47.CustomActionPrettyResourcesTabsComponent, typeof i48.CustomActionPrettyEditorComponent, typeof i49.MobileActionEditorComponent, typeof i50.CustomDialogContainerComponent, typeof i51.ImportDialogComponent, typeof i52.ImportDialogCsvComponent, typeof i53.SelectTargetLayoutDialogComponent, typeof i54.SelectTargetStateDialogComponent, typeof i55.AddWidgetToDashboardDialogComponent, typeof i56.TableColumnsAssignmentComponent, typeof i57.BooleanFilterPredicateComponent, typeof i58.StringFilterPredicateComponent, typeof i59.NumericFilterPredicateComponent, typeof i60.ComplexFilterPredicateComponent, typeof i61.ComplexFilterPredicateDialogComponent, typeof i62.FilterPredicateComponent, typeof i63.FilterPredicateListComponent, typeof i64.KeyFilterListComponent, typeof i65.KeyFilterDialogComponent, typeof i66.FilterDialogComponent, typeof i67.FiltersDialogComponent, typeof i68.FilterSelectComponent, typeof i69.FilterTextComponent, typeof i70.FiltersEditComponent, typeof i71.FiltersEditPanelComponent, typeof i72.UserFilterDialogComponent, typeof i73.FilterUserInfoComponent, typeof i74.FilterUserInfoDialogComponent, typeof i75.FilterPredicateValueComponent, typeof i76.TenantProfileAutocompleteComponent, typeof i77.DefaultTenantProfileConfigurationComponent, typeof i78.TenantProfileConfigurationComponent, typeof i79.TenantProfileDataComponent, typeof i80.TenantProfileComponent, typeof i81.TenantProfileDialogComponent, typeof i82.DeviceProfileAutocompleteComponent, typeof i83.DefaultDeviceProfileConfigurationComponent, typeof i84.DeviceProfileConfigurationComponent, typeof i85.DefaultDeviceProfileTransportConfigurationComponent, typeof i86.MqttDeviceProfileTransportConfigurationComponent, typeof i87.CoapDeviceProfileTransportConfigurationComponent, typeof i88.DeviceProfileTransportConfigurationComponent, typeof i89.CreateAlarmRulesComponent, typeof i90.AlarmRuleComponent, typeof i91.AlarmRuleConditionDialogComponent, typeof i92.AlarmRuleConditionComponent, typeof i93.DeviceProfileAlarmComponent, typeof i94.DeviceProfileAlarmsComponent, typeof i95.DeviceProfileComponent, typeof i96.DeviceProfileDialogComponent, typeof i97.AddDeviceProfileDialogComponent, typeof i98.DeviceInfoFilterComponent, typeof i99.AssetProfileComponent, typeof i100.AssetProfileDialogComponent, typeof i101.AssetProfileAutocompleteComponent, typeof i102.RuleChainAutocompleteComponent, typeof i103.AlarmScheduleInfoComponent, typeof i104.DeviceProfileProvisionConfigurationComponent, typeof i105.AlarmScheduleComponent, typeof i106.AlarmDynamicValue, typeof i107.AlarmDurationPredicateValueComponent, typeof i108.DeviceWizardDialogComponent, typeof i109.AlarmScheduleDialogComponent, typeof i110.EditAlarmDetailsDialogComponent, typeof i111.SmsProviderConfigurationComponent, typeof i112.AwsSnsProviderConfigurationComponent, typeof i113.SmppSmsProviderConfigurationComponent, typeof i114.TwilioSmsProviderConfigurationComponent, typeof i115.DashboardToolbarComponent, typeof i116.DashboardPageComponent, typeof i117.DashboardStateComponent, typeof i118.DashboardLayoutComponent, typeof i119.EditWidgetComponent, typeof i120.DashboardWidgetSelectComponent, typeof i121.AddWidgetDialogComponent, typeof i122.ManageDashboardLayoutsDialogComponent, typeof i123.DashboardSettingsDialogComponent, typeof i124.ManageDashboardStatesDialogComponent, typeof i125.DashboardStateDialogComponent, typeof i126.DashboardImageDialogComponent, typeof i127.EmbedDashboardDialogComponent, typeof i128.DisplayWidgetTypesPanelComponent, typeof i129.TenantProfileQueuesComponent, typeof i130.QueueFormComponent, typeof i131.RepositorySettingsComponent, typeof i132.VersionControlComponent, typeof i133.EntityVersionsTableComponent, typeof i134.EntityVersionCreateComponent, typeof i135.EntityVersionRestoreComponent, typeof i136.EntityVersionDiffComponent, typeof i137.ComplexVersionCreateComponent, typeof i138.EntityTypesVersionCreateComponent, typeof i139.EntityTypesVersionLoadComponent, typeof i140.ComplexVersionLoadComponent, typeof i141.RemoveOtherEntitiesConfirmComponent, typeof i142.AutoCommitSettingsComponent, typeof i143.RateLimitsListComponent, typeof i144.RateLimitsComponent, typeof i145.RateLimitsTextComponent, typeof i146.RateLimitsDetailsDialogComponent, typeof i147.SendNotificationButtonComponent], [typeof i148.CommonModule, typeof i149.SharedModule, typeof i150.SharedHomeComponentsModule, typeof i151.WidgetSettingsModule, typeof i152.Lwm2mProfileComponentsModule, typeof i153.SnmpDeviceProfileTransportModule, typeof i154.StatesControllerModule, typeof i155.DeviceCredentialsModule, typeof i156.DeviceProfileCommonModule], [typeof i1.RouterTabsComponent, typeof i2.EntitiesTableComponent, typeof i3.AddEntityDialogComponent, typeof i4.DetailsPanelComponent, typeof i5.EntityDetailsPanelComponent, typeof i6.EntityDetailsPageComponent, typeof i7.AuditLogTableComponent, typeof i11.EventTableComponent, typeof i13.EdgeDownlinkTableHeaderComponent, typeof i14.EdgeDownlinkTableComponent, typeof i15.RelationTableComponent, typeof i17.RelationFiltersComponent, typeof i19.AlarmTableComponent, typeof i20.AlarmAssigneePanelComponent, typeof i21.AlarmAssigneeSelectComponent, typeof i22.AlarmAssigneeSelectPanelComponent, typeof i23.AlarmFilterConfigComponent, typeof i24.AttributeTableComponent, typeof i28.AliasesEntitySelectComponent, typeof i29.AliasesEntityAutocompleteComponent, typeof i30.EntityAliasesDialogComponent, typeof i31.EntityAliasDialogComponent, typeof i32.DashboardComponent, typeof i33.WidgetContainerComponent, typeof i34.WidgetComponent, typeof i35.LegendComponent, typeof i36.WidgetSettingsComponent, typeof i37.WidgetConfigComponent, typeof i38.EntityFilterViewComponent, typeof i39.EntityFilterComponent, typeof i40.EntityAliasSelectComponent, typeof i41.DataKeysComponent, typeof i42.DataKeyConfigComponent, typeof i43.DataKeyConfigDialogComponent, typeof i44.LegendConfigComponent, typeof i45.ManageWidgetActionsComponent, typeof i46.WidgetActionDialogComponent, typeof i47.CustomActionPrettyResourcesTabsComponent, typeof i48.CustomActionPrettyEditorComponent, typeof i49.MobileActionEditorComponent, typeof i50.CustomDialogContainerComponent, typeof i51.ImportDialogComponent, typeof i52.ImportDialogCsvComponent, typeof i56.TableColumnsAssignmentComponent, typeof i53.SelectTargetLayoutDialogComponent, typeof i54.SelectTargetStateDialogComponent, typeof i57.BooleanFilterPredicateComponent, typeof i58.StringFilterPredicateComponent, typeof i59.NumericFilterPredicateComponent, typeof i60.ComplexFilterPredicateComponent, typeof i61.ComplexFilterPredicateDialogComponent, typeof i62.FilterPredicateComponent, typeof i63.FilterPredicateListComponent, typeof i64.KeyFilterListComponent, typeof i65.KeyFilterDialogComponent, typeof i66.FilterDialogComponent, typeof i67.FiltersDialogComponent, typeof i68.FilterSelectComponent, typeof i69.FilterTextComponent, typeof i70.FiltersEditComponent, typeof i72.UserFilterDialogComponent, typeof i76.TenantProfileAutocompleteComponent, typeof i79.TenantProfileDataComponent, typeof i80.TenantProfileComponent, typeof i81.TenantProfileDialogComponent, typeof i82.DeviceProfileAutocompleteComponent, typeof i83.DefaultDeviceProfileConfigurationComponent, typeof i84.DeviceProfileConfigurationComponent, typeof i85.DefaultDeviceProfileTransportConfigurationComponent, typeof i86.MqttDeviceProfileTransportConfigurationComponent, typeof i87.CoapDeviceProfileTransportConfigurationComponent, typeof i88.DeviceProfileTransportConfigurationComponent, typeof i89.CreateAlarmRulesComponent, typeof i90.AlarmRuleComponent, typeof i91.AlarmRuleConditionDialogComponent, typeof i92.AlarmRuleConditionComponent, typeof i93.DeviceProfileAlarmComponent, typeof i94.DeviceProfileAlarmsComponent, typeof i95.DeviceProfileComponent, typeof i96.DeviceProfileDialogComponent, typeof i97.AddDeviceProfileDialogComponent, typeof i98.DeviceInfoFilterComponent, typeof i102.RuleChainAutocompleteComponent, typeof i108.DeviceWizardDialogComponent, typeof i99.AssetProfileComponent, typeof i100.AssetProfileDialogComponent, typeof i101.AssetProfileAutocompleteComponent, typeof i103.AlarmScheduleInfoComponent, typeof i105.AlarmScheduleComponent, typeof i106.AlarmDynamicValue, typeof i109.AlarmScheduleDialogComponent, typeof i107.AlarmDurationPredicateValueComponent, typeof i110.EditAlarmDetailsDialogComponent, typeof i104.DeviceProfileProvisionConfigurationComponent, typeof i111.SmsProviderConfigurationComponent, typeof i112.AwsSnsProviderConfigurationComponent, typeof i113.SmppSmsProviderConfigurationComponent, typeof i114.TwilioSmsProviderConfigurationComponent, typeof i115.DashboardToolbarComponent, typeof i116.DashboardPageComponent, typeof i117.DashboardStateComponent, typeof i118.DashboardLayoutComponent, typeof i119.EditWidgetComponent, typeof i120.DashboardWidgetSelectComponent, typeof i121.AddWidgetDialogComponent, typeof i122.ManageDashboardLayoutsDialogComponent, typeof i123.DashboardSettingsDialogComponent, typeof i124.ManageDashboardStatesDialogComponent, typeof i125.DashboardStateDialogComponent, typeof i126.DashboardImageDialogComponent, typeof i127.EmbedDashboardDialogComponent, typeof i128.DisplayWidgetTypesPanelComponent, typeof i129.TenantProfileQueuesComponent, typeof i130.QueueFormComponent, typeof i131.RepositorySettingsComponent, typeof i132.VersionControlComponent, typeof i133.EntityVersionsTableComponent, typeof i134.EntityVersionCreateComponent, typeof i135.EntityVersionRestoreComponent, typeof i136.EntityVersionDiffComponent, typeof i137.ComplexVersionCreateComponent, typeof i138.EntityTypesVersionCreateComponent, typeof i139.EntityTypesVersionLoadComponent, typeof i140.ComplexVersionLoadComponent, typeof i141.RemoveOtherEntitiesConfirmComponent, typeof i142.AutoCommitSettingsComponent, typeof i143.RateLimitsListComponent, typeof i144.RateLimitsComponent, typeof i145.RateLimitsTextComponent, typeof i146.RateLimitsDetailsDialogComponent, typeof i147.SendNotificationButtonComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<HomeComponentsModule>;
}
