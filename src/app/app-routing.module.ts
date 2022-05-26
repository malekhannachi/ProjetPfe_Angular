import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';
import { AdminLoginComponent } from './components/layouts/admin-login/admin-login.component';
import { FrontLayoutComponent } from './components/layouts/front-layout/front-layout.component';
import { PageInvalidComponent } from './components/layouts/page-invalid/page-invalid.component';
import { StudentLayoutComponent } from './components/layouts/student-layout/student-layout.component';
import { TeacherLayoutComponent } from './components/layouts/teacher-layout/teacher-layout.component';
import { HomeComponent } from './components/views/front/home/home/home.component';
import { AuthAdminGuard } from './guards/auth-admin.guard';
import { AuthStudentGuard } from './guards/auth-student.guard';
import { AuthTeacherGuard } from './guards/auth-teacher.guard';

const routes: Routes = [
  {
    path: 'home',   redirectTo:'',
  
  },
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
        path: 'news',
        loadChildren: () =>
          import('./components/views/front/news/news.module').then(
            (m) => m.NewsModule
          ),
      },
      {
        path: 'event',
        loadChildren: () =>
          import('./components/views/front/event/event.module').then(
            (m) => m.EventModule
          ),
      },
      {
        path: 'galary',
        loadChildren: () =>
          import('./components/views/front/galary/galary.module').then(
            (m) => m.GalaryModule
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
      {
        path: 'documents',
        loadChildren: () =>
          import('./components/views/front/document/document.module').then(
            (m) => m.DocumentModule
          ),
      },
      {
        path: 'department',
        loadChildren: () =>
          import('./components/views/front/department/department.module').then(
            (m) => m.DepartmentModule
          ),
      },
      {
        path: 'cursus',
        loadChildren: () =>
          import('./components/views/front/cursus/cursus.module').then(
            (m) => m.CursusModule
          ),
      },
    ],
  },
  {
    path: 'student',
    component: StudentLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/views/student/home/home.module').then(
            (m) => m.HomeModule
          ),
      },
      {
        path: 'auth-student',
        loadChildren: () =>
          import('./components/views/student/login/login.module').then(
            (m) => m.LoginModule
          ),
      },
      {
        path: 'register-student',
        loadChildren: () =>
          import('./components/views/student/register/register.module').then(
            (m) => m.RegisterModule
          ),
      },
      {
        path: 'document',
        loadChildren: () =>
          import('./components/views/student/document/document.module').then(
            (m) => m.DocumentModule
          ),
      },
      {
        path: 'account-student',
        canActivateChild: [AuthStudentGuard],
        loadChildren: () =>
          import(
            './components/views/student/student-authenticated/student-authenticated.module'
          ).then((m) => m.StudentAuthenticatedModule),
      },
      {
        path: 'profile',
        canActivateChild: [AuthStudentGuard],
        loadChildren: () =>
          import('./components/views/student/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'timetable',
        canActivateChild: [AuthStudentGuard],
        loadChildren: () =>
          import('./components/views/student/timetable/timetable.module').then(
            (m) => m.TimetableModule
          ),
      },
      {
        path: 'calendar-exam',
        canActivateChild: [AuthStudentGuard],
        loadChildren: () =>
          import('./components/views/student/exam/exam.module').then(
            (m) => m.ExamModule
          ),
      }, {
        path: 'result-exam',
        canActivateChild: [AuthStudentGuard],
        loadChildren: () =>
          import('./components/views/student/result/result.module').then(
            (m) => m.ResultModule
          ),
      },
    ],
  },
  {
    path: 'teacher',
    component: TeacherLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/views/teacher/home/home.module').then(
            (m) => m.HomeModule
          ),
      },
      {
        path: 'auth-teacher',
        loadChildren: () =>
          import('./components/views/teacher/login/login.module').then(
            (m) => m.LoginModule
          ),
      },
      {
        path: 'register-teacher',
        loadChildren: () =>
          import('./components/views/teacher/register/register.module').then(
            (m) => m.RegisterModule
          ),
      },
      {
        path: 'account-teacher',
        canActivateChild: [AuthTeacherGuard],
        loadChildren: () =>
          import(
            './components/views/teacher/teacher-authenticated/teacher-authenticated.module'
          ).then((m) => m.TeacherAuthenticatedModule),
      },
      
      {
        path: 'timetable',
        canActivateChild: [AuthTeacherGuard],
        loadChildren: () =>
          import(
            './components/views/teacher/timetable/timetable.module'
          ).then((m) => m.TimetableModule),
      },

      {
        path: 'profile',
        canActivateChild: [AuthTeacherGuard],
        loadChildren: () =>
          import('./components/views/teacher/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
    ],
  },
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
        path: 'list-contact',
        loadChildren: () =>
          import(
            './components/views/admin/contact-admin/contact-admin.module'
          ).then((m) => m.ContactAdminModule),
      },
      {
        path: 'list-demandecursus',
        loadChildren: () =>
          import(
            './components/views/admin/list-demande-cursus/list-demande-cursus.module'
          ).then((m) => m.ListDemandeCursusModule),
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
      {
        path: 'event',
        loadChildren: () =>
          import('./components/views/admin/event/event.module').then(
            (m) => m.EventModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./components/views/admin/event/event.module').then(
            (m) => m.EventModule
          ),
      },
      
      {
        path: 'promotion',
        loadChildren: () =>
          import('./components/views/admin/promotion/promotion.module').then(
            (m) => m.PromotionModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./components/views/admin/promotion/promotion.module').then(
            (m) => m.PromotionModule
          ),
      },
    ],
  },
  { path: '**', component: PageInvalidComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
