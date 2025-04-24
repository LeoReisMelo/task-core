export interface IDatabaseConfig {
  uri: string;
}

export interface IApplicationConfig {
  port: number;
}

export interface IConfig {
  database: IDatabaseConfig;
  application: IApplicationConfig;
}
