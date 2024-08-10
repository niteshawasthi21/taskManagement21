import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
// import { Task } from '../models/task.model';

export interface Task {
  id?: number;
  title: string;
  description: string;
  dueDate?: Date;
  status: string;
  // priority: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {
  private apiUrl = `${environment.apiBaseUrl}`; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  // Create a new task
  createTask(task: Task): Observable<Task> {
    const createTaskUrl=this.apiUrl+"/tasks/taskcreation"
    return this.http.post<Task>(createTaskUrl, task, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  // Get all tasks
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Get a task by ID
  getTaskById(id: number): Observable<Task> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Task>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Update a task
  updateTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  // Delete a task
  deleteTask(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError(this.handleError)
    );
  }

  private get httpOptions() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }
}
