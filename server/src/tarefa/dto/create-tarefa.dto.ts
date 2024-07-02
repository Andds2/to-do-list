import { IsDateString, IsString } from "class-validator"

export class CreateTarefaDto {

    @IsString()
    titulo: string

    @IsString()
    descricao: string

    @IsDateString()
    data: string

    @IsString()
    prioridade: string

    @IsString()
    status: string
}
