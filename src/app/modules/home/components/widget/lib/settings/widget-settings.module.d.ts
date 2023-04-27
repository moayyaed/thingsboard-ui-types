import { Type } from '@angular/core';
import { IWidgetSettingsComponent } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
import * as i1 from "@home/components/widget/lib/settings/cards/qrcode-widget-settings.component";
import * as i2 from "@home/components/widget/lib/settings/cards/timeseries-table-widget-settings.component";
import * as i3 from "@home/components/widget/lib/settings/cards/timeseries-table-key-settings.component";
import * as i4 from "@home/components/widget/lib/settings/cards/timeseries-table-latest-key-settings.component";
import * as i5 from "@home/components/widget/lib/settings/cards/markdown-widget-settings.component";
import * as i6 from "@home/components/widget/lib/settings/common/widget-font.component";
import * as i7 from "@home/components/widget/lib/settings/cards/label-widget-label.component";
import * as i8 from "@home/components/widget/lib/settings/cards/label-widget-settings.component";
import * as i9 from "@home/components/widget/lib/settings/cards/simple-card-widget-settings.component";
import * as i10 from "@home/components/widget/lib/settings/cards/dashboard-state-widget-settings.component";
import * as i11 from "@home/components/widget/lib/settings/cards/entities-hierarchy-widget-settings.component";
import * as i12 from "@home/components/widget/lib/settings/cards/html-card-widget-settings.component";
import * as i13 from "@home/components/widget/lib/settings/cards/entities-table-widget-settings.component";
import * as i14 from "@home/components/widget/lib/settings/cards/entities-table-key-settings.component";
import * as i15 from "@home/components/widget/lib/settings/alarm/alarms-table-widget-settings.component";
import * as i16 from "@home/components/widget/lib/settings/alarm/alarms-table-key-settings.component";
import * as i17 from "@home/components/widget/lib/settings/gauge/gauge-highlight.component";
import * as i18 from "@home/components/widget/lib/settings/gauge/analogue-radial-gauge-widget-settings.component";
import * as i19 from "@home/components/widget/lib/settings/gauge/analogue-linear-gauge-widget-settings.component";
import * as i20 from "@home/components/widget/lib/settings/gauge/analogue-compass-widget-settings.component";
import * as i21 from "@home/components/widget/lib/settings/gauge/digital-gauge-widget-settings.component";
import * as i22 from "@home/components/widget/lib/settings/common/value-source.component";
import * as i23 from "@home/components/widget/lib/settings/gauge/fixed-color-level.component";
import * as i24 from "@home/components/widget/lib/settings/gauge/tick-value.component";
import * as i25 from "@home/components/widget/lib/settings/chart/flot-widget-settings.component";
import * as i26 from "@home/components/widget/lib/settings/chart/label-data-key.component";
import * as i27 from "@home/components/widget/lib/settings/chart/flot-line-widget-settings.component";
import * as i28 from "@home/components/widget/lib/settings/chart/flot-bar-widget-settings.component";
import * as i29 from "@home/components/widget/lib/settings/chart/flot-threshold.component";
import * as i30 from "@home/components/widget/lib/settings/chart/flot-key-settings.component";
import * as i31 from "@home/components/widget/lib/settings/chart/flot-line-key-settings.component";
import * as i32 from "@home/components/widget/lib/settings/chart/flot-bar-key-settings.component";
import * as i33 from "@home/components/widget/lib/settings/chart/flot-latest-key-settings.component";
import * as i34 from "@home/components/widget/lib/settings/chart/flot-pie-widget-settings.component";
import * as i35 from "@home/components/widget/lib/settings/chart/flot-pie-key-settings.component";
import * as i36 from "@home/components/widget/lib/settings/chart/chart-widget-settings.component";
import * as i37 from "@home/components/widget/lib/settings/chart/doughnut-chart-widget-settings.component";
import * as i38 from "@home/components/widget/lib/settings/control/device-key-autocomplete.component";
import * as i39 from "@home/components/widget/lib/settings/control/switch-rpc-settings.component";
import * as i40 from "@home/components/widget/lib/settings/control/round-switch-widget-settings.component";
import * as i41 from "@home/components/widget/lib/settings/control/switch-control-widget-settings.component";
import * as i42 from "@home/components/widget/lib/settings/control/slide-toggle-widget-settings.component";
import * as i43 from "@home/components/widget/lib/settings/control/persistent-table-widget-settings.component";
import * as i44 from "@home/components/widget/lib/settings/control/rpc-button-style.component";
import * as i45 from "@home/components/widget/lib/settings/control/update-device-attribute-widget-settings.component";
import * as i46 from "@home/components/widget/lib/settings/control/send-rpc-widget-settings.component";
import * as i47 from "@home/components/widget/lib/settings/control/led-indicator-widget-settings.component";
import * as i48 from "@home/components/widget/lib/settings/control/knob-control-widget-settings.component";
import * as i49 from "@home/components/widget/lib/settings/control/rpc-terminal-widget-settings.component";
import * as i50 from "@home/components/widget/lib/settings/control/rpc-shell-widget-settings.component";
import * as i51 from "@home/components/widget/lib/settings/date/date-range-navigator-widget-settings.component";
import * as i52 from "@home/components/widget/lib/settings/cards/edge-quick-overview-widget-settings.component";
import * as i53 from "@home/components/widget/lib/settings/gateway/gateway-config-widget-settings.component";
import * as i54 from "@home/components/widget/lib/settings/gateway/gateway-config-single-device-widget-settings.component";
import * as i55 from "@home/components/widget/lib/settings/gateway/gateway-events-widget-settings.component";
import * as i56 from "@home/components/widget/lib/settings/gpio/gpio-item.component";
import * as i57 from "@home/components/widget/lib/settings/gpio/gpio-control-widget-settings.component";
import * as i58 from "@home/components/widget/lib/settings/gpio/gpio-panel-widget-settings.component";
import * as i59 from "@home/components/widget/lib/settings/navigation/navigation-card-widget-settings.component";
import * as i60 from "@home/components/widget/lib/settings/navigation/navigation-cards-widget-settings.component";
import * as i61 from "@home/components/widget/lib/settings/input/device-claiming-widget-settings.component";
import * as i62 from "@home/components/widget/lib/settings/input/update-attribute-general-settings.component";
import * as i63 from "@home/components/widget/lib/settings/input/update-integer-attribute-widget-settings.component";
import * as i64 from "@home/components/widget/lib/settings/input/update-double-attribute-widget-settings.component";
import * as i65 from "@home/components/widget/lib/settings/input/update-string-attribute-widget-settings.component";
import * as i66 from "@home/components/widget/lib/settings/input/update-boolean-attribute-widget-settings.component";
import * as i67 from "@home/components/widget/lib/settings/input/update-image-attribute-widget-settings.component";
import * as i68 from "@home/components/widget/lib/settings/input/update-date-attribute-widget-settings.component";
import * as i69 from "@home/components/widget/lib/settings/input/update-location-attribute-widget-settings.component";
import * as i70 from "@home/components/widget/lib/settings/input/update-json-attribute-widget-settings.component";
import * as i71 from "@home/components/widget/lib/settings/input/photo-camera-input-widget-settings.component";
import * as i72 from "@home/components/widget/lib/settings/input/update-multiple-attributes-widget-settings.component";
import * as i73 from "@home/components/widget/lib/settings/input/datakey-select-option.component";
import * as i74 from "@home/components/widget/lib/settings/input/update-multiple-attributes-key-settings.component";
import * as i75 from "@home/components/widget/lib/settings/map/google-map-provider-settings.component";
import * as i76 from "@home/components/widget/lib/settings/map/openstreet-map-provider-settings.component";
import * as i77 from "@home/components/widget/lib/settings/map/here-map-provider-settings.component";
import * as i78 from "@home/components/widget/lib/settings/map/image-map-provider-settings.component";
import * as i79 from "@home/components/widget/lib/settings/map/tencent-map-provider-settings.component";
import * as i80 from "@home/components/widget/lib/settings/map/map-provider-settings.component";
import * as i81 from "@home/components/widget/lib/settings/map/datasources-key-autocomplete.component";
import * as i82 from "@home/components/widget/lib/settings/map/common-map-settings.component";
import * as i83 from "@home/components/widget/lib/settings/map/markers-settings.component";
import * as i84 from "@home/components/widget/lib/settings/map/polygon-settings.component";
import * as i85 from "@home/components/widget/lib/settings/map/circle-settings.component";
import * as i86 from "@home/components/widget/lib/settings/map/marker-clustering-settings.component";
import * as i87 from "@home/components/widget/lib/settings/map/map-editor-settings.component";
import * as i88 from "@home/components/widget/lib/settings/map/route-map-settings.component";
import * as i89 from "@home/components/widget/lib/settings/map/map-settings.component";
import * as i90 from "@home/components/widget/lib/settings/map/trip-animation-common-settings.component";
import * as i91 from "@home/components/widget/lib/settings/map/trip-animation-marker-settings.component";
import * as i92 from "@home/components/widget/lib/settings/map/trip-animation-path-settings.component";
import * as i93 from "@home/components/widget/lib/settings/map/trip-animation-point-settings.component";
import * as i94 from "@home/components/widget/lib/settings/map/map-widget-settings.component";
import * as i95 from "@home/components/widget/lib/settings/map/route-map-widget-settings.component";
import * as i96 from "@home/components/widget/lib/settings/map/trip-animation-widget-settings.component";
import * as i97 from "@home/components/widget/lib/settings/home-page/doc-links-widget-settings.component";
import * as i98 from "@home/components/widget/lib/settings/home-page/quick-links-widget-settings.component";
import * as i99 from "@angular/common";
import * as i100 from "@shared/shared.module";
import * as i101 from "@home/components/shared-home-components.module";
export declare class WidgetSettingsModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetSettingsModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<WidgetSettingsModule, [typeof i1.QrCodeWidgetSettingsComponent, typeof i2.TimeseriesTableWidgetSettingsComponent, typeof i3.TimeseriesTableKeySettingsComponent, typeof i4.TimeseriesTableLatestKeySettingsComponent, typeof i5.MarkdownWidgetSettingsComponent, typeof i6.WidgetFontComponent, typeof i7.LabelWidgetLabelComponent, typeof i8.LabelWidgetSettingsComponent, typeof i9.SimpleCardWidgetSettingsComponent, typeof i10.DashboardStateWidgetSettingsComponent, typeof i11.EntitiesHierarchyWidgetSettingsComponent, typeof i12.HtmlCardWidgetSettingsComponent, typeof i13.EntitiesTableWidgetSettingsComponent, typeof i14.EntitiesTableKeySettingsComponent, typeof i15.AlarmsTableWidgetSettingsComponent, typeof i16.AlarmsTableKeySettingsComponent, typeof i17.GaugeHighlightComponent, typeof i18.AnalogueRadialGaugeWidgetSettingsComponent, typeof i19.AnalogueLinearGaugeWidgetSettingsComponent, typeof i20.AnalogueCompassWidgetSettingsComponent, typeof i21.DigitalGaugeWidgetSettingsComponent, typeof i22.ValueSourceComponent, typeof i23.FixedColorLevelComponent, typeof i24.TickValueComponent, typeof i25.FlotWidgetSettingsComponent, typeof i26.LabelDataKeyComponent, typeof i27.FlotLineWidgetSettingsComponent, typeof i28.FlotBarWidgetSettingsComponent, typeof i29.FlotThresholdComponent, typeof i30.FlotKeySettingsComponent, typeof i31.FlotLineKeySettingsComponent, typeof i32.FlotBarKeySettingsComponent, typeof i33.FlotLatestKeySettingsComponent, typeof i34.FlotPieWidgetSettingsComponent, typeof i35.FlotPieKeySettingsComponent, typeof i36.ChartWidgetSettingsComponent, typeof i37.DoughnutChartWidgetSettingsComponent, typeof i38.DeviceKeyAutocompleteComponent, typeof i39.SwitchRpcSettingsComponent, typeof i40.RoundSwitchWidgetSettingsComponent, typeof i41.SwitchControlWidgetSettingsComponent, typeof i42.SlideToggleWidgetSettingsComponent, typeof i43.PersistentTableWidgetSettingsComponent, typeof i44.RpcButtonStyleComponent, typeof i45.UpdateDeviceAttributeWidgetSettingsComponent, typeof i46.SendRpcWidgetSettingsComponent, typeof i47.LedIndicatorWidgetSettingsComponent, typeof i48.KnobControlWidgetSettingsComponent, typeof i49.RpcTerminalWidgetSettingsComponent, typeof i50.RpcShellWidgetSettingsComponent, typeof i51.DateRangeNavigatorWidgetSettingsComponent, typeof i52.EdgeQuickOverviewWidgetSettingsComponent, typeof i53.GatewayConfigWidgetSettingsComponent, typeof i54.GatewayConfigSingleDeviceWidgetSettingsComponent, typeof i55.GatewayEventsWidgetSettingsComponent, typeof i56.GpioItemComponent, typeof i57.GpioControlWidgetSettingsComponent, typeof i58.GpioPanelWidgetSettingsComponent, typeof i59.NavigationCardWidgetSettingsComponent, typeof i60.NavigationCardsWidgetSettingsComponent, typeof i61.DeviceClaimingWidgetSettingsComponent, typeof i62.UpdateAttributeGeneralSettingsComponent, typeof i63.UpdateIntegerAttributeWidgetSettingsComponent, typeof i64.UpdateDoubleAttributeWidgetSettingsComponent, typeof i65.UpdateStringAttributeWidgetSettingsComponent, typeof i66.UpdateBooleanAttributeWidgetSettingsComponent, typeof i67.UpdateImageAttributeWidgetSettingsComponent, typeof i68.UpdateDateAttributeWidgetSettingsComponent, typeof i69.UpdateLocationAttributeWidgetSettingsComponent, typeof i70.UpdateJsonAttributeWidgetSettingsComponent, typeof i71.PhotoCameraInputWidgetSettingsComponent, typeof i72.UpdateMultipleAttributesWidgetSettingsComponent, typeof i73.DataKeySelectOptionComponent, typeof i74.UpdateMultipleAttributesKeySettingsComponent, typeof i75.GoogleMapProviderSettingsComponent, typeof i76.OpenStreetMapProviderSettingsComponent, typeof i77.HereMapProviderSettingsComponent, typeof i78.ImageMapProviderSettingsComponent, typeof i79.TencentMapProviderSettingsComponent, typeof i80.MapProviderSettingsComponent, typeof i81.DatasourcesKeyAutocompleteComponent, typeof i82.CommonMapSettingsComponent, typeof i83.MarkersSettingsComponent, typeof i84.PolygonSettingsComponent, typeof i85.CircleSettingsComponent, typeof i86.MarkerClusteringSettingsComponent, typeof i87.MapEditorSettingsComponent, typeof i88.RouteMapSettingsComponent, typeof i89.MapSettingsComponent, typeof i90.TripAnimationCommonSettingsComponent, typeof i91.TripAnimationMarkerSettingsComponent, typeof i92.TripAnimationPathSettingsComponent, typeof i93.TripAnimationPointSettingsComponent, typeof i94.MapWidgetSettingsComponent, typeof i95.RouteMapWidgetSettingsComponent, typeof i96.TripAnimationWidgetSettingsComponent, typeof i97.DocLinksWidgetSettingsComponent, typeof i98.QuickLinksWidgetSettingsComponent], [typeof i99.CommonModule, typeof i100.SharedModule, typeof i101.SharedHomeComponentsModule], [typeof i1.QrCodeWidgetSettingsComponent, typeof i2.TimeseriesTableWidgetSettingsComponent, typeof i3.TimeseriesTableKeySettingsComponent, typeof i4.TimeseriesTableLatestKeySettingsComponent, typeof i5.MarkdownWidgetSettingsComponent, typeof i6.WidgetFontComponent, typeof i7.LabelWidgetLabelComponent, typeof i8.LabelWidgetSettingsComponent, typeof i9.SimpleCardWidgetSettingsComponent, typeof i10.DashboardStateWidgetSettingsComponent, typeof i11.EntitiesHierarchyWidgetSettingsComponent, typeof i12.HtmlCardWidgetSettingsComponent, typeof i13.EntitiesTableWidgetSettingsComponent, typeof i14.EntitiesTableKeySettingsComponent, typeof i15.AlarmsTableWidgetSettingsComponent, typeof i16.AlarmsTableKeySettingsComponent, typeof i17.GaugeHighlightComponent, typeof i18.AnalogueRadialGaugeWidgetSettingsComponent, typeof i19.AnalogueLinearGaugeWidgetSettingsComponent, typeof i20.AnalogueCompassWidgetSettingsComponent, typeof i21.DigitalGaugeWidgetSettingsComponent, typeof i22.ValueSourceComponent, typeof i23.FixedColorLevelComponent, typeof i24.TickValueComponent, typeof i25.FlotWidgetSettingsComponent, typeof i26.LabelDataKeyComponent, typeof i27.FlotLineWidgetSettingsComponent, typeof i28.FlotBarWidgetSettingsComponent, typeof i29.FlotThresholdComponent, typeof i30.FlotKeySettingsComponent, typeof i31.FlotLineKeySettingsComponent, typeof i32.FlotBarKeySettingsComponent, typeof i33.FlotLatestKeySettingsComponent, typeof i34.FlotPieWidgetSettingsComponent, typeof i35.FlotPieKeySettingsComponent, typeof i36.ChartWidgetSettingsComponent, typeof i37.DoughnutChartWidgetSettingsComponent, typeof i38.DeviceKeyAutocompleteComponent, typeof i39.SwitchRpcSettingsComponent, typeof i40.RoundSwitchWidgetSettingsComponent, typeof i41.SwitchControlWidgetSettingsComponent, typeof i42.SlideToggleWidgetSettingsComponent, typeof i43.PersistentTableWidgetSettingsComponent, typeof i44.RpcButtonStyleComponent, typeof i45.UpdateDeviceAttributeWidgetSettingsComponent, typeof i46.SendRpcWidgetSettingsComponent, typeof i47.LedIndicatorWidgetSettingsComponent, typeof i48.KnobControlWidgetSettingsComponent, typeof i49.RpcTerminalWidgetSettingsComponent, typeof i50.RpcShellWidgetSettingsComponent, typeof i51.DateRangeNavigatorWidgetSettingsComponent, typeof i52.EdgeQuickOverviewWidgetSettingsComponent, typeof i53.GatewayConfigWidgetSettingsComponent, typeof i54.GatewayConfigSingleDeviceWidgetSettingsComponent, typeof i55.GatewayEventsWidgetSettingsComponent, typeof i56.GpioItemComponent, typeof i57.GpioControlWidgetSettingsComponent, typeof i58.GpioPanelWidgetSettingsComponent, typeof i59.NavigationCardWidgetSettingsComponent, typeof i60.NavigationCardsWidgetSettingsComponent, typeof i61.DeviceClaimingWidgetSettingsComponent, typeof i62.UpdateAttributeGeneralSettingsComponent, typeof i63.UpdateIntegerAttributeWidgetSettingsComponent, typeof i64.UpdateDoubleAttributeWidgetSettingsComponent, typeof i65.UpdateStringAttributeWidgetSettingsComponent, typeof i66.UpdateBooleanAttributeWidgetSettingsComponent, typeof i67.UpdateImageAttributeWidgetSettingsComponent, typeof i68.UpdateDateAttributeWidgetSettingsComponent, typeof i69.UpdateLocationAttributeWidgetSettingsComponent, typeof i70.UpdateJsonAttributeWidgetSettingsComponent, typeof i71.PhotoCameraInputWidgetSettingsComponent, typeof i72.UpdateMultipleAttributesWidgetSettingsComponent, typeof i73.DataKeySelectOptionComponent, typeof i74.UpdateMultipleAttributesKeySettingsComponent, typeof i75.GoogleMapProviderSettingsComponent, typeof i76.OpenStreetMapProviderSettingsComponent, typeof i77.HereMapProviderSettingsComponent, typeof i78.ImageMapProviderSettingsComponent, typeof i79.TencentMapProviderSettingsComponent, typeof i80.MapProviderSettingsComponent, typeof i81.DatasourcesKeyAutocompleteComponent, typeof i82.CommonMapSettingsComponent, typeof i83.MarkersSettingsComponent, typeof i84.PolygonSettingsComponent, typeof i85.CircleSettingsComponent, typeof i86.MarkerClusteringSettingsComponent, typeof i87.MapEditorSettingsComponent, typeof i88.RouteMapSettingsComponent, typeof i89.MapSettingsComponent, typeof i90.TripAnimationCommonSettingsComponent, typeof i91.TripAnimationMarkerSettingsComponent, typeof i92.TripAnimationPathSettingsComponent, typeof i93.TripAnimationPointSettingsComponent, typeof i94.MapWidgetSettingsComponent, typeof i95.RouteMapWidgetSettingsComponent, typeof i96.TripAnimationWidgetSettingsComponent, typeof i97.DocLinksWidgetSettingsComponent, typeof i98.QuickLinksWidgetSettingsComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<WidgetSettingsModule>;
}
export declare const widgetSettingsComponentsMap: {
    [key: string]: Type<IWidgetSettingsComponent>;
};
