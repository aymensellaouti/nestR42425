import { Injectable, LoggerService } from "@nestjs/common";
import { LoggerServiceService } from "./logger-service/logger-service.service";
import { First} from "./entity/first.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { AddUserDto } from "./dto/add-user.dto";

@Injectable()
export class FirstService {
    constructor(
     @InjectRepository(First)   
     private firstRepository: Repository<First>
    ) {}
    getStudents(): Promise<First[]> {
        return this.firstRepository.find();
    }

    async addStudent(user: AddUserDto) {
        const newUser = await this.firstRepository.save(user);
        // Busness logique
        return newUser;
    }
}