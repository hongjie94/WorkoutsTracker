<template>
    <div>
        <b-container fluid="xl" class="sheet">
            <b-row class="month-row">
                <b-col class="month2"><h4>MONTH 2</h4></b-col>
            </b-row>
            <b-row class="date-row">
                <b-col class="col-1"></b-col>
                <b-col><p>MONDAY</p></b-col>
                <b-col><p>TUESDAY</p></b-col>
                <b-col><p>WENDSDAY</p></b-col>
                <b-col><p>THURSDAY</p></b-col>
                <b-col><p>FRIDAY</p></b-col>
                <b-col><p>SATURDAY</p></b-col>
                <b-col><p>SUNDAY</p></b-col>
            </b-row>
            <div class="boxes">
                <b-row class="week1-row" week-row-month2>
                <b-col class="col-1 m2w"><div class="week"><span>WEEK</span><h1>1</h1></div></b-col>
                <b-col class="work1" workout-month2><p>MAX OUT</p><p>CARDIO</p>
                </b-col>
                <b-col class="work2" workout-month2><p>MAX OUT</p><p>POWER</p>
                </b-col>
                <b-col class="work3" workout-month2><p>MAX OUT</p><p>SWEAT</p>
                </b-col>
                <b-col class="work4" workout-month2><p>MAX OUT STRENGTH</p>
                </b-col>
                <b-col class="work5" workout-month2><p>FRIDAY FIGHT:</p><p class="r1">ROUND 2</p>
                </b-col>
                <b-col class="work6" workout-month2>
                    <p class="rest">REST</p>
                    <p class="pluse">PULSE</p>
                </b-col>
                <b-col class="work7" w7-m2>REST</b-col>
                </b-row>
                <b-row class="week2-row" week-row-month2>
                <b-col class="col-1 m2w"><div class="week"><span>WEEK</span><h1>2</h1></div></b-col>
                <b-col class="work1" workout-month2><p>MAX OUT</p><p>CARDIO</p>
                </b-col>
                <b-col class="work2" workout-month2><p>MAX OUT</p><p>POWER</p>
                </b-col>
                <b-col class="work3" workout-month2><p>MAX OUT</p><p>SWEAT</p>
                </b-col>
                <b-col class="work4" workout-month2><p>MAX OUT STRENGTH</p>
                </b-col>
                <b-col class="work5" workout-month2><p>FRIDAY FIGHT:</p><p class="r1">ROUND 2</p>
                </b-col>
                <b-col class="work6" workout-month2>
                    <p class="rest">REST</p>
                    <p class="pluse">PULSE</p>
                </b-col>
                <b-col class="work7" w7-m2>REST</b-col>
                </b-row>
                <b-row class="week3-row" week-row-month2>
                <b-col class="col-1 m2w"><div class="week"><span>WEEK</span><h1>3</h1></div></b-col>
                <b-col class="work1" workout-month2><p>MAX OUT</p><p>CARDIO</p>
                </b-col>
                <b-col class="work2" workout-month2><p>MAX OUT</p><p>POWER</p>
                </b-col>
                <b-col class="work3" workout-month2><p>MAX OUT</p><p>SWEAT</p>
                </b-col>
                <b-col class="work4" workout-month2><p>MAX OUT STRENGTH</p>
                </b-col>
                <b-col class="work5" workout-month2><p>FRIDAY FIGHT:</p><p class="r1">ROUND 2</p>
                </b-col>
                <b-col class="work6" workout-month2>
                    <p class="rest">REST</p>
                    <p class="pluse">PULSE</p>
                </b-col>
                <b-col class="work7" w7-m2>REST</b-col>
                </b-row>
                <b-row class="week4-row" week-row-month2>
                <b-col class="col-1 m2lw"><div class="week"><span>WEEK</span><h1>4</h1></div></b-col>
                <b-col class="lwork1" lwork-m2><p>MAX OUT</p><p>CARDIO</p>
                </b-col>
                <b-col class="lwork2" lwork-m2><p>MAX OUT</p><p>POWER</p>
                </b-col>
                <b-col class="lwork3" lwork-m2><p>MAX OUT</p><p>SWEAT</p>
                </b-col>
                <b-col class="lwork4" lwork-m2><p>MAX OUT STRENGTH</p>
                </b-col>
                <b-col class="lwork5" lwork-m2><p>FRIDAY FIGHT:</p><p class="r1">ROUND 2</p>
                </b-col>
                <b-col class="lwork6" lwork-m2>
                    <p class="pluse">CARDIO CHALLENGE</p>
                </b-col>
                <b-col class="lwork7-m2">CHALLENGE COMPLETE!
                <div class="day-60">
                    <p class="white--text" color="teal" @click="overlay = !overlay"> Take your "Day 60" pic & stats </p>
                </div>
                </b-col>
                    <v-overlay :z-index="zIndex" :value="overlay">
                        <v-btn class="white--text" color="teal" @click="overlay = false">
                        Hide Overlay
                        </v-btn>
                        <p>dsadsadsadas</p>
                    </v-overlay>
                </b-row>
            </div>
        </b-container>
    </div>
</template>

<script>
export default {
  data: () => ({
    overlay: false,
    zIndex: 0
  })
}
</script>
