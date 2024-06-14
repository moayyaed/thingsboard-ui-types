import { ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, UntypedFormControl, Validator } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ContentType } from '@shared/models/constants';
import { RafService } from '@core/services/raf.service';
import * as i0 from "@angular/core";
export declare class JsonContentComponent implements OnInit, ControlValueAccessor, Validator, OnChanges, OnDestroy {
    elementRef: ElementRef;
    protected store: Store<AppState>;
    private raf;
    private cd;
    jsonEditorElmRef: ElementRef;
    private jsonEditor;
    private editorsResizeCaf;
    private editorResize$;
    private ignoreChange;
    toastTargetId: string;
    label: string;
    contentType: ContentType;
    disabled: boolean;
    fillHeight: boolean;
    editorStyle: {
        [klass: string]: any;
    };
    tbPlaceholder: string;
    hideToolbar: boolean;
    readonly: boolean;
    validateContent: boolean;
    validateOnChange: boolean;
    required: boolean;
    fullscreen: boolean;
    contentBody: string;
    contentValid: boolean;
    errorShowed: boolean;
    private propagateChange;
    constructor(elementRef: ElementRef, store: Store<AppState>, raf: RafService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    private createPlaceholder;
    private updateEditorPlaceholder;
    ngOnDestroy(): void;
    private onAceEditorResize;
    ngOnChanges(changes: SimpleChanges): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(c: UntypedFormControl): {
        contentBody: {
            valid: boolean;
        };
    };
    validateOnSubmit(): void;
    private doValidate;
    cleanupJsonErrors(): void;
    writeValue(value: string): void;
    updateView(): void;
    beautifyJSON(): void;
    minifyJSON(): void;
    onFullscreen(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<JsonContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<JsonContentComponent, "tb-json-content", never, { "label": "label"; "contentType": "contentType"; "disabled": "disabled"; "fillHeight": "fillHeight"; "editorStyle": "editorStyle"; "tbPlaceholder": "tbPlaceholder"; "hideToolbar": "hideToolbar"; "readonly": "readonly"; "validateContent": "validateContent"; "validateOnChange": "validateOnChange"; "required": "required"; }, {}, never, never, false, never>;
}
