import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsInt, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateMovieDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty({ description: 'Publishing year (4-digit)' })
  @Type(() => Number) 
  @IsInt({ message: 'Publishing year must be a 4-digit integer' })
  @Min(1000, { message: 'Publishing year must be between 1000 and 9999' })
  @Max(9999, { message: 'Publishing year must be between 1000 and 9999' })
  publishing_year: number;
  
  @ApiProperty({ description: 'Movie active status' })
  @Transform(({ value }) => value === 'true')
  @IsBoolean()
  isActive: boolean;
  
  @ApiProperty({ type: 'string', format: 'binary' })
  poster: Express.Multer.File;
}

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}

export class FilterMovieQuery {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  @Min(1)
  page?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  @Min(1)
  size?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ description: 'Publishing year (4-digit)', required: false })
  @Type(() => Number) 
  publishing_year?: number;

}
