import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ExportPcdComponent } from './export-pcd/export-pcd.component';
import { ExportPcdService } from './export-pcd/export-pcd.service';

import { ImportPcdComponent } from './import-pcd/import-pcd.component';
import { ImportPcdService } from './import-pcd/import-pcd-service';

import { ImportCompletedComponent } from './import-completed/import-completed.component';
import { ImportCompletedService } from './import-completed/import-completed.service';

import { ImportInprogressListComponent } from './import-inprogress/import-inprogress-list/import-inprogress-list.component';
import { ImportInprogressTaskComponent } from './import-inprogress/import-inprogress-task/import-inprogress-task.component';
import { ImportInprogressService } from './import-inprogress/import-inprogress-list/import-inprogress.service';

import { ScheduleExportCreateComponent } from './schedule-export/schedule-export-create/schedule-export-create.component';
import { ScheduleExportCopyComponent } from './schedule-export/schedule-export-copy/schedule-export-copy.component';
import { ScheduleExportEditComponent } from './schedule-export/schedule-export-edit/schedule-export-edit.component';
import { ScheduleExportViewComponent } from './schedule-export/schedule-export-view/schedule-export-view.component';
import { ScheduleExportListComponent } from './schedule-export/schedule-export-list/schedule-export-list.component';
import { ScheduleExportService } from './schedule-export/schedule-export-model/schedule-export.service';

import { ScheduleImportCreateComponent } from './schedule-import/schedule-import-create/schedule-import-create.component';
import { ScheduleImportCopyComponent } from './schedule-import/schedule-import-copy/schedule-import-copy.component';
import { ScheduleImportEditComponent } from './schedule-import/schedule-import-edit/schedule-import-edit.component';
import { ScheduleImportViewComponent } from './schedule-import/schedule-import-view/schedule-import-view.component';
import { ScheduleImportListComponent } from './schedule-import/schedule-import-list/schedule-import-list.component';
import { ScheduleImportService } from './schedule-import/schedule-import-model/schedule-import.service';

import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { PaginationComponent } from './pagination/pagination.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { exportPCDReducer } from "./store/reducers/exportPCD.reducer";

import { TemplateCreateComponent } from './manage-template/template-create/template-create.component';
import { TemplateCopyComponent } from './manage-template/template-copy/template-copy.component';
import { TemplateEditComponent } from './manage-template/template-edit/template-edit.component';
import { TemplateViewComponent } from './manage-template/template-view/template-view.component';
import { TemplatesListComponent } from './manage-template/templates-list/templates-list.component';
import { TemplateService } from './manage-template/template-model/template.service';

import { ExcelStyleSettingsComponent } from './excel-style-settings/excel-style-settings.component';

import { MyDatePickerModule } from 'mydatepicker';
import { OrderModule } from 'ngx-order-pipe';
import { ErrorHandle } from './error.handle';
import { HostNameUrl } from './hostname.url';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { SpinnerModule } from 'angular-spinners';
import { LoginService } from './login/login.service';

export function instrumentOptions() {
  return {
    monitor: useLogMonitor({ visible: true, position: 'right' })
  };
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginationComponent,
    SideMenuComponent,
    TopMenuComponent,
    ScheduleImportViewComponent,
    ScheduleImportCreateComponent,
    ScheduleImportEditComponent,
    ScheduleImportListComponent,
    ScheduleImportCopyComponent,
    ScheduleExportCreateComponent,
    ScheduleExportEditComponent,
    ScheduleExportListComponent,
    ScheduleExportCopyComponent,
    ScheduleExportViewComponent,
    ExportPcdComponent,
    ImportPcdComponent,
    ImportInprogressListComponent,
    ImportInprogressTaskComponent,
    ImportCompletedComponent,
    TemplatesListComponent,
    TemplateCreateComponent,
    TemplateEditComponent,
    TemplateViewComponent,
    TemplateCopyComponent,
    ExcelStyleSettingsComponent,
  ],

  //Todo NgbModule.forRoot()
  imports: [
    BrowserModule, 
    RouterModule, 
    AppRoutingModule, 
    FormsModule, 
    HttpModule, 
    ReactiveFormsModule,
    StoreModule.provideStore({ exportPCD: exportPCDReducer }),
     StoreDevtoolsModule.instrumentStore(instrumentOptions),
     StoreLogMonitorModule, 
     MyDatePickerModule, 
     OrderModule, NgxPaginationModule, SpinnerModule
  ],
  
  providers: [
    ScheduleImportService,
    ScheduleExportService,
    ImportInprogressService,
    ImportCompletedService,
    ImportPcdService,
    ExportPcdService,
    TemplateService,
    ErrorHandle,
    HostNameUrl,
    LoginService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
