import { Injectable } from '@nestjs/common';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tarefa } from './entities/tarefa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TarefaService {
  constructor(
    @InjectRepository(Tarefa)
    private readonly repository: Repository<Tarefa>
  ){}

  create(createTarefaDto: CreateTarefaDto) {
    const tarefa = this.repository.create(createTarefaDto)
    return this.repository.save(tarefa)
  }

  findAll() {
    return this.repository.find()
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id })
  }

  async findAllGroupedByPriority() {
    const tarefas = await this.repository.find();
    const groupedByPriority = {
      baixa: [],
      media: [],
      alta: []
    };

    tarefas.forEach(tarefa => {
      if (tarefa.prioridade === 'Baixa' && tarefa.status === 'A Fazer') {
        groupedByPriority.baixa.push(tarefa);
      } else if (tarefa.prioridade === 'Media' && tarefa.status === 'A Fazer') {
        groupedByPriority.media.push(tarefa);
      } else if (tarefa.prioridade === 'Alta' && tarefa.status === 'A Fazer') {
        groupedByPriority.alta.push(tarefa);
      } 
    });

    return groupedByPriority;
  }

  async findAllGroupedByStatus() {
    const tarefas = await this.repository.find();
    const groupedByStatus = {
      em_Andamento: [],
      finalizada: []
    };

    tarefas.forEach(tarefa => {
      if (tarefa.status === 'Em Andamento') {
        groupedByStatus.em_Andamento.push(tarefa);
      } else if (tarefa.status === 'Finalizada') {
        groupedByStatus.finalizada.push(tarefa);
      }
    });

    return groupedByStatus;
  }

  async update(id: number, updateTarefaDto: UpdateTarefaDto) {
    const tarefa = await this.repository.findOneBy({ id })
    if (!tarefa) return null
    this.repository.merge(tarefa, updateTarefaDto)
    return this.repository.save(tarefa)
  }

  async updateStatus(id: number, status: string): Promise<Tarefa> {
    const tarefa = await this.repository.findOneBy({ id });
    if (!tarefa) return null
    tarefa.status = status;
    return this.repository.save(tarefa);
  }

  async remove(id: number) {
    const tarefa = await this.repository.findOneBy({ id })
    if (!tarefa) return null
    return this.repository.remove(tarefa)
  }
}
