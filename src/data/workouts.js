export default [
  {
    id: 1,
    name: 'Insanity',
    category: 'Cardio',
    price: 9.99,
    price_id: `${process.env.VUE_APP_INSANITY_PRICE_ID}`, // Strip Checkout price id
    imageURL: require('../images/workoutCovers/Insanity.png'),
    strogeURL: 'https://firebasestorage.googleapis.com/v0/b/workoutstracker.appspot.com/o/WorkoutCovers%2FInsanity.png?alt=media&token=22127ce5-8769-4130-aa00-3b3d71e4d008',
    includes: {
      a: '63 Days Program',
      b: '6 Workouts Per Week',
      c: '14 Workout Videos'
    },
    equipments: {
      a: 'No Equipment Required'
    }
  },
  {
    id: 2,
    name: 'Insanity Max 30',
    category: 'Cardio',
    price: 9.99,
    price_id: `${process.env.VUE_APP_MAX30_PRICE_ID}`,
    imageURL: require('../images/workoutCovers/InsanityMax30.jpg'),
    strogeURL: 'https://firebasestorage.googleapis.com/v0/b/workoutstracker.appspot.com/o/WorkoutCovers%2FInsanityMax30.jpg?alt=media&token=318fea6c-8914-4c10-99db-43082eea6aa2',
    includes: {
      a: '55 Days Program',
      b: '6 Workouts Per Week',
      c: '15 Workout Videos'
    },
    equipments: {
      a: 'No Equipment Required'
    }
  },
  {
    id: 3,
    name: 'Insanity Asylum Vol 1',
    category: 'Cardio',
    price: 4.99,
    price_id: `${process.env.VUE_APP_ASYLUM_V1_PRICE_ID}`,
    imageURL: require('../images/workoutCovers/AsylumVol1.jpeg'),
    strogeURL: 'https://firebasestorage.googleapis.com/v0/b/workoutstracker.appspot.com/o/WorkoutCovers%2FAsylumVol1.jpeg?alt=media&token=69442e77-8bc8-4e48-a459-aeed1b8080c2',
    includes: {
      a: '8 Workout Videos',
      b: 'Full Calendar',
      c: 'Download Links'
    },
    equipments: {
      a: 'Equipment Required'
    },
    required: {
      a: 'Agility ladder',
      b: 'Resistance Bands',
      c: 'Jump Rope',
      d: 'Yoga Mat (optional)'
    }
  },
  {
    id: 4,
    name: 'Insanity Asylum Vol 2',
    category: 'Cardio',
    price: 4.99,
    price_id: `${process.env.VUE_APP_ASYLUM_V2_PRICE_ID}`,
    imageURL: require('../images/workoutCovers/AsylumVol2.jpg'),
    strogeURL: 'https://firebasestorage.googleapis.com/v0/b/workoutstracker.appspot.com/o/WorkoutCovers%2FAsylumVol2.jpg?alt=media&token=12b278e0-7539-4951-b6ac-be9625666472',
    includes: {
      a: '28 Days Program',
      b: '6 Workouts Per Week',
      c: '9 Workout Videos'
    },
    equipments: {
      a: 'Equipment Required'
    },
    required: {
      a: 'Agility ladder',
      b: 'Resistance Bands',
      c: 'Jump Rope',
      d: 'Yoga Mat (optional)'
    }
  },
  {
    id: 5,
    name: 'FOCUS T25',
    category: 'Cardio',
    price: 9.99,
    price_id: `${process.env.VUE_APP_T25_PRICE_ID}`,
    imageURL: require('../images/workoutCovers/T25.jpg'),
    strogeURL: 'https://firebasestorage.googleapis.com/v0/b/workoutstracker.appspot.com/o/WorkoutCovers%2FT25.jpg?alt=media&token=7832ed3a-18b2-44f7-a16e-c2f60e4b90b2',
    includes: {
      a: '16 Online Workout Videos',
      b: 'T25 Calendar',
      c: 'Download Links'
    },
    equipments: {
      a: 'Equipment Required'
    },
    required: {
      a: 'Resistance Bands',
      b: 'Chin-Up Bar (optional)',
      c: 'Dumbbells (optional)',
      d: 'miniMAT (optional)'
    }
  },
  {
    id: 6,
    name: 'Transform 20',
    category: 'Cardio',
    price: 14.99,
    price_id: `${process.env.VUE_APP_T20_PRICE_ID}`,
    imageURL: require('../images/workoutCovers/Transform20.png'),
    strogeURL: 'https://firebasestorage.googleapis.com/v0/b/workoutstracker.appspot.com/o/WorkoutCovers%2FTransform20.png?alt=media&token=743a267e-0c69-4f3c-b803-c38c07714762',
    includes: {
      a: '36 Online Workout Videos',
      b: 'Transform 20 Calendar',
      c: 'Download Links'
    },
    equipments: {
      a: 'Equipment Required'
    },
    required: {
      a: 'Workout Step',
      b: 'Yoga Mat (optional)'
    }
  },
  {
    id: 7,
    name: 'P90X',
    category: 'Muscle',
    price: 9.99,
    price_id: `${process.env.VUE_APP_P90X_PRICE_ID}`,
    imageURL: require('../images/workoutCovers/P90x.jpg'),
    strogeURL: 'https://firebasestorage.googleapis.com/v0/b/workoutstracker.appspot.com/o/WorkoutCovers%2FP90X.jpg?alt=media&token=6c330cba-040d-47d0-aa6d-c2baaaf86c41',
    includes: {
      a: '13 Online Workout Videos',
      b: 'P90X Calendar',
      c: 'Download Links'
    },
    equipments: {
      a: 'Equipment Required'
    },
    required: {
      a: 'Resistance Bands',
      b: 'Yoga Mat',
      c: 'Dumbbells (optional)',
      d: 'Chin-Up Bar (optional)'
    }
  },
  {
    id: 8,
    name: 'P90X2',
    category: 'Muscle',
    price: 9.99,
    price_id: `${process.env.VUE_APP_P90X2_PRICE_ID}`,
    imageURL: require('../images/workoutCovers/P90x2.jpg'),
    strogeURL: 'https://firebasestorage.googleapis.com/v0/b/workoutstracker.appspot.com/o/WorkoutCovers%2FP90X2.jpg?alt=media&token=272fd16d-26b6-4fb7-8eb9-bb48fceb3d3d',
    includes: {
      a: '16 Online Workout Videos',
      b: 'P90X2 Calendar',
      c: 'Download Links'
    },
    equipments: {
      a: 'Equipment Required'
    },
    required: {
      a: 'Resistance Bands',
      b: 'Yoga Mat',
      c: 'Dumbbells (optional)',
      d: 'Chin-Up Bar (optional)',
      e: 'Stability Ball (optional)',
      f: 'Yoga Blocks (optional)'
    }
  },
  {
    id: 9,
    name: 'P90X3',
    price: 9.99,
    category: 'Muscle',
    price_id: `${process.env.VUE_APP_P90X3_PRICE_ID}`,
    imageURL: require('../images/workoutCovers/P90x3.png'),
    strogeURL: 'https://firebasestorage.googleapis.com/v0/b/workoutstracker.appspot.com/o/WorkoutCovers%2FP90X3.png?alt=media&token=240b952e-95fd-4517-b812-94dfbfeb6b4d',
    includes: {
      a: '13 Workout Videos',
      b: 'P90X3 Calendar',
      c: 'Download Links'
    },
    equipments: {
      a: 'Equipment Required'
    },
    required: {
      a: 'Resistance Bands',
      b: 'Yoga Mat',
      c: 'Dumbbells (optional)',
      d: 'Chin-Up Bar (optional)',
      e: 'Stability Ball (optional)',
      f: 'Yoga Blocks (optional)'
    }
  },
  {
    id: 10,
    name: 'CORE DE FORCE',
    category: 'Cardio',
    price: 9.99,
    price_id: `${process.env.VUE_APP_CDF_PRICE_ID}`,
    imageURL: require('../images/workoutCovers/CoreDeForce.jpg'),
    strogeURL: 'https://firebasestorage.googleapis.com/v0/b/workoutstracker.appspot.com/o/WorkoutCovers%2FCDF.jpg?alt=media&token=fb635309-6502-4726-a0fd-dffd93d3defd',
    includes: {
      a: '30 Days Program',
      b: '7 Workouts Per Week',
      c: '15 Workout Videos'
    },
    equipments: {
      a: 'No Equipment Required'
    }
  },
  {
    id: 11,
    name: '10 Rounds',
    category: 'Cardio',
    price: 9.99,
    price_id: `${process.env.VUE_APP_10ROUNDS_PRICE_ID}`,
    imageURL: require('../images/workoutCovers/10Rounds.jpg'),
    strogeURL: 'https://firebasestorage.googleapis.com/v0/b/workoutstracker.appspot.com/o/WorkoutCovers%2F10Rounds.jpg?alt=media&token=b42cdc26-97b6-495a-85b0-d4bf6333cea4',
    includes: {
      a: '40 Days Program',
      b: '5 Workouts Per Week',
      c: 'Download Links'
    },
    equipments: {
      a: 'No Equipment Required'
    }
  }
]
