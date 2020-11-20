import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ConfigModule.forRoot(), ProductsModule, MongooseModule.forRoot(
    'mongodb+srv://cnohall:'+process.env.ATLAS_PASSWORD+'@cluster0.59dl8.mongodb.net/Nesting?retryWrites=true&w=majority'
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
