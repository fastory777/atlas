import { Injectable } from '@nestjs/common';

export interface Entry {
    id: number;
    title: string | null;
    body: string;
    type: string;
    createdAt: Date;
}

@Injectable()
export class EntriesService {

    private entries: Entry[] = [];

    findAll() {
        return this.entries;
    }

    create(data: Omit<Entry, 'id' | 'createdAt'>) {
        const newEntry: Entry = {
            id: Date.now(),
            createdAt: new Date(),
            ...data,
        }

        this.entries.push(newEntry);
        return newEntry;
    }
}
