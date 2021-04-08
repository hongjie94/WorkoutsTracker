export default [
  {
    id: 1,
    name: 'Insanity',
    category: 'Cardio',
    route: 'Insanity',
    price: 9.99,
    price_id: `${process.env.VUE_APP_INSANITY_PRICE_ID}`, // Strip Checkout price id
    imageURL: require('@/components/Workouts/Insanity/cover.png'),
    includes: {
      a: '14 Online Workout Videos',
      b: 'Insanity Calendar',
      c: 'Download Links'
    },
    equipments: {
      a: 'No Equipment Required'
    }
  },
  {
    id: 2,
    name: 'Insanity Max: 30',
    route: 'InsaityMax30',
    category: 'Cardio',
    price: 9.99,
    price_id: `${process.env.VUE_APP_MAX30_PRICE_ID}`,
    imageURL: require('@/components/Workouts/InsanityMax30/cover.jpg'),
    includes: {
      a: '15 Online Workout Videos',
      b: 'MAX OUT Calendar',
      c: 'Download Links'
    },
    equipments: {
      a: 'No Equipment Required'
    },
    required: {
      a: 'Yoga Mat (optional)'
    }
  },
  {
    id: 3,
    name: 'Insanity Asylum Vol. 1',
    route: 'InsaityAsylumv1',
    category: 'Cardio',
    price: 4.99,
    price_id: `${process.env.VUE_APP_ASYLUM_V1_PRICE_ID}`,
    imageURL: require('@/components/Workouts/AsylumVol1/cover.jpeg'),
    includes: {
      a: '8 Online Workout Videos',
      b: 'Asylum Vol.1 Calendar',
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
    imageURL: require('@/components/Workouts/AsylumVol2/cover.jpg'),
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
    imageURL: require('@/components/Workouts/T25/cover.jpg'),
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
    imageURL: require('@/components/Workouts/Transform20/cover.png'),
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
    imageURL: require('@/components/Workouts/P90x/cover.jpg'),
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
    imageURL: require('@/components/Workouts/P90x2/cover.jpg'),
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
    imageURL: require('@/components/Workouts/P90x3/cover.png'),
    includes: {
      a: '13 Online Workout Videos',
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
    imageURL: require('@/components/Workouts/P90xPlus/cover.jpeg'),
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
    price_id: `${process.env.VUE_APP_STRIPE_PRICE_ID11}`,
    imageURL: require('@/components/Workouts/CoreDeForce/cover.jpg'),
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
