import { mergeConfig } from 'vite';
import baseConig from './vite.config.base';
import configCompressPlugin from './plugin/compress';           // 代码压缩


export default mergeConfig(
  {
    mode: 'production',
    server: {
      open: true,
      fs: {
        strict: true,
      },
    },
    plugins:[
        configCompressPlugin('gzip'),
    ]
  },
  baseConig
);