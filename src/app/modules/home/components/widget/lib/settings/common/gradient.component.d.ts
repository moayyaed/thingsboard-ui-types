import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormGroup, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ColorGradientSettings } from '@shared/models/widget-settings.models';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { IAliasController } from '@core/api/widget-api.models';
import { DomSanitizer } from '@angular/platform-browser';
import { DataKeysCallbacks } from '@home/components/widget/config/data-keys.component.models';
import { Datasource } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class GradientComponent implements OnInit, ControlValueAccessor, OnDestroy {
    private fb;
    private sanitizer;
    gradient: ElementRef;
    disabled: boolean;
    popover: TbPopoverComponent;
    panelTitle: string;
    aliasController: IAliasController;
    dataKeyCallbacks: DataKeysCallbacks;
    datasource: Datasource;
    minValue: number;
    maxValue: number;
    advancedMode: boolean;
    modelValue: any;
    gradientFormGroup: UntypedFormGroup;
    private destroy$;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, sanitizer: DomSanitizer);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: ColorGradientSettings): void;
    get generatePointers(): string;
    pointer(shift: number, index?: number, value?: number, advanced?: boolean): string;
    get linearGradient(): import("@angular/platform-browser").SafeStyle;
    private colorGradientControl;
    get gradientListFormArray(): UntypedFormArray;
    get gradientListFormGroups(): FormGroup[];
    private advancedGradientControl;
    get advancedGradientListFormArray(): UntypedFormArray;
    get advancedGradientListFormGroups(): FormGroup[];
    trackByGradient(index: number, gradientControl: AbstractControl): any;
    removeGradient(index: number, advanced?: boolean): void;
    gradientDrop(event: CdkDragDrop<string[]>, advanced?: boolean): void;
    addGradient(advanced?: boolean): void;
    updateModel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GradientComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GradientComponent, "tb-gradient", never, { "disabled": "disabled"; "popover": "popover"; "panelTitle": "panelTitle"; "aliasController": "aliasController"; "dataKeyCallbacks": "dataKeyCallbacks"; "datasource": "datasource"; "minValue": "minValue"; "maxValue": "maxValue"; "advancedMode": "advancedMode"; }, {}, never, never, false, never>;
}
