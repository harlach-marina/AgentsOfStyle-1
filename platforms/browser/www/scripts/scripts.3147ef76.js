"use strict";angular.module("agentsOfStyleApp",["ionic","accountModule","shopper.controllers","registration"]).config(["$stateProvider","$urlRouterProvider",function(a,b){a.state("app",{url:"/app",templateUrl:"views/app.html",controller:"appCtrl"}).state("app.home",{url:"/home",views:{content:{templateUrl:"views/home.html",controller:"appCtrl"}}}).state("app.login",{url:"/login",views:{content:{templateUrl:"views/fb-login.html",controller:"appCtrl"}}}).state("app.sign-up",{url:"/sign-up",views:{content:{templateUrl:"views/registration.html",controller:"registrationCtrl"}}}).state("app.user",{url:"/user",views:{content:{templateUrl:"views/main.html",controller:"mainCtrl"}}}).state("app.user.shopper-home",{url:"/shopper-home",views:{menuContent:{templateUrl:"views/shopper/shopper-home.html",controller:"shopperHomeCtrl"}}}).state("app.user.shopper-stylist",{url:"/shopper-stylist",views:{menuContent:{templateUrl:"views/shopper/shopper-stylist.html",controller:"shopperStylistCtrl"}}}).state("app.user.shopper-outfits",{url:"/shopper-outfits",views:{menuContent:{templateUrl:"views/shopper/shopper-outfits.html",controller:"shopperOutfitsCtrl"}}}).state("app.user.shopper-account",{url:"/shopper-account",views:{menuContent:{templateUrl:"views/shopper/shopper-account.html",controller:"shopperAccountCtrl"}}}).state("app.user.shopper-new-outfit",{url:"/shopper-new-outfit",views:{menuContent:{templateUrl:"views/shopper/shopper-new-outfit.html",controller:"shopperNewOutfitCtrl"}}}).state("app.user.shopper-change-stylist",{url:"/shopper-change-stylist",views:{menuContent:{templateUrl:"views/shopper/shopper-change-stylist.html",controller:"shopperChangeStylistCtrl"}}}),b.otherwise("/app/home")}]).controller("appCtrl",["$scope","$state",function(a,b){a.startApp=function(){b.go("app.login")}}]),angular.module("shopper.controllers",[]).controller("mainCtrl",["$scope",function(a){}]).controller("shopperHomeCtrl",["$scope",function(a){a.phrase="Home"}]).controller("shopperStylistCtrl",function(){}).controller("shopperOutfitsCtrl",function(){}).controller("shopperNewOutfitCtrl",function(){}).controller("shopperChangeStylistCtrl",function(){}),angular.module("registration",["ionic","ngAnimate"]).config(["$stateProvider","$urlRouterProvider",function(a,b){a.state("app.sign-up-user",{url:"/sign-up-user",views:{content:{templateUrl:"views/user-reg.html",controller:"registrationCtrl"}}}).state("app.sign-up-user.question1",{url:"/question1",views:{questions:{templateUrl:"views/user-questions/question01.html",controller:"registrationCtrl"}}}).state("app.sign-up-user.question2",{url:"/question2",views:{questions:{templateUrl:"views/user-questions/question02.html",controller:"registrationCtrl"}}}).state("app.sign-up-user.question3",{url:"/question3",views:{questions:{templateUrl:"views/user-questions/question03.html",controller:"registrationCtrl"}}}).state("app.sign-up-user.question4",{url:"/question4",views:{questions:{templateUrl:"views/user-questions/question04.html",controller:"registrationCtrl"}}}).state("app.sign-up-user.question5",{url:"/question5",views:{questions:{templateUrl:"views/user-questions/question05.html",controller:"registrationCtrl"}}}).state("app.sign-up-user.question6",{url:"/question6",views:{questions:{templateUrl:"views/user-questions/question06.html",controller:"registrationCtrl"}}})}]).controller("registrationCtrl",["$scope","$state","$ionicHistory",function(a,b,c){a.startRegistration=function(){b.go("app.sign-up-user.question1"),a.currentQuestion=1},a.currentQuestion=1,a.showPrevQuestion=function(){c.goBack(),a.currentQuestion--},a.accept=function(){a.currentQuestion++},a.refuse=function(){a.currentQuestion++},a.displayHint=!0,a.closeHint=function(){a.displayHint=!1},a.shopper={budget:150,budgetFrequency:"special occasion"}}]),angular.module("accountModule",["ionic"]).config(["$stateProvider","$urlRouterProvider",function(a,b){a.state("app.user.shopper-account.balance",{url:"/balance",views:{"balance-tab":{templateUrl:"views/shopper/account/balance.html",controller:"balanceCtrl"}}}).state("app.user.shopper-account.budget",{url:"/budget",views:{"budget-tab":{templateUrl:"views/shopper/account/budget.html",controller:"budgetCtrl"}}}).state("app.user.shopper-account.about",{url:"/about",views:{"about-tab":{templateUrl:"views/shopper/account/about.html",controller:"aboutCtrl"}}}).state("app.user.shopper-account.delivery",{url:"/delivery",views:{"delivery-tab":{templateUrl:"views/shopper/account/delivery.html",controller:"deliveryCtrl"}}})}]).controller("shopperAccountCtrl",["$scope","$ionicTabsDelegate",function(a,b){}]).controller("balanceCtrl",["$scope",function(a){function b(a,b){return new Date(a.getTime()+Math.random()*(b.getTime()-a.getTime()))}a.title="Balance";var c=b(new Date(2016,0,1),new Date(2016,6,6));a.users={balance:232,money:[{expenses:1,budget:76,regDate:c},{expenses:22,budget:777,regDate:new Date(c).setMonth(c.getMonth()+1)},{expenses:10,budget:80,regDate:new Date(c).setMonth(c.getMonth()+2)},{expenses:160,budget:380,regDate:new Date(c).setMonth(c.getMonth()+3)},{expenses:710,budget:8e3,regDate:new Date(c).setMonth(c.getMonth()+4)}]}}]).controller("budgetCtrl",["$scope",function(a){a.title="Budget",a.shopper={budget:150,budgetFrequency:"special occasion"},a.saveData=function(){console.log(JSON.stringify(a.shopper,null,2))}}]).controller("aboutCtrl",["$scope",function(a){a.title="About",a.users=[{name:"Jane",secondname:"Jackson",email:"jj@icloud.ccom",date:"3/28/1984",age:32,phone:"0031 (0) 45 750 720 8",height:170,weight:55,hip:90,waist:60,head:50,bra:89}],a.show=function(){angular.element(document.querySelector(".append")).append('<img style="margin: 0 2px;" src="./images/212ba73869110c104d612b64a3f86c35.c8b374fa.png">')},a.editButtonVal="Edit",a.edit=!1,a.editable=function(){return a.edit=!a.edit,a.editButtonVal="Save",!1}}]).controller("deliveryCtrl",["$scope",function(a){a.title="Delivery"}]),angular.module("agentsOfStyleApp").run(["$templateCache",function(a){a.put("views/app.html",'<ion-nav-view name="content"></ion-nav-view>'),a.put("views/fb-login.html",'<ion-view> <!-- <ion-content> --> <div class="reg"> <a href="#/app/user/shopper-home">Войти</a> <a href="#/app/sign-up">Зарегистрироваться</a> </div> <!-- </ion-content> --> </ion-view>'),a.put("views/home.html",'<ion-view> <div class="home" ng-click="startApp()"></div> </ion-view>'),a.put("views/main.html",'<ion-side-menus> <ion-side-menu-content edge-drag-threshold="50"> <ion-nav-bar class="bar-assertive"> <ion-nav-title> <img class="avatar" src="images/avatar.74be59d8.png"> </ion-nav-title> <ion-nav-back-button> </ion-nav-back-button> <ion-nav-buttons side="right"> <button class="button icon-right ion-navicon-round button-clear" menu-toggle="right"></button> </ion-nav-buttons> </ion-nav-bar> <ion-nav-view name="menuContent"></ion-nav-view> </ion-side-menu-content> <ion-side-menu class="assertive-bg text-uppercase" side="right"> <ion-header-bar align-title="left" class="bar-assertive"> <h1 class="title"></h1> <div class="buttons"> <a class="button icon-right ion-android-exit button-clear" href="#/app/login"></a> </div> </ion-header-bar> <ion-content scroll="false" class="text-center text-uppercase"> <ion-list> <ion-item class="item-assertive" menu-close href="#/app/user/shopper-home"> <div>home</div><hr> </ion-item> <ion-item class="item-assertive" menu-close href="#/app/user/shopper-stylist"> <div>my stylist</div><hr> </ion-item> <ion-item class="item-assertive" menu-close href="#/app/user/shopper-outfits"> <div>my outfits</div><hr> </ion-item> <ion-item class="item-assertive" menu-close href="#/app/user/shopper-account/balance"> <div>account</div> </ion-item> </ion-list> <ion-list> <ion-item class="item-assertive" menu-close href="#/app/user/shopper-new-outfit"> <div>request a new outfit</div><hr> </ion-item> <ion-item class="item-assertive" menu-close href="#/app/user/shopper-change-stylist"> <div>change my stylist</div> </ion-item> </ion-list> </ion-content> </ion-side-menu> </ion-side-menus>'),a.put("views/registration.html",'<ion-view> <ion-content> <ul class="list list-center"> <li class="item item-checkbox checkbox-assertive text-uppercase"> a Stylist <label class="checkbox"> <input name="targets" value="stylist" type="radio" checked> </label> </li> <li class="item item-checkbox checkbox-assertive text-uppercase"> New Clients <label class="checkbox"> <input name="targets" value="clients" type="radio"> </label> </li> </ul> </ion-content> <ion-footer-bar class="bar-assertive"> <button ng-click="startRegistration()" class="button button-full button-assertive text-uppercase"> let`s start </button> </ion-footer-bar> </ion-view>'),a.put("views/shopper/account/about.html",'<ion-view> <ion-content class="mh-about" ng-repeat="user in users"> <div class="list"> <div class="item item-divider assertive-bg text-uppercase"> personal info </div> <div class="item"><div>first name</div> <div>{{user.name}}</div></div> <div class="item"><div>second name</div> <div>{{user.secondname}}</div></div> <div class="item"><div>e-mail</div> <div>{{user.email}}</div></div> <div class="item"><div>date of birth</div> <div>{{user.date}}</div></div> <div class="item"><div>age</div> <div>{{user.age}}</div></div> <div class="item"><div>phone number</div> <div>{{user.phone}}</div></div> </div> <div class="list"> <div class="item item-divider assertive-bg text-uppercase"> style preferences </div> <div class="item images style-img"> <img src="./images/cd6ba1427c74ef6aad92b857536d91d6.d2c3290b.png"> <img src="./images/1f8613771b91625d32f2b45c0e750482.c54a3ebb.jpg"> </div> <div class="item item-divider assertive-bg text-uppercase"> photos </div> <div class="item images photos-img"> <img src="./images/212ba73869110c104d612b64a3f86c35.c8b374fa.png"> <img src="./images/212ba73869110c104d612b64a3f86c35.c8b374fa.png"> <img src="./images/212ba73869110c104d612b64a3f86c35.c8b374fa.png"> <img src="./images/212ba73869110c104d612b64a3f86c35.c8b374fa.png"> <span class="append"></span> <img src="./images/plus.PNG" ng-click="show()"> </div> <div class="item item-divider assertive-bg text-uppercase"> <div>sizes</div> <div> <button ng-click="editable()" ng-show="!edit" ng-model="edit"> edit </button> <button ng-click="editable()" ng-show="edit" ng-model="edit"> save </button> </div> </div> <div class="item"><div>heighdswrfegtht</div> <div><input type="text" ng-disabled="!edit" placeholder="{{user.height}}"></div></div> <div class="item"><div>weight</div> <div><input type="text" ng-disabled="!edit" placeholder="{{user.weight}}"></div></div> <div class="item"><div>hip size</div> <div><input type="text" ng-disabled="!edit" placeholder="{{user.hip}}"></div></div> <div class="item"><div>waist size</div> <div><input type="text" ng-disabled="!edit" placeholder="{{user.waist}}"></div></div> <div class="item"><div>head size</div> <div><input type="text" ng-disabled="!edit" placeholder="{{user.head}}"></div></div> <div class="item"><div>bra size</div> <div><input type="text" ng-disabled="!edit" placeholder="{{user.bra}}"></div></div> </div> </ion-content> </ion-view>'),a.put("views/shopper/account/balance.html",'<ion-view> <ion-content class="mh-balance"> <div class="head"><div class="h2">{{title}}: <span>&euro;{{users.balance}}</span></div><div class="h5"><a href="">ask money back</a></div></div> <div class="list"> <div class="item item-divider assertive-bg text-uppercase"> budget vs expenses </div> <div class="item mh-table"> <div class="row header"> <div class="col"></div> <div class="col">Budget</div> <div class="col">Expences</div> </div> <div class="row" ng-repeat="mon in users.money"> <div class="col">{{mon.regDate | date:\'MMM\'}}</div> <div class="col">&euro;{{mon.budget}}</div> <div class="col">&euro;{{mon.expenses}}</div> </div> </div> </div></ion-content> </ion-view>'),a.put("views/shopper/account/budget.html",'<ion-view> <ion-content class="ns-budget"> <div class="budget-wrapper"> <div class="budget-header money-text"> <i class="icon ion-social-euro"></i>{{\' \'+ shopper.budget}} </div> <div class="budget-header text-uppercase">per month</div> </div> <div class="item range range-assertive"> <input type="range" name="volume" ng-model="shopper.budget" min="150" max="2500" step="25" ng-value="{{budget}}"> </div> <div class="col col-100"> <span><i class="icon ion-social-euro"></i>150</span> <span><i class="icon ion-social-euro"></i>2500</span> </div> <ul class="list list-center"> <li class="item item-checkbox checkbox-assertive text-uppercase"> special occasion <label class="checkbox"> <input ng-model="shopper.budgetFrequency" value="special occasion" type="radio"> </label> </li> <li class="item item-checkbox checkbox-assertive text-uppercase"> monthly <label class="checkbox"> <input ng-model="shopper.budgetFrequency" value="monthly" type="radio"> </label> </li> <li class="item item-checkbox checkbox-assertive text-uppercase"> quarterly <label class="checkbox"> <input ng-model="shopper.budgetFrequency" value="quarterly" type="radio"> </label> </li> <li class="item item-checkbox checkbox-assertive text-uppercase"> yearly <label class="checkbox"> <input ng-model="shopper.budgetFrequency" value="yearly" type="radio"> </label> </li> </ul> </ion-content> <ion-footer-bar ng-click="saveData()" class="bar-assertive"> <button class="button button-full button-assertive text-uppercase"> save </button> </ion-footer-bar> </ion-view>'),a.put("views/shopper/account/delivery.html",'<ion-view> <ion-content class="mh-delivery"> <div class="list"> <a class="item item-icon-right" href="#"> Home: {{user.homeAaddress}} <i class="icon ion-ios-arrow-forward"></i> </a> <a class="item item-icon-right" href="#"> Work: {{user.workAddress}} <i class="icon ion-ios-arrow-forward"></i> </a> <div class="item"> <div>Default address of delivery:</div> <div> <input type="radio" name="group2" value="Water">Work<br> <input type="radio" name="group2" value="Beer">Home<br> </div> </div> </div> </ion-content> </ion-view>'),a.put("views/shopper/shopper-account.html",'<ion-view> <ion-nav-title> <img src="images/avatar.74be59d8.png"> </ion-nav-title> <ion-tabs class="tabs-striped tabs-top tabs-icon-top tabs-background-light tabs-color-assertive"> <ion-tab title="balance" icon="ion-social-usd" href="#/app/user/shopper-account/balance"> <ion-nav-view name="balance-tab"></ion-nav-view> </ion-tab> <ion-tab title="budget" icon="ion-ios-sunny" href="#/app/user/shopper-account/budget"> <ion-nav-view name="budget-tab"></ion-nav-view> </ion-tab> <ion-tab title="about" icon="ion-android-person" href="#/app/user/shopper-account/about"> <ion-nav-view name="about-tab"></ion-nav-view> </ion-tab> <ion-tab title="delivery" icon="ion-android-car" href="#/app/user/shopper-account/delivery"> <ion-nav-view name="delivery-tab"></ion-nav-view> </ion-tab> </ion-tabs> </ion-view>'),a.put("views/shopper/shopper-change-stylist.html","<ion-view> <ion-content> <h1>Change stylist</h1> </ion-content> </ion-view>"),a.put("views/shopper/shopper-home.html","<ion-view> <ion-content> <h1>{{phrase}}</h1> </ion-content> </ion-view>"),a.put("views/shopper/shopper-new-outfit.html","<ion-view> <ion-content> <h1>new-outfit</h1> </ion-content> </ion-view>"),a.put("views/shopper/shopper-outfits.html","<ion-view> <ion-content> <h1>Outfits</h1> </ion-content> </ion-view>"),a.put("views/shopper/shopper-stylist.html","<ion-view> <ion-content> <h1>Stylist</h1> </ion-content> </ion-view>"),a.put("views/user-questions/question01.html","<ion-view> <ion-content> <h1>Question 1</h1> </ion-content> </ion-view>"),a.put("views/user-questions/question02.html","<ion-view> <ion-content> <h1>Question 2</h1> </ion-content> </ion-view>"),a.put("views/user-questions/question03.html","<ion-view> <ion-content> <h1>Question 3</h1> </ion-content> </ion-view>"),a.put("views/user-questions/question04.html","<ion-view> <ion-content> <h1>Question 4</h1> </ion-content> </ion-view>"),a.put("views/user-questions/question05.html",'<ion-view> <ion-content class="ns-budget questionnaire"> <div ng-show="displayHint" class="hint-block"> <p>In this step please define your budget and frequency plan</p> <button ng-click="closeHint()" class="button button-assertive text-uppercase">ок</button> </div> <div> <div class="question-text">What`s your budget?</div> <div class="budget-wrapper"> <div class="budget-header money-text"> <i class="icon ion-social-euro"></i>{{\' \'+ shopper.budget}} </div> <div class="budget-header text-uppercase">per month</div> </div> </div> <div class="item range range-assertive"> <input type="range" name="volume" ng-model="shopper.budget" min="150" max="2500" step="25" ng-value="{{budget}}"> </div> <div class="col col-100"> <span><i class="icon ion-social-euro"></i>150</span> <span><i class="icon ion-social-euro"></i>2500</span> </div> <ul class="list list-center"> <li class="item item-checkbox checkbox-assertive text-uppercase"> special occasion <label class="checkbox"> <input ng-model="shopper.budgetFrequency" value="special occasion" type="radio" checked> </label> </li> <li class="item item-checkbox checkbox-assertive text-uppercase"> monthly <label class="checkbox"> <input ng-model="shopper.budgetFrequency" value="monthly" type="radio"> </label> </li> <li class="item item-checkbox checkbox-assertive text-uppercase"> quarterly <label class="checkbox"> <input ng-model="shopper.budgetFrequency" value="quarterly" type="radio"> </label> </li> <li class="item item-checkbox checkbox-assertive text-uppercase"> yearly <label class="checkbox"> <input ng-model="shopper.budgetFrequency" value="yearly" type="radio"> </label> </li> </ul> </ion-content> </ion-view>'),a.put("views/user-questions/question06.html","<ion-view> <ion-content> <h1>Question 6</h1> </ion-content> </ion-view>"),a.put("views/user-reg.html",'<ion-view> <ion-nav-bar class="bar-assertive"> <ion-nav-back-button ng-click="showPrevQuestion()"> </ion-nav-back-button> </ion-nav-bar> <ion-nav-view name="questions"></ion-nav-view> <ion-footer-bar class="bar-assertive"> <div ng-show="currentQuestion < 5" class="button-bar text-uppercase"> <a class="button button-assertive" ng-click="refuse()" ng-href="#/app/sign-up-user/{{\'question\' + currentQuestion}}">No</a> <a class="button button-assertive" ng-click="accept()" ng-href="#/app/sign-up-user/{{\'question\' + currentQuestion}}">Yes</a> </div> <div ng-show="currentQuestion == 5" class="button-bar text-uppercase"> <a class="button button-full button-assertive icon-right ion-chevron-right" ng-click="accept()" ng-href="#/app/sign-up-user/{{\'question\' + currentQuestion}}">next step</a> </div> <div ng-show="currentQuestion == 6" class="button-bar text-uppercase"> <a class="button button-assertive text-uppercase">upload</a> <a class="button button-assertive" ng-click="accept()" ng-href="#/app/sign-up-user/{{\'question\' + currentQuestion}}">skip</a> </div> </ion-footer-bar> </ion-view>')}]);