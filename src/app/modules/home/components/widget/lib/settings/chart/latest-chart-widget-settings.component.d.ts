import { TemplateRef } from '@angular/core';
import { LatestChartTooltipValueType, LatestChartWidgetSettings } from '@home/components/widget/lib/chart/latest-chart.models';
import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DoughnutLayout } from '@home/components/widget/lib/chart/doughnut-widget.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetConfigComponentData } from '@home/models/widget-component.models';
import * as i0 from "@angular/core";
export declare abstract class LatestChartWidgetSettingsComponent<S extends LatestChartWidgetSettings> extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    protected fb: UntypedFormBuilder;
    doughnutLayouts: DoughnutLayout[];
    doughnutLayoutTranslationMap: Map<DoughnutLayout, string>;
    doughnutHorizontal: boolean;
    doughnutLayoutImageMap: Map<DoughnutLayout, string>;
    pieChartLabelPositions: import("@home/components/widget/lib/chart/chart.models").PieChartLabelPosition[];
    pieChartLabelPositionTranslationMap: Map<import("@home/components/widget/lib/chart/chart.models").PieChartLabelPosition, string>;
    radarChartShapes: import("@home/components/widget/lib/chart/radar-chart.models").RadarChartShape[];
    radarChartShapeTranslations: Map<import("@home/components/widget/lib/chart/radar-chart.models").RadarChartShape, string>;
    chartLineTypes: import("@home/components/widget/lib/chart/chart.models").ChartLineType[];
    chartLineTypeTranslations: Map<import("@home/components/widget/lib/chart/chart.models").ChartLineType, string>;
    chartShapes: import("@home/components/widget/lib/chart/chart.models").ChartShape[];
    chartShapeTranslations: Map<import("@home/components/widget/lib/chart/chart.models").ChartShape, string>;
    chartLabelPositions: import("@home/components/widget/lib/chart/chart.models").ChartLabelPosition[];
    chartLabelPositionTranslations: Map<import("@home/components/widget/lib/chart/chart.models").ChartLabelPosition, string>;
    legendPositions: import("@shared/models/widget.models").LegendPosition[];
    legendPositionTranslationMap: Map<import("@shared/models/widget.models").LegendPosition, string>;
    latestChartTooltipValueTypes: LatestChartTooltipValueType[];
    latestChartTooltipValueTypeTranslationMap: Map<LatestChartTooltipValueType, string>;
    latestChartWidgetSettingsForm: UntypedFormGroup;
    valuePreviewFn: any;
    tooltipValuePreviewFn: any;
    get doughnutTotalEnabled(): boolean;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected onWidgetConfigSet(widgetConfig: WidgetConfigComponentData): void;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean, trigger?: string): void;
    protected setupLatestChartControls(latestChartWidgetSettingsForm: UntypedFormGroup, settings: WidgetSettings): void;
    protected latestChartValidatorTriggers(): string[];
    protected updateLatestChartValidators(latestChartWidgetSettingsForm: UntypedFormGroup, emitEvent: boolean, trigger?: string): void;
    protected abstract defaultLatestChartSettings(): S;
    abstract latestChartConfigTemplate(): TemplateRef<any>;
    private _valuePreviewFn;
    private _tooltipValuePreviewFn;
    static ɵfac: i0.ɵɵFactoryDeclaration<LatestChartWidgetSettingsComponent<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LatestChartWidgetSettingsComponent<any>, never, never, {}, {}, never, never, false, never>;
}
