import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';
import { AdminLoginComponent } from './components/layouts/admin-login/admin-login.component';
import { FrontLayoutComponent } from './components/layouts/front-layout/front-layout.component';
import { StudentLayoutComponent } from './components/layouts/student-layout/student-layout.component';
import { TeacherLayoutComponent } from './components/layouts/teacher-layout/teacher-layout.component';
import { AuthAdminGuard } from './guards/auth-admin.guard';

const routes: Routes = [
  {
    path: '',
    component: FrontLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/views/front/home/home.module').then(
            (m) => m.HomeModule
          ),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./components/views/front/contact/contact.module').then(
            (m) => m.ContactModule
          ),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./components/views/front/about/about.module').then(
            (m) => m.AboutModule
          ),
      },
    ],
  },
  { path: 'student', component: StudentLayoutComponent },
  { path: 'teacher', component: TeacherLayoutComponent },
  { path: 'auth-admin', component: AdminLoginComponent },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthAdminGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./components/views/admin/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./components/views/admin/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'list-students',
        loadChildren: () =>
          import('./components/views/admin/students/students.module').then(
            (m) => m.StudentsModule
          ),
      },
      {
        path: 'list-teachers',
        loadChildren: () =>
          import('./components/views/admin/teachers/teachers.module').then(
            (m) => m.TeachersModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./components/views/admin/news/news.module').then(
            (m) => m.NewsModule
          ),
      },
      {
        path: 'news',
        loadChildren: () =>
          import('./components/views/admin/news/news.module').then(
            (m) => m.NewsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
