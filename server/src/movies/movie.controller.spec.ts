import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { MovieController } from './movie.controller';
import { MoviesService } from './movie.service';

describe('MovieController', () => {
	let controller: MovieController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [MovieController],
			providers: [MoviesService],
		}).compile();

		controller = module.get<MovieController>(MovieController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
