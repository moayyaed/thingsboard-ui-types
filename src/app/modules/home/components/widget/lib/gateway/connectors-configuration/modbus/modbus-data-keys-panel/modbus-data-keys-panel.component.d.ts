import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { ModbusDataType, ModbusValue, ModbusValueKey, ModifierType, ReportStrategyDefaultValue } from '@home/components/widget/lib/gateway/gateway-widget.models';
import * as i0 from "@angular/core";
export declare class ModbusDataKeysPanelComponent implements OnInit, OnDestroy {
    private fb;
    isMaster: boolean;
    hideNewFields: boolean;
    panelTitle: string;
    addKeyTitle: string;
    deleteKeyTitle: string;
    noKeysText: string;
    keysType: ModbusValueKey;
    values: ModbusValue[];
    popover: TbPopoverComponent<ModbusDataKeysPanelComponent>;
    keysDataApplied: EventEmitter<ModbusValue[]>;
    keysListFormArray: FormArray<UntypedFormGroup>;
    modbusDataTypes: ModbusDataType[];
    modifierTypes: ModifierType[];
    withFunctionCode: boolean;
    withReportStrategy: boolean;
    enableModifiersControlMap: Map<string, FormControl<boolean>>;
    showModifiersMap: Map<string, boolean>;
    functionCodesMap: Map<any, any>;
    defaultFunctionCodes: any[];
    readonly ModbusEditableDataTypes: ModbusDataType[];
    readonly ModbusFunctionCodeTranslationsMap: Map<number, string>;
    readonly ModifierTypesMap: Map<ModifierType, import("../../../../../../../../../shared/public-api").ValueTypeData>;
    readonly ReportStrategyDefaultValue: typeof ReportStrategyDefaultValue;
    private destroy$;
    private readonly defaultReadFunctionCodes;
    private readonly bitsReadFunctionCodes;
    private readonly defaultWriteFunctionCodes;
    private readonly bitsWriteFunctionCodes;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    trackByControlId(_: number, keyControl: AbstractControl): string;
    addKey(): void;
    deleteKey($event: Event, index: number): void;
    cancel(): void;
    applyKeysData(): void;
    private getFormValue;
    private cleanUpEmptyStrategies;
    private mapKeysWithModifier;
    private prepareKeysFormArray;
    private createDataKeyFormGroup;
    private shouldShowModifier;
    private observeKeyDataType;
    private observeEnableModifier;
    private toggleModifierControls;
    private updateFunctionCodes;
    private getFunctionCodes;
    private getDefaultFunctionCodes;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModbusDataKeysPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModbusDataKeysPanelComponent, "tb-modbus-data-keys-panel", never, { "isMaster": "isMaster"; "hideNewFields": "hideNewFields"; "panelTitle": "panelTitle"; "addKeyTitle": "addKeyTitle"; "deleteKeyTitle": "deleteKeyTitle"; "noKeysText": "noKeysText"; "keysType": "keysType"; "values": "values"; "popover": "popover"; }, { "keysDataApplied": "keysDataApplied"; }, never, never, true, never>;
}
