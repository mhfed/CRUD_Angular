import { ProductUpdateComponent } from './pages/product-update/product-update.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'product',
    children: [
      { path: '', component: ProductListComponent },
      { path: 'add', component: ProductAddComponent },
      {
        path: 'edit',
        children: [
          { path: '', component: ProductUpdateComponent },
          { path: ':id', component: ProductUpdateComponent },
        ],
      },
    ],
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
