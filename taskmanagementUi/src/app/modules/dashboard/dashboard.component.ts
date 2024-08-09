import { Component } from '@angular/core';
import { ProductService } from './taskservice';
import { PrimengComponentsModule } from '../../shared/components/primeng-components/primeng-components.module';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


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
  providers:[ProductService],
  imports: [PrimengComponentsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  // products!: Product[];

  // cols!: Column[];

  // constructor(private productService: ProductService) {}

  // ngOnInit() {
  //     this.productService.getProductsMini().then((data) => {
  //         this.products = data;
  //     });

  //     this.cols = [
  //         { field: 'code', header: 'Code' },
  //         { field: 'name', header: 'Name' },
  //         { field: 'category', header: 'Category' },
  //         { field: 'quantity', header: 'Quantity' },
  //         { field: 'inventoryStatus', header: 'Status' },
  //         { field: 'rating', header: 'Rating' }
  //     ];
  // }

  // public getSeverity(status: string) {
  //     switch (status) {
  //         case 'INSTOCK':
  //             return 'success';
  //         case 'LOWSTOCK':
  //             return 'warning';
  //         case 'OUTOFSTOCK':
  //             return 'danger';
  //         default:
  //           return;
  //     }
  // }

  taskForm = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    price: [0, [Validators.required, Validators.min(0)]],
    status: ['pending', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    // private taskService: TaskService, // Uncomment this if you have a TaskService
    private router: Router
  ) {}

  get title() {
    return this.taskForm.get('title');
  }

  get description() {
    return this.taskForm.get('description');
  }

  get price() {
    return this.taskForm.get('price');
  }

  get status() {
    return this.taskForm.get('status');
  }

  submitTask() {
    const newTask = this.taskForm.value;
    console.log('Creating task:', newTask);

    // Call your service to create the task
    // this.taskService.createTask(newTask).subscribe(
    //   response => {
    //     console.log('Task created successfully:', response);
    //     this.router.navigate(['/tasks']); // Navigate to another route after creation
    //   },
    //   error => {
    //     console.error('Error creating task:', error);
    //   }
    // );
  }
}
