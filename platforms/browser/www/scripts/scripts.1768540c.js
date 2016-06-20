"use strict";angular.module("agentsOfStyleApp",["ionic","accountModule","shopper.controllers","newVisitors"]).config(["$stateProvider","$urlRouterProvider",function(a,b){a.state("app",{url:"/app","abstract":!0,templateUrl:"views/main.html",controller:"mainCtrl"}).state("app.home",{url:"/home",views:{menuContent:{templateUrl:"views/home.html",controller:"homeCtrl"}}}).state("app.stylist",{url:"/stylist",views:{menuContent:{templateUrl:"views/stylist.html",controller:"stylistCtrl"}}}).state("app.outfits",{url:"/outfits",views:{menuContent:{templateUrl:"views/outfits.html",controller:"outfitsCtrl"}}}).state("app.account",{url:"/account",views:{menuContent:{templateUrl:"views/account.html",controller:"accountCtrl"}}}),b.otherwise("/app/home")}]),angular.module("shopper.controllers",[]).controller("mainCtrl",["$scope",function(a){}]).controller("homeCtrl",["$scope",function(a){a.phrase="Home"}]).controller("stylistCtrl",function(){}).controller("outfitsCtrl",function(){}),angular.module("newVisitors",[]).controller("registrationCtrl",["$scope",function(a){}]).controller("questionsCtrl",["$scope",function(a){}]),angular.module("accountModule",["ionic"]).config(["$stateProvider","$urlRouterProvider",function(a,b){a.state("app.account.balance",{url:"/balance",views:{"balance-tab":{templateUrl:"views/account/balance.html",controller:"balanceCtrl"}}}).state("app.account.budget",{url:"/budget",views:{"budget-tab":{templateUrl:"views/account/budget.html",controller:"budgetCtrl"}}}).state("app.account.about",{url:"/about",views:{"about-tab":{templateUrl:"views/account/about.html",controller:"aboutCtrl"}}}).state("app.account.delivery",{url:"/delivery",views:{"delivery-tab":{templateUrl:"views/account/delivery.html",controller:"deliveryCtrl"}}}),b.otherwise("app/account/balance")}]).controller("accountCtrl",["$scope","$ionicTabsDelegate",function(a,b){}]).controller("balanceCtrl",["$scope",function(a){a.title="Balance",a.users={balance:232,expenses:[1,22,10],budget:[76,777,80]}}]).controller("budgetCtrl",["$scope",function(a){a.title="Budget",a.shopper={budget:150,budgetFrequency:"special occasion"},a.saveData=function(){console.log(JSON.stringify(a.shopper,null,2))}}]).controller("aboutCtrl",["$scope",function(a){a.title="About",a.users=[{name:"Jane",secondname:"Jackson",email:"jj@icloud.ccom",date:"3/28/1984",age:32,phone:"0031 (0) 45 750 720 8",height:170,weight:55,hip:90,waist:60,head:50,bra:89}],a.show=function(){angular.element(document.querySelector(".append")).append('<img style="margin: 0 2px;" src="./images/212ba73869110c104d612b64a3f86c35.c8b374fa.png">')},a.tg=!1,a.editable=function(){a.tg=!a.tg,a.tr=!0,console.log(a.tg)}}]).controller("deliveryCtrl",["$scope",function(a){a.title="Delivery"}]),angular.module("agentsOfStyleApp").run(["$templateCache",function(a){a.put("views/account.html",'<ion-view> <ion-nav-title> <img src="images/avatar.74be59d8.png"> </ion-nav-title> <ion-tabs class="tabs-striped tabs-top tabs-icon-top tabs-background-light tabs-color-assertive"> <ion-tab title="balance" icon="ion-social-usd" href="#/app/account/balance"> <ion-nav-view name="balance-tab"></ion-nav-view> </ion-tab> <ion-tab title="budget" icon="ion-ios-sunny" href="#/app/account/budget"> <ion-nav-view name="budget-tab"></ion-nav-view> </ion-tab> <ion-tab title="about" icon="ion-android-person" href="#/app/account/about"> <ion-nav-view name="about-tab"></ion-nav-view> </ion-tab> <ion-tab title="delivery" icon="ion-android-car" href="#/app/account/delivery"> <ion-nav-view name="delivery-tab"></ion-nav-view> </ion-tab> </ion-tabs> </ion-view>'),a.put("views/account/about.html",'<ion-view> <ion-content class="mh-about" ng-repeat="user in users"> <div class="list"> <div class="item item-divider assertive-bg text-uppercase"> personal info </div> <div class="item"><div>first name</div> <div>{{user.name}}</div></div> <div class="item"><div>second name</div> <div>{{user.secondname}}</div></div> <div class="item"><div>e-mail</div> <div>{{user.email}}</div></div> <div class="item"><div>date of birth</div> <div>{{user.date}}</div></div> <div class="item"><div>age</div> <div>{{user.age}}</div></div> <div class="item"><div>phone number</div> <div>{{user.phone}}</div></div> </div> <div class="list"> <div class="item item-divider assertive-bg text-uppercase"> style preferences </div> <div class="item images style-img"> <img src="./images/cd6ba1427c74ef6aad92b857536d91d6.d2c3290b.png"> <img src="./images/1f8613771b91625d32f2b45c0e750482.c54a3ebb.jpg"> </div> <div class="item item-divider assertive-bg text-uppercase"> photos </div> <div class="item images photos-img"> <img src="./images/212ba73869110c104d612b64a3f86c35.c8b374fa.png"> <img src="./images/212ba73869110c104d612b64a3f86c35.c8b374fa.png"> <img src="./images/212ba73869110c104d612b64a3f86c35.c8b374fa.png"> <img src="./images/212ba73869110c104d612b64a3f86c35.c8b374fa.png"> <span class="append"></span> <img src="./images/plus.PNG" ng-click="show()"> </div> <div class="item item-divider assertive-bg text-uppercase"> <div>sizes</div> <div><button ng-click="editable()"> {{tr}}edit<!-- <input type="checkbox" ng-model="edit"> --> </button></div> </div> <div class="item"><div>height {{tg}}</div> <div><input type="text" ng-disabled="{{tr}}" placeholder="{{user.height}}"></div></div> <div class="item"><div>weight</div> <div><input type="text" ng-disabled="!edit" placeholder="{{user.weight}}"></div></div> <div class="item"><div>hip size</div> <div><input type="text" ng-disabled="!edit" placeholder="{{user.hip}}"></div></div> <div class="item"><div>waist size</div> <div><input type="text" ng-disabled="!edit" placeholder="{{user.waist}}"></div></div> <div class="item"><div>head size</div> <div><input type="text" ng-disabled="!edit" placeholder="{{user.head}}"></div></div> <div class="item"><div>bra size</div> <div><input type="text" ng-disabled="!edit" placeholder="{{user.bra}}"></div></div> </div> </ion-content> </ion-view>'),a.put("views/account/balance.html",'<ion-view> <ion-content class="mh-balance"> <div class="h2">{{title}}: <span>&euro;{{users.balance}}</span></div> <div class="list"> <div class="item item-divider assertive-bg text-uppercase"> budget vs expenses </div> <div class="item mh-table"> <div class="row header"> <div class="col"></div> <div class="col">Budget</div> <div class="col">Expences</div> </div> <div class="row" ng-repeat="budget in users.budget" ng-repeat="expense in users.expenses"> <div class="col">{{}}</div> <div class="col">&euro;{{budget}}</div> <div class="col">&euro;{{expense}}</div> </div> </div> </div></ion-content> </ion-view>'),a.put("views/account/budget.html",'<ion-view> <ion-content class="ns-budget"> <div class="budget-wrapper"> <div class="budget-header money-text"> <i class="icon ion-social-euro"></i>{{\' \'+ shopper.budget}} </div> <div class="budget-header text-uppercase">per month</div> </div> <div class="item range range-assertive"> <input type="range" name="volume" ng-model="shopper.budget" min="150" max="2500" step="25" ng-value="{{budget}}"> </div> <div class="col col-100"> <span><i class="icon ion-social-euro"></i>150</span> <span><i class="icon ion-social-euro"></i>2500</span> </div> <ul class="list list-center"> <li class="item item-checkbox checkbox-assertive text-uppercase"> special occasion <label class="checkbox"> <input ng-model="shopper.budgetFrequency" value="special occasion" type="radio" checked> </label> </li> <li class="item item-checkbox checkbox-assertive text-uppercase"> monthly <label class="checkbox"> <input ng-model="shopper.budgetFrequency" value="monthly" type="radio"> </label> </li> <li class="item item-checkbox checkbox-assertive text-uppercase"> quarterly <label class="checkbox"> <input ng-model="shopper.budgetFrequency" value="quarterly" type="radio"> </label> </li> <li class="item item-checkbox checkbox-assertive text-uppercase"> yearly <label class="checkbox"> <input ng-model="shopper.budgetFrequency" value="yearly" type="radio"> </label> </li> </ul> </ion-content> <ion-footer-bar ng-click="saveData()" class="bar-assertive"> <button class="button button-full button-assertive text-uppercase"> save </button> </ion-footer-bar> </ion-view>'),a.put("views/account/delivery.html","<ion-view> <ion-content> <h1>{{title}}</h1> </ion-content> </ion-view>"),a.put("views/change-stylist.html","<ion-view> <ion-content> <h1>Change stylist</h1> </ion-content> </ion-view>"),a.put("views/home.html","<ion-view> <ion-content> <h1>{{phrase}}</h1> </ion-content> </ion-view>"),a.put("views/main.html",'<ion-side-menus> <ion-side-menu-content edge-drag-threshold="50"> <ion-nav-bar class="bar-assertive"> <ion-nav-title> <img class="avatar" src="images/avatar.74be59d8.png"> </ion-nav-title> <ion-nav-back-button> </ion-nav-back-button> <ion-nav-buttons side="right"> <button class="button icon-right ion-navicon-round button-clear" menu-toggle="right"></button> </ion-nav-buttons> </ion-nav-bar> <ion-nav-view name="menuContent"></ion-nav-view> </ion-side-menu-content> <ion-side-menu class="assertive-bg text-uppercase" side="right"> <ion-header-bar align-title="left" class="bar-assertive"> <h1 class="title"></h1> <div class="buttons"> <button class="button icon-right ion-android-exit button-clear"></button> </div> </ion-header-bar> <ion-content scroll="false" class="text-center side-menu-text"> <ion-content class="text-center text-uppercase"> <ion-list> <ion-item class="item-assertive" menu-close href="#/app/home"> <div>home</div><hr> </ion-item> <ion-item class="item-assertive" menu-close href="#/app/stylist"> <div>my stylist</div><hr> </ion-item> <ion-item class="item-assertive" menu-close href="#/app/outfits"> <div>my outfits</div><hr> </ion-item> <ion-item class="item-assertive" menu-close href="#/app/account/balance"> <div>account</div> </ion-item> </ion-list> <ion-list> <ion-item class="item-assertive" menu-close href="#/app/new-outfit"> <div>request a new outfit</div><hr> </ion-item> <ion-item class="item-assertive" menu-close href="#/app/change-stylist"> <div>change my stylist</div> </ion-item> </ion-list> </ion-content> </ion-content></ion-side-menu> </ion-side-menus> <!-- <div class="nav-bar-block" nav-bar="active"><ion-header-bar class="bar-assertive bar bar-header" align-title="center"><button ng-click="$ionicGoBack()" class="button back-button hide buttons  button-clear header-item" style="transition-duration: 0ms;"><i class="icon ion-ios-arrow-back"></i> \r\n      <span class="back-text" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);"><span class="default-title">Back</span><span class="previous-title hide">undefined</span></span></button><div class="title title-center header-item" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px); left: 49px; right: 49px;"><span class="nav-bar-title">\r\n        <img class="avatar" src="images/avatar.74be59d8.png">\r\n      </span></div><div class="buttons buttons-right header-item" style="transition-duration: 0ms;"><span class="right-buttons">\r\n        <button class="button icon-right ion-navicon-round button-clear" menu-toggle="right"></button>\r\n      </span></div></ion-header-bar></div> -->'),a.put("views/new-outfit.html","<ion-view> <ion-content> <h1>new-outfit</h1> </ion-content> </ion-view>"),a.put("views/outfits.html","<ion-view> <ion-content> <h1>Outfits</h1> </ion-content> </ion-view>"),a.put("views/question01.html",'<ion-view><div class="reg"></div></ion-view>'),a.put("views/registration.html",'<ion-nav-view name="registrationContent"></ion-nav-view>'),a.put("views/stylist.html","<ion-view> <ion-content> <h1>Stylist</h1> </ion-content> </ion-view>")}]);