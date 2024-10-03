/// <reference types="tooltipster" />
import { ImageResourceInfo } from '@shared/models/resource.models';
import { Box, Element, Svg } from '@svgdotjs/svg.js';
import { NgZone, ViewContainerRef } from '@angular/core';
import { ScadaSymbolMetadata } from '@home/components/widget/lib/scada/scada-symbol.models';
import { TbEditorCompletion, TbEditorCompletions } from '@shared/models/ace/completion.models';
import { CustomTranslatePipe } from '@shared/pipe/custom-translate.pipe';
import { AceHighlightRules } from '@shared/models/ace/ace.models';
import ITooltipsterInstance = JQueryTooltipster.ITooltipsterInstance;
export interface ScadaSymbolData {
    imageResource: ImageResourceInfo;
    scadaSymbolContent: string;
}
export interface ScadaSymbolEditObjectCallbacks {
    tagHasStateRenderFunction: (tag: string) => boolean;
    tagHasClickAction: (tag: string) => boolean;
    editTagStateRenderFunction: (tag: string) => void;
    editTagClickAction: (tag: string) => void;
    tagsUpdated: (tags: string[]) => void;
    hasHiddenElements?: (hasHidden: boolean) => void;
    onSymbolEditObjectDirty: (dirty: boolean) => void;
    onSymbolEditObjectValid: (valid: boolean) => void;
    onZoom?: () => void;
}
export declare class ScadaSymbolEditObject {
    private rootElement;
    tooltipsContainer: HTMLElement;
    viewContainerRef: ViewContainerRef;
    private zone;
    private callbacks;
    readonly: boolean;
    svgShape: Svg;
    private svgRootNodePart;
    private box;
    private elements;
    private readonly shapeResize$;
    private performSetup;
    private hoverFilterStyle;
    private showHidden;
    scale: number;
    tags: string[];
    private zoomFactor;
    constructor(rootElement: HTMLElement, tooltipsContainer: HTMLElement, viewContainerRef: ViewContainerRef, zone: NgZone, callbacks: ScadaSymbolEditObjectCallbacks, readonly: boolean);
    setReadOnly(readonly: boolean): void;
    setContent(svgContent: string): void;
    getContent(): string;
    cancelEdit(): void;
    zoomIn(): void;
    zoomOut(): void;
    showHiddenElements(show: boolean): void;
    private zoomAnimate;
    zoomInDisabled(): boolean;
    zoomOutDisabled(): boolean;
    private doSetup;
    private setupZoomPan;
    private postZoom;
    private restrictToMargins;
    private setupElements;
    private addElement;
    destroy(): void;
    private destroyElements;
    private resize;
    private updateHoverFilterStyle;
    private updateTooltipPositions;
    private hideTooltips;
    private restoreTooltips;
    updateTags(): void;
    getTags(): string[];
    tagHasStateRenderFunction(tag: string): boolean;
    tagHasClickAction(tag: string): boolean;
    editTagStateRenderFunction(tag: string): void;
    editTagClickAction(tag: string): void;
    setDirty(dirty: boolean): void;
}
export declare class ScadaSymbolElement {
    private editObject;
    element: Element;
    invisible: boolean;
    private highlightRect;
    private highlightRectTimeline;
    tooltip: ITooltipsterInstance;
    tag: string;
    private editing;
    private onCancelEdit;
    private innerTooltipOffset;
    readonly box: Box;
    private highlighted;
    private tooltipMouseX;
    private tooltipMouseY;
    private origVisibility;
    get readonly(): boolean;
    constructor(editObject: ScadaSymbolEditObject, element: Element, invisible?: boolean);
    init(): void;
    private setupTooltips;
    showInvisible(): void;
    hideInvisible(): void;
    restoreOrigVisibility(): void;
    overlappingCenters(otherElement: ScadaSymbolElement): boolean;
    highlight(): void;
    unhighlight(): void;
    clearTag(): void;
    setTag(tag: string): void;
    hasStateRenderFunction(): boolean;
    hasClickAction(): boolean;
    editStateRenderFunction(): void;
    editClickAction(): void;
    startEdit(onCancelEdit: () => void): void;
    stopEdit(cancel?: boolean): void;
    isEditing(): boolean;
    updateTooltipPosition(): void;
    hideTooltip(): void;
    restoreTooltip(): void;
    setInnerTooltipOffset(offset: number, center: number): void;
    destroy(): void;
    get tooltipContainer(): JQuery<HTMLElement>;
    private unscaled;
    private scaled;
    private createTagTooltip;
    private setupTagPanel;
    private createAddTagTooltip;
    private setupAddTagPanel;
    private innerTagTooltipPosition;
    private innerAddTagTooltipPosition;
    private calculateTooltipSide;
    hasTag(): boolean;
    isGroup(): boolean;
    isText(): boolean;
}
export declare const scadaSymbolGeneralStateHighlightRules: AceHighlightRules;
export declare const scadaSymbolRenderFunctionHighlightRules: AceHighlightRules;
export declare const scadaSymbolClickActionHighlightRules: AceHighlightRules;
export declare const generalStateRenderFunctionCompletions: (ctxCompletion: TbEditorCompletion) => TbEditorCompletions;
export declare const elementStateRenderFunctionCompletions: (ctxCompletion: TbEditorCompletion) => TbEditorCompletions;
export declare const clickActionFunctionCompletions: (ctxCompletion: TbEditorCompletion) => TbEditorCompletions;
export declare const scadaSymbolContextCompletion: (metadata: ScadaSymbolMetadata, tags: string[], customTranslate: CustomTranslatePipe) => TbEditorCompletion;
