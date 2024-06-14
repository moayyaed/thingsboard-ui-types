import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { AliasFilterType, EntityAliasFilter } from '@shared/models/alias.models';
import { AliasEntityType, EntityType } from '@shared/models/entity-type.models';
import { EntityService } from '@core/http/entity.service';
import { EntitySearchDirection } from '@shared/models/relation.models';
import * as i0 from "@angular/core";
export declare class EntityFilterComponent implements ControlValueAccessor, OnInit, OnDestroy {
    private entityService;
    private fb;
    disabled: boolean;
    allowedEntityTypes: Array<EntityType | AliasEntityType>;
    resolveMultiple: boolean;
    resolveMultipleChanged: EventEmitter<boolean>;
    entityFilterFormGroup: FormGroup;
    filterFormGroup: FormGroup;
    aliasFilterTypes: Array<AliasFilterType>;
    listEntityTypes: Array<EntityType | AliasEntityType>;
    aliasFilterType: typeof AliasFilterType;
    aliasFilterTypeTranslations: Map<AliasFilterType, string>;
    entityType: typeof EntityType;
    directionTypes: string[];
    directionTypeTranslations: Map<EntitySearchDirection, string>;
    directionTypeEnum: typeof EntitySearchDirection;
    private propagateChange;
    private destroy$;
    private subscriptions;
    constructor(entityService: EntityService, fb: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    writeValue(filter: EntityAliasFilter): void;
    private updateFilterFormGroup;
    private filterTypeChanged;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityFilterComponent, "tb-entity-filter", never, { "disabled": "disabled"; "allowedEntityTypes": "allowedEntityTypes"; "resolveMultiple": "resolveMultiple"; }, { "resolveMultipleChanged": "resolveMultipleChanged"; }, never, never, false, never>;
}
