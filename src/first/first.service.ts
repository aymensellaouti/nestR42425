import { Injectable, LoggerService } from "@nestjs/common";
import { LoggerServiceService } from "./logger-service/logger-service.service";
import { FirstEntity } from "./entity/first.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { AddUserDto } from "./dto/add-user.dto";

@Injectable()
export class FirstService {
    constructor(
     @InjectRepository(FirstEntity)   
     private firstRepository: Repository<FirstEntity>
    ) {}
    getStudents(): FirstEntity[] {
        return [];
    }

    async addStudent(user: AddUserDto) {
        const newUser = await this.firstRepository.save(user);
        // Busness logique
        return newUser;
    }
}