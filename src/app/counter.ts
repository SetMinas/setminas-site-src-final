// Arquivo temporário para contornar erros de tipagem
// Este arquivo substitui o counter.ts apenas para a geração do preview estático

'use server'

import { cookies } from 'next/headers'

interface AccessLog {
  accessed_at: string;
}

interface StatsResult {
  count: number;
  recentAccess: AccessLog[];
}

export async function incrementAndLog(): Promise<StatsResult> {
  // Versão simplificada que retorna dados fictícios para o preview
  return {
    count: 1,
    recentAccess: [{ accessed_at: new Date().toISOString() }]
  }
}

export async function getStats(): Promise<StatsResult> {
  // Versão simplificada que retorna dados fictícios para o preview
  return {
    count: 1,
    recentAccess: [{ accessed_at: new Date().toISOString() }]
  }
}
