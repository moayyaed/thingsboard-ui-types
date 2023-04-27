import { MarkedOptionsService } from '@shared/components/marked-options.service';
import * as i0 from "@angular/core";
import * as i1 from "@shared/components/footer.component";
import * as i2 from "@shared/components/logo.component";
import * as i3 from "@shared/components/footer-fab-buttons.component";
import * as i4 from "@shared/components/toast.directive";
import * as i5 from "@shared/components/fullscreen.directive";
import * as i6 from "@shared/components/circular-progress.directive";
import * as i7 from "@shared/components/hotkeys.directive";
import * as i8 from "@shared/components/tb-anchor.component";
import * as i9 from "@shared/components/popover.component";
import * as i10 from "@shared/components/directives/sring-template-outlet.directive";
import * as i11 from "@shared/components/directives/component-outlet.directive";
import * as i12 from "@shared/components/markdown.component";
import * as i13 from "@shared/components/help.component";
import * as i14 from "@shared/components/help-markdown.component";
import * as i15 from "@shared/components/help-popup.component";
import * as i16 from "@shared/components/tb-checkbox.component";
import * as i17 from "@shared/components/tb-error.component";
import * as i18 from "@shared/components/cheatsheet.component";
import * as i19 from "@shared/components/breadcrumb.component";
import * as i20 from "@shared/components/user-menu.component";
import * as i21 from "@shared/components/time/timewindow.component";
import * as i22 from "@shared/components/time/timewindow-panel.component";
import * as i23 from "@shared/components/time/timeinterval.component";
import * as i24 from "@shared/components/time/quick-time-interval.component";
import * as i25 from "@shared/components/dashboard-select.component";
import * as i26 from "@shared/components/dashboard-select-panel.component";
import * as i27 from "@shared/components/time/datetime-period.component";
import * as i28 from "@shared/components/time/datetime.component";
import * as i29 from "@shared/components/time/timezone-select.component";
import * as i30 from "@shared/components/value-input.component";
import * as i31 from "@shared/components/dashboard-autocomplete.component";
import * as i32 from "@shared/components/dashboard-state-autocomplete.component";
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
import * as i46 from "@shared/components/string-items-list.component";
import * as i47 from "@shared/components/json-object-edit.component";
import * as i48 from "@shared/components/json-object-view.component";
import * as i49 from "@shared/components/json-content.component";
import * as i50 from "@shared/components/js-func.component";
import * as i51 from "@shared/components/css.component";
import * as i52 from "@shared/components/html.component";
import * as i53 from "@shared/components/fab-toolbar.component";
import * as i54 from "@shared/components/widgets-bundle-select.component";
import * as i55 from "@shared/components/dialog/confirm-dialog.component";
import * as i56 from "@shared/components/dialog/alert-dialog.component";
import * as i57 from "@shared/components/dialog/todo-dialog.component";
import * as i58 from "@shared/components/dialog/color-picker-dialog.component";
import * as i59 from "@shared/components/dialog/material-icons-dialog.component";
import * as i60 from "@shared/components/color-input.component";
import * as i61 from "@shared/components/material-icon-select.component";
import * as i62 from "@shared/components/dialog/node-script-test-dialog.component";
import * as i63 from "@shared/components/json-form/json-form.component";
import * as i64 from "@shared/components/image-input.component";
import * as i65 from "@shared/components/multiple-image-input.component";
import * as i66 from "@shared/components/file-input.component";
import * as i67 from "@shared/components/message-type-autocomplete.component";
import * as i68 from "@shared/components/kv-map.component";
import * as i69 from "@shared/components/nav-tree.component";
import * as i70 from "@shared/components/led-light.component";
import * as i71 from "@shared/components/markdown-editor.component";
import * as i72 from "@shared/pipe/nospace.pipe";
import * as i73 from "@shared/pipe/milliseconds-to-time-string.pipe";
import * as i74 from "@shared/pipe/enum-to-array.pipe";
import * as i75 from "@shared/pipe/highlight.pipe";
import * as i76 from "@shared/pipe/truncate.pipe";
import * as i77 from "@shared/pipe/tbJson.pipe";
import * as i78 from "@shared/pipe/file-size.pipe";
import * as i79 from "@shared/pipe/date-ago.pipe";
import * as i80 from "@shared/pipe/safe.pipe";
import * as i81 from "@shared/pipe/short-number.pipe";
import * as i82 from "@shared/pipe/selectable-columns.pipe";
import * as i83 from "@shared/pipe/keyboard-shortcut.pipe";
import * as i84 from "@shared/components/directives/tb-json-to-string.directive";
import * as i85 from "@shared/components/dialog/json-object-edit-dialog.component";
import * as i86 from "@shared/components/time/history-selector/history-selector.component";
import * as i87 from "@shared/components/entity/entity-gateway-select.component";
import * as i88 from "@shared/components/contact.component";
import * as i89 from "@shared/components/ota-package/ota-package-autocomplete.component";
import * as i90 from "@shared/components/widgets-bundle-search.component";
import * as i91 from "@shared/components/button/copy-button.component";
import * as i92 from "@shared/components/button/toggle-password.component";
import * as i93 from "@shared/components/protobuf-content.component";
import * as i94 from "@shared/components/vc/branch-autocomplete.component";
import * as i95 from "@shared/components/phone-input.component";
import * as i96 from "@shared/components/script-lang.component";
import * as i97 from "@shared/components/notification/notification.component";
import * as i98 from "@shared/components/notification/template-autocomplete.component";
import * as i99 from "@shared/components/slack-conversation-autocomplete.component";
import * as i100 from "@shared/layout/layout.directives";
import * as i101 from "@shared/components/color-picker/color-picker.component";
import * as i102 from "@angular/common";
import * as i103 from "@angular/router";
import * as i104 from "@ngx-translate/core";
import * as i105 from "@angular/material/badge";
import * as i106 from "@angular/material/button";
import * as i107 from "@angular/material/button-toggle";
import * as i108 from "@angular/material/checkbox";
import * as i109 from "@angular/material/icon";
import * as i110 from "@angular/material/card";
import * as i111 from "@angular/material/progress-bar";
import * as i112 from "@angular/material/input";
import * as i113 from "@angular/material/snack-bar";
import * as i114 from "@angular/material/sidenav";
import * as i115 from "@angular/material/toolbar";
import * as i116 from "@angular/material/menu";
import * as i117 from "@angular/material/grid-list";
import * as i118 from "@angular/material/dialog";
import * as i119 from "@angular/material/select";
import * as i120 from "@angular/material/tooltip";
import * as i121 from "@angular/material/table";
import * as i122 from "@angular/material/paginator";
import * as i123 from "@angular/material/sort";
import * as i124 from "@angular/material/progress-spinner";
import * as i125 from "@angular/material/divider";
import * as i126 from "@angular/material/tabs";
import * as i127 from "@angular/material/radio";
import * as i128 from "@angular/material/slide-toggle";
import * as i129 from "@angular/material/datepicker";
import * as i130 from "@mat-datetimepicker/core";
import * as i131 from "ngx-daterangepicker-material";
import * as i132 from "@angular/material/slider";
import * as i133 from "@angular/material/expansion";
import * as i134 from "@angular/material/stepper";
import * as i135 from "@angular/material/autocomplete";
import * as i136 from "@angular/material/chips";
import * as i137 from "@angular/material/list";
import * as i138 from "@angular/cdk/drag-drop";
import * as i139 from "angular-gridster2";
import * as i140 from "ngx-clipboard";
import * as i141 from "@angular/flex-layout";
import * as i142 from "@angular/forms";
import * as i143 from "@angular/cdk/overlay";
import * as i144 from "ngx-sharebuttons";
import * as i145 from "angular2-hotkeys";
import * as i146 from "@iplab/ngx-color-picker";
import * as i147 from "ngx-hm-carousel";
import * as i148 from "ngx-drag-drop";
import * as i149 from "@flowjs/ngx-flow";
import * as i150 from "ngx-flowchart";
import * as i151 from "ngx-markdown";
import * as i152 from "@tinymce/tinymce-angular";
export declare function MarkedOptionsFactory(markedOptionsService: MarkedOptionsService): MarkedOptionsService;
export declare class SharedModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SharedModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SharedModule, [typeof i1.FooterComponent, typeof i2.LogoComponent, typeof i3.FooterFabButtonsComponent, typeof i4.ToastDirective, typeof i5.FullscreenDirective, typeof i6.CircularProgressDirective, typeof i7.TbHotkeysDirective, typeof i8.TbAnchorComponent, typeof i9.TbPopoverComponent, typeof i10.TbStringTemplateOutletDirective, typeof i11.TbComponentOutletDirective, typeof i9.TbPopoverDirective, typeof i12.TbMarkdownComponent, typeof i13.HelpComponent, typeof i14.HelpMarkdownComponent, typeof i15.HelpPopupComponent, typeof i16.TbCheckboxComponent, typeof i4.TbSnackBarComponent, typeof i17.TbErrorComponent, typeof i18.TbCheatSheetComponent, typeof i19.BreadcrumbComponent, typeof i20.UserMenuComponent, typeof i21.TimewindowComponent, typeof i22.TimewindowPanelComponent, typeof i23.TimeintervalComponent, typeof i24.QuickTimeIntervalComponent, typeof i25.DashboardSelectComponent, typeof i26.DashboardSelectPanelComponent, typeof i27.DatetimePeriodComponent, typeof i28.DatetimeComponent, typeof i29.TimezoneSelectComponent, typeof i30.ValueInputComponent, typeof i31.DashboardAutocompleteComponent, typeof i32.DashboardStateAutocompleteComponent, typeof i33.EntitySubTypeAutocompleteComponent, typeof i34.EntitySubTypeSelectComponent, typeof i35.EntitySubTypeListComponent, typeof i36.EntityAutocompleteComponent, typeof i37.EntityListComponent, typeof i38.EntityTypeSelectComponent, typeof i39.EntitySelectComponent, typeof i40.EntityKeysListComponent, typeof i41.EntityListSelectComponent, typeof i42.EntityTypeListComponent, typeof i43.QueueAutocompleteComponent, typeof i44.RelationTypeAutocompleteComponent, typeof i45.SocialSharePanelComponent, typeof i46.StringItemsListComponent, typeof i47.JsonObjectEditComponent, typeof i48.JsonObjectViewComponent, typeof i49.JsonContentComponent, typeof i50.JsFuncComponent, typeof i51.CssComponent, typeof i52.HtmlComponent, typeof i53.FabTriggerDirective, typeof i53.FabActionsDirective, typeof i53.FabToolbarComponent, typeof i54.WidgetsBundleSelectComponent, typeof i55.ConfirmDialogComponent, typeof i56.AlertDialogComponent, typeof i57.TodoDialogComponent, typeof i58.ColorPickerDialogComponent, typeof i59.MaterialIconsDialogComponent, typeof i60.ColorInputComponent, typeof i61.MaterialIconSelectComponent, typeof i62.NodeScriptTestDialogComponent, typeof i63.JsonFormComponent, typeof i64.ImageInputComponent, typeof i65.MultipleImageInputComponent, typeof i66.FileInputComponent, typeof i67.MessageTypeAutocompleteComponent, typeof i68.KeyValMapComponent, typeof i69.NavTreeComponent, typeof i70.LedLightComponent, typeof i71.MarkdownEditorComponent, typeof i72.NospacePipe, typeof i73.MillisecondsToTimeStringPipe, typeof i74.EnumToArrayPipe, typeof i75.HighlightPipe, typeof i76.TruncatePipe, typeof i77.TbJsonPipe, typeof i78.FileSizePipe, typeof i79.DateAgoPipe, typeof i80.SafePipe, typeof i81.ShortNumberPipe, typeof i82.SelectableColumnsPipe, typeof i83.KeyboardShortcutPipe, typeof i84.TbJsonToStringDirective, typeof i85.JsonObjectEditDialogComponent, typeof i86.HistorySelectorComponent, typeof i87.EntityGatewaySelectComponent, typeof i88.ContactComponent, typeof i89.OtaPackageAutocompleteComponent, typeof i90.WidgetsBundleSearchComponent, typeof i91.CopyButtonComponent, typeof i92.TogglePasswordComponent, typeof i93.ProtobufContentComponent, typeof i94.BranchAutocompleteComponent, typeof i95.PhoneInputComponent, typeof i96.TbScriptLangComponent, typeof i97.NotificationComponent, typeof i98.TemplateAutocompleteComponent, typeof i99.SlackConversationAutocompleteComponent, typeof i100.MdLgLayoutDirective, typeof i100.MdLgLayoutAlignDirective, typeof i100.MdLgLayoutGapDirective, typeof i100.MdLgShowHideDirective, typeof i100.GtMdLgLayoutDirective, typeof i100.GtMdLgLayoutAlignDirective, typeof i100.GtMdLgLayoutGapDirective, typeof i100.GtMdLgShowHideDirective, typeof i101.ColorPickerComponent], [typeof i102.CommonModule, typeof i103.RouterModule, typeof i104.TranslateModule, typeof i105.MatBadgeModule, typeof i106.MatButtonModule, typeof i107.MatButtonToggleModule, typeof i108.MatCheckboxModule, typeof i109.MatIconModule, typeof i110.MatCardModule, typeof i111.MatProgressBarModule, typeof i112.MatInputModule, typeof i113.MatSnackBarModule, typeof i114.MatSidenavModule, typeof i115.MatToolbarModule, typeof i116.MatMenuModule, typeof i117.MatGridListModule, typeof i118.MatDialogModule, typeof i119.MatSelectModule, typeof i120.MatTooltipModule, typeof i121.MatTableModule, typeof i122.MatPaginatorModule, typeof i123.MatSortModule, typeof i124.MatProgressSpinnerModule, typeof i125.MatDividerModule, typeof i126.MatTabsModule, typeof i127.MatRadioModule, typeof i128.MatSlideToggleModule, typeof i129.MatDatepickerModule, typeof i130.MatNativeDatetimeModule, typeof i130.MatDatetimepickerModule, typeof i131.NgxDaterangepickerMd, typeof i132.MatSliderModule, typeof i133.MatExpansionModule, typeof i134.MatStepperModule, typeof i135.MatAutocompleteModule, typeof i136.MatChipsModule, typeof i137.MatListModule, typeof i138.DragDropModule, typeof i139.GridsterModule, typeof i140.ClipboardModule, typeof i141.FlexLayoutModule, typeof i142.FormsModule, typeof i142.ReactiveFormsModule, typeof i143.OverlayModule, typeof i144.ShareModule, typeof i145.HotkeyModule, typeof i146.ColorPickerModule, typeof i147.NgxHmCarouselModule, typeof i148.DndModule, typeof i149.NgxFlowModule, typeof i150.NgxFlowchartModule, typeof i151.MarkdownModule], [typeof i1.FooterComponent, typeof i2.LogoComponent, typeof i3.FooterFabButtonsComponent, typeof i4.ToastDirective, typeof i5.FullscreenDirective, typeof i6.CircularProgressDirective, typeof i7.TbHotkeysDirective, typeof i8.TbAnchorComponent, typeof i10.TbStringTemplateOutletDirective, typeof i11.TbComponentOutletDirective, typeof i9.TbPopoverDirective, typeof i12.TbMarkdownComponent, typeof i13.HelpComponent, typeof i14.HelpMarkdownComponent, typeof i15.HelpPopupComponent, typeof i16.TbCheckboxComponent, typeof i17.TbErrorComponent, typeof i18.TbCheatSheetComponent, typeof i19.BreadcrumbComponent, typeof i20.UserMenuComponent, typeof i21.TimewindowComponent, typeof i22.TimewindowPanelComponent, typeof i23.TimeintervalComponent, typeof i24.QuickTimeIntervalComponent, typeof i25.DashboardSelectComponent, typeof i27.DatetimePeriodComponent, typeof i28.DatetimeComponent, typeof i29.TimezoneSelectComponent, typeof i31.DashboardAutocompleteComponent, typeof i32.DashboardStateAutocompleteComponent, typeof i33.EntitySubTypeAutocompleteComponent, typeof i34.EntitySubTypeSelectComponent, typeof i35.EntitySubTypeListComponent, typeof i36.EntityAutocompleteComponent, typeof i37.EntityListComponent, typeof i38.EntityTypeSelectComponent, typeof i39.EntitySelectComponent, typeof i40.EntityKeysListComponent, typeof i41.EntityListSelectComponent, typeof i42.EntityTypeListComponent, typeof i43.QueueAutocompleteComponent, typeof i44.RelationTypeAutocompleteComponent, typeof i45.SocialSharePanelComponent, typeof i46.StringItemsListComponent, typeof i47.JsonObjectEditComponent, typeof i48.JsonObjectViewComponent, typeof i49.JsonContentComponent, typeof i50.JsFuncComponent, typeof i51.CssComponent, typeof i52.HtmlComponent, typeof i53.FabTriggerDirective, typeof i53.FabActionsDirective, typeof i84.TbJsonToStringDirective, typeof i53.FabToolbarComponent, typeof i54.WidgetsBundleSelectComponent, typeof i30.ValueInputComponent, typeof i105.MatBadgeModule, typeof i106.MatButtonModule, typeof i107.MatButtonToggleModule, typeof i108.MatCheckboxModule, typeof i109.MatIconModule, typeof i110.MatCardModule, typeof i111.MatProgressBarModule, typeof i112.MatInputModule, typeof i113.MatSnackBarModule, typeof i114.MatSidenavModule, typeof i115.MatToolbarModule, typeof i116.MatMenuModule, typeof i117.MatGridListModule, typeof i118.MatDialogModule, typeof i119.MatSelectModule, typeof i120.MatTooltipModule, typeof i121.MatTableModule, typeof i122.MatPaginatorModule, typeof i123.MatSortModule, typeof i124.MatProgressSpinnerModule, typeof i125.MatDividerModule, typeof i126.MatTabsModule, typeof i127.MatRadioModule, typeof i128.MatSlideToggleModule, typeof i129.MatDatepickerModule, typeof i130.MatNativeDatetimeModule, typeof i130.MatDatetimepickerModule, typeof i131.NgxDaterangepickerMd, typeof i132.MatSliderModule, typeof i133.MatExpansionModule, typeof i134.MatStepperModule, typeof i135.MatAutocompleteModule, typeof i136.MatChipsModule, typeof i137.MatListModule, typeof i138.DragDropModule, typeof i139.GridsterModule, typeof i140.ClipboardModule, typeof i141.FlexLayoutModule, typeof i142.FormsModule, typeof i142.ReactiveFormsModule, typeof i143.OverlayModule, typeof i144.ShareModule, typeof i145.HotkeyModule, typeof i146.ColorPickerModule, typeof i147.NgxHmCarouselModule, typeof i152.EditorModule, typeof i148.DndModule, typeof i150.NgxFlowchartModule, typeof i151.MarkdownModule, typeof i55.ConfirmDialogComponent, typeof i56.AlertDialogComponent, typeof i57.TodoDialogComponent, typeof i58.ColorPickerDialogComponent, typeof i59.MaterialIconsDialogComponent, typeof i60.ColorInputComponent, typeof i61.MaterialIconSelectComponent, typeof i62.NodeScriptTestDialogComponent, typeof i63.JsonFormComponent, typeof i64.ImageInputComponent, typeof i65.MultipleImageInputComponent, typeof i66.FileInputComponent, typeof i67.MessageTypeAutocompleteComponent, typeof i68.KeyValMapComponent, typeof i69.NavTreeComponent, typeof i70.LedLightComponent, typeof i71.MarkdownEditorComponent, typeof i72.NospacePipe, typeof i73.MillisecondsToTimeStringPipe, typeof i74.EnumToArrayPipe, typeof i75.HighlightPipe, typeof i76.TruncatePipe, typeof i77.TbJsonPipe, typeof i83.KeyboardShortcutPipe, typeof i78.FileSizePipe, typeof i79.DateAgoPipe, typeof i80.SafePipe, typeof i81.ShortNumberPipe, typeof i82.SelectableColumnsPipe, typeof i103.RouterModule, typeof i104.TranslateModule, typeof i85.JsonObjectEditDialogComponent, typeof i86.HistorySelectorComponent, typeof i87.EntityGatewaySelectComponent, typeof i88.ContactComponent, typeof i89.OtaPackageAutocompleteComponent, typeof i90.WidgetsBundleSearchComponent, typeof i91.CopyButtonComponent, typeof i92.TogglePasswordComponent, typeof i93.ProtobufContentComponent, typeof i94.BranchAutocompleteComponent, typeof i95.PhoneInputComponent, typeof i96.TbScriptLangComponent, typeof i97.NotificationComponent, typeof i98.TemplateAutocompleteComponent, typeof i99.SlackConversationAutocompleteComponent, typeof i100.MdLgLayoutDirective, typeof i100.MdLgLayoutAlignDirective, typeof i100.MdLgLayoutGapDirective, typeof i100.MdLgShowHideDirective, typeof i100.GtMdLgLayoutDirective, typeof i100.GtMdLgLayoutAlignDirective, typeof i100.GtMdLgLayoutGapDirective, typeof i100.GtMdLgShowHideDirective, typeof i101.ColorPickerComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SharedModule>;
}
