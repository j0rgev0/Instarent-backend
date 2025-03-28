import { config } from 'dotenv'

config()

export const env = {
  DATABASE_URL: process.env.DATABASE_URL,
  SIGNATURE: process.env.SIGNATURE,
  PORT: process.env.PORT ?? 3000
}
