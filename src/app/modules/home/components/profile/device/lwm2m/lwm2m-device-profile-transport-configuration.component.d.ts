import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { Lwm2mProfileConfigModels, ObjectLwM2M, ObjectIDVer } from './lwm2m-profile-config.models';
import { DeviceProfileService } from '@core/http/device-profile.service';
import { DialogService } from '@core/services/dialog.service';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class Lwm2mDeviceProfileTransportConfigurationComponent implements ControlValueAccessor, Validator, OnDestroy {
    translate: TranslateService;
    private fb;
    private cd;
    private dialogService;
    private deviceProfileService;
    disabled: boolean;
    isTransportWasRunWithBootstrap: boolean;
    isBootstrapServerUpdateEnable: boolean;
    private requiredValue;
    private destroy$;
    lwm2mDeviceProfileFormGroup: UntypedFormGroup;
    configurationValue: Lwm2mProfileConfigModels;
    objectIDVers: ObjectIDVer[];
    objectIDVerTranslationMap: Map<ObjectIDVer, string>;
    sortFunction: (key: string, value: object) => object;
    get required(): boolean;
    set required(value: boolean);
    isAdd: boolean;
    private propagateChange;
    constructor(translate: TranslateService, fb: UntypedFormBuilder, cd: ChangeDetectorRef, dialogService: DialogService, deviceProfileService: DeviceProfileService);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: Lwm2mProfileConfigModels | null): Promise<void>;
    validate(): ValidationErrors | null;
    private defaultProfileConfig;
    private initWriteValue;
    private updateWriteValue;
    private updateModel;
    private updateObserveAttrTelemetryObjectFormGroup;
    private updateDeviceProfileValue;
    private getObserveAttrTelemetryObjects;
    private includesNotZeroInstance;
    private addInstances;
    private updateInInstanceKeyName;
    private updateObserveAttrTelemetryObjects;
    private updateAttributes;
    private updateKeyNameObjects;
    private validateKeyNameObjects;
    private updateObserveAttrTelemetryFromGroupToJson;
    sortObjectKeyPathJson: (key: string, value: object) => object;
    private sortPath;
    private getObjectsFromJsonAllConfig;
    addObjectsList: (value: ObjectLwM2M[]) => void;
    removeObjectsList: (value: ObjectLwM2M) => void;
    private removeObserveAttrTelemetryFromJson;
    private removeKeyNameFromJson;
    private removeAttributesFromJson;
    get clientSettingsFormGroup(): UntypedFormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<Lwm2mDeviceProfileTransportConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Lwm2mDeviceProfileTransportConfigurationComponent, "tb-profile-lwm2m-device-transport-configuration", never, { "required": "required"; "isAdd": "isAdd"; }, {}, never, never, false, never>;
}
