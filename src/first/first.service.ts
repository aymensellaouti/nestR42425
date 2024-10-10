import { LoggerService } from "@nestjs/common";
import { LoggerServiceService } from "./logger-service/logger-service.service";

export class FirstService {
    #students: string[] = [];
    constructor(
     private logger: LoggerService
    ) {}
    getStudents(): string[] {
        return this.#students;
    }

    addStudent(name: string): string[] {
        console.log('Adding new student: '+name);
        
//        this.logger.log('Adding new student: '+name);
        this.#students.unshift(name);
        return this.#students;
    }
}