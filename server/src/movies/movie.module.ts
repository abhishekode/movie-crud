import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { ConfigModule } from '@nestjs/config';
import { CloudinaryService } from 'src/utils/cloudinary';
import { SchemasModule } from 'src/schema/schema.module';
import { MoviesService } from './movie.service';

@Module({
	imports: [ConfigModule, SchemasModule],
	controllers: [MovieController],
	providers: [MoviesService, CloudinaryService],
})
export class MoviesModule {}
