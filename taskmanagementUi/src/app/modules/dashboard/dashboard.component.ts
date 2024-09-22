import { Component } from '@angular/core';
import { ProductService } from './taskservice';
import { PrimengComponentsModule } from '../../shared/components/primeng-components/primeng-components.module';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogConfig, DynamicDialogRef, DynamicDialogModule } from 'primeng/dynamicdialog';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



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
   
  tasks: any[] = [];
  taskDialog: boolean = false;
  taskForm!: FormGroup;
  editMode: boolean = false;
  currentTask: any;

  constructor(private fb: FormBuilder, private dialogService: DialogService) {
    this.taskForm = this.fb.group({
      name: ['', Validators.required]
    });
  }
 

  ngOnInit() {   
    this.generateMockData(); 
  } 

  editTask(task: any) {
    this.editMode = true;
    this.currentTask = task;
    this.taskDialog = true;
    this.taskForm.patchValue(task);
  }

  generateMockData() {
    this.tasks = [
      { taskName: 'Design UI', description: 'Create the user interface layout', status: 'In Progress' },
      { taskName: 'API Integration', description: 'Connect to the backend API', status: 'Pending' },
      { taskName: 'Bug Fix', description: 'Fix issues in the task module', status: 'Completed' },
      { taskName: 'Write Documentation', description: 'Prepare the technical documents', status: 'Pending' },
      { taskName: 'Testing', description: 'Perform unit and integration testing', status: 'In Progress' }
    ];
  }

  saveTask() {
    if (this.taskForm.invalid) return;

    const task = this.taskForm.value;

    if (this.editMode) {
      const index = this.tasks.findIndex(t => t === this.currentTask);
      this.tasks[index] = task;
    } else {
      this.tasks.push(task);
    }

    this.taskDialog = false;
    this.taskForm.reset();
  }

  deleteTask(task: any) {
    this.tasks = this.tasks.filter(t => t !== task);
  }

   
  
  openCreate() {
    return this.dialogService.open(CreateTaskComponent,{
      header: 'Create New Task',
      width: '25%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000      
  })
  }
  
}
