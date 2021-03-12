<template>
  <div class="shop">
    <!-- <p>{{time}}</p>
    <p>{{date}}</p>
    <p>{{day}}</p>
    <p>{{test}}</p> -->
    <section class="new-arrivial">
      <button @click="getDB()">DB Renter</button>
      <div class="arrival-heading">
        <strong>New Arrival</strong>
        <p>We Provide You New Design Fashion Clothes</p>
      </div>
      <div class="product-container">
          <div class="product-box">
            <div class="product-img">
              <a href="javascript:void(0);" class="add-cart">
                <i class="fas fa-shopping-cart"></i>
              </a>
            <v-img src="../components/Shop/1.jpg" alt=""></v-img>
            </div>
            <div class="product-details">
              <a href="javascript:void(0);" class="p-name">Drawstring T-Shirt</a>
              <span class="p-price">$22.00</span>
            </div>
          </div>
      </div>
  </section>
  <section class="new-arrivial">
      <div class="arrival-heading">
        <strong>New Arrival2</strong>
        <p>We Provide You New Design Fashion Clothes</p>
      </div>
      <div class="product-container">
          <div class="product-box">
            <div class="product-img">
              <a href="javascript:void(0);" class="add-cart">
                <i class="fas fa-shopping-cart"></i>
              </a>
            <v-img src="../components/Shop/1.jpg" alt=""></v-img>
            </div>
            <div class="product-details">
              <a href="javascript:void(0);" class="p-name">Drawstring T-Shirt</a>
              <span class="p-price">$22.00</span>
            </div>
          </div>
        </div>
  </section>
  </div>
</template>
<script>
import db from '@/components/firebaseInit'
export default {
  name: 'Calendar',
  data () {
    return {
      time: {},
      date: {},
      day: {},
      test: {},
      show: false
    }
  },
  mounted () {
    const date = new Date()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const day = days[date.getDay()]
    this.time = date.toLocaleTimeString()
    this.date = date.toLocaleDateString()
    this.day = day
    this.test = date
  },
  methods: {
    getDB () {
      db.collection('users').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          console.log(doc.data())
        })
      })
    }
  }
}
</script>
<style>
.mybutton button {
  color:white;
  margin: 1em;
  padding: 1em;
  background-color: blue;
}
.fade-transition-enter {
  color: gold;
}
.box {
  color: red
}

.feature-heading h2, .arrival-heading strong {
    font-size: 1.5rem;
    color: #1b1919;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 40px;
    padding: 5px 30px;
    border: 1px solid #e0e0e0;
}

.feature-box a img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.item span {
 font-size: 1rem;
 font-weight: 600;
 margin: 5px;
 color: #444444;
}

.item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#autoWidth {
    display: flex;
    justify-content: center !important;
    margin: 10px auto 40px;
}

.arrival-heading {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.arrival-heading strong {
    color: white;
    background-color: #202020;
    font-weight: 500;
}

.arrival-heading p {
    color: #808080;
    margin: 10px;
    font-size: 0.9rem;
}

.product-container {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
}

.product-box {
    display: flex;
    flex-grow: 0.5;
    flex-direction: column;
    align-items: center;
    border: 1px solid #f4f4f4;
    border-radius: 10px;
    margin: 20px;
}

.product-img {
    width: 200px;
    height: 210px;
    margin: 20px;
    cursor: pointer;
    position: relative;
}

.product-img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
}

.product-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
    border-top: 1px solid #f3f3f3;
}

.p-name {
    color: #727272;
}

.p-price {
    color: #333333;
    font-size: 1.2rem;
    font-weight: 400;
}

.product-box:hover {
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.1);
}

.add-cart {
    position: absolute;
    right: -20px;
    top: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #0b9d8a;
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.1);
    display: none;
    animation: fade 1s;
}

.add-cart:hover {
    background-color: #f76b6a;
    transition: all ease 0.2s;
}

.product-box:hover .add-cart{
    display: flex;
}

.new-arrivial {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
