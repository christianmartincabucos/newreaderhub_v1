<template>
    <main>
        <div class="container-fluid container-padding row">
            <div class="col-lg-7 col-md-7 col-sm-7 ">
                <div class="card card-lightgray mt-72 mb-2">
                    <div class="card-header card-gray pl-2 p-1">
                        <a type="button" :hidden="mainGame" @click="BackToPrev(gameMenu, null, true)">
                            <i class=" fas fa-chevron-circle-left"></i>
                        </a>
                    </div>
                    <div class="card-body text-white">
                        <h1>{{ gameName }}</h1>
                    </div>
                </div>
                <div v-if="gamesTypes">
                    <div class="card my-1 mb-3">
                        <div class="card-header pr-1 pt-4 pb-5 card-gray">
                        </div>
                        <div class="card-body rounded p-1">
                            <div class="d-flex align-content-bottom justify-content-between font-weight-bold">
                                <div class="col-sm-4 pl-2 pr-0">
                                    <h3 class="">QUESTIONS</h3>
                                </div>
                                <div class="col-sm-8 pl-3 align-content-bottom mt-2">
                                    <a type="button" @click="GameSelected('questionMenu', questionType.questionmeme, true)">PLAY NOW  ></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card my-1 mb-3">
                        <div class="card-header pr-1 pt-4 pb-5 card-gray">
                        </div>
                        <div class="card-body rounded p-1">
                            <div class="d-flex align-content-bottom justify-content-between font-weight-bold">
                                <div class="col-sm-4 pl-2 pr-0">
                                    <h3 class="">PUZZLES</h3>
                                </div>
                                <div class="col-sm-8 pl-3 align-content-bottom mt-2">
                                    <a type="button">PLAY NOW  ></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card my-1 mb-3">
                        <div class="card-header pr-1 pt-4 pb-5 card-gray">
                        </div>
                        <div class="card-body rounded p-1">
                            <div class="d-flex align-content-bottom justify-content-between font-weight-bold">
                                <div class="col-sm-4 pl-2 pr-0">
                                    <h3 class="">TRIVIA</h3>
                                </div>
                                <div class="col-sm-8 pl-3 align-content-bottom mt-2">
                                    <a type="button" @click="GameSelected('triviaMenu', questionType.trivia, true)">PLAY NOW  ></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card my-1 mb-3">
                        <div class="card-header pr-1 pt-4 pb-5 card-gray">
                        </div>
                        <div class="card-body rounded p-1">
                            <div class="d-flex align-content-bottom justify-content-between font-weight-bold">
                                <div class="col-sm-4 pl-2 pr-0">
                                    <h3 class="">INTERESTS</h3>
                                </div>
                                <div class="col-sm-8 pl-3 align-content-bottom mt-2">
                                    <a type="button" @click="GameSelected('interestMain', questionType.interestMain, true)">PLAY NOW  ></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="card card-lightgray mt-2 mb-2">
                        <div class="card-body text-center">
                            <h1>{{ question1 }}</h1>
                        </div>
                    </div>
                    <div class="card card-lightgray mt-3">
                        <div class="card-body text-center" v-if="gameCategory.questionMenu.main">
                            <div class="md-form">
                                <input type="text" id="form1" class="form-control" placeholder="Enter your answer..." style="border-bottom: 1px solid #fff!important;">
                                <!-- <label for="form1"></label> -->
                            </div>
                        </div>
                        <div class="card-body text-center" v-if="gameCategory.triviaMenu">
                            <div class="row pl-5">
                                <div class="col-sm-4 pb-5 px-2">
                                    <a type="button" @click.prevent="SelectedChoice('artistType', questionType.art, true)">
                                        <div class="question-box px-2">
                                            <div class="form-check form-check-inline d-flex justify-content-start">
                                                <input type="radio" class="form-check-input mr-2" id="materialInline1" name="inlineMaterialRadiosExample">
                                                <label class="form-check-label h1-responsive pr-3 mb-2" for="materialInline1"></label>
                                                <h1 class="pt-2">A</h1>
                                            </div>
                                            <p>this is the answer</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-sm-4 pb-5 px-2">
                                    <a type="button">
                                    <div class="question-box p-2">
                                        <h1>B</h1>
                                        <p class="fs-half">this is the answer</p>
                                    </div>
                                    </a>
                                </div>
                                <div class="col-sm-4 pb-5 px-2">
                                    <a type="button">
                                    <div class="question-box p-2">
                                        <h1>C</h1>
                                        <p>this is the answer</p>
                                    </div>
                                    </a>
                                </div>
                                <div class="col-sm-4 pb-5 px-2">
                                    <a type="button">
                                    <div class="question-box p-2">
                                        <h1>D</h1>
                                        <p>this is the answer</p>
                                    </div>
                                    </a>
                                </div>
                                <div class="col-sm-4 pb-5 px-2">
                                    <a type="button">
                                    <div class="question-box p-2">
                                        <h1>E</h1>
                                        <p>this is the answer</p>
                                    </div>
                                    </a>
                                </div>
                                <div class="col-sm-4 pb-5 px-2">
                                    <a type="button">
                                    <div class="question-box p-2">
                                        <h1>F</h1>
                                        <p>this is the answer</p>
                                    </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="card-body text-center" v-if="gameCategory.interestsMenu.main">
                            <div class="row">
                                <div class="col-sm-4 py-4 px-2">
                                    <a type="button"  @click="GameSelected('interestSub', questionType.subInterest, true)">
                                        <div class="artist-box p-2">
                                            <div class="form-check form-check-inline d-flex justify-content-start">
                                                <input type="radio" class="form-check-input mr-2" id="materialInline1" name="inlineMaterialRadiosExample">
                                                <label class="form-check-label h1-responsive pr-4 mb-2" for="materialInline1"></label>
                                            </div>

                                            <h3>Visual Arts</h3>
                                        </div>
                                    </a>
                                </div>
                                    <div class="col-sm-4 py-4 px-2">
                                    <a type="button">
                                        <div class="artist-box p-2">
                                            <div class="form-check form-check-inline d-flex justify-content-start">
                                                <input type="radio" class="form-check-input mr-2" id="materialInline1" name="inlineMaterialRadiosExample">
                                                <label class="form-check-label h1-responsive pr-4 mb-2" for="materialInline1"></label>
                                            </div>

                                            <h4>Performance Arts</h4>
                                        </div>
                                    </a>
                                </div>
                                    <div class="col-sm-4 py-4 px-2">
                                    <a type="button">
                                        <div class="artist-box p-2">
                                            <div class="form-check form-check-inline d-flex justify-content-start">
                                                <input type="radio" class="form-check-input mr-2" id="materialInline1" name="inlineMaterialRadiosExample">
                                                <label class="form-check-label h1-responsive pr-4 mb-2" for="materialInline1"></label>
                                            </div>

                                            <h3>Design</h3>
                                        </div>
                                    </a>
                                </div>
                                    <div class="col-sm-4 py-4 px-2">
                                    <a type="button">
                                        <div class="artist-box p-2">
                                            <div class="form-check form-check-inline d-flex justify-content-start">
                                                <input type="radio" class="form-check-input mr-2" id="materialInline1" name="inlineMaterialRadiosExample">
                                                <label class="form-check-label h1-responsive pr-4 mb-2" for="materialInline1"></label>
                                            </div>

                                            <h3>Music</h3>
                                        </div>
                                    </a>
                                </div>
                                    <div class="col-sm-4 py-4 px-2">
                                    <a type="button">
                                        <div class="artist-box p-2">
                                            <div class="form-check form-check-inline d-flex justify-content-start">
                                                <input type="radio" class="form-check-input mr-2" id="materialInline1" name="inlineMaterialRadiosExample">
                                                <label class="form-check-label h1-responsive pr-4 mb-2" for="materialInline1"></label>
                                            </div>

                                            <h3>TV & Films</h3>
                                        </div>
                                    </a>
                                </div>
                                    <div class="col-sm-4 py-4 px-2">
                                    <a type="button">
                                        <div class="artist-box p-2">
                                            <div class="form-check form-check-inline d-flex justify-content-start">
                                                <input type="radio" class="form-check-input mr-2" id="materialInline1" name="inlineMaterialRadiosExample">
                                                <label class="form-check-label h1-responsive pr-4 mb-2" for="materialInline1"></label>
                                            </div>

                                            <h3>Literature</h3>
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div class="card-body text-center" v-if="gameCategory.interestsMenu.sub">
                            <div class="row">
                                <div class="col-sm-3 py-1 px-1">
                                    <a type="button">
                                        <div class="arttype-box pt-0 px-1">
                                            <div class="form-check form-check-inline d-flex justify-content-start">
                                                <input type="radio" class="form-check-input mr-2" id="materialInline1" name="inlineMaterialRadiosExample">
                                                <label class="form-check-label h1-responsive pr-4" for="materialInline1"></label>
                                            </div>

                                        <p class="fs-half">Classical</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-sm-3 py-1 px-1">
                                    <a type="button">
                                        <div class="arttype-box pt-0 px-1">
                                            <div class="form-check form-check-inline d-flex justify-content-start">
                                                <input type="radio" class="form-check-input mr-2" id="materialInline1" name="inlineMaterialRadiosExample">
                                                <label class="form-check-label h1-responsive pr-4" for="materialInline1"></label>
                                            </div>

                                        <p class="fs-half">Contemporary</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-sm-3 py-1 px-1">
                                    <a type="button">
                                        <div class="arttype-box pt-0 px-1">
                                            <div class="form-check form-check-inline d-flex justify-content-start">
                                                <input type="radio" class="form-check-input mr-2" id="materialInline1" name="inlineMaterialRadiosExample">
                                                <label class="form-check-label h1-responsive pr-4" for="materialInline1"></label>
                                            </div>

                                        <p class="fs-half">Pop Art</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-sm-3 py-1 px-1">
                                    <a type="button">
                                        <div class="arttype-box pt-0 px-1">
                                            <div class="form-check form-check-inline d-flex justify-content-start">
                                                <input type="radio" class="form-check-input mr-2" id="materialInline1" name="inlineMaterialRadiosExample">
                                                <label class="form-check-label h1-responsive pr-4" for="materialInline1"></label>
                                            </div>

                                        <p class="fs-half">Cubism</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-sm-3 py-1 px-1">
                                    <a type="button">
                                        <div class="arttype-box pt-0 px-1">
                                            <div class="form-check form-check-inline d-flex justify-content-start">
                                                <input type="radio" class="form-check-input mr-2" id="materialInline1" name="inlineMaterialRadiosExample">
                                                <label class="form-check-label h1-responsive pr-4" for="materialInline1"></label>
                                            </div>

                                        <p class="fs-half">Art Deco</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-sm-3 py-1 px-1">
                                    <a type="button">
                                        <div class="arttype-box pt-0 px-1">
                                            <div class="form-check form-check-inline d-flex justify-content-start">
                                                <input type="radio" class="form-check-input mr-2" id="materialInline1" name="inlineMaterialRadiosExample">
                                                <label class="form-check-label h1-responsive pr-4" for="materialInline1"></label>
                                            </div>

                                        <p class="fs-half">Art Nouveau</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-sm-3 py-1 px-1">
                                    <a type="button">
                                        <div class="arttype-box pt-0 px-1">
                                            <div class="form-check form-check-inline d-flex justify-content-start">
                                                <input type="radio" class="form-check-input mr-2" id="materialInline1" name="inlineMaterialRadiosExample">
                                                <label class="form-check-label h1-responsive pr-4" for="materialInline1"></label>
                                            </div>

                                        <p class="fs-half">Post-Impressionism</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-sm-3 py-1 px-1">
                                    <a type="button">
                                        <div class="arttype-box pt-0 px-1">
                                            <div class="form-check form-check-inline d-flex justify-content-start">
                                                <input type="radio" class="form-check-input mr-2" id="materialInline1" name="inlineMaterialRadiosExample">
                                                <label class="form-check-label h1-responsive pr-4" for="materialInline1"></label>
                                            </div>

                                        <p class="fs-half">Impressionism</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-sm-3 py-1 px-1">
                                    <a type="button">
                                        <div class="arttype-box pt-0 px-1">
                                            <div class="form-check form-check-inline d-flex justify-content-start">
                                                <input type="radio" class="form-check-input mr-2" id="materialInline1" name="inlineMaterialRadiosExample">
                                                <label class="form-check-label h1-responsive pr-4" for="materialInline1"></label>
                                            </div>

                                        <p class="fs-half">Modern</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-sm-3 py-1 px-1">
                                    <a type="button">
                                        <div class="arttype-box pt-0 px-1">
                                            <div class="form-check form-check-inline d-flex justify-content-start">
                                                <input type="radio" class="form-check-input mr-2" id="materialInline1" name="inlineMaterialRadiosExample">
                                                <label class="form-check-label h1-responsive pr-4" for="materialInline1"></label>
                                            </div>

                                        <p class="fs-half">Comics</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-sm-3 py-1 px-1">
                                    <a type="button">
                                        <div class="arttype-box pt-0 px-1">
                                            <div class="form-check form-check-inline d-flex justify-content-start">
                                                <input type="radio" class="form-check-input mr-2" id="materialInline1" name="inlineMaterialRadiosExample">
                                                <label class="form-check-label h1-responsive pr-4" for="materialInline1"></label>
                                            </div>

                                        <p class="fs-half">Photography</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-sm-3 py-1 px-1">
                                    <a type="button">
                                        <div class="arttype-box pt-0 px-1">
                                            <div class="form-check form-check-inline d-flex justify-content-start">
                                                <input type="radio" class="form-check-input mr-2" id="materialInline1" name="inlineMaterialRadiosExample">
                                                <label class="form-check-label h1-responsive pr-4" for="materialInline1"></label>
                                            </div>

                                        <p class="fs-half">Graffiti</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-sm-3 py-1 px-1">
                                    <a type="button">
                                        <div class="arttype-box pt-0 px-1">
                                            <div class="form-check form-check-inline d-flex justify-content-start">
                                                <input type="radio" class="form-check-input mr-2" id="materialInline1" name="inlineMaterialRadiosExample">
                                                <label class="form-check-label h1-responsive pr-4" for="materialInline1"></label>
                                            </div>

                                        <p class="fs-half">Manga</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-sm-3 py-1 px-1">
                                    <a type="button">
                                        <div class="arttype-box pt-0 px-1">
                                            <div class="form-check form-check-inline d-flex justify-content-start">
                                                <input type="radio" class="form-check-input mr-2" id="materialInline1" name="inlineMaterialRadiosExample">
                                                <label class="form-check-label h1-responsive pr-4" for="materialInline1"></label>
                                            </div>

                                        <p class="fs-half">Cartoon</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-sm-3 py-1 px-1">
                                    <a type="button">
                                        <div class="arttype-box pt-0 px-1">
                                            <div class="form-check form-check-inline d-flex justify-content-start">
                                                <input type="radio" class="form-check-input mr-2" id="materialInline1" name="inlineMaterialRadiosExample">
                                                <label class="form-check-label h1-responsive pr-4" for="materialInline1"></label>
                                            </div>

                                        <p class="fs-half">Others</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-md-5 col-sm-5 p-0">
                    <Birthday></Birthday>
                <div class="row">
                    <div class="col-5 mt-3 pr-0 mb-5">
                        <Advertisement></Advertisement>
                    </div>

                    <div class="col-7 mt-3 pl-2">
                        <Links></Links>
                    </div>

                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
    .card-lightgray {
        background-color: #CCCCCC !important;
    }

    .mt-72 {
        margin-top: 72px !important;
    }

    .box {
        width: 250px;
        height: 62px;
        margin-right: 2px;
        background-color: #fff;
    }

    .link-box {
        width: 300px;
        height: 93px;
        margin-right: 2px;
        background-color: #fff;
    }

    .card-lightgray {
        border: 0px !important;
        box-shadow: none !important;
    }

    .br-0 {
        border-radius: 0px !important;
    }

    .h6-bday {
        font-size: 0.5rem !important;
        line-height: 0.5 !important;
    }
    .card-lightgray {
        background-color: #CCCCCC !important;
    }
    .rounded {
        background-color: #FFFFFF !important;
    }
    @media (min-width: 576px){
        .col-sm-3 {
            flex: 0 0 25%;
            max-width: 20%;
        }
    }
    .fs-half{
       font-size: 0.8rem;
    }
    .question-box{
        width: 145px;
        height: 140px;
        background-color: #fff;
        border-radius: 5px;
        text-align: center;
        align-content: center;
    }
    .artist-box{
        height: 130px;
        background-color: #fff;
        border-radius: 5px;
        text-align: center;
        align-content: center;
    }
    .arttype-box{
        /* width: 120px; */
        height: 70px;
        background-color: #fff;
        border-radius: 5px;
        text-align: center;
        align-content: center;
    }

    .form-check-input:checked::after{
        content: '✔';
        align-content:center;
    }
