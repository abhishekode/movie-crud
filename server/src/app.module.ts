import type { MiddlewareConsumer } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { RequestLoggerMiddleware } from './middleware/request-logger.middleware';
import { ThrottlerModule } from '@nestjs/throttler';
import { SchemasModule } from './schema/schema.module';
import { MoviesModule } from './movies/movie.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		MongooseModule.forRoot(process.env.DATABASE_URL),
		ThrottlerModule.forRoot([
			{
				ttl: 60000,
				limit: 10,
			},
		]),
		SchemasModule,
		UsersModule,
		MoviesModule,
	],
	controllers: [AppController],
	providers: [],
})
export class AppModule {
	// let's add a middleware on all routes
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(RequestLoggerMiddleware).forRoutes('*');
	}
}
