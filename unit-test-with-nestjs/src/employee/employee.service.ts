import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
  listEmployees: string[] = [];
  addEmployee(employeeName: string) {
    if (this.listEmployees.length > 50) {
      throw new Error('Employee list is full');
    }
    this.listEmployees.push(employeeName);
    return this.listEmployees;
  }

  updateEmployee(employeeName: string, id: number) {
    const employeeToUpdate = this.listEmployees[id];
    if (!employeeToUpdate) {
      throw new Error('employee not found');
    }
    if (this.listEmployees.length > 50) {
      throw new Error('Employee too long');
    }
    this.listEmployees[id] = employeeName;
    return this.listEmployees;
  }
  deleteEmployee(employeeName: string, id: number) {
    const employeeToDelete = this.listEmployees[id];
    if (!employeeToDelete) {
      throw new Error(`This Tweet does not exist`);
    }
    const deletedEmployee = this.listEmployees.splice(id, 1);
    return deletedEmployee;
  }
}