</style>
<script>
import Birthday from '../views/_Birthday'
import Advertisement from '../views/_Advertisement'
import Links from '../views/_Links'
export default {
    name:'games',
    components:{
        Birthday,
        Advertisement,
        Links
    },
    data(){
        return{
            gameSelected        :{
                1               : 'Interests',
                2               : 'Puzzles',
                3               : 'Trivia',
                4               : 'Questions'
            },
            questionType:{
                trivia          : "Question 1: What kind of artist are you?",
                interestMain    : "What would kind of art are you most fond of?",
                subInterest     : "What would kind of visual art are you most fond of?",
                questionmeme    : "What do you think of meme culture?"
            },
            gameCategory        : {
                questionMenu    : {
                    main        : false
                },
                puzzlesMenu     : false,
                triviaMenu      : false,
                interestsMenu   : {
                    main        : false,
                    sub         : false
                }
            },
            gameMenu            : '',
            gameName            : 'Games',
            question1           : '',
            mainGame            : true,
            gamesTypes          : true,
            triviaMain          : false,

        }
    },

    methods:{
        GameSelected(e, data, choice){
            switch (e) {
                case 'questionMenu':
                    // console.log(this.gameCategory.questionMenu.main);
                    this.gameMenu                         = 'questionMenu';
                    this.gameCategory.questionMenu.main   = choice;
                    this.gameCategory.triviaMenu          = !choice;
                    this.gameCategory.interestsMenu.main  = !choice;
                    this.gameCategory.interestsMenu.sub   = !choice;
                    this.mainGame                         = !choice
                    this.question1                        = data;
                    this.gamesTypes                       = !choice;
                    this.gameName                         = this.gameSelected[4];
                break;
                case 'triviaMenu':
                    this.gameMenu                         = 'triviaMenu';
                    this.gameCategory.interestsMenu.sub   = !choice;
                    this.gameCategory.questionMenu.main   = !choice;
                    this.gameCategory.triviaMenu          = choice;
                    this.gamesTypes                       = !choice;
                    this.mainGame                         = !choice
                    this.triviaMain                       = choice;
                    this.question1                        = data;
                    this.gameName                         = this.gameSelected[3];
                break;
                case 'interestMain':
                    this.gameMenu                         = 'interestMain';
                    this.gameCategory.questionMenu.main   = !choice;
                    this.gameCategory.interestsMenu.sub   = !choice;
                    this.gameCategory.triviaMenu          = !choice;
                    this.gameCategory.interestsMenu.main  = choice;
                    this.gamesTypes                       = !choice;
                    this.triviaMain                       = choice;
                    this.mainGame                         = !choice
                    this.question1                        = data;
                    this.gameName                         = this.gameSelected[1];
                break;
                case 'interestSub':
                    this.gameMenu                         = 'interestSub';
                    this.gameCategory.guestionMenu        = !choice;
                    this.gameCategory.triviaMenu          = !choice;
                    this.gameCategory.interestsMenu.main  = !choice;
                    this.gameCategory.interestsMenu.sub   = choice;
                    this.mainGame                         = !choice
                    this.gamesTypes                       = !choice;
                    this.triviaMain                       = choice;
                    this.question1                        = data;
                    this.gameName                         = this.gameSelected[1];

                break;
                default:
                break;
            }
        },

        BackToPrev(e, data, choice){
            switch (e) {
                case 'questionMenu':
                    this.gameCategory.questionMenu.main   = !choice;
                    this.mainGame                         = choice
                    this.gamesTypes                       = choice;
                    this.gameName                         = 'Games';

                break;
                case 'triviaMenu':
                    this.gameMenu   = 'questionMenu';
                    this.gameCategory.questionMenu.main   = !choice;
                    this.mainGame                         = choice
                    this.gamesTypes                       = choice;
                    this.gameName                         = 'Games';

                break;
                case 'interestMain':
                    this.gameMenu   = 'triviaMenu';
                    this.gameCategory.questionMenu.main   = !choice;
                    this.mainGame                         = choice
                    this.gamesTypes                       = choice;
                    this.gameName                         = 'Games';

                break;
               /*  case 'interestSub':
                    return this.GameSelected('interestMain', this.questionType.interestMain, true);
                break; */
                default:
                break;
            }
        }

    }
}
</script>
