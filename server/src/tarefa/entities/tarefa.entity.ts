import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Tarefa {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    titulo: string

    @Column()
    descricao: string

    @Column()
    data: string

    @Column()
    prioridade: string

    @Column()
    status: string
}
