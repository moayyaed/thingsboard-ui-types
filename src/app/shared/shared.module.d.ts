import { MarkedOptionsService } from '@shared/components/marked-options.service';
import * as i0 from "@angular/core";
import * as i1 from "@shared/components/footer.component";
import * as i2 from "@shared/components/logo.component";
import * as i3 from "@shared/components/footer-fab-buttons.component";
import * as i4 from "@shared/components/toast.directive";
import * as i5 from "@shared/components/fullscreen.directive";
import * as i6 from "@shared/components/circular-progress.directive";
import * as i7 from "@shared/components/mat-chip-draggable.directive";
import * as i8 from "@shared/components/hotkeys.directive";
import * as i9 from "@shared/components/tb-anchor.component";
import * as i10 from "@shared/components/popover.component";
import * as i11 from "@shared/components/directives/sring-template-outlet.directive";
import * as i12 from "@shared/components/directives/component-outlet.directive";
import * as i13 from "@shared/components/markdown.component";
import * as i14 from "@shared/components/help.component";
import * as i15 from "@shared/components/help-markdown.component";
import * as i16 from "@shared/components/help-popup.component";
import * as i17 from "@shared/components/tb-checkbox.component";
import * as i18 from "@shared/components/tb-error.component";
import * as i19 from "@shared/components/cheatsheet.component";
import * as i20 from "@shared/components/breadcrumb.component";
import * as i21 from "@shared/components/user-menu.component";
import * as i22 from "@shared/components/time/timewindow.component";
import * as i23 from "@shared/components/time/timewindow-panel.component";
import * as i24 from "@shared/components/time/timeinterval.component";
import * as i25 from "@shared/components/time/quick-time-interval.component";
import * as i26 from "@shared/components/dashboard-select.component";
import * as i27 from "@shared/components/dashboard-select-panel.component";
import * as i28 from "@shared/components/time/datetime-period.component";
import * as i29 from "@shared/components/time/datetime.component";
import * as i30 from "@shared/components/time/timezone-select.component";
import * as i31 from "@shared/components/value-input.component";
import * as i32 from "@shared/components/dashboard-autocomplete.component";
import * as i33 from "@shared/components/entity/entity-subtype-autocomplete.component";
import * as i34 from "@shared/components/entity/entity-subtype-select.component";
import * as i35 from "@shared/components/entity/entity-subtype-list.component";
import * as i36 from "@shared/components/entity/entity-autocomplete.component";
import * as i37 from "@shared/components/entity/entity-list.component";
import * as i38 from "@shared/components/entity/entity-type-select.component";
import * as i39 from "@shared/components/entity/entity-select.component";
import * as i40 from "@shared/components/entity/entity-keys-list.component";
import * as i41 from "@shared/components/entity/entity-list-select.component";
import * as i42 from "@shared/components/entity/entity-type-list.component";
import * as i43 from "@shared/components/queue/queue-autocomplete.component";
import * as i44 from "@shared/components/relation/relation-type-autocomplete.component";
import * as i45 from "@shared/components/socialshare-panel.component";
import * as i46 from "@shared/components/json-object-edit.component";
import * as i47 from "@shared/components/json-object-view.component";
import * as i48 from "@shared/components/json-content.component";
import * as i49 from "@shared/components/js-func.component";
import * as i50 from "@shared/components/css.component";
import * as i51 from "@shared/components/html.component";
import * as i52 from "@shared/components/fab-toolbar.component";
import * as i53 from "@shared/components/widgets-bundle-select.component";
import * as i54 from "@shared/components/dialog/confirm-dialog.component";
import * as i55 from "@shared/components/dialog/alert-dialog.component";
import * as i56 from "@shared/components/dialog/todo-dialog.component";
import * as i57 from "@shared/components/dialog/color-picker-dialog.component";
import * as i58 from "@shared/components/dialog/material-icons-dialog.component";
import * as i59 from "@shared/components/color-input.component";
import * as i60 from "@shared/components/material-icon-select.component";
import * as i61 from "@shared/components/dialog/node-script-test-dialog.component";
import * as i62 from "@shared/components/json-form/json-form.component";
import * as i63 from "@shared/components/image-input.component";
import * as i64 from "@shared/components/multiple-image-input.component";
import * as i65 from "@shared/components/file-input.component";
import * as i66 from "@shared/components/message-type-autocomplete.component";
import * as i67 from "@shared/components/kv-map.component";
import * as i68 from "@shared/components/nav-tree.component";
import * as i69 from "@shared/components/led-light.component";
import * as i70 from "@shared/components/markdown-editor.component";
import * as i71 from "@shared/pipe/nospace.pipe";
import * as i72 from "@shared/pipe/milliseconds-to-time-string.pipe";
import * as i73 from "@shared/pipe/enum-to-array.pipe";
import * as i74 from "@shared/pipe/highlight.pipe";
import * as i75 from "@shared/pipe/truncate.pipe";
import * as i76 from "@shared/pipe/tbJson.pipe";
import * as i77 from "@shared/pipe/file-size.pipe";
import * as i78 from "@shared/pipe/safe.pipe";
import * as i79 from "@shared/pipe/selectable-columns.pipe";
import * as i80 from "@shared/pipe/keyboard-shortcut.pipe";
import * as i81 from "@shared/components/directives/tb-json-to-string.directive";
import * as i82 from "@shared/components/dialog/json-object-edit-dialog.component";
import * as i83 from "@shared/components/time/history-selector/history-selector.component";
import * as i84 from "@shared/components/entity/entity-gateway-select.component";
import * as i85 from "@shared/components/contact.component";
import * as i86 from "@shared/components/ota-package/ota-package-autocomplete.component";
import * as i87 from "@shared/components/widgets-bundle-search.component";
import * as i88 from "@shared/components/button/copy-button.component";
import * as i89 from "@shared/components/button/toggle-password.component";
import * as i90 from "@shared/components/protobuf-content.component";
import * as i91 from "@shared/components/vc/branch-autocomplete.component";
import * as i92 from "@shared/components/phone-input.component";
import * as i93 from "@shared/components/script-lang.component";
import * as i94 from "@angular/common";
import * as i95 from "@angular/router";
import * as i96 from "@ngx-translate/core";
import * as i97 from "@angular/material/button";
import * as i98 from "@angular/material/button-toggle";
import * as i99 from "@angular/material/checkbox";
import * as i100 from "@angular/material/icon";
import * as i101 from "@angular/material/card";
import * as i102 from "@angular/material/progress-bar";
import * as i103 from "@angular/material/input";
import * as i104 from "@angular/material/snack-bar";
import * as i105 from "@angular/material/sidenav";
import * as i106 from "@angular/material/toolbar";
import * as i107 from "@angular/material/menu";
import * as i108 from "@angular/material/grid-list";
import * as i109 from "@angular/material/dialog";
import * as i110 from "@angular/material/select";
import * as i111 from "@angular/material/tooltip";
import * as i112 from "@angular/material/table";
import * as i113 from "@angular/material/paginator";
import * as i114 from "@angular/material/sort";
import * as i115 from "@angular/material/progress-spinner";
import * as i116 from "@angular/material/divider";
import * as i117 from "@angular/material/tabs";
import * as i118 from "@angular/material/radio";
import * as i119 from "@angular/material/slide-toggle";
import * as i120 from "@angular/material/datepicker";
import * as i121 from "@mat-datetimepicker/core";
import * as i122 from "ngx-daterangepicker-material";
import * as i123 from "@angular/material/slider";
import * as i124 from "@angular/material/expansion";
import * as i125 from "@angular/material/stepper";
import * as i126 from "@angular/material/autocomplete";
import * as i127 from "@angular/material/chips";
import * as i128 from "@angular/material/list";
import * as i129 from "@angular/cdk/drag-drop";
import * as i130 from "angular-gridster2";
import * as i131 from "ngx-clipboard";
import * as i132 from "@angular/flex-layout";
import * as i133 from "@angular/forms";
import * as i134 from "@angular/cdk/overlay";
import * as i135 from "ngx-sharebuttons";
import * as i136 from "angular2-hotkeys";
import * as i137 from "ngx-color-picker";
import * as i138 from "ngx-hm-carousel";
import * as i139 from "ngx-drag-drop";
import * as i140 from "@flowjs/ngx-flow";
import * as i141 from "ngx-flowchart";
import * as i142 from "ngx-markdown";
export declare function MarkedOptionsFactory(markedOptionsService: MarkedOptionsService): MarkedOptionsService;
export declare class SharedModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SharedModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SharedModule, [typeof i1.FooterComponent, typeof i2.LogoComponent, typeof i3.FooterFabButtonsComponent, typeof i4.ToastDirective, typeof i5.FullscreenDirective, typeof i6.CircularProgressDirective, typeof i7.MatChipDraggableDirective, typeof i8.TbHotkeysDirective, typeof i9.TbAnchorComponent, typeof i10.TbPopoverComponent, typeof i11.TbStringTemplateOutletDirective, typeof i12.TbComponentOutletDirective, typeof i10.TbPopoverDirective, typeof i13.TbMarkdownComponent, typeof i14.HelpComponent, typeof i15.HelpMarkdownComponent, typeof i16.HelpPopupComponent, typeof i17.TbCheckboxComponent, typeof i4.TbSnackBarComponent, typeof i18.TbErrorComponent, typeof i19.TbCheatSheetComponent, typeof i20.BreadcrumbComponent, typeof i21.UserMenuComponent, typeof i22.TimewindowComponent, typeof i23.TimewindowPanelComponent, typeof i24.TimeintervalComponent, typeof i25.QuickTimeIntervalComponent, typeof i26.DashboardSelectComponent, typeof i27.DashboardSelectPanelComponent, typeof i28.DatetimePeriodComponent, typeof i29.DatetimeComponent, typeof i30.TimezoneSelectComponent, typeof i31.ValueInputComponent, typeof i32.DashboardAutocompleteComponent, typeof i33.EntitySubTypeAutocompleteComponent, typeof i34.EntitySubTypeSelectComponent, typeof i35.EntitySubTypeListComponent, typeof i36.EntityAutocompleteComponent, typeof i37.EntityListComponent, typeof i38.EntityTypeSelectComponent, typeof i39.EntitySelectComponent, typeof i40.EntityKeysListComponent, typeof i41.EntityListSelectComponent, typeof i42.EntityTypeListComponent, typeof i43.QueueAutocompleteComponent, typeof i44.RelationTypeAutocompleteComponent, typeof i45.SocialSharePanelComponent, typeof i46.JsonObjectEditComponent, typeof i47.JsonObjectViewComponent, typeof i48.JsonContentComponent, typeof i49.JsFuncComponent, typeof i50.CssComponent, typeof i51.HtmlComponent, typeof i52.FabTriggerDirective, typeof i52.FabActionsDirective, typeof i52.FabToolbarComponent, typeof i53.WidgetsBundleSelectComponent, typeof i54.ConfirmDialogComponent, typeof i55.AlertDialogComponent, typeof i56.TodoDialogComponent, typeof i57.ColorPickerDialogComponent, typeof i58.MaterialIconsDialogComponent, typeof i59.ColorInputComponent, typeof i60.MaterialIconSelectComponent, typeof i61.NodeScriptTestDialogComponent, typeof i62.JsonFormComponent, typeof i63.ImageInputComponent, typeof i64.MultipleImageInputComponent, typeof i65.FileInputComponent, typeof i66.MessageTypeAutocompleteComponent, typeof i67.KeyValMapComponent, typeof i68.NavTreeComponent, typeof i69.LedLightComponent, typeof i70.MarkdownEditorComponent, typeof i71.NospacePipe, typeof i72.MillisecondsToTimeStringPipe, typeof i73.EnumToArrayPipe, typeof i74.HighlightPipe, typeof i75.TruncatePipe, typeof i76.TbJsonPipe, typeof i77.FileSizePipe, typeof i78.SafePipe, typeof i79.SelectableColumnsPipe, typeof i80.KeyboardShortcutPipe, typeof i81.TbJsonToStringDirective, typeof i82.JsonObjectEditDialogComponent, typeof i83.HistorySelectorComponent, typeof i84.EntityGatewaySelectComponent, typeof i85.ContactComponent, typeof i86.OtaPackageAutocompleteComponent, typeof i87.WidgetsBundleSearchComponent, typeof i88.CopyButtonComponent, typeof i89.TogglePasswordComponent, typeof i90.ProtobufContentComponent, typeof i91.BranchAutocompleteComponent, typeof i92.PhoneInputComponent, typeof i93.TbScriptLangComponent], [typeof i94.CommonModule, typeof i95.RouterModule, typeof i96.TranslateModule, typeof i97.MatButtonModule, typeof i98.MatButtonToggleModule, typeof i99.MatCheckboxModule, typeof i100.MatIconModule, typeof i101.MatCardModule, typeof i102.MatProgressBarModule, typeof i103.MatInputModule, typeof i104.MatSnackBarModule, typeof i105.MatSidenavModule, typeof i106.MatToolbarModule, typeof i107.MatMenuModule, typeof i108.MatGridListModule, typeof i109.MatDialogModule, typeof i110.MatSelectModule, typeof i111.MatTooltipModule, typeof i112.MatTableModule, typeof i113.MatPaginatorModule, typeof i114.MatSortModule, typeof i115.MatProgressSpinnerModule, typeof i116.MatDividerModule, typeof i117.MatTabsModule, typeof i118.MatRadioModule, typeof i119.MatSlideToggleModule, typeof i120.MatDatepickerModule, typeof i121.MatNativeDatetimeModule, typeof i121.MatDatetimepickerModule, typeof i122.NgxDaterangepickerMd, typeof i123.MatSliderModule, typeof i124.MatExpansionModule, typeof i125.MatStepperModule, typeof i126.MatAutocompleteModule, typeof i127.MatChipsModule, typeof i128.MatListModule, typeof i129.DragDropModule, typeof i130.GridsterModule, typeof i131.ClipboardModule, typeof i132.FlexLayoutModule, typeof i133.FormsModule, typeof i133.ReactiveFormsModule, typeof i134.OverlayModule, typeof i135.ShareModule, typeof i136.HotkeyModule, typeof i137.ColorPickerModule, typeof i138.NgxHmCarouselModule, typeof i139.DndModule, typeof i140.NgxFlowModule, typeof i141.NgxFlowchartModule, typeof i142.MarkdownModule], [typeof i1.FooterComponent, typeof i2.LogoComponent, typeof i3.FooterFabButtonsComponent, typeof i4.ToastDirective, typeof i5.FullscreenDirective, typeof i6.CircularProgressDirective, typeof i7.MatChipDraggableDirective, typeof i8.TbHotkeysDirective, typeof i9.TbAnchorComponent, typeof i11.TbStringTemplateOutletDirective, typeof i12.TbComponentOutletDirective, typeof i10.TbPopoverDirective, typeof i13.TbMarkdownComponent, typeof i14.HelpComponent, typeof i15.HelpMarkdownComponent, typeof i16.HelpPopupComponent, typeof i17.TbCheckboxComponent, typeof i18.TbErrorComponent, typeof i19.TbCheatSheetComponent, typeof i20.BreadcrumbComponent, typeof i21.UserMenuComponent, typeof i22.TimewindowComponent, typeof i23.TimewindowPanelComponent, typeof i24.TimeintervalComponent, typeof i25.QuickTimeIntervalComponent, typeof i26.DashboardSelectComponent, typeof i28.DatetimePeriodComponent, typeof i29.DatetimeComponent, typeof i30.TimezoneSelectComponent, typeof i32.DashboardAutocompleteComponent, typeof i33.EntitySubTypeAutocompleteComponent, typeof i34.EntitySubTypeSelectComponent, typeof i35.EntitySubTypeListComponent, typeof i36.EntityAutocompleteComponent, typeof i37.EntityListComponent, typeof i38.EntityTypeSelectComponent, typeof i39.EntitySelectComponent, typeof i40.EntityKeysListComponent, typeof i41.EntityListSelectComponent, typeof i42.EntityTypeListComponent, typeof i43.QueueAutocompleteComponent, typeof i44.RelationTypeAutocompleteComponent, typeof i45.SocialSharePanelComponent, typeof i46.JsonObjectEditComponent, typeof i47.JsonObjectViewComponent, typeof i48.JsonContentComponent, typeof i49.JsFuncComponent, typeof i50.CssComponent, typeof i51.HtmlComponent, typeof i52.FabTriggerDirective, typeof i52.FabActionsDirective, typeof i52.FabToolbarComponent, typeof i53.WidgetsBundleSelectComponent, typeof i31.ValueInputComponent, typeof i97.MatButtonModule, typeof i98.MatButtonToggleModule, typeof i99.MatCheckboxModule, typeof i100.MatIconModule, typeof i101.MatCardModule, typeof i102.MatProgressBarModule, typeof i103.MatInputModule, typeof i104.MatSnackBarModule, typeof i105.MatSidenavModule, typeof i106.MatToolbarModule, typeof i107.MatMenuModule, typeof i108.MatGridListModule, typeof i109.MatDialogModule, typeof i110.MatSelectModule, typeof i111.MatTooltipModule, typeof i112.MatTableModule, typeof i113.MatPaginatorModule, typeof i114.MatSortModule, typeof i115.MatProgressSpinnerModule, typeof i116.MatDividerModule, typeof i117.MatTabsModule, typeof i118.MatRadioModule, typeof i119.MatSlideToggleModule, typeof i120.MatDatepickerModule, typeof i121.MatNativeDatetimeModule, typeof i121.MatDatetimepickerModule, typeof i122.NgxDaterangepickerMd, typeof i123.MatSliderModule, typeof i124.MatExpansionModule, typeof i125.MatStepperModule, typeof i126.MatAutocompleteModule, typeof i127.MatChipsModule, typeof i128.MatListModule, typeof i129.DragDropModule, typeof i130.GridsterModule, typeof i131.ClipboardModule, typeof i132.FlexLayoutModule, typeof i133.FormsModule, typeof i133.ReactiveFormsModule, typeof i134.OverlayModule, typeof i135.ShareModule, typeof i136.HotkeyModule, typeof i137.ColorPickerModule, typeof i138.NgxHmCarouselModule, typeof i139.DndModule, typeof i141.NgxFlowchartModule, typeof i142.MarkdownModule, typeof i54.ConfirmDialogComponent, typeof i55.AlertDialogComponent, typeof i56.TodoDialogComponent, typeof i57.ColorPickerDialogComponent, typeof i58.MaterialIconsDialogComponent, typeof i59.ColorInputComponent, typeof i60.MaterialIconSelectComponent, typeof i61.NodeScriptTestDialogComponent, typeof i62.JsonFormComponent, typeof i63.ImageInputComponent, typeof i64.MultipleImageInputComponent, typeof i65.FileInputComponent, typeof i66.MessageTypeAutocompleteComponent, typeof i67.KeyValMapComponent, typeof i68.NavTreeComponent, typeof i69.LedLightComponent, typeof i70.MarkdownEditorComponent, typeof i71.NospacePipe, typeof i72.MillisecondsToTimeStringPipe, typeof i73.EnumToArrayPipe, typeof i74.HighlightPipe, typeof i75.TruncatePipe, typeof i76.TbJsonPipe, typeof i80.KeyboardShortcutPipe, typeof i77.FileSizePipe, typeof i78.SafePipe, typeof i79.SelectableColumnsPipe, typeof i95.RouterModule, typeof i96.TranslateModule, typeof i82.JsonObjectEditDialogComponent, typeof i83.HistorySelectorComponent, typeof i84.EntityGatewaySelectComponent, typeof i85.ContactComponent, typeof i86.OtaPackageAutocompleteComponent, typeof i87.WidgetsBundleSearchComponent, typeof i88.CopyButtonComponent, typeof i89.TogglePasswordComponent, typeof i90.ProtobufContentComponent, typeof i91.BranchAutocompleteComponent, typeof i92.PhoneInputComponent, typeof i93.TbScriptLangComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SharedModule>;
}
