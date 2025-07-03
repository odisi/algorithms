import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: 'algorithms',
          root: './src',
          environment: 'node',
        },
      },
    ],
  },
})