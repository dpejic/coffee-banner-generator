import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import { Configuration } from 'webpack'

export default {
  webpack: {
    configure: (config: Configuration) => {
      if (config.resolve) {
        config.resolve.alias = {}

        const tsconfigPaths = new TsconfigPathsPlugin()

        config.resolve.plugins = (config.resolve.plugins || []).concat(tsconfigPaths)
      }

      return config
    },
  },
}
