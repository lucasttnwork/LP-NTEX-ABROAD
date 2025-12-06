import path from 'path';
import { promises as fs } from 'fs';
import fg from 'fast-glob';
import sharp from 'sharp';

const FORMATS = [
  {
    ext: 'webp',
    description: 'WebP',
    transform: (pipeline) => pipeline.webp({ quality: 82, effort: 4 })
  },
  {
    ext: 'avif',
    description: 'AVIF',
    transform: (pipeline) => pipeline.avif({ quality: 64, effort: 4 })
  }
];

const PATTERNS = [
  'public/favicon.png',
  'public/images/**/*.{png,jpg,jpeg}',
  'src/assets/**/*.{png,jpg,jpeg}'
];

const needsConversion = async (srcPath, targetPath) => {
  try {
    const [sourceStat, targetStat] = await Promise.all([fs.stat(srcPath), fs.stat(targetPath)]);
    return sourceStat.mtimeMs > targetStat.mtimeMs;
  } catch {
    return true;
  }
};

const convertImage = async (sourcePath, format) => {
  const parsed = path.parse(sourcePath);
  const targetPath = path.join(parsed.dir, `${parsed.name}.${format.ext}`);
  if (!(await needsConversion(sourcePath, targetPath))) {
    return { converted: false, targetPath };
  }

  await fs.mkdir(parsed.dir, { recursive: true });
  await format.transform(sharp(sourcePath)).toFile(targetPath);
  return { converted: true, targetPath };
};

const run = async () => {
  const files = await fg(PATTERNS, { onlyFiles: true, dot: false });
  if (files.length === 0) {
    console.log('[optimize-images] nenhum arquivo encontrado para conversão.');
    return;
  }

  let convertedFiles = 0;
  let skippedFiles = 0;

  for (const relativePath of files) {
    const absolutePath = path.resolve(relativePath);
    for (const format of FORMATS) {
      const result = await convertImage(absolutePath, format);
      if (result.converted) {
        convertedFiles += 1;
        console.log(`[optimize-images] convertido ${format.description}: ${result.targetPath}`);
      } else {
        skippedFiles += 1;
      }
    }
  }

  console.log(
    `[optimize-images] conversão concluída — novos: ${convertedFiles}, pulados (já atualizados): ${skippedFiles}.`
  );
};

run().catch((error) => {
  console.error('[optimize-images] falha ao otimizar imagens:', error);
  process.exitCode = 1;
});





