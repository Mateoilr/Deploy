import { IsString, MinLength, IsOptional, IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
    @IsString()
    @MinLength(1, { message: 'El nombre es obligatorio y no puede estar vacío.' })
    name: string;
    

  
    @IsNumber({}, { message: 'El precio debe ser un número.' })
    @Min(0, { message: 'El precio no puede ser negativo.' })
    price: number;

    @IsOptional()
    @IsString()
    description?: string;

}
