import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const userWithSameEmail = await this.prismaService.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });

    if (userWithSameEmail) {
      throw new ConflictException('Email already registered.');
    }

    return this.prismaService.user.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.prismaService.user.findMany({
      orderBy: {
        created_at: 'desc',
      },
    });
  }
}
