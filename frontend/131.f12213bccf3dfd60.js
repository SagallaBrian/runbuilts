"use strict";(self.webpackChunksuluhi_admin_frontend=self.webpackChunksuluhi_admin_frontend||[]).push([[131],{2131:(f,m,n)=>{n.r(m),n.d(m,{AuthModule:()=>c});var d=n(6895),s=n(1387),o=n(433),e=n(8256),u=n(7556);const p=[{path:"login",component:(()=>{class t{constructor(r,i,a){this.formBuilder=r,this.router=i,this.authService=a}ngOnInit(){this.loginForm=this.formBuilder.group({email:["",[o.kI.required,o.kI.email]],password:["",o.kI.required]})}login(){this.loginForm.valid&&this.authService.login(this.loginForm.value).subscribe({next:i=>{this.loginForm.reset(),this.authService.setAuthToken(i.token),this.router.navigate(["/projects"])},error:i=>{console.error("Failed to Login User",i)}})}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(o.qu),e.Y36(s.F0),e.Y36(u.e))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:18,vars:2,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-md-6"],[1,"card"],[1,"card-body"],[1,"card-title"],[3,"formGroup"],[1,"mb-3"],["for","email",1,"form-label"],["type","email","id","email","formControlName","email","placeholder","Enter your email",1,"form-control"],["for","password",1,"form-label"],["type","password","id","password","formControlName","password","placeholder","Enter your password",1,"form-control"],["type","button",1,"btn","btn-primary",3,"disabled","click"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h5",5),e._uU(6,"Login"),e.qZA(),e.TgZ(7,"form",6)(8,"div",7)(9,"label",8),e._uU(10,"Email"),e.qZA(),e._UZ(11,"input",9),e.qZA(),e.TgZ(12,"div",7)(13,"label",10),e._uU(14,"Password"),e.qZA(),e._UZ(15,"input",11),e.qZA(),e.TgZ(16,"button",12),e.NdJ("click",function(){return i.login()}),e._uU(17,"Login"),e.qZA()()()()()()()),2&r&&(e.xp6(7),e.Q6J("formGroup",i.loginForm),e.xp6(9),e.Q6J("disabled",i.loginForm.invalid))},dependencies:[o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u]}),t})()},{path:"register",component:(()=>{class t{constructor(r,i,a){this.formBuilder=r,this.router=i,this.authService=a}ngOnInit(){this.registerForm=this.formBuilder.group({firstName:["",[o.kI.required,o.kI.minLength(2),o.kI.maxLength(20)]],lastName:["",[o.kI.required,o.kI.minLength(2),o.kI.maxLength(20)]],phone:[""],email:["",[o.kI.required,o.kI.email]],password:["",[o.kI.required,o.kI.minLength(8)]]})}register(){this.registerForm.valid&&this.authService.register(this.registerForm.value).subscribe({next:i=>{this.registerForm.reset(),this.router.navigate(["/auth/login"])},error:i=>{console.error("Failed to Add User",i)}})}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(o.qu),e.Y36(s.F0),e.Y36(u.e))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-register"]],decls:30,vars:2,consts:[[1,"my-4"],[1,"row","justify-content-center"],[1,"col-md-6"],[1,"card"],[1,"card-body"],[1,"card-title"],[3,"formGroup"],[1,"mb-3"],["for","firstName",1,"form-label"],["type","text","id","firstName","formControlName","firstName","placeholder","Enter your first name",1,"form-control"],["for","lastName",1,"form-label"],["type","text","id","lastName","formControlName","lastName","placeholder","Enter your last name",1,"form-control"],["for","phone",1,"form-label"],["type","text","id","phone","formControlName","phone","placeholder","Enter your phone number",1,"form-control"],["for","email",1,"form-label"],["type","email","id","email","formControlName","email","placeholder","Enter your email",1,"form-control"],["for","password",1,"form-label"],["type","password","id","password","formControlName","password","placeholder","Enter your password",1,"form-control"],["type","button",1,"btn","btn-primary",3,"disabled","click"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h5",5),e._uU(6,"Register"),e.qZA(),e.TgZ(7,"form",6)(8,"div",7)(9,"label",8),e._uU(10,"First Name"),e.qZA(),e._UZ(11,"input",9),e.qZA(),e.TgZ(12,"div",7)(13,"label",10),e._uU(14,"Last Name"),e.qZA(),e._UZ(15,"input",11),e.qZA(),e.TgZ(16,"div",7)(17,"label",12),e._uU(18,"Phone"),e.qZA(),e._UZ(19,"input",13),e.qZA(),e.TgZ(20,"div",7)(21,"label",14),e._uU(22,"Email"),e.qZA(),e._UZ(23,"input",15),e.qZA(),e.TgZ(24,"div",7)(25,"label",16),e._uU(26,"Password"),e.qZA(),e._UZ(27,"input",17),e.qZA(),e.TgZ(28,"button",18),e.NdJ("click",function(){return i.register()}),e._uU(29,"Register"),e.qZA()()()()()()()),2&r&&(e.xp6(7),e.Q6J("formGroup",i.registerForm),e.xp6(21),e.Q6J("disabled",i.registerForm.invalid))},dependencies:[o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u]}),t})()},{path:"",redirectTo:"login",pathMatch:"full"},{path:"**",redirectTo:"login",pathMatch:"full"}];let c=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,o.u5,o.UX,s.Bz.forChild(p)]}),t})()}}]);