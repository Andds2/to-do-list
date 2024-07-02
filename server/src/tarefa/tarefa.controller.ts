import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';

@Controller('tarefa')
export class TarefaController {
  constructor(private readonly tarefaService: TarefaService) {}

  @Post()
  create(@Body() createTarefaDto: CreateTarefaDto) {
    return this.tarefaService.create(createTarefaDto);
  }

  @Get()
  findAll() {
    return this.tarefaService.findAll();
  }

  @Get('prioridade')
  async getTarefasPorPrioridade() {
    return this.tarefaService.findAllGroupedByPriority();
  }

  @Get('status')
  async getTarefasPorStatus() {
    return this.tarefaService.findAllGroupedByStatus();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tarefaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTarefaDto: UpdateTarefaDto) {
    return this.tarefaService.update(+id, updateTarefaDto);
  }

  @Patch(':id/status')
  async updateTarefaStatus(
    @Param('id') id: number,
    @Body('status') status: string
  ) {
    return this.tarefaService.updateStatus(id, status);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tarefaService.remove(+id);
  }
}
