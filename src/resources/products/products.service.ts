import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProductsService {

  constructor(private readonly prisma: PrismaService) {}


   async findByName(name: string) {
    return this.prisma.product.findUnique({
      where: { name },
    });
  }

  async create(createProductDto: CreateProductDto) {
    
    const exists = await this.findByName(createProductDto.name);
    if (exists) {
      throw new ConflictException('El nombre del producto ya existe.');
    }
    return this.prisma.product.create({
      data: createProductDto,
    });
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });
    if (!product) {
      throw new NotFoundException('Producto no encontrado.');
    }
    return product;
}
async findAll() {
    return this.prisma.product.findMany({
  }
    );
  }}