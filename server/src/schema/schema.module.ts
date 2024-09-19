import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieSchema } from 'src/movies/movie.schema';
import { UserSchema } from 'src/users/users.schema';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: 'User', schema: UserSchema },
			{ name: 'Movie', schema: MovieSchema },
		]),
	],
	exports: [MongooseModule],
})
export class SchemasModule {}
