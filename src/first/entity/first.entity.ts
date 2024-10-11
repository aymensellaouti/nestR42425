import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('first')
export class FirstEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number; 
    @Column()
    email: string;
    @Column()
    password: string;
    // @Column({length: 150})
    // name: string;
    @CreateDateColumn()
    createdAt: Date;
}