import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from '../src/Posts/post.controller';
import { PostsService } from '../src/Posts/post.service';
import { UsersController } from '../src/Users/users.controller';
import { UsersService } from './Users/users.service';

describe('PostsController', () => {
  let postsController: PostsController;

  beforeEach(async () => {
    const posts: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [PostsService],
    }).compile();

    postsController = posts.get<PostsController>(PostsController);
  });

  describe('api/v1/posts', () => {
    it('should return all posts', () => {
      expect(postsController.getAll).toBe('');
    });
  });

  describe(':id', () => {
    it('should return posts by id', () => {
      expect(postsController.getById).toBe('id');
    });
  });

});
// TESTES USERS
//----------------------------

describe('UsersController', () => {
  let usersController: UsersController;

  beforeEach(async () => {
    const users: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    usersController = users.get<UsersController>(UsersController);
  });

  describe('users', () => {
    it('should return all users', () => {
      expect(usersController.getAll).toBe('');
    });
  });
});
