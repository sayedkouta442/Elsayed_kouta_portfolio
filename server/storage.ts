import { type Project, type Message, type InsertMessage } from "@shared/schema";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  createMessage(message: InsertMessage): Promise<Message>;
  seedProjects(): Promise<void>;
}

export class MemStorage implements IStorage {
  async getProjects(): Promise<Project[]> {
    return [];
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    return { ...insertMessage, id: 1, createdAt: new Date() };
  }

  async seedProjects(): Promise<void> {
    // No-op for static site
  }
}

export const storage = new MemStorage();
