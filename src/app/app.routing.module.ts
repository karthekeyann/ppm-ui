/**
 * App routing module class
 */
import { ExcelStyleSettingsComponent } from './excel-style-settings/excel-style-settings.component';
import { ExportPcdComponent } from './export-pcd/export-pcd.component';
import { ImportPcdComponent } from './import-pcd/import-pcd.component';
import { ScheduleExportCopyComponent } from './schedule-export/schedule-export-copy/schedule-export-copy.component';
import { ScheduleExportCreateComponent } from './schedule-export/schedule-export-create/schedule-export-create.component';
import { ScheduleExportEditComponent } from './schedule-export/schedule-export-edit/schedule-export-edit.component';
import { ScheduleExportViewComponent } from './schedule-export/schedule-export-view/schedule-export-view.component';
import { ScheduleExportListComponent } from './schedule-export/schedule-export-list/schedule-export-list.component';
import { ScheduleImportCopyComponent } from './schedule-import/schedule-import-copy/schedule-import-copy.component';
import { ScheduleImportCreateComponent } from './schedule-import/schedule-import-create/schedule-import-create.component';
import { ScheduleImportEditComponent } from './schedule-import/schedule-import-edit/schedule-import-edit.component';
import { ScheduleImportViewComponent } from './schedule-import/schedule-import-view/schedule-import-view.component';
import { ScheduleImportListComponent } from './schedule-import/schedule-import-list/schedule-import-list.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportCompletedComponent } from './import-completed/import-completed.component';
import { ImportInprogressListComponent } from './import-inprogress/import-inprogress-list/import-inprogress-list.component';
import { ImportInprogressTaskComponent } from './import-inprogress/import-inprogress-task/import-inprogress-task.component';
import { TemplatesListComponent } from './manage-template/templates-list/templates-list.component';
import { TemplateCreateComponent } from './manage-template/template-create/template-create.component';
import { TemplateViewComponent } from './manage-template/template-view/template-view.component';
import { TemplateEditComponent } from './manage-template/template-edit/template-edit.component';
import { TemplateCopyComponent } from './manage-template/template-copy/template-copy.component';
import { LoginComponent } from './login/login.component';
import { TopMenuComponent } from './top-menu/top-menu.component';


const routes: Routes = [
  { path: 'sidemenu/exportPcd', component: ExportPcdComponent },
  { path: 'sidemenu', component: SideMenuComponent },
  { path: 'importinprogress', component: ImportInprogressListComponent },
  { path: 'importcompleted', component: ImportCompletedComponent },
  { path: 'exportpcd', component: ExportPcdComponent },
  { path: 'excelStyleSettings', component: ExcelStyleSettingsComponent },
  { path: 'scheduleImport', component: ScheduleImportListComponent },
  { path: 'scheduleImport/create', component: ScheduleImportCreateComponent },
  { path: 'scheduleImport/edit/:id', component: ScheduleImportEditComponent },
  { path: 'scheduleImport/view/:id', component: ScheduleImportViewComponent },
  { path: 'scheduleImport/copy/:id', component: ScheduleImportCopyComponent },
  { path: 'scheduleExport', component: ScheduleExportListComponent },
  { path: 'scheduleExport/create', component: ScheduleExportCreateComponent },
  { path: 'scheduleExport/edit/:id', component: ScheduleExportEditComponent },
  { path: 'scheduleExport/view/:id', component: ScheduleExportViewComponent },
  { path: 'scheduleExport/copy/:id', component: ScheduleExportCopyComponent },
  { path: 'importpcd', component: ImportPcdComponent },
  { path: 'importinprogress/:id', component: ImportInprogressTaskComponent },
  { path: "templates", component: TemplatesListComponent },
  { path: "templates/create", component: TemplateCreateComponent },
  { path: "templates/view/:id", component: TemplateViewComponent },
  { path: "templates/edit/:id", component: TemplateEditComponent },
  { path: "templates/copy/:id", component: TemplateCopyComponent },
  { path: "login", component: LoginComponent },
  { path: '', component: TopMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
