import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskserviceService } from '../../shared/services/task-service/taskservice.service';
import { PrimengComponentsModule } from '../../shared/components/primeng-components/primeng-components.module';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [PrimengComponentsModule],
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class CreateTaskComponent {

  taskForm: FormGroup; // Explicitly declare the form type

  constructor(
    private fb: FormBuilder,
    private taskService: TaskserviceService,
    private router: Router
  ) {
    // Initialize the form with FormBuilder
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      status: ['pending', Validators.required],
    });
  }

  get title() {
    return this.taskForm.get('title');
  }

  get description() {
    return this.taskForm.get('description');
  }

  get status() {
    return this.taskForm.get('status');
  }

  submitTask() {
    if (this.taskForm.invalid) {
      // Optionally handle invalid form state
      console.warn('Invalid form submission');
      return;
    }

    const taskData = this.taskForm.value;
    console.log('Creating task:', taskData);

    this.taskService.createTask(taskData).subscribe({
      next: response => {
        console.log('Task created successfully:', response);
        // Navigate to another route after successful creation
        // this.router.navigate(['/tasks']);
      },
      error: err => {
        console.error('Error creating task:', err);
        // Optionally, handle the error, e.g., show a message to the user
      }
    });
  }
}
