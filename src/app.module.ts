import { Module } from '@nestjs/common';
import { PostsModule } from './Posts/post.module';
import { UsersModule } from './Users/users.module';
import { AuthModule } from './authentication/auth.module';

@Module({
  imports: [PostsModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
