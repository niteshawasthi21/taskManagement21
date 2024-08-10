# TaskManagement21

**TaskManagement21** is a comprehensive full-stack task management application designed to streamline and optimize task handling for individuals and teams. The application leverages modern web technologies, including Angular and PrimeNG for the frontend and NestJS for the backend, to deliver a robust and user-friendly experience.

## Key Features

### Frontend (Angular & PrimeNG)

- **User Authentication**: Secure login and registration system to manage user access, utilizing form validation to ensure data integrity.
- **Task Creation and Management**: Users can create, update, and delete tasks with fields such as title, description, and status. The interface is designed to be intuitive, allowing users to easily manage their tasks.
- **Responsive Design**: Built with PrimeNG components, the application is fully responsive and accessible on various devices and screen sizes.
- **Real-time Updates**: Leverages Angular's reactive forms and observables to provide real-time feedback and updates within the application, enhancing user interaction.

### Backend (NestJS)

- **RESTful API**: Implements a RESTful API with endpoints for managing users and tasks, providing seamless integration with the frontend.
- **Data Persistence**: Uses TypeORM to interact with the database, ensuring efficient data storage and retrieval for user and task information.
- **Validation and Security**: Incorporates data validation and hashing techniques to protect user credentials and application data.
- **Error Handling**: Provides comprehensive error handling and descriptive responses to ensure smooth operation and debugging.

## Functional Workflow

1. **User Registration**: Users can sign up by providing their full name, email, and password. The system ensures email uniqueness and password confirmation.

2. **Login and Authentication**: Registered users can log in using their credentials. Upon successful authentication, users are redirected to the task dashboard.

3. **Task Dashboard**: Users have access to a personal dashboard where they can view, create, edit, and delete tasks. Tasks are displayed with their current status, allowing users to track progress efficiently.

4. **Task Management**: Users can perform CRUD operations on tasks. The interface supports editing task details and changing their status to reflect progress or completion.

5. **Navigation and User Experience**: The application features smooth navigation, with immediate visual feedback for actions performed. Responsive design principles ensure usability across all devices.

## Technology Stack

- **Frontend**: Angular, PrimeNG
- **Backend**: NestJS, TypeORM
- **Database**: Compatible with sqlite databases
- **Styling**: CSS, PrimeNG themes
