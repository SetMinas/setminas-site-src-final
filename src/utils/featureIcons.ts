// /home/ubuntu/setminas-site_extracted/setminas-site/src/utils/featureIcons.ts

// Maps characteristic keys to their corresponding SVG icon file paths
export const featureIconPaths: { [key: string]: string } = {
  'ruler': '/icons/features/ruler.svg',
  'lamppost': '/icons/features/lamppost.svg',
  'bench': '/icons/features/bench.svg',
  'camera': '/icons/features/camera.svg',
  'pin-star': '/icons/features/pin-star.svg',
  'lake-mountains': '/icons/features/lago_novo.svg',
  'tree': '/icons/features/tree.svg',
  'gate': '/icons/features/gate.svg',
  'house-dollar': '/icons/features/house-dollar.svg',
  'price-tag': '/icons/features/precos_acessiveis_novo.svg',
  'skyline': '/icons/features/skyline.svg',
  'walking-person': '/icons/features/walking-person.svg',
  'graph-up': '/icons/features/alta-valorizacao_novo.svg',
  'liberado-construir': '/icons/features/liberado_construir_novo.svg',
  'condominio-fechado': '/icons/features/condominio-fechado_novo.svg', // Added: New icon for 'Condomínio fechado de luxo'
  // Add a default icon path for safety (using a simple check icon for now)
  'default': '/icons/check-circle.svg' // Assuming a check icon exists, or use one of the downloaded ones as default
};

// Function to map characteristic text to icon key (remains the same)
export const getIconKey = (characteristic: string): string => {
  const lowerCaseChar = characteristic.toLowerCase();
  if (lowerCaseChar.includes('m²') || lowerCaseChar.includes('metro')) return 'ruler';
  if (lowerCaseChar.includes('infraestrutura')) return 'lamppost';
  if (lowerCaseChar.includes('lazer')) return 'bench';
  if (lowerCaseChar.includes('segurança')) return 'camera';
  if (lowerCaseChar.includes('localização') || lowerCaseChar.includes('privilegiada') || lowerCaseChar.includes('estratégica') || lowerCaseChar.includes('melhor localização')) return 'pin-star';
  if (lowerCaseChar.includes('vista') || lowerCaseChar.includes('lago')) return 'lake-mountains';
  if (lowerCaseChar.includes('verde')) return 'tree';
  if (lowerCaseChar.includes('acesso')) return 'gate';
  if (lowerCaseChar.includes('financiamento')) return 'house-dollar';
  if (lowerCaseChar.includes('preço') || lowerCaseChar.includes('acessíveis')) return 'price-tag';
  if (lowerCaseChar.includes('centro') || lowerCaseChar.includes('comercial')) return 'skyline';
  if (lowerCaseChar.includes('pista') || lowerCaseChar.includes('caminhada')) return 'walking-person';
  if (lowerCaseChar.includes('valorização')) return 'graph-up';
  if (lowerCaseChar.includes('liberado para construir')) return 'liberado-construir';
  if (lowerCaseChar.includes('condomínio fechado')) return 'condominio-fechado'; // Added: Mapping for 'Condomínio fechado de luxo'
  return 'default'; // Return a default icon key if no match
};

