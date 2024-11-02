import { Module } from '@nestjs/common';
import { databaseProvider } from './database.providers';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[
        TypeOrmModule.forRootAsync({
            imports:[ConfigModule],
            inject:[ConfigService],
            useFactory:(config:ConfigService)=>({
                type:'postgres',
                host:config.get('HOST') || 'localhost',
                port: + config.get('PORT_DB'),
                username: config.get('USERNAME') || 'root',
                password: config.get('PASSWORD') || 'prueba',
                database: config.get('DATABASE'),
                entities:[
                    __dirname + '/../**/*.entity{ts,.js}',
                ],

            })
        })
    ],
    providers:[...databaseProvider,ConfigService],
    exports:[...databaseProvider]
})
export class DatabaseModule {}
