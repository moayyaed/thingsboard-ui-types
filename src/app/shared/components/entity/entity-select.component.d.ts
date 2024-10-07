import { AfterViewInit, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { AliasEntityType, EntityType } from '@shared/models/entity-type.models';
import { EntityService } from '@core/http/entity.service';
import { EntityId } from '@shared/models/id/entity-id';
import * as i0 from "@angular/core";
export declare class EntitySelectComponent implements ControlValueAccessor, OnInit, AfterViewInit {
    private store;
    private entityService;
    translate: TranslateService;
    private fb;
    entitySelectFormGroup: UntypedFormGroup;
    modelValue: EntityId;
    allowedEntityTypes: Array<EntityType | AliasEntityType>;
    useAliasEntityTypes: boolean;
    required: boolean;
    disabled: boolean;
    additionEntityTypes: {
        [entityType in string]: string;
    };
    displayEntityTypeSelect: boolean;
    AliasEntityType: typeof AliasEntityType;
    entityTypeNullUUID: Set<AliasEntityType | EntityType | string>;
    private readonly defaultEntityType;
    private propagateChange;
    constructor(store: Store<AppState>, entityService: EntityService, translate: TranslateService, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: EntityId | null): void;
    updateView(entityType: EntityType | AliasEntityType | null, entityId: string | null): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntitySelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntitySelectComponent, "tb-entity-select", never, { "allowedEntityTypes": { "alias": "allowedEntityTypes"; "required": false; }; "useAliasEntityTypes": { "alias": "useAliasEntityTypes"; "required": false; }; "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "additionEntityTypes": { "alias": "additionEntityTypes"; "required": false; }; }, {}, never, never, false, never>;
}
