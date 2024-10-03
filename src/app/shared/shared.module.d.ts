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
import * as i23 from "@shared/components/time/timewindow-config-dialog.component";
import * as i24 from "@shared/components/time/timeinterval.component";
import * as i25 from "@shared/components/time/timezone.component";
import * as i26 from "@shared/components/time/timezone-panel.component";
import * as i27 from "@shared/components/time/quick-time-interval.component";
import * as i28 from "@shared/components/time/datapoints-limit.component";
import * as i29 from "@shared/components/dashboard-select.component";
import * as i30 from "@shared/components/dashboard-select-panel.component";
import * as i31 from "@shared/components/time/datetime-period.component";
import * as i32 from "@shared/components/time/datetime.component";
import * as i33 from "@shared/components/time/timezone-select.component";
import * as i34 from "@shared/components/value-input.component";
import * as i35 from "@shared/components/dashboard-autocomplete.component";
import * as i36 from "@shared/components/dashboard-state-autocomplete.component";
import * as i37 from "@shared/components/entity/entity-subtype-autocomplete.component";
import * as i38 from "@shared/components/entity/entity-subtype-select.component";
import * as i39 from "@shared/components/entity/entity-subtype-list.component";
import * as i40 from "@shared/components/entity/entity-autocomplete.component";
import * as i41 from "@shared/components/entity/entity-list.component";
import * as i42 from "@shared/components/entity/entity-type-select.component";
import * as i43 from "@shared/components/entity/entity-select.component";
import * as i44 from "@shared/components/entity/entity-keys-list.component";
import * as i45 from "@shared/components/entity/entity-list-select.component";
import * as i46 from "@shared/components/entity/entity-type-list.component";
import * as i47 from "@shared/components/queue/queue-autocomplete.component";
import * as i48 from "@shared/components/relation/relation-type-autocomplete.component";
import * as i49 from "@shared/components/socialshare-panel.component";
import * as i50 from "@shared/components/string-items-list.component";
import * as i51 from "@shared/components/json-object-edit.component";
import * as i52 from "@shared/components/json-object-view.component";
import * as i53 from "@shared/components/json-content.component";
import * as i54 from "@shared/components/js-func.component";
import * as i55 from "@shared/components/css.component";
import * as i56 from "@shared/components/html.component";
import * as i57 from "@shared/components/svg-xml.component";
import * as i58 from "@shared/components/fab-toolbar.component";
import * as i59 from "@shared/components/widgets-bundle-select.component";
import * as i60 from "@shared/components/dialog/confirm-dialog.component";
import * as i61 from "@shared/components/dialog/alert-dialog.component";
import * as i62 from "@shared/components/dialog/error-alert-dialog.component";
import * as i63 from "@shared/components/dialog/todo-dialog.component";
import * as i64 from "@shared/components/dialog/color-picker-dialog.component";
import * as i65 from "@shared/components/dialog/material-icons-dialog.component";
import * as i66 from "@shared/components/color-input.component";
import * as i67 from "@shared/components/material-icon-select.component";
import * as i68 from "@shared/components/dialog/node-script-test-dialog.component";
import * as i69 from "@shared/components/json-form/json-form.component";
import * as i70 from "@shared/components/image-input.component";
import * as i71 from "@shared/components/multiple-image-input.component";
import * as i72 from "@shared/components/file-input.component";
import * as i73 from "@shared/components/message-type-autocomplete.component";
import * as i74 from "@shared/components/kv-map.component";
import * as i75 from "@shared/components/nav-tree.component";
import * as i76 from "@shared/components/led-light.component";
import * as i77 from "@shared/components/markdown-editor.component";
import * as i78 from "@shared/directives/truncate-with-tooltip.directive";
import * as i79 from "@shared/directives/context-menu.directive";
import * as i80 from "@shared/pipe/nospace.pipe";
import * as i81 from "@shared/pipe/milliseconds-to-time-string.pipe";
import * as i82 from "@shared/pipe/enum-to-array.pipe";
import * as i83 from "@shared/pipe/highlight.pipe";
import * as i84 from "@shared/pipe/truncate.pipe";
import * as i85 from "@shared/pipe/tbJson.pipe";
import * as i86 from "@shared/pipe/file-size.pipe";
import * as i87 from "@shared/pipe/date-ago.pipe";
import * as i88 from "@shared/pipe/image.pipe";
import * as i89 from "@shared/pipe/custom-translate.pipe";
import * as i90 from "@shared/pipe/safe.pipe";
import * as i91 from "@shared/pipe/short-number.pipe";
import * as i92 from "@shared/pipe/selectable-columns.pipe";
import * as i93 from "@shared/pipe/keyboard-shortcut.pipe";
import * as i94 from "@shared/components/directives/tb-json-to-string.directive";
import * as i95 from "@shared/components/dialog/json-object-edit-dialog.component";
import * as i96 from "@shared/components/time/history-selector/history-selector.component";
import * as i97 from "@shared/components/entity/entity-gateway-select.component";
import * as i98 from "@shared/components/contact.component";
import * as i99 from "@shared/components/ota-package/ota-package-autocomplete.component";
import * as i100 from "@shared/components/widgets-bundle-search.component";
import * as i101 from "@shared/components/button/copy-button.component";
import * as i102 from "@shared/components/button/toggle-password.component";
import * as i103 from "@shared/components/protobuf-content.component";
import * as i104 from "@shared/components/vc/branch-autocomplete.component";
import * as i105 from "@shared/components/country-autocomplete.component";
import * as i106 from "@shared/components/phone-input.component";
import * as i107 from "@shared/components/script-lang.component";
import * as i108 from "@shared/components/notification/notification.component";
import * as i109 from "@shared/components/notification/template-autocomplete.component";
import * as i110 from "@shared/components/slack-conversation-autocomplete.component";
import * as i111 from "@shared/layout/layout.directives";
import * as i112 from "@shared/components/color-picker/color-picker.component";
import * as i113 from "@shared/components/color-picker/color-picker-panel.component";
import * as i114 from "@shared/components/resource/resource-autocomplete.component";
import * as i115 from "@shared/components/toggle-header.component";
import * as i116 from "@shared/components/toggle-select.component";
import * as i117 from "@shared/components/unit-input.component";
import * as i118 from "@shared/components/string-autocomplete.component";
import * as i119 from "@shared/components/material-icons.component";
import * as i120 from "@shared/components/rule-chain/rule-chain-select.component";
import * as i121 from "@shared/components/rule-chain/rule-chain-select-panel.component";
import * as i122 from "@shared/components/icon.component";
import * as i123 from "@shared/components/hint-tooltip-icon.component";
import * as i124 from "@shared/import-export/import-dialog.component";
import * as i125 from "@shared/import-export/import-dialog-csv.component";
import * as i126 from "@shared/import-export/export-widgets-bundle-dialog.component";
import * as i127 from "@shared/import-export/table-columns-assignment.component";
import * as i128 from "@shared/components/grid/scroll-grid.component";
import * as i129 from "@shared/components/image/image-gallery.component";
import * as i130 from "@shared/components/image/upload-image-dialog.component";
import * as i131 from "@shared/components/image/image-dialog.component";
import * as i132 from "@shared/components/image/image-references.component";
import * as i133 from "@shared/components/image/images-in-use-dialog.component";
import * as i134 from "@shared/components/image/gallery-image-input.component";
import * as i135 from "@shared/components/image/multiple-gallery-image-input.component";
import * as i136 from "@shared/components/image/embed-image-dialog.component";
import * as i137 from "@shared/components/image/image-gallery-dialog.component";
import * as i138 from "@shared/components/button/widget-button.component";
import * as i139 from "@shared/components/color-picker/hex-input.component";
import * as i140 from "@shared/components/image/scada-symbol-input.component";
import * as i141 from "@angular/common";
import * as i142 from "@angular/router";
import * as i143 from "@ngx-translate/core";
import * as i144 from "@angular/material/badge";
import * as i145 from "@angular/material/button";
import * as i146 from "@angular/material/button-toggle";
import * as i147 from "@angular/material/checkbox";
import * as i148 from "@angular/material/icon";
import * as i149 from "@angular/material/card";
import * as i150 from "@angular/material/progress-bar";
import * as i151 from "@angular/material/input";
import * as i152 from "@angular/material/snack-bar";
import * as i153 from "@angular/material/sidenav";
import * as i154 from "@angular/material/toolbar";
import * as i155 from "@angular/material/menu";
import * as i156 from "@angular/material/grid-list";
import * as i157 from "@angular/material/dialog";
import * as i158 from "@angular/material/select";
import * as i159 from "@angular/material/tooltip";
import * as i160 from "@angular/material/table";
import * as i161 from "@angular/material/paginator";
import * as i162 from "@angular/material/sort";
import * as i163 from "@angular/material/progress-spinner";
import * as i164 from "@angular/material/divider";
import * as i165 from "@angular/material/tabs";
import * as i166 from "@angular/material/radio";
import * as i167 from "@angular/material/slide-toggle";
import * as i168 from "@angular/material/datepicker";
import * as i169 from "@mat-datetimepicker/core";
import * as i170 from "ngx-daterangepicker-material";
import * as i171 from "@angular/material/slider";
import * as i172 from "@angular/material/expansion";
import * as i173 from "@angular/material/stepper";
import * as i174 from "@angular/material/autocomplete";
import * as i175 from "@angular/material/chips";
import * as i176 from "@angular/material/list";
import * as i177 from "@angular/cdk/drag-drop";
import * as i178 from "angular-gridster2";
import * as i179 from "ngx-clipboard";
import * as i180 from "@angular/flex-layout";
import * as i181 from "@angular/forms";
import * as i182 from "@angular/cdk/overlay";
import * as i183 from "ngx-sharebuttons";
import * as i184 from "angular2-hotkeys";
import * as i185 from "@iplab/ngx-color-picker";
import * as i186 from "ngx-hm-carousel";
import * as i187 from "ngx-drag-drop";
import * as i188 from "@flowjs/ngx-flow";
import * as i189 from "ngx-flowchart";
import * as i190 from "ngx-markdown";
import * as i191 from "@tinymce/tinymce-angular";
export declare function MarkedOptionsFactory(markedOptionsService: MarkedOptionsService): MarkedOptionsService;
export declare class SharedModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SharedModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SharedModule, [typeof i1.FooterComponent, typeof i2.LogoComponent, typeof i3.FooterFabButtonsComponent, typeof i4.ToastDirective, typeof i5.FullscreenDirective, typeof i6.CircularProgressDirective, typeof i7.TbHotkeysDirective, typeof i8.TbAnchorComponent, typeof i9.TbPopoverComponent, typeof i10.TbStringTemplateOutletDirective, typeof i11.TbComponentOutletDirective, typeof i9.TbPopoverDirective, typeof i12.TbMarkdownComponent, typeof i13.HelpComponent, typeof i14.HelpMarkdownComponent, typeof i15.HelpPopupComponent, typeof i16.TbCheckboxComponent, typeof i4.TbSnackBarComponent, typeof i17.TbErrorComponent, typeof i18.TbCheatSheetComponent, typeof i19.BreadcrumbComponent, typeof i20.UserMenuComponent, typeof i21.TimewindowComponent, typeof i22.TimewindowPanelComponent, typeof i23.TimewindowConfigDialogComponent, typeof i24.TimeintervalComponent, typeof i25.TimezoneComponent, typeof i26.TimezonePanelComponent, typeof i27.QuickTimeIntervalComponent, typeof i28.DatapointsLimitComponent, typeof i29.DashboardSelectComponent, typeof i30.DashboardSelectPanelComponent, typeof i31.DatetimePeriodComponent, typeof i32.DatetimeComponent, typeof i33.TimezoneSelectComponent, typeof i34.ValueInputComponent, typeof i35.DashboardAutocompleteComponent, typeof i36.DashboardStateAutocompleteComponent, typeof i37.EntitySubTypeAutocompleteComponent, typeof i38.EntitySubTypeSelectComponent, typeof i39.EntitySubTypeListComponent, typeof i40.EntityAutocompleteComponent, typeof i41.EntityListComponent, typeof i42.EntityTypeSelectComponent, typeof i43.EntitySelectComponent, typeof i44.EntityKeysListComponent, typeof i45.EntityListSelectComponent, typeof i46.EntityTypeListComponent, typeof i47.QueueAutocompleteComponent, typeof i48.RelationTypeAutocompleteComponent, typeof i49.SocialSharePanelComponent, typeof i50.StringItemsListComponent, typeof i51.JsonObjectEditComponent, typeof i52.JsonObjectViewComponent, typeof i53.JsonContentComponent, typeof i54.JsFuncComponent, typeof i55.CssComponent, typeof i56.HtmlComponent, typeof i57.SvgXmlComponent, typeof i58.FabTriggerDirective, typeof i58.FabActionsDirective, typeof i58.FabToolbarComponent, typeof i59.WidgetsBundleSelectComponent, typeof i60.ConfirmDialogComponent, typeof i61.AlertDialogComponent, typeof i62.ErrorAlertDialogComponent, typeof i63.TodoDialogComponent, typeof i64.ColorPickerDialogComponent, typeof i65.MaterialIconsDialogComponent, typeof i66.ColorInputComponent, typeof i67.MaterialIconSelectComponent, typeof i68.NodeScriptTestDialogComponent, typeof i69.JsonFormComponent, typeof i70.ImageInputComponent, typeof i71.MultipleImageInputComponent, typeof i72.FileInputComponent, typeof i73.MessageTypeAutocompleteComponent, typeof i74.KeyValMapComponent, typeof i75.NavTreeComponent, typeof i76.LedLightComponent, typeof i77.MarkdownEditorComponent, typeof i78.TruncateWithTooltipDirective, typeof i79.ContextMenuDirective, typeof i80.NospacePipe, typeof i81.MillisecondsToTimeStringPipe, typeof i82.EnumToArrayPipe, typeof i83.HighlightPipe, typeof i84.TruncatePipe, typeof i85.TbJsonPipe, typeof i86.FileSizePipe, typeof i87.DateAgoPipe, typeof i88.ImagePipe, typeof i89.CustomTranslatePipe, typeof i90.SafePipe, typeof i91.ShortNumberPipe, typeof i92.SelectableColumnsPipe, typeof i93.KeyboardShortcutPipe, typeof i94.TbJsonToStringDirective, typeof i95.JsonObjectEditDialogComponent, typeof i96.HistorySelectorComponent, typeof i97.EntityGatewaySelectComponent, typeof i98.ContactComponent, typeof i99.OtaPackageAutocompleteComponent, typeof i100.WidgetsBundleSearchComponent, typeof i101.CopyButtonComponent, typeof i102.TogglePasswordComponent, typeof i103.ProtobufContentComponent, typeof i104.BranchAutocompleteComponent, typeof i105.CountryAutocompleteComponent, typeof i106.PhoneInputComponent, typeof i107.TbScriptLangComponent, typeof i108.NotificationComponent, typeof i109.TemplateAutocompleteComponent, typeof i110.SlackConversationAutocompleteComponent, typeof i111.MdLgLayoutDirective, typeof i111.MdLgLayoutAlignDirective, typeof i111.MdLgLayoutGapDirective, typeof i111.MdLgShowHideDirective, typeof i111.GtMdLgLayoutDirective, typeof i111.GtMdLgLayoutAlignDirective, typeof i111.GtMdLgLayoutGapDirective, typeof i111.GtMdLgShowHideDirective, typeof i112.ColorPickerComponent, typeof i113.ColorPickerPanelComponent, typeof i114.ResourceAutocompleteComponent, typeof i115.ToggleHeaderComponent, typeof i115.ToggleOption, typeof i116.ToggleSelectComponent, typeof i117.UnitInputComponent, typeof i118.StringAutocompleteComponent, typeof i119.MaterialIconsComponent, typeof i120.RuleChainSelectComponent, typeof i121.RuleChainSelectPanelComponent, typeof i122.TbIconComponent, typeof i123.HintTooltipIconComponent, typeof i124.ImportDialogComponent, typeof i125.ImportDialogCsvComponent, typeof i126.ExportWidgetsBundleDialogComponent, typeof i127.TableColumnsAssignmentComponent, typeof i128.ScrollGridComponent, typeof i129.ImageGalleryComponent, typeof i130.UploadImageDialogComponent, typeof i131.ImageDialogComponent, typeof i132.ImageReferencesComponent, typeof i133.ImagesInUseDialogComponent, typeof i134.GalleryImageInputComponent, typeof i135.MultipleGalleryImageInputComponent, typeof i136.EmbedImageDialogComponent, typeof i137.ImageGalleryDialogComponent, typeof i138.WidgetButtonComponent, typeof i139.HexInputComponent, typeof i140.ScadaSymbolInputComponent], [typeof i141.CommonModule, typeof i142.RouterModule, typeof i143.TranslateModule, typeof i144.MatBadgeModule, typeof i145.MatButtonModule, typeof i146.MatButtonToggleModule, typeof i147.MatCheckboxModule, typeof i148.MatIconModule, typeof i149.MatCardModule, typeof i150.MatProgressBarModule, typeof i151.MatInputModule, typeof i152.MatSnackBarModule, typeof i153.MatSidenavModule, typeof i154.MatToolbarModule, typeof i155.MatMenuModule, typeof i156.MatGridListModule, typeof i157.MatDialogModule, typeof i158.MatSelectModule, typeof i159.MatTooltipModule, typeof i160.MatTableModule, typeof i161.MatPaginatorModule, typeof i162.MatSortModule, typeof i163.MatProgressSpinnerModule, typeof i164.MatDividerModule, typeof i165.MatTabsModule, typeof i166.MatRadioModule, typeof i167.MatSlideToggleModule, typeof i168.MatDatepickerModule, typeof i169.MatNativeDatetimeModule, typeof i169.MatDatetimepickerModule, typeof i170.NgxDaterangepickerMd, typeof i171.MatSliderModule, typeof i172.MatExpansionModule, typeof i173.MatStepperModule, typeof i174.MatAutocompleteModule, typeof i175.MatChipsModule, typeof i176.MatListModule, typeof i177.DragDropModule, typeof i178.GridsterModule, typeof i179.ClipboardModule, typeof i180.FlexLayoutModule, typeof i181.FormsModule, typeof i181.ReactiveFormsModule, typeof i182.OverlayModule, typeof i183.ShareModule, typeof i184.HotkeyModule, typeof i185.ColorPickerModule, typeof i186.NgxHmCarouselModule, typeof i187.DndModule, typeof i188.NgxFlowModule, typeof i189.NgxFlowchartModule, typeof i190.MarkdownModule], [typeof i1.FooterComponent, typeof i2.LogoComponent, typeof i3.FooterFabButtonsComponent, typeof i4.ToastDirective, typeof i5.FullscreenDirective, typeof i6.CircularProgressDirective, typeof i7.TbHotkeysDirective, typeof i8.TbAnchorComponent, typeof i10.TbStringTemplateOutletDirective, typeof i11.TbComponentOutletDirective, typeof i9.TbPopoverDirective, typeof i12.TbMarkdownComponent, typeof i13.HelpComponent, typeof i14.HelpMarkdownComponent, typeof i15.HelpPopupComponent, typeof i16.TbCheckboxComponent, typeof i17.TbErrorComponent, typeof i18.TbCheatSheetComponent, typeof i19.BreadcrumbComponent, typeof i20.UserMenuComponent, typeof i21.TimewindowComponent, typeof i22.TimewindowPanelComponent, typeof i23.TimewindowConfigDialogComponent, typeof i24.TimeintervalComponent, typeof i25.TimezoneComponent, typeof i26.TimezonePanelComponent, typeof i27.QuickTimeIntervalComponent, typeof i28.DatapointsLimitComponent, typeof i29.DashboardSelectComponent, typeof i31.DatetimePeriodComponent, typeof i32.DatetimeComponent, typeof i33.TimezoneSelectComponent, typeof i35.DashboardAutocompleteComponent, typeof i36.DashboardStateAutocompleteComponent, typeof i37.EntitySubTypeAutocompleteComponent, typeof i38.EntitySubTypeSelectComponent, typeof i39.EntitySubTypeListComponent, typeof i40.EntityAutocompleteComponent, typeof i41.EntityListComponent, typeof i42.EntityTypeSelectComponent, typeof i43.EntitySelectComponent, typeof i44.EntityKeysListComponent, typeof i45.EntityListSelectComponent, typeof i46.EntityTypeListComponent, typeof i47.QueueAutocompleteComponent, typeof i48.RelationTypeAutocompleteComponent, typeof i49.SocialSharePanelComponent, typeof i50.StringItemsListComponent, typeof i51.JsonObjectEditComponent, typeof i52.JsonObjectViewComponent, typeof i53.JsonContentComponent, typeof i54.JsFuncComponent, typeof i55.CssComponent, typeof i56.HtmlComponent, typeof i57.SvgXmlComponent, typeof i58.FabTriggerDirective, typeof i58.FabActionsDirective, typeof i94.TbJsonToStringDirective, typeof i58.FabToolbarComponent, typeof i59.WidgetsBundleSelectComponent, typeof i34.ValueInputComponent, typeof i144.MatBadgeModule, typeof i145.MatButtonModule, typeof i146.MatButtonToggleModule, typeof i147.MatCheckboxModule, typeof i148.MatIconModule, typeof i149.MatCardModule, typeof i150.MatProgressBarModule, typeof i151.MatInputModule, typeof i152.MatSnackBarModule, typeof i153.MatSidenavModule, typeof i154.MatToolbarModule, typeof i155.MatMenuModule, typeof i156.MatGridListModule, typeof i157.MatDialogModule, typeof i158.MatSelectModule, typeof i159.MatTooltipModule, typeof i160.MatTableModule, typeof i161.MatPaginatorModule, typeof i162.MatSortModule, typeof i163.MatProgressSpinnerModule, typeof i164.MatDividerModule, typeof i165.MatTabsModule, typeof i166.MatRadioModule, typeof i167.MatSlideToggleModule, typeof i168.MatDatepickerModule, typeof i169.MatNativeDatetimeModule, typeof i169.MatDatetimepickerModule, typeof i170.NgxDaterangepickerMd, typeof i171.MatSliderModule, typeof i172.MatExpansionModule, typeof i173.MatStepperModule, typeof i174.MatAutocompleteModule, typeof i175.MatChipsModule, typeof i176.MatListModule, typeof i177.DragDropModule, typeof i178.GridsterModule, typeof i179.ClipboardModule, typeof i180.FlexLayoutModule, typeof i181.FormsModule, typeof i181.ReactiveFormsModule, typeof i182.OverlayModule, typeof i183.ShareModule, typeof i184.HotkeyModule, typeof i185.ColorPickerModule, typeof i186.NgxHmCarouselModule, typeof i191.EditorModule, typeof i187.DndModule, typeof i189.NgxFlowchartModule, typeof i190.MarkdownModule, typeof i60.ConfirmDialogComponent, typeof i61.AlertDialogComponent, typeof i62.ErrorAlertDialogComponent, typeof i63.TodoDialogComponent, typeof i64.ColorPickerDialogComponent, typeof i65.MaterialIconsDialogComponent, typeof i66.ColorInputComponent, typeof i67.MaterialIconSelectComponent, typeof i68.NodeScriptTestDialogComponent, typeof i69.JsonFormComponent, typeof i70.ImageInputComponent, typeof i71.MultipleImageInputComponent, typeof i72.FileInputComponent, typeof i73.MessageTypeAutocompleteComponent, typeof i74.KeyValMapComponent, typeof i75.NavTreeComponent, typeof i76.LedLightComponent, typeof i77.MarkdownEditorComponent, typeof i78.TruncateWithTooltipDirective, typeof i79.ContextMenuDirective, typeof i80.NospacePipe, typeof i81.MillisecondsToTimeStringPipe, typeof i82.EnumToArrayPipe, typeof i83.HighlightPipe, typeof i84.TruncatePipe, typeof i85.TbJsonPipe, typeof i93.KeyboardShortcutPipe, typeof i86.FileSizePipe, typeof i87.DateAgoPipe, typeof i88.ImagePipe, typeof i89.CustomTranslatePipe, typeof i90.SafePipe, typeof i91.ShortNumberPipe, typeof i92.SelectableColumnsPipe, typeof i142.RouterModule, typeof i143.TranslateModule, typeof i95.JsonObjectEditDialogComponent, typeof i96.HistorySelectorComponent, typeof i97.EntityGatewaySelectComponent, typeof i98.ContactComponent, typeof i99.OtaPackageAutocompleteComponent, typeof i100.WidgetsBundleSearchComponent, typeof i101.CopyButtonComponent, typeof i102.TogglePasswordComponent, typeof i103.ProtobufContentComponent, typeof i104.BranchAutocompleteComponent, typeof i105.CountryAutocompleteComponent, typeof i106.PhoneInputComponent, typeof i107.TbScriptLangComponent, typeof i108.NotificationComponent, typeof i109.TemplateAutocompleteComponent, typeof i110.SlackConversationAutocompleteComponent, typeof i111.MdLgLayoutDirective, typeof i111.MdLgLayoutAlignDirective, typeof i111.MdLgLayoutGapDirective, typeof i111.MdLgShowHideDirective, typeof i111.GtMdLgLayoutDirective, typeof i111.GtMdLgLayoutAlignDirective, typeof i111.GtMdLgLayoutGapDirective, typeof i111.GtMdLgShowHideDirective, typeof i112.ColorPickerComponent, typeof i113.ColorPickerPanelComponent, typeof i114.ResourceAutocompleteComponent, typeof i115.ToggleHeaderComponent, typeof i115.ToggleOption, typeof i116.ToggleSelectComponent, typeof i117.UnitInputComponent, typeof i118.StringAutocompleteComponent, typeof i119.MaterialIconsComponent, typeof i120.RuleChainSelectComponent, typeof i121.RuleChainSelectPanelComponent, typeof i122.TbIconComponent, typeof i123.HintTooltipIconComponent, typeof i124.ImportDialogComponent, typeof i125.ImportDialogCsvComponent, typeof i126.ExportWidgetsBundleDialogComponent, typeof i127.TableColumnsAssignmentComponent, typeof i128.ScrollGridComponent, typeof i129.ImageGalleryComponent, typeof i130.UploadImageDialogComponent, typeof i131.ImageDialogComponent, typeof i132.ImageReferencesComponent, typeof i133.ImagesInUseDialogComponent, typeof i134.GalleryImageInputComponent, typeof i135.MultipleGalleryImageInputComponent, typeof i136.EmbedImageDialogComponent, typeof i137.ImageGalleryDialogComponent, typeof i138.WidgetButtonComponent, typeof i140.ScadaSymbolInputComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SharedModule>;
}
