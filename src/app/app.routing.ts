import { AdminMainLayoutComponent } from './admin-main-layout/admin-main-layout.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { TagsComponent } from './admin/tags/tags.component';
//import { AuthGuard } from './_guards/auth.guard';

// import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ServicesComponent } from './services/services.component';
// import { ProgramsComponent } from './programs/programs.component';
// import { FacultyComponent } from './faculty/faculty.component';
// import { AdmissionsComponent } from './admissions/admissions.component';

const appRoutes: Routes = [
    { path: 'admin/login', component: AdminLoginComponent },
    { path: 'admin', component: AdminMainLayoutComponent, children: [
        { path: 'home', component: HomeComponent },
        { path: 'tags', component: TagsComponent }
    ] },
    
    // otherwise redirect to home
    //{ path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
