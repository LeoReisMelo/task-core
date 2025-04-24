import { NestFactory } from '@nestjs/core';
import { AppModule } from './application/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['debug', 'error', 'log', 'warn', 'fatal', 'verbose'],
  });
  const logger = new Logger('Bootstrap');

  app.enableCors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || [],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('TaskCore - Task microservice')
    .setDescription('Microservice of tasks')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  await app.listen(process.env.PORT ?? 3000);

  logger.log(`API Gateway rodando na porta ${process.env.PORT}`);
  logger.log(
    `Swagger disponível em http://localhost:${process.env.PORT}/api/docs`,
  );
}

bootstrap();
