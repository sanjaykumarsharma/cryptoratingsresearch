import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { TagsComponent } from './admin/tags/tags.component';
import { IndexComponent } from './index/index.component';
import { AdminMainLayoutComponent } from './admin/admin-main-layout/admin-main-layout.component';
import { AuthGuard } from './_guards/auth.guard';

const appRoutes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'admin/login', component: AdminLoginComponent },
    { path: 'admin', component: AdminMainLayoutComponent, canActivateChild: [AuthGuard], children: [
        { path: 'home', component: HomeComponent },
        { path: 'tags', component: TagsComponent }
    ] },
    // otherwise redirect to home
    // { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
