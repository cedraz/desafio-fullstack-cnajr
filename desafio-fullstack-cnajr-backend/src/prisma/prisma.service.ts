import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

export enum PrismaErrorCodes {
  // "Unique constraint failed on the {constraint}"
  UniqueConstraintFailed = 'P2002',
  // "Foreign key constraint failed on the field: {field_name}"
  ForeignKeyConstraintFailed = 'P2003',
  //"An operation failed because it depends on one or more records that were required but not found. {cause}"
  RecordNotFound = 'P2025',
}

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
