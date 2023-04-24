import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './component/product/product.component';
import { ProductCreaeditaComponent } from './component/product/product-creaedita/product-creaedita.component';

const routes: Routes = [

  {
    path:'products', component: ProductComponent, children: [
      {
        path: 'new', component: ProductCreaeditaComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
