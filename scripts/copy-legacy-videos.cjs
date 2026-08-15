const fs = require('node:fs');
const path = require('node:path');

const videos = [
  {
    source: 'legacy-assets/Videos/Shroom_beneath_world_tree_Trailer.mp4',
    target: 'dist/assets/videos/beneath-world-tree-trailer.mp4'
  }
];

for (const video of videos) {
  const sourcePath = path.resolve(video.source);
  const targetPath = path.resolve(video.target);

  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Missing legacy video asset: ${video.source}`);
  }

  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.copyFileSync(sourcePath, targetPath);
}
