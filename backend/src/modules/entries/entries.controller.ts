import {Body, Controller, Get, Post} from '@nestjs/common';
import { EntriesService } from "./entries.service";

@Controller('entries')
export class EntriesController {
    constructor(private readonly entriesService: EntriesService) {}

    @Get()
    findAll() {
        return this.entriesService.findAll();
    }

    @Post()
    create(@Body() data: any) {
        return this.entriesService.create(data);
    }
}

