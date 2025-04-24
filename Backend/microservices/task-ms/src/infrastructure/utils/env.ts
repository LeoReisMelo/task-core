/**
 * Obtém variável de ambiente obrigatória
 * @throws Error se a variável não estiver definida
 */
export function requiredEnv(key: string): string {
  const value = process.env[key];

  if (value === undefined || value === '') {
    throw new Error(`🚨 Variável de ambiente obrigatória ausente: ${key}`);
  }

  return value;
}
