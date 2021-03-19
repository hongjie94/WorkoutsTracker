<template>
    <div>
        <div>
            <b-sidebar id="sidebar-variant" title="DAY-1 STATUS" bg-variant="dark" text-variant="light" shadow>
                <div class="px-3 py-2">
                    <v-img src="./cover.jpg"></v-img>
                    <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </p>
                </div>
            </b-sidebar>
        </div>
        <b-container fluid="xl" class="sheet">
            <b-row class="month-row">
                <b-col class="month1"><h4>MONTH 1</h4></b-col>
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
                <b-row class="week1-row" week-row-month1>
                <b-col class="col-1 w"><div class="week"><span>WEEK</span><h1>1</h1></div></b-col>
                <b-col class="work1" workout-month1><p>CARDIO CHALLENGE<p>
                    <div class="day-1" v-b-toggle.sidebar-variant><p>Take your "Day 30"</p><p>pic & stats</p></div>
                </b-col>
                <b-col class="work2" workout-month1><p>TABATA</p> <p>POWER</p>
                </b-col>
                <b-col class="work3" workout-month1><p>SWEAT</p><p>INTERVALS*</p>
                </b-col>
                <b-col class="work4" workout-month1>
                    <p>TABATA</p> <p>POWER</p>
                </b-col>
                <b-col class="work5" workout-month1><p>FRIDAY FIGHT:</p><p class="r1">ROUND 1</p>
                </b-col>
                <b-col class="work6" workout-month1>
                    <p class="rest">REST</p>
                    <p class="pluse">PULSE</p>
                </b-col>
                <b-col class="work7" w7-m1><p>REST</p></b-col>
                </b-row>
                <b-row class="week2-row" week-row-month1>
                <b-col class="col-1 w"><div class="week"><span>WEEK</span><h1>2</h1></div></b-col>
                <b-col class="work1" workout-month1><p>CARDIO CHALLENGE</p>
                </b-col>
                <b-col class="work2" workout-month1><p>TABATA</p> <p>POWER</p>
                </b-col>
                <b-col class="work3" workout-month1><p>SWEAT</p><p>INTERVALS*</p>
                </b-col>
                <b-col class="work4" workout-month1>
                    <p>TABATA</p> <p>POWER</p>
                </b-col>
                <b-col class="work5" workout-month1><p>FRIDAY FIGHT:</p><p class="r1">ROUND 1</p>
                </b-col>
                <b-col class="work6" workout-month1>
                    <p class="rest">REST</p>
                    <p class="pluse">PULSE</p>
                </b-col>
                <b-col class="work7" w7-m1><p>REST</p></b-col>
                </b-row>
                <b-row class="week3-row" week-row-month1>
                <b-col class="col-1 w"><div class="week"><span>WEEK</span><h1>3</h1></div></b-col>
                <b-col class="work1" workout-month1><p>CARDIO CHALLENGE</p>
                </b-col>
                <b-col class="work2" workout-month1><p>TABATA</p> <p>STRENGTH</p>
                </b-col>
                <b-col class="work3" workout-month1><p>SWEAT</p><p>INTERVALS*</p>
                </b-col>
                <b-col class="work4" workout-month1><p>TABATA</p> <p>STRENGTH</p>
                </b-col>
                <b-col class="work5" workout-month1><p>FRIDAY FIGHT:</p><p class="r1">ROUND 1</p>
                </b-col>
                <b-col class="work6" workout-month1>
                    <p class="rest">REST</p>
                    <p class="pluse">PULSE</p>
                </b-col>
                <b-col class="work7" w7-m1><p>REST</p></b-col>
                </b-row>
                <b-row class="week4-row" week-row-month1>
                <b-col class="col-1 lw"><div class="week"><span>WEEK</span><h1>4</h1></div></b-col>
                <b-col class="lwork1" lwork-m1><p>CARDIO CHALLENGE</p>
                </b-col>
                <b-col class="lwork2" lwork-m1> <p>TABATA</p> <p>STRENGTH</p>
                </b-col>
                <b-col class="lwork3" lwork-m1><p>SWEAT</p><p>INTERVALS*</p>
                </b-col>
                <b-col class="lwork4" lwork-m1>
                    <p>TABATA</p> <p>STRENGTH</p>
                </b-col>
                <b-col class="lwork5" lwork-m1><p>FRIDAY FIGHT:</p><p class="r1">ROUND 1</p>
                </b-col>
                <b-col class="lwork6" lwork-m1>
                    <p class="rest">REST</p>
                    <p class="pluse">PULSE</p>
                </b-col>
                <b-col class="lwork7-m1"><p>REST</p><div class="day-30" v-b-toggle.sidebar-right><p>Take your "Day 30"</p><p>pic & stats</p></div></b-col>
                </b-row>
            </div>
            <div>
                <b-sidebar id="sidebar-right" title="Day-30 STATUS" bg-variant="dark" text-variant="light"  right shadow>
                    <div class="px-3 py-2">
                        <v-img src="./cover.jpg"></v-img>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </p>
                    </div>
                </b-sidebar>
            </div>
        </b-container>
    </div>
</template>
