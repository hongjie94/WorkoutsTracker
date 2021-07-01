export default [
  {
    id: 1,
    name: 'Insanity',
    category: 'Cardio',
    route: 'Insanity',
    price: 9.99,
    price_id: `${process.env.VUE_APP_INSANITY_PRICE_ID}`, // Strip Checkout price id
    imageURL: require('../images/workoutCovers/Insanity.png'),
    strogeURL: 'https://firebasestorage.googleapis.com/v0/b/workoutstracker.appspot.com/o/WorkoutCovers%2FInsanity.png?alt=media&token=22127ce5-8769-4130-aa00-3b3d71e4d008',
    includes: {
      a: '55 Days Program',
      b: '6 Days a Week ',
      c: '14 Workout Videos'
    },
    equipments: {
      a: 'No Equipment Required'
    }
  },
  {
    id: 2,
    name: 'Insanity Max 30',
    route: 'InsaityMax30',
    category: 'Cardio',
    price: 9.99,
    price_id: `${process.env.VUE_APP_MAX30_PRICE_ID}`,
    imageURL: require('../images/workoutCovers/InsanityMax30.jpg'),
    strogeURL: 'https://firebasestorage.googleapis.com/v0/b/workoutstracker.appspot.com/o/WorkoutCovers%2FInsanityMax30.jpg?alt=media&token=318fea6c-8914-4c10-99db-43082eea6aa2',
    includes: {
      a: '2 Month Workout',
      b: '6 Days a Week',
      c: '15 Workout Videos'
    },
    equipments: {
      a: 'No Equipment Required'
    }
  },
  {
    id: 3,
    name: 'Insanity Asylum Vol. 1',
    route: 'InsaityAsylumv1',
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
      b: 'Exercise bands',
      c: 'Speed rope',
      d: 'Yoga Mat (optional)'
    }
  },
  {
    id: 4,
    name: 'Insanity Asylum Vol. 2',
    route: 'InsaityAsylumv2',
    category: 'Cardio',
    price: 4.99,
    price_id: `${process.env.VUE_APP_ASYLUM_V2_PRICE_ID}`,
    imageURL: require('../images/workoutCovers/AsylumVol2.jpg'),
    strogeURL: 'https://firebasestorage.googleapis.com/v0/b/workoutstracker.appspot.com/o/WorkoutCovers%2FAsylumVol2.jpg?alt=media&token=12b278e0-7539-4951-b6ac-be9625666472',
    includes: {
      a: '8 Online Workout Videos',
      b: 'Asylum Vol.2 Calendar',
      c: 'Download Links'
    },
    equipments: {
      a: 'Equipment Required'
    },
    required: {
      a: 'Agility ladder',
      b: 'Exercise bands',
      c: 'Speed rope',
      d: 'Yoga Mat (optional)'
    }
  },
  {
    id: 5,
    name: 'FOCUS T25',
    category: 'Cardio',
    route: 'FT25',
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
    route: 'T20',
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
    route: 'P90X',
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
    route: 'P90X2',
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
    route: 'P90X3',
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
    name: 'P90X PLUS',
    route: 'P90X_plus',
    category: 'Muscle',
    price: 4.99,
    price_id: `${process.env.VUE_APP_P90X_PLUS_PRICE_ID}`,
    imageURL: require('../images/workoutCovers/P90xPlus.jpeg'),
    strogeURL: 'https://firebasestorage.googleapis.com/v0/b/workoutstracker.appspot.com/o/WorkoutCovers%2FP90X_PLUS.jpeg?alt=media&token=40f12007-d7a5-4df6-b2fa-0a83607d9bce',
    includes: {
      a: '5 Online Workout Videos',
      b: 'P90X PLUS Calendar',
      c: 'Download Links'
    },
    equipments: {
      a: 'No Equipment Required'
    }
  },
  // {
  //   id: 11,
  //   name: 'CORE DE FORCE',
  //   route: 'CDF',
  //   price: 9.99,
  //   imageURL: require('@/components/Workouts/CoreDeForce/cover.jpg'),
  //   includes: {
  //     a: 'MMA Speed-27 minutes',
  //     b: 'Dynamic Strength-47 minutes',
  //     c: 'Core Kinetics-16 minutes',
  //     d: '5 Minute Core on the Floor-5 minutes',
  //     e: 'MMA Shred-37 minutes',
  //     f: 'Power Sculpt-37 minutes',
  //     g: 'Core De Force Relief-5 minutes',
  //     h: 'MMA Power-47 minutes',
  //     i: 'MMA Plyo-47 minutes',
  //     j: 'Active Recovery-21 minutes',
  //     k: 'MMA Mashup-26 minutes'
  //   },
  //   equipments: {
  //     a: 'No Equipment Required'
  //   }
  // },
  {
    id: 11,
    name: 'CORE DE FORCE',
    route: 'CDF',
    category: 'Cardio',
    price: 9.99,
    price_id: `${process.env.VUE_APP_CDF_PRICE_ID}`,
    imageURL: require('../images/workoutCovers/CoreDeForce.jpg'),
    strogeURL: 'https://firebasestorage.googleapis.com/v0/b/workoutstracker.appspot.com/o/WorkoutCovers%2FCDF.jpg?alt=media&token=fb635309-6502-4726-a0fd-dffd93d3defd',
    includes: {
      a: '15 Online Workout Vedios',
      b: 'MAX OUT Calendar',
      c: 'Download Links'
    },
    equipments: {
      a: 'No Equipment Required'
    }
  }
]
