import { Module } from '@nestjs/common';
import { PostsModule } from './post/post.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [PostsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
