"use strict";(self.webpackChunkbiz_ke_frontend=self.webpackChunkbiz_ke_frontend||[]).push([[843],{3843:(H,_,i)=>{i.r(_),i.d(_,{AuthModule:()=>D});var u=i(9808),g=i(1083),n=i(3075),x=i(5906),r=i(5e3),p=i(7261),Z=i(7990),c=i(9224),m=i(7322),h=i(7531),f=i(7423);function U(o,a){if(1&o&&(r.TgZ(0,"div",27),r._uU(1),r.qZA()),2&o){const e=r.oxw();r.xp6(1),r.hij(" ",e.errorMessage," ")}}function A(o,a){if(1&o&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&o){const e=r.oxw();r.xp6(1),r.hij(" ",e.errorEmailControl()," ")}}function F(o,a){if(1&o&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&o){const e=r.oxw();r.xp6(1),r.hij(" ",e.errorPasswordControl()," ")}}function I(o,a){1&o&&(r.ynx(0),r._UZ(1,"i",28),r.TgZ(2,"span",29),r._uU(3,"Loading..."),r.qZA(),r.BQk())}function q(o,a){1&o&&r._uU(0," Login ")}let M=(()=>{class o{constructor(e,t,l,s){this.loginFb=e,this.router=t,this.snakBar=l,this.authServ=s,this.loginForm=this.loginFb.group({email:["",[n.kI.required,n.kI.email]],password:["",[n.kI.required,n.kI.minLength(8)]]}),this.loading=!1,this.matcher=new x.n}ngOnInit(){this.loginForm.valueChanges.subscribe(()=>{this.errorMessage=!1})}login(){this.loading=!0,this.authServ.loginUser(this.loginForm.value).subscribe({next:e=>this.handleResp(e),error:e=>this.handlError(e)})}handleResp(e){localStorage.setItem("token",e.accesstoken),localStorage.setItem("currentuser",JSON.stringify(e)),this.openSnakBar("User Authenticated Successfully","Dismiss"),this.router.navigate(["/dashboard"]).then(()=>{this.loading=!1})}handlError(e){this.loading=!1,this.errorMessage=e}openSnakBar(e,t){this.snakBar.open(e,t,{duration:1e3})}errorEmailControl(){var e,t;return(null===(e=this.loginForm.get("email"))||void 0===e?void 0:e.hasError("required"))?"You must provide a value":(null===(t=this.loginForm.get("email"))||void 0===t?void 0:t.hasError("email"))?"You must a valid email":""}errorPasswordControl(){var e,t;return(null===(e=this.loginForm.get("password"))||void 0===e?void 0:e.hasError("required"))?"You must provide a value":(null===(t=this.loginForm.get("password"))||void 0===t?void 0:t.hasError("minlength"))?"You must enter atleast 8 characters":""}}return o.\u0275fac=function(e){return new(e||o)(r.Y36(n.qu),r.Y36(g.F0),r.Y36(p.ux),r.Y36(Z.e))},o.\u0275cmp=r.Xpm({type:o,selectors:[["app-login"]],decls:39,vars:9,consts:[[1,"row","gx-0"],[1,"col-xl-3","col-lg-5","col-md-6"],[1,"d-block","bg-image"],[1,"bg-shadow"],[1,"col-xl-9","col-lg-7","col-md-6"],[1,"visually-hidden"],[1,"row","gx-0","justify-content-center"],[1,"col-xl-8","col-lg-10","col-md-12","p-2","pb-5"],[1,"pt-100"],[1,"p-4"],[1,"d-flex","pt-4"],[1,"flex-grow-1"],[1,"fw-normal","text-primary"],[1,"flex-grow-1","text-end"],["routerLink","/home",1,"navbar-brand","text-secondary"],["src","../../../../assets/logo.png","alt","","width","30","height","24",1,"d-inline-block","align-text-top"],["class","alert alert-danger ",4,"ngIf"],[3,"formGroup"],[1,"mb-1"],["appearance","outline",1,"w-100","m-0"],["matInput","","placeholder","Enter Username","formControlName","email",3,"errorStateMatcher"],[4,"ngIf"],["matInput","","placeholder","Enter Password","type","password","formControlName","password",3,"errorStateMatcher"],["mat-raised-button","","color","primary","type","button",1,"me-3",3,"disabled","click"],[4,"ngIf","ngIfElse"],["notload",""],[1,"d-flex","align-self-center"],[1,"alert","alert-danger"],[1,"fa","fa-spinner","fa-spin","fa-1x","me-2"],[1,""]],template:function(e,t){if(1&e&&(r.TgZ(0,"div",0)(1,"div",1)(2,"div",2),r._UZ(3,"div",3),r.qZA()(),r.TgZ(4,"div",4)(5,"h1",5),r._uU(6,"Suluhi"),r.qZA(),r.TgZ(7,"div",6)(8,"div",7),r._UZ(9,"div",8),r.TgZ(10,"mat-card")(11,"div",9)(12,"div",10)(13,"div",11)(14,"h3",12),r._uU(15,"Login :)"),r.qZA()(),r.TgZ(16,"div",13)(17,"a",14),r._UZ(18,"img",15),r._uU(19," Suluhi "),r.qZA()()(),r.YNc(20,U,2,1,"div",16),r.TgZ(21,"form",17)(22,"div",18)(23,"mat-form-field",19)(24,"mat-label"),r._uU(25,"Username"),r.qZA(),r._UZ(26,"input",20),r.YNc(27,A,2,1,"mat-error",21),r.qZA()(),r.TgZ(28,"div",18)(29,"mat-form-field",19)(30,"mat-label"),r._uU(31,"Password"),r.qZA(),r._UZ(32,"input",22),r.YNc(33,F,2,1,"mat-error",21),r.qZA()(),r.TgZ(34,"button",23),r.NdJ("click",function(){return t.login()}),r.YNc(35,I,4,0,"ng-container",24),r.YNc(36,q,1,0,"ng-template",null,25,r.W1O),r.qZA()()()()()(),r._UZ(38,"div",26),r.qZA()()),2&e){const l=r.MAs(37);let s,d;r.xp6(20),r.Q6J("ngIf",t.errorMessage),r.xp6(1),r.Q6J("formGroup",t.loginForm),r.xp6(5),r.Q6J("errorStateMatcher",t.matcher),r.xp6(1),r.Q6J("ngIf",null==(s=t.loginForm.get("email"))?null:s.invalid),r.xp6(5),r.Q6J("errorStateMatcher",t.matcher),r.xp6(1),r.Q6J("ngIf",null==(d=t.loginForm.get("password"))?null:d.invalid),r.xp6(1),r.Q6J("disabled",t.loginForm.invalid||t.errorMessage||t.loading),r.xp6(1),r.Q6J("ngIf",t.loading)("ngIfElse",l)}},directives:[c.a8,g.yS,u.O5,n._Y,n.JL,n.sg,m.KE,m.hX,h.Nt,n.Fj,n.JJ,n.u,m.TO,f.lW],styles:[".pt-100[_ngcontent-%COMP%]{padding-top:100px}.text-danger[_ngcontent-%COMP%]{color:#f44336!important}.bg-image[_ngcontent-%COMP%]{background-image:url(loginlogo.89330fdc39353bb6.png);background-size:cover;background-position:center;background-repeat:no-repeat;height:100vh}.bg-shadow[_ngcontent-%COMP%]{background-color:#0000004b;height:100%}  .mat-form-field-flex>.mat-form-field-infix{padding:.5em 0!important}  .mat-form-field-label-wrapper{top:-1.4em}  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.1em) scale(.75);width:133.33333%}@media only screen and (max-width: 767px){.bg-image[_ngcontent-%COMP%]{height:130px}.pt-100[_ngcontent-%COMP%]{padding-top:20px}}"]}),o})();var k=i(6683),N=i(4905),S=i(3034),v=i(4376);function Y(o,a){if(1&o&&(r.TgZ(0,"div",36),r._uU(1),r.qZA()),2&o){const e=r.oxw();r.xp6(1),r.hij(" ",e.errorMessage," ")}}function y(o,a){if(1&o&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&o){const e=r.oxw();r.xp6(1),r.hij(" ",e.errorFirstNameControl()," ")}}function E(o,a){if(1&o&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&o){const e=r.oxw();r.xp6(1),r.hij(" ",e.errorSecondNameControl()," ")}}function J(o,a){if(1&o&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&o){const e=r.oxw();r.xp6(1),r.hij(" ",e.errorPhoneControl()," ")}}function Q(o,a){if(1&o&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&o){const e=r.oxw();r.xp6(1),r.hij(" ",e.errorEmailControl()," ")}}function P(o,a){if(1&o&&(r.ynx(0),r.TgZ(1,"ng-option",39),r._uU(2),r.qZA(),r.BQk()),2&o){const e=a.$implicit;r.xp6(1),r.Q6J("value",1*e.id),r.xp6(1),r.AsE(" ",e.name.toUpperCase()," - ",e.code.toUpperCase()," ")}}function L(o,a){if(1&o&&(r.ynx(0),r.TgZ(1,"ng-option",37),r._uU(2,"Please Select A Branch"),r.qZA(),r.YNc(3,P,3,3,"ng-container",38),r.BQk()),2&o){const e=r.oxw();r.xp6(3),r.Q6J("ngForOf",e.branches)}}function O(o,a){if(1&o&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&o){const e=r.oxw();r.xp6(1),r.hij(" ",e.errorPasswordControl()," ")}}function R(o,a){if(1&o&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&o){const e=r.oxw();r.xp6(1),r.hij(" ",e.errorConfirmControl()," ")}}function B(o,a){1&o&&(r.TgZ(0,"mat-error"),r._uU(1," Passwords do not match "),r.qZA())}function j(o,a){1&o&&(r.ynx(0),r._UZ(1,"i",40),r.TgZ(2,"span",41),r._uU(3,"Loading..."),r.qZA(),r.BQk())}function z(o,a){1&o&&r._uU(0," Register ")}let X=(()=>{class o{constructor(e,t,l,s){this.registerFb=e,this.router=t,this.snakBar=l,this.authServ=s,this.matcher=new x.n,this.loading=!1,this.registerForm=this.registerFb.group({nameone:["",[n.kI.required,n.kI.minLength(2)]],nametwo:["",[n.kI.required,n.kI.minLength(2)]],phone:["",[n.kI.required,n.kI.minLength(8),(0,S.t)()]],email:["",[n.kI.required,n.kI.email]],companyName:[""],companyLocation:[""],pemisons:[1],branchid:["",n.kI.required],password:["",[n.kI.required,n.kI.minLength(8),(0,k.j)()]],confirmpass:["",[n.kI.required,(0,N.G)()]]})}ngOnInit(){var e;null===(e=this.registerForm.get("password"))||void 0===e||e.valueChanges.subscribe(()=>{var t;null===(t=this.registerForm.get("confirmpass"))||void 0===t||t.updateValueAndValidity()}),this.registerForm.valueChanges.subscribe(()=>{this.errorMessage=!1}),this.loadBranches()}loadBranches(){this.authServ.getBranches({page:1,pageSize:10}).subscribe({next:e=>this.branches=e.results,error:e=>this.errorHandle(e)})}registerUser(){this.loading=!0;let e=this.registerForm.value;delete e.confirmpass,this.authServ.register(e).subscribe(t=>{this.loading=!1,this.openSnakBar("User Added Successfully","Dismiss"),this.router.navigate(["/login"])},t=>{this.loading=!1,this.errorMessage=t})}errorFirstNameControl(){var e,t;return(null===(e=this.registerForm.get("nameone"))||void 0===e?void 0:e.hasError("required"))?"You must provide a value":(null===(t=this.registerForm.get("nameone"))||void 0===t?void 0:t.hasError("minlength"))?"You must provide atleast 2 characters":""}errorSecondNameControl(){var e,t;return(null===(e=this.registerForm.get("nametwo"))||void 0===e?void 0:e.hasError("required"))?"You must provide a value":(null===(t=this.registerForm.get("nametwo"))||void 0===t?void 0:t.hasError("minlength"))?"You must provide atleast 2 characters":""}errorPhoneControl(){var e,t;return(null===(e=this.registerForm.get("phone"))||void 0===e?void 0:e.hasError("required"))?"You must provide a value":(null===(t=this.registerForm.get("phone"))||void 0===t?void 0:t.hasError("notPhone"))?"You must a valid Phone Number":""}errorEmailControl(){var e,t;return(null===(e=this.registerForm.get("email"))||void 0===e?void 0:e.hasError("required"))?"You must provide a value":(null===(t=this.registerForm.get("email"))||void 0===t?void 0:t.hasError("email"))?"You must a valid email":""}errorPasswordControl(){var e,t,l;return(null===(e=this.registerForm.get("password"))||void 0===e?void 0:e.hasError("required"))?"You must provide a value":(null===(t=this.registerForm.get("password"))||void 0===t?void 0:t.hasError("minlength"))?"You must enter atleast 8 characters":(null===(l=this.registerForm.get("password"))||void 0===l?void 0:l.hasError("passwordStrengthfor"))?"The password is not strong":""}errorConfirmControl(){var e,t;return(null===(e=this.registerForm.get("confirmpass"))||void 0===e?void 0:e.hasError("required"))?"You must provide a value":(null===(t=this.registerForm.get("confirmpass"))||void 0===t?void 0:t.hasError("notSame"))?"The password do not match":""}openSnakBar(e,t){this.snakBar.open(e,t,{duration:1e3})}errorHandle(e){this.loading=!1,this.errorMessage=e}}return o.\u0275fac=function(e){return new(e||o)(r.Y36(n.qu),r.Y36(g.F0),r.Y36(p.ux),r.Y36(Z.e))},o.\u0275cmp=r.Xpm({type:o,selectors:[["app-register"]],decls:74,vars:19,consts:[[1,"row","gx-0"],[1,"col-xl-3","col-lg-4","col-md-6"],[1,"d-block","bg-image"],[1,"bg-shadow"],[1,"col-xl-9","col-lg-8","col-md-6"],[1,"row","gx-0","justify-content-center"],[1,"col-xl-8","col-lg-10","col-md-12","py-5","px-1"],[1,"pt-50"],[1,"visually-hidden"],[1,"p-4"],[1,"d-flex","pt-4"],[1,"flex-grow-1"],[1,"fw-normal","text-primary"],[1,"flex-grow-1","text-end"],["routerLink","/home",1,"navbar-brand","text-secondary"],["src","../../../../assets/logo.png","alt","","width","30","height","24",1,"d-inline-block","align-text-top"],["class","alert alert-danger my-3",4,"ngIf"],[3,"formGroup"],[1,"row"],[1,"col-lg-6"],["appearance","outline",1,"w-100"],["matInput","","placeholder","Enter First Name","formControlName","nameone",3,"errorStateMatcher"],[4,"ngIf"],["matInput","","placeholder","Enter Last Name","formControlName","nametwo",3,"errorStateMatcher"],["matInput","","placeholder","Enter Phone Number","formControlName","phone",3,"errorStateMatcher"],["matInput","","placeholder","Enter Email","formControlName","email",3,"errorStateMatcher"],[1,"col-lg-12","pb-4"],["formControlName","branchid"],["matInput","","placeholder","Enter Password","type","password","formControlName","password",3,"errorStateMatcher"],["matInput","","type","password","placeholder","Confirm Password","formControlName","confirmpass",3,"errorStateMatcher"],[1,"text-end"],["routerLink","/login",1,"text-secondary"],["mat-raised-button","","color","primary","type","button",1,"me-3",3,"disabled","click"],[4,"ngIf","ngIfElse"],["notload",""],[1,"d-flex","align-self-center"],[1,"alert","alert-danger","my-3"],["value","","disabled",""],[4,"ngFor","ngForOf"],[3,"value"],[1,"fa","fa-spinner","fa-spin","fa-1x","me-2"],[1,""]],template:function(e,t){if(1&e&&(r.TgZ(0,"div",0)(1,"div",1)(2,"div",2),r._UZ(3,"div",3),r.qZA()(),r.TgZ(4,"div",4)(5,"div",5)(6,"div",6),r._UZ(7,"div",7),r.TgZ(8,"h1",8),r._uU(9,"Suluhi Register"),r.qZA(),r.TgZ(10,"mat-card")(11,"div",9)(12,"div",10)(13,"div",11)(14,"h3",12),r._uU(15,"Register User"),r.qZA()(),r.TgZ(16,"div",13)(17,"a",14),r._UZ(18,"img",15),r._uU(19," Suluhi "),r.qZA()()(),r.YNc(20,Y,2,1,"div",16),r.TgZ(21,"form",17)(22,"div",18)(23,"div",19)(24,"mat-form-field",20)(25,"mat-label"),r._uU(26,"First Name"),r.qZA(),r._UZ(27,"input",21),r.YNc(28,y,2,1,"mat-error",22),r.qZA()(),r.TgZ(29,"div",19)(30,"mat-form-field",20)(31,"mat-label"),r._uU(32,"Last Name"),r.qZA(),r._UZ(33,"input",23),r.YNc(34,E,2,1,"mat-error",22),r.qZA()()(),r.TgZ(35,"div",18)(36,"div",19)(37,"mat-form-field",20)(38,"mat-label"),r._uU(39,"Phone Number"),r.qZA(),r._UZ(40,"input",24),r.YNc(41,J,2,1,"mat-error",22),r.qZA()(),r.TgZ(42,"div",19)(43,"mat-form-field",20)(44,"mat-label"),r._uU(45,"Email"),r.qZA(),r._UZ(46,"input",25),r.YNc(47,Q,2,1,"mat-error",22),r.qZA()()(),r.TgZ(48,"div",18)(49,"div",26)(50,"ng-select",27),r.YNc(51,L,4,1,"ng-container",22),r.qZA()()(),r.TgZ(52,"div",18)(53,"div",19)(54,"mat-form-field",20)(55,"mat-label"),r._uU(56,"Password"),r.qZA(),r._UZ(57,"input",28),r.YNc(58,O,2,1,"mat-error",22),r.qZA()(),r.TgZ(59,"div",19)(60,"mat-form-field",20)(61,"mat-label"),r._uU(62,"Confrim Password"),r.qZA(),r._UZ(63,"input",29),r.YNc(64,R,2,1,"mat-error",22),r.YNc(65,B,2,0,"mat-error",22),r.qZA()()(),r.TgZ(66,"div",30)(67,"a",31),r._uU(68,"Already have an account? Login"),r.qZA()(),r.TgZ(69,"button",32),r.NdJ("click",function(){return t.registerUser()}),r.YNc(70,j,4,0,"ng-container",33),r.YNc(71,z,1,0,"ng-template",null,34,r.W1O),r.qZA()()()()()(),r._UZ(73,"div",35),r.qZA()()),2&e){const l=r.MAs(72);let s,d,b,C,w,T;r.xp6(20),r.Q6J("ngIf",t.errorMessage),r.xp6(1),r.Q6J("formGroup",t.registerForm),r.xp6(6),r.Q6J("errorStateMatcher",t.matcher),r.xp6(1),r.Q6J("ngIf",null==(s=t.registerForm.get("nameone"))?null:s.invalid),r.xp6(5),r.Q6J("errorStateMatcher",t.matcher),r.xp6(1),r.Q6J("ngIf",null==(d=t.registerForm.get("nametwo"))?null:d.invalid),r.xp6(6),r.Q6J("errorStateMatcher",t.matcher),r.xp6(1),r.Q6J("ngIf",null==(b=t.registerForm.get("phone"))?null:b.invalid),r.xp6(5),r.Q6J("errorStateMatcher",t.matcher),r.xp6(1),r.Q6J("ngIf",null==(C=t.registerForm.get("email"))?null:C.invalid),r.xp6(4),r.Q6J("ngIf",t.branches),r.xp6(6),r.Q6J("errorStateMatcher",t.matcher),r.xp6(1),r.Q6J("ngIf",null==(w=t.registerForm.get("password"))?null:w.invalid),r.xp6(5),r.Q6J("errorStateMatcher",t.matcher),r.xp6(1),r.Q6J("ngIf",null==(T=t.registerForm.get("confirmpass"))?null:T.invalid),r.xp6(1),r.Q6J("ngIf",t.registerForm.hasError("notSame")),r.xp6(4),r.Q6J("disabled",t.registerForm.invalid||t.errorMessage||t.loading),r.xp6(1),r.Q6J("ngIf",t.loading)("ngIfElse",l)}},directives:[c.a8,g.yS,u.O5,n._Y,n.JL,n.sg,m.KE,m.hX,h.Nt,n.Fj,n.JJ,n.u,m.TO,v.w9,v.jq,u.sg,f.lW],styles:[".pt-50[_ngcontent-%COMP%]{padding-top:50px}.text-danger[_ngcontent-%COMP%]{color:#f44336!important}.bg-image[_ngcontent-%COMP%]{background-image:url(loginlogo.89330fdc39353bb6.png);background-size:cover;background-position:center;background-repeat:no-repeat;height:100vh}.bg-shadow[_ngcontent-%COMP%]{background-color:#0000004b;height:100%}  .mat-form-field-flex>.mat-form-field-infix{padding:.5em 0!important}  .mat-form-field-label-wrapper{top:-1.4em}  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.1em) scale(.75);width:133.33333%}@media only screen and (max-width: 767px){.bg-image[_ngcontent-%COMP%]{height:130px}.pt-50[_ngcontent-%COMP%]{padding-top:20px}}"]}),o})();var G=i(5245);const W=[{path:"",component:M},{path:"register",component:X}];let D=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=r.oAB({type:o}),o.\u0275inj=r.cJS({imports:[[u.ez,n.UX,p.ZX,v.A0,m.lN,h.c,G.Ps,f.ot,c.QW,g.Bz.forChild(W)]]}),o})()}}]);