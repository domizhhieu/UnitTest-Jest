import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeService],
    }).compile();

    service = module.get<EmployeeService>(EmployeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('addEmployee', () => {
    it('should create employee', () => {});
    // arrage
    service.listEmployees = ['Nguyễn văn b'];
    const employee = 'Nguyen Van A';
    // act
    const listEmployee = service.addEmployee(employee);
    //assert
    expect(listEmployee).toBe(service.listEmployees);
    expect(listEmployee.length).toHaveLength(1);
  });
});
