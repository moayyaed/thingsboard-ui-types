import { EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { TimeService } from '@core/services/time.service';
import { SubscriptSizing } from '@angular/material/form-field';
import { Interval, TimeInterval } from '@shared/models/time/time.models';
import * as i0 from "@angular/core";
export declare class TimeintervalComponent implements OnInit, ControlValueAccessor {
    private timeService;
    minValue: number;
    maxValue: number;
    set min(min: number);
    set max(max: number);
    predefinedName: string;
    isEdit: boolean;
    hideFlag: boolean;
    disabledAdvanced: boolean;
    useCalendarIntervals: boolean;
    hideFlagChange: EventEmitter<boolean>;
    disabled: boolean;
    subscriptSizing: SubscriptSizing;
    days: number;
    hours: number;
    mins: number;
    secs: number;
    interval: Interval;
    intervals: Array<TimeInterval>;
    advanced: boolean;
    private modelValue;
    private rendered;
    private propagateChangeValue;
    private propagateChange;
    constructor(timeService: TimeService);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(interval: Interval): void;
    private setInterval;
    private boundInterval;
    private updateView;
    private calculateIntervalMs;
    onIntervalChange(): void;
    onAdvancedChange(): void;
    onHideFlagChange(): void;
    onTimeInputChange(type: string): void;
    private onSecsChange;
    private onMinsChange;
    private onHoursChange;
    private onDaysChange;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeintervalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeintervalComponent, "tb-timeinterval", never, { "min": "min"; "max": "max"; "predefinedName": "predefinedName"; "isEdit": "isEdit"; "hideFlag": "hideFlag"; "disabledAdvanced": "disabledAdvanced"; "useCalendarIntervals": "useCalendarIntervals"; "disabled": "disabled"; "subscriptSizing": "subscriptSizing"; }, { "hideFlagChange": "hideFlagChange"; }, never, never, false, never>;
}
