import { Component } from '@angular/core';
import { ProductService } from './taskservice';
import { PrimengComponentsModule } from '../../shared/components/primeng-components/primeng-components.module';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogConfig, DynamicDialogRef, DynamicDialogModule } from 'primeng/dynamicdialog';
import { CreateTaskComponent } from '../create-task/create-task.component';



interface Column {
  field: string;
  header: string;
}

export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  providers:[ProductService,DialogService],
  imports: [PrimengComponentsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  products!: Product[];

  cols!: Column[];

  constructor(private productService: ProductService,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
      this.productService.getProductsMini().then((data) => {
          this.products = data;
      });

      this.cols = [
          { field: 'code', header: 'Code' },
          { field: 'name', header: 'Name' },
          { field: 'category', header: 'Category' },
          { field: 'quantity', header: 'Quantity' },
          { field: 'inventoryStatus', header: 'Status' },
          { field: 'rating', header: 'Rating' }
      ];
  }

  public getSeverity(status: string) {
      switch (status) {
          case 'INSTOCK':
              return 'success';
          case 'LOWSTOCK':
              return 'warning';
          case 'OUTOFSTOCK':
              return 'danger';
          default:
            return;
      }
  }
  
  openCraete() {
    return this.dialogService.open(CreateTaskComponent,{
      header: 'Create New Task',
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000      
  })
  }
  
}
