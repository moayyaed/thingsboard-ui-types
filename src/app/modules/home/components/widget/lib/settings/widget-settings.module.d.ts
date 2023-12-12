import { Type } from '@angular/core';
import { IWidgetSettingsComponent } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
import * as i1 from "@home/components/widget/lib/settings/cards/qrcode-widget-settings.component";
import * as i2 from "@home/components/widget/lib/settings/cards/timeseries-table-widget-settings.component";
import * as i3 from "@home/components/widget/lib/settings/cards/timeseries-table-key-settings.component";
import * as i4 from "@home/components/widget/lib/settings/cards/timeseries-table-latest-key-settings.component";
import * as i5 from "@home/components/widget/lib/settings/cards/markdown-widget-settings.component";
import * as i6 from "@home/components/widget/lib/settings/cards/label-widget-label.component";
import * as i7 from "@home/components/widget/lib/settings/cards/label-widget-settings.component";
import * as i8 from "@home/components/widget/lib/settings/cards/simple-card-widget-settings.component";
import * as i9 from "@home/components/widget/lib/settings/cards/dashboard-state-widget-settings.component";
import * as i10 from "@home/components/widget/lib/settings/entity/entities-hierarchy-widget-settings.component";
import * as i11 from "@home/components/widget/lib/settings/cards/html-card-widget-settings.component";
import * as i12 from "@home/components/widget/lib/settings/entity/entities-table-widget-settings.component";
import * as i13 from "@home/components/widget/lib/settings/entity/entities-table-key-settings.component";
import * as i14 from "@home/components/widget/lib/settings/alarm/alarms-table-widget-settings.component";
import * as i15 from "@home/components/widget/lib/settings/alarm/alarms-table-key-settings.component";
import * as i16 from "@home/components/widget/lib/settings/gauge/analogue-radial-gauge-widget-settings.component";
import * as i17 from "@home/components/widget/lib/settings/gauge/analogue-linear-gauge-widget-settings.component";
import * as i18 from "@home/components/widget/lib/settings/gauge/analogue-compass-widget-settings.component";
import * as i19 from "@home/components/widget/lib/settings/gauge/digital-gauge-widget-settings.component";
import * as i20 from "@home/components/widget/lib/settings/gauge/fixed-color-level.component";
import * as i21 from "@home/components/widget/lib/settings/gauge/tick-value.component";
import * as i22 from "@home/components/widget/lib/settings/chart/flot-widget-settings.component";
import * as i23 from "@home/components/widget/lib/settings/chart/label-data-key.component";
import * as i24 from "@home/components/widget/lib/settings/chart/flot-line-widget-settings.component";
import * as i25 from "@home/components/widget/lib/settings/chart/flot-bar-widget-settings.component";
import * as i26 from "@home/components/widget/lib/settings/chart/flot-threshold.component";
import * as i27 from "@home/components/widget/lib/settings/chart/flot-key-settings.component";
import * as i28 from "@home/components/widget/lib/settings/chart/flot-line-key-settings.component";
import * as i29 from "@home/components/widget/lib/settings/chart/flot-bar-key-settings.component";
import * as i30 from "@home/components/widget/lib/settings/chart/flot-latest-key-settings.component";
import * as i31 from "@home/components/widget/lib/settings/chart/flot-pie-widget-settings.component";
import * as i32 from "@home/components/widget/lib/settings/chart/flot-pie-key-settings.component";
import * as i33 from "@home/components/widget/lib/settings/chart/chart-widget-settings.component";
import * as i34 from "@home/components/widget/lib/settings/chart/doughnut-chart-widget-settings.component";
import * as i35 from "@home/components/widget/lib/settings/control/device-key-autocomplete.component";
import * as i36 from "@home/components/widget/lib/settings/control/switch-rpc-settings.component";
import * as i37 from "@home/components/widget/lib/settings/control/round-switch-widget-settings.component";
import * as i38 from "@home/components/widget/lib/settings/control/switch-control-widget-settings.component";
import * as i39 from "@home/components/widget/lib/settings/control/slide-toggle-widget-settings.component";
import * as i40 from "@home/components/widget/lib/settings/control/persistent-table-widget-settings.component";
import * as i41 from "@home/components/widget/lib/settings/control/rpc-button-style.component";
import * as i42 from "@home/components/widget/lib/settings/control/update-device-attribute-widget-settings.component";
import * as i43 from "@home/components/widget/lib/settings/control/send-rpc-widget-settings.component";
import * as i44 from "@home/components/widget/lib/settings/control/led-indicator-widget-settings.component";
import * as i45 from "@home/components/widget/lib/settings/control/knob-control-widget-settings.component";
import * as i46 from "@home/components/widget/lib/settings/control/rpc-terminal-widget-settings.component";
import * as i47 from "@home/components/widget/lib/settings/control/rpc-shell-widget-settings.component";
import * as i48 from "@home/components/widget/lib/settings/date/date-range-navigator-widget-settings.component";
import * as i49 from "@home/components/widget/lib/settings/cards/edge-quick-overview-widget-settings.component";
import * as i50 from "@home/components/widget/lib/settings/gateway/gateway-config-widget-settings.component";
import * as i51 from "@home/components/widget/lib/settings/gateway/gateway-config-single-device-widget-settings.component";
import * as i52 from "@home/components/widget/lib/settings/gateway/gateway-events-widget-settings.component";
import * as i53 from "@home/components/widget/lib/settings/gpio/gpio-item.component";
import * as i54 from "@home/components/widget/lib/settings/gpio/gpio-control-widget-settings.component";
import * as i55 from "@home/components/widget/lib/settings/gpio/gpio-panel-widget-settings.component";
import * as i56 from "@home/components/widget/lib/settings/navigation/navigation-card-widget-settings.component";
import * as i57 from "@home/components/widget/lib/settings/navigation/navigation-cards-widget-settings.component";
import * as i58 from "@home/components/widget/lib/settings/input/device-claiming-widget-settings.component";
import * as i59 from "@home/components/widget/lib/settings/input/update-attribute-general-settings.component";
import * as i60 from "@home/components/widget/lib/settings/input/update-integer-attribute-widget-settings.component";
import * as i61 from "@home/components/widget/lib/settings/input/update-double-attribute-widget-settings.component";
import * as i62 from "@home/components/widget/lib/settings/input/update-string-attribute-widget-settings.component";
import * as i63 from "@home/components/widget/lib/settings/input/update-boolean-attribute-widget-settings.component";
import * as i64 from "@home/components/widget/lib/settings/input/update-image-attribute-widget-settings.component";
import * as i65 from "@home/components/widget/lib/settings/input/update-date-attribute-widget-settings.component";
import * as i66 from "@home/components/widget/lib/settings/input/update-location-attribute-widget-settings.component";
import * as i67 from "@home/components/widget/lib/settings/input/update-json-attribute-widget-settings.component";
import * as i68 from "@home/components/widget/lib/settings/input/photo-camera-input-widget-settings.component";
import * as i69 from "@home/components/widget/lib/settings/input/update-multiple-attributes-widget-settings.component";
import * as i70 from "@home/components/widget/lib/settings/input/datakey-select-option.component";
import * as i71 from "@home/components/widget/lib/settings/input/update-multiple-attributes-key-settings.component";
import * as i72 from "@home/components/widget/lib/settings/map/google-map-provider-settings.component";
import * as i73 from "@home/components/widget/lib/settings/map/openstreet-map-provider-settings.component";
import * as i74 from "@home/components/widget/lib/settings/map/here-map-provider-settings.component";
import * as i75 from "@home/components/widget/lib/settings/map/image-map-provider-settings.component";
import * as i76 from "@home/components/widget/lib/settings/map/tencent-map-provider-settings.component";
import * as i77 from "@home/components/widget/lib/settings/map/map-provider-settings.component";
import * as i78 from "@home/components/widget/lib/settings/map/datasources-key-autocomplete.component";
import * as i79 from "@home/components/widget/lib/settings/map/common-map-settings.component";
import * as i80 from "@home/components/widget/lib/settings/map/markers-settings.component";
import * as i81 from "@home/components/widget/lib/settings/map/polygon-settings.component";
import * as i82 from "@home/components/widget/lib/settings/map/circle-settings.component";
import * as i83 from "@home/components/widget/lib/settings/map/marker-clustering-settings.component";
import * as i84 from "@home/components/widget/lib/settings/map/map-editor-settings.component";
import * as i85 from "@home/components/widget/lib/settings/map/route-map-settings.component";
import * as i86 from "@home/components/widget/lib/settings/map/map-settings.component";
import * as i87 from "@home/components/widget/lib/settings/map/trip-animation-common-settings.component";
import * as i88 from "@home/components/widget/lib/settings/map/trip-animation-marker-settings.component";
import * as i89 from "@home/components/widget/lib/settings/map/trip-animation-path-settings.component";
import * as i90 from "@home/components/widget/lib/settings/map/trip-animation-point-settings.component";
import * as i91 from "@home/components/widget/lib/settings/map/map-widget-settings.component";
import * as i92 from "@home/components/widget/lib/settings/map/route-map-widget-settings.component";
import * as i93 from "@home/components/widget/lib/settings/gateway/gateway-logs-settings.component";
import * as i94 from "@home/components/widget/lib/settings/gateway/gateway-service-rpc-settings.component";
import * as i95 from "@home/components/widget/lib/settings/map/trip-animation-widget-settings.component";
import * as i96 from "@home/components/widget/lib/settings/home-page/doc-links-widget-settings.component";
import * as i97 from "@home/components/widget/lib/settings/home-page/quick-links-widget-settings.component";
import * as i98 from "@home/components/widget/lib/settings/cards/value-card-widget-settings.component";
import * as i99 from "@home/components/widget/lib/settings/cards/aggregated-value-card-key-settings.component";
import * as i100 from "@home/components/widget/lib/settings/cards/aggregated-value-card-widget-settings.component";
import * as i101 from "@home/components/widget/lib/settings/alarm/alarm-count-widget-settings.component";
import * as i102 from "@home/components/widget/lib/settings/entity/entity-count-widget-settings.component";
import * as i103 from "@home/components/widget/lib/settings/indicator/battery-level-widget-settings.component";
import * as i104 from "@home/components/widget/lib/settings/weather/wind-speed-direction-widget-settings.component";
import * as i105 from "@home/components/widget/lib/settings/indicator/signal-strength-widget-settings.component";
import * as i106 from "@home/components/widget/lib/settings/cards/value-chart-card-widget-settings.component";
import * as i107 from "@home/components/widget/lib/settings/cards/progress-bar-widget-settings.component";
import * as i108 from "@home/components/widget/lib/settings/indicator/liquid-level-card-widget-settings.component";
import * as i109 from "@home/components/widget/lib/settings/chart/doughnut-widget-settings.component";
import * as i110 from "@home/components/widget/lib/settings/chart/range-chart-widget-settings.component";
import * as i111 from "@angular/common";
import * as i112 from "@shared/shared.module";
import * as i113 from "@home/components/shared-home-components.module";
import * as i114 from "@home/components/widget/lib/settings/common/widget-settings-common.module";
export declare class WidgetSettingsModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetSettingsModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<WidgetSettingsModule, [typeof i1.QrCodeWidgetSettingsComponent, typeof i2.TimeseriesTableWidgetSettingsComponent, typeof i3.TimeseriesTableKeySettingsComponent, typeof i4.TimeseriesTableLatestKeySettingsComponent, typeof i5.MarkdownWidgetSettingsComponent, typeof i6.LabelWidgetLabelComponent, typeof i7.LabelWidgetSettingsComponent, typeof i8.SimpleCardWidgetSettingsComponent, typeof i9.DashboardStateWidgetSettingsComponent, typeof i10.EntitiesHierarchyWidgetSettingsComponent, typeof i11.HtmlCardWidgetSettingsComponent, typeof i12.EntitiesTableWidgetSettingsComponent, typeof i13.EntitiesTableKeySettingsComponent, typeof i14.AlarmsTableWidgetSettingsComponent, typeof i15.AlarmsTableKeySettingsComponent, typeof i16.AnalogueRadialGaugeWidgetSettingsComponent, typeof i17.AnalogueLinearGaugeWidgetSettingsComponent, typeof i18.AnalogueCompassWidgetSettingsComponent, typeof i19.DigitalGaugeWidgetSettingsComponent, typeof i20.FixedColorLevelComponent, typeof i21.TickValueComponent, typeof i22.FlotWidgetSettingsComponent, typeof i23.LabelDataKeyComponent, typeof i24.FlotLineWidgetSettingsComponent, typeof i25.FlotBarWidgetSettingsComponent, typeof i26.FlotThresholdComponent, typeof i27.FlotKeySettingsComponent, typeof i28.FlotLineKeySettingsComponent, typeof i29.FlotBarKeySettingsComponent, typeof i30.FlotLatestKeySettingsComponent, typeof i31.FlotPieWidgetSettingsComponent, typeof i32.FlotPieKeySettingsComponent, typeof i33.ChartWidgetSettingsComponent, typeof i34.DoughnutChartWidgetSettingsComponent, typeof i35.DeviceKeyAutocompleteComponent, typeof i36.SwitchRpcSettingsComponent, typeof i37.RoundSwitchWidgetSettingsComponent, typeof i38.SwitchControlWidgetSettingsComponent, typeof i39.SlideToggleWidgetSettingsComponent, typeof i40.PersistentTableWidgetSettingsComponent, typeof i41.RpcButtonStyleComponent, typeof i42.UpdateDeviceAttributeWidgetSettingsComponent, typeof i43.SendRpcWidgetSettingsComponent, typeof i44.LedIndicatorWidgetSettingsComponent, typeof i45.KnobControlWidgetSettingsComponent, typeof i46.RpcTerminalWidgetSettingsComponent, typeof i47.RpcShellWidgetSettingsComponent, typeof i48.DateRangeNavigatorWidgetSettingsComponent, typeof i49.EdgeQuickOverviewWidgetSettingsComponent, typeof i50.GatewayConfigWidgetSettingsComponent, typeof i51.GatewayConfigSingleDeviceWidgetSettingsComponent, typeof i52.GatewayEventsWidgetSettingsComponent, typeof i53.GpioItemComponent, typeof i54.GpioControlWidgetSettingsComponent, typeof i55.GpioPanelWidgetSettingsComponent, typeof i56.NavigationCardWidgetSettingsComponent, typeof i57.NavigationCardsWidgetSettingsComponent, typeof i58.DeviceClaimingWidgetSettingsComponent, typeof i59.UpdateAttributeGeneralSettingsComponent, typeof i60.UpdateIntegerAttributeWidgetSettingsComponent, typeof i61.UpdateDoubleAttributeWidgetSettingsComponent, typeof i62.UpdateStringAttributeWidgetSettingsComponent, typeof i63.UpdateBooleanAttributeWidgetSettingsComponent, typeof i64.UpdateImageAttributeWidgetSettingsComponent, typeof i65.UpdateDateAttributeWidgetSettingsComponent, typeof i66.UpdateLocationAttributeWidgetSettingsComponent, typeof i67.UpdateJsonAttributeWidgetSettingsComponent, typeof i68.PhotoCameraInputWidgetSettingsComponent, typeof i69.UpdateMultipleAttributesWidgetSettingsComponent, typeof i70.DataKeySelectOptionComponent, typeof i71.UpdateMultipleAttributesKeySettingsComponent, typeof i72.GoogleMapProviderSettingsComponent, typeof i73.OpenStreetMapProviderSettingsComponent, typeof i74.HereMapProviderSettingsComponent, typeof i75.ImageMapProviderSettingsComponent, typeof i76.TencentMapProviderSettingsComponent, typeof i77.MapProviderSettingsComponent, typeof i78.DatasourcesKeyAutocompleteComponent, typeof i79.CommonMapSettingsComponent, typeof i80.MarkersSettingsComponent, typeof i81.PolygonSettingsComponent, typeof i82.CircleSettingsComponent, typeof i83.MarkerClusteringSettingsComponent, typeof i84.MapEditorSettingsComponent, typeof i85.RouteMapSettingsComponent, typeof i86.MapSettingsComponent, typeof i87.TripAnimationCommonSettingsComponent, typeof i88.TripAnimationMarkerSettingsComponent, typeof i89.TripAnimationPathSettingsComponent, typeof i90.TripAnimationPointSettingsComponent, typeof i91.MapWidgetSettingsComponent, typeof i92.RouteMapWidgetSettingsComponent, typeof i93.GatewayLogsSettingsComponent, typeof i94.GatewayServiceRPCSettingsComponent, typeof i95.TripAnimationWidgetSettingsComponent, typeof i96.DocLinksWidgetSettingsComponent, typeof i97.QuickLinksWidgetSettingsComponent, typeof i98.ValueCardWidgetSettingsComponent, typeof i99.AggregatedValueCardKeySettingsComponent, typeof i100.AggregatedValueCardWidgetSettingsComponent, typeof i101.AlarmCountWidgetSettingsComponent, typeof i102.EntityCountWidgetSettingsComponent, typeof i103.BatteryLevelWidgetSettingsComponent, typeof i104.WindSpeedDirectionWidgetSettingsComponent, typeof i105.SignalStrengthWidgetSettingsComponent, typeof i106.ValueChartCardWidgetSettingsComponent, typeof i107.ProgressBarWidgetSettingsComponent, typeof i108.LiquidLevelCardWidgetSettingsComponent, typeof i109.DoughnutWidgetSettingsComponent, typeof i110.RangeChartWidgetSettingsComponent], [typeof i111.CommonModule, typeof i112.SharedModule, typeof i113.SharedHomeComponentsModule, typeof i114.WidgetSettingsCommonModule], [typeof i1.QrCodeWidgetSettingsComponent, typeof i2.TimeseriesTableWidgetSettingsComponent, typeof i3.TimeseriesTableKeySettingsComponent, typeof i4.TimeseriesTableLatestKeySettingsComponent, typeof i5.MarkdownWidgetSettingsComponent, typeof i6.LabelWidgetLabelComponent, typeof i7.LabelWidgetSettingsComponent, typeof i8.SimpleCardWidgetSettingsComponent, typeof i9.DashboardStateWidgetSettingsComponent, typeof i10.EntitiesHierarchyWidgetSettingsComponent, typeof i11.HtmlCardWidgetSettingsComponent, typeof i12.EntitiesTableWidgetSettingsComponent, typeof i13.EntitiesTableKeySettingsComponent, typeof i14.AlarmsTableWidgetSettingsComponent, typeof i15.AlarmsTableKeySettingsComponent, typeof i16.AnalogueRadialGaugeWidgetSettingsComponent, typeof i17.AnalogueLinearGaugeWidgetSettingsComponent, typeof i18.AnalogueCompassWidgetSettingsComponent, typeof i19.DigitalGaugeWidgetSettingsComponent, typeof i20.FixedColorLevelComponent, typeof i21.TickValueComponent, typeof i22.FlotWidgetSettingsComponent, typeof i23.LabelDataKeyComponent, typeof i24.FlotLineWidgetSettingsComponent, typeof i25.FlotBarWidgetSettingsComponent, typeof i26.FlotThresholdComponent, typeof i27.FlotKeySettingsComponent, typeof i28.FlotLineKeySettingsComponent, typeof i29.FlotBarKeySettingsComponent, typeof i30.FlotLatestKeySettingsComponent, typeof i31.FlotPieWidgetSettingsComponent, typeof i32.FlotPieKeySettingsComponent, typeof i33.ChartWidgetSettingsComponent, typeof i34.DoughnutChartWidgetSettingsComponent, typeof i35.DeviceKeyAutocompleteComponent, typeof i36.SwitchRpcSettingsComponent, typeof i37.RoundSwitchWidgetSettingsComponent, typeof i38.SwitchControlWidgetSettingsComponent, typeof i39.SlideToggleWidgetSettingsComponent, typeof i40.PersistentTableWidgetSettingsComponent, typeof i41.RpcButtonStyleComponent, typeof i42.UpdateDeviceAttributeWidgetSettingsComponent, typeof i43.SendRpcWidgetSettingsComponent, typeof i44.LedIndicatorWidgetSettingsComponent, typeof i45.KnobControlWidgetSettingsComponent, typeof i46.RpcTerminalWidgetSettingsComponent, typeof i47.RpcShellWidgetSettingsComponent, typeof i48.DateRangeNavigatorWidgetSettingsComponent, typeof i49.EdgeQuickOverviewWidgetSettingsComponent, typeof i50.GatewayConfigWidgetSettingsComponent, typeof i51.GatewayConfigSingleDeviceWidgetSettingsComponent, typeof i52.GatewayEventsWidgetSettingsComponent, typeof i53.GpioItemComponent, typeof i54.GpioControlWidgetSettingsComponent, typeof i55.GpioPanelWidgetSettingsComponent, typeof i56.NavigationCardWidgetSettingsComponent, typeof i57.NavigationCardsWidgetSettingsComponent, typeof i58.DeviceClaimingWidgetSettingsComponent, typeof i59.UpdateAttributeGeneralSettingsComponent, typeof i60.UpdateIntegerAttributeWidgetSettingsComponent, typeof i61.UpdateDoubleAttributeWidgetSettingsComponent, typeof i62.UpdateStringAttributeWidgetSettingsComponent, typeof i63.UpdateBooleanAttributeWidgetSettingsComponent, typeof i64.UpdateImageAttributeWidgetSettingsComponent, typeof i65.UpdateDateAttributeWidgetSettingsComponent, typeof i66.UpdateLocationAttributeWidgetSettingsComponent, typeof i67.UpdateJsonAttributeWidgetSettingsComponent, typeof i68.PhotoCameraInputWidgetSettingsComponent, typeof i69.UpdateMultipleAttributesWidgetSettingsComponent, typeof i70.DataKeySelectOptionComponent, typeof i71.UpdateMultipleAttributesKeySettingsComponent, typeof i72.GoogleMapProviderSettingsComponent, typeof i73.OpenStreetMapProviderSettingsComponent, typeof i74.HereMapProviderSettingsComponent, typeof i75.ImageMapProviderSettingsComponent, typeof i76.TencentMapProviderSettingsComponent, typeof i77.MapProviderSettingsComponent, typeof i78.DatasourcesKeyAutocompleteComponent, typeof i79.CommonMapSettingsComponent, typeof i80.MarkersSettingsComponent, typeof i81.PolygonSettingsComponent, typeof i82.CircleSettingsComponent, typeof i83.MarkerClusteringSettingsComponent, typeof i84.MapEditorSettingsComponent, typeof i85.RouteMapSettingsComponent, typeof i86.MapSettingsComponent, typeof i87.TripAnimationCommonSettingsComponent, typeof i88.TripAnimationMarkerSettingsComponent, typeof i89.TripAnimationPathSettingsComponent, typeof i90.TripAnimationPointSettingsComponent, typeof i91.MapWidgetSettingsComponent, typeof i92.RouteMapWidgetSettingsComponent, typeof i93.GatewayLogsSettingsComponent, typeof i94.GatewayServiceRPCSettingsComponent, typeof i95.TripAnimationWidgetSettingsComponent, typeof i96.DocLinksWidgetSettingsComponent, typeof i97.QuickLinksWidgetSettingsComponent, typeof i98.ValueCardWidgetSettingsComponent, typeof i99.AggregatedValueCardKeySettingsComponent, typeof i100.AggregatedValueCardWidgetSettingsComponent, typeof i101.AlarmCountWidgetSettingsComponent, typeof i102.EntityCountWidgetSettingsComponent, typeof i103.BatteryLevelWidgetSettingsComponent, typeof i104.WindSpeedDirectionWidgetSettingsComponent, typeof i105.SignalStrengthWidgetSettingsComponent, typeof i106.ValueChartCardWidgetSettingsComponent, typeof i107.ProgressBarWidgetSettingsComponent, typeof i108.LiquidLevelCardWidgetSettingsComponent, typeof i109.DoughnutWidgetSettingsComponent, typeof i110.RangeChartWidgetSettingsComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<WidgetSettingsModule>;
}
export declare const widgetSettingsComponentsMap: {
    [key: string]: Type<IWidgetSettingsComponent>;
};
