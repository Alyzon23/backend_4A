import { ConfigService } from "@nestjs/config";
import { DataSource } from "typeorm"

export const databaseProvider =[
    {
        provide: 'DATABASE_CONNECTION',
        Inject:[ConfigService],
        useFactory:(config:ConfigService)=>{
            const dataSource = new DataSource({
                type: 'postgres',
                port:config.get('PORT_DB'),
                host:config.get('HOST') || 'localhost',
                username:config.get('USERNAME') || 'root',
                password:config.get('PASSWORD') || 'prueba',
                database:config.get('DATABASE'),
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ]
            });
            return dataSource.initialize();
        }
    }
]