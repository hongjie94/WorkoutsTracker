<template>
    <!-- <v-footer id='drak'>
        © {{ new Date().getFullYear() }}  Online Workout Tracker. All Rights Reserved
    </v-footer> -->
      <div class="footer">
        <div class="footer__wrapper">
            <div class="footer__desc">
                <h1>WORKOUTS TRACKER</h1>
                <p> © {{ new Date().getFullYear() }}  Online Workout Tracker. All Rights Reserved</p>
            </div>
            <div class="footer__links">
                <h2 class="footer__title">Contact Us</h2>
                <a href="#" class="footer__link">Contact</a>
                <a href="#" class="footer__link">Support</a>
                <a href="#" class="footer__link">Sponserships</a>
            </div>
        </div>
        <div class="footer__wrapper">
            <div class="footer__links">
                <h2 class="footer__title">Workouts </h2>
                <a href="#" class="footer__link">Mucle Training</a>
                <a href="#" class="footer__link">Intence Cardios</a>
                <a href="#" class="footer__link">Yoga</a>
            </div>
            <div class="footer__links">
                <h2 class="footer__title">Products</h2>
                <a href="#" class="footer__link">Instagram</a>
                <a href="#" class="footer__link">Facebook</a>
                <a href="#" class="footer__link">Youtube</a>
                <a href="#" class="footer__link">Twitter</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MyFooter'
}
</script>

<style scoped>

.footer {
    padding: 4rem calc((100vw - 1100px) / 2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: var(--white);
    background: #000000;
    z-index: 9999
}

.footer__desc {
    padding: 0 2rem;
}

.footer__desc h1 {
    margin-bottom: 2rem;
    color: #3072e5    ;
}

.footer__desc p {
    margin-bottom: 1rem;
}

#phone {
    font-weight: bold;
    font-size: 1.2rem;
}

.footer__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.footer__links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;
}

.footer__title {
    font-size: 20px;
    margin-bottom: 16px;
    font-weight: bold;
}

.footer__link {
    text-decoration: none;
    color: rgb(242, 242, 242);
    font-size: 14px;
    margin-bottom: 0.5rem;
    transition: 0.3s ease-in-out;
}

.footer__link:hover {
color: #3072e5      ;
}

@media screen and (max-width: 820px) {
    .footer__wrapper {
        grid-template-columns: 1fr;
    }
}

@media screen and (max-width: 400px) {
    .footer__desc {
        padding: 1rem;
    }

    .footer__links {
        padding: 1rem;
    }
}
</style>
