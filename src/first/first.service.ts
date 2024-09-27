import { LoggerServiceService } from "./logger-service/logger-service.service";

export class FirstService {
    #students: string[] = [];
    constructor(private logger: LoggerServiceService) {}
    getStudents(): string[] {
        return this.#students;
    }

    addStudent(name: string): string[] {
        this.logger.log('Adding new student: '+name);
        this.#students.unshift(name);
        return this.#students;
    }
}