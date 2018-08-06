import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'search',  component: SearchComponent },
    { path: 'search/:isbn', component: ResultComponent }]

export const AppRouting = RouterModule.forRoot(appRoutes);
