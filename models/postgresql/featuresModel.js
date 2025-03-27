import { Features } from '../../config/db.js'

export class FeaturesModel {
  static async getAllFeatures ({ name }) {
    try {
      const conditions = {}

      if (name) conditions.name = name

      const features = await Features.findAll({
        where: conditions
      })

      if (!features) throw new Error('No features found')

      return features
    } catch (e) {
      console.error('Error getting features:', e)
      throw new Error(e.message ?? 'Error getting features')
    }
  }
}
