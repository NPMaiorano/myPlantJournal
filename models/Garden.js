const mongoose = require('mongoose')

const GadenSchema = new mongoose.Schema({
  gardenName: {
    type: String,
    required: true,
  },
  creationDate: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }, 
  growZone: {
    type: String,
  },
  bedsAndPots:{
    type: Object,
    required: true,
    beds: {
        bedName:{
            type: String,
            plants: {
                type: Object,

                name:{
                    type: String
                },
                dateGerm:{
                    type: String
                },
                datePlanted:{
                    type: String
                },
                fromSeed:{
                    type: Boolean
                },
                dateTrans:{
                    type: String
                },
                gridLocation:{
                    type: String
                },
                lastWatered:{
                    type: Array,
                    dates: []
                },
                notes:{
                    type: String
                },
                photos:{
                    type: Array,
                    locationStrings: []
                },
                PlantAPI:{
                    type: String
                }
            
            }
        }
    }
  }
})

module.exports = mongoose.model('Garden', GardenSchema)
