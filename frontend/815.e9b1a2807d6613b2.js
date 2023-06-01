"use strict";(self.webpackChunksuluhi_admin_frontend=self.webpackChunksuluhi_admin_frontend||[]).push([[815],{3815:(k,T,i)=>{i.r(T),i.d(T,{TasksModule:()=>D});var e=i(6895),p=i(8869),r=i(4006),g=i(1213),m=i(4333),t=i(4650);let Z=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-task-details"]],decls:2,vars:0,template:function(s,a){1&s&&(t.TgZ(0,"p"),t._uU(1,"task-details works!"),t.qZA())}}),n})();var C=i(2340),b=i(529);let x=(()=>{class n{constructor(s){this.http=s,this.taskurl=`${C.N.apiUrl}tasks`}createTask(s){return this.http.post(this.taskurl,s)}getTask(s){return this.http.get(`${this.taskurl}/${s}`)}updateTask(s,a){return this.http.put(`${this.taskurl}/${s}`,a)}deleteTask(s){return this.http.delete(`${this.taskurl}/${s}`)}getAllTasks(s,a,d){const f={currentPage:s,pageSize:a,...d};return this.http.get(this.taskurl,{params:f})}}return n.\u0275fac=function(s){return new(s||n)(t.LFG(b.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var A=i(7997),y=i(5511),l=i(8057),_=i(295);function o(n,c){1&n&&(t.ynx(0),t.TgZ(1,"div",8),t._UZ(2,"app-sul-loader"),t.qZA(),t.BQk())}function u(n,c){if(1&n&&(t.ynx(0),t.TgZ(1,"div",8),t._UZ(2,"app-error-occured",10),t.qZA(),t.BQk()),2&n){const s=t.oxw(2);t.xp6(2),t.Q6J("errorMessage",s.errorMessage)}}const h=function(n){return["edit",n]};function F(n,c){if(1&n&&(t.ynx(0),t.TgZ(1,"tr",18)(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td",19),t._uU(7),t.qZA()(),t.BQk()),2&n){const s=c.$implicit,a=c.index;t.xp6(1),t.Q6J("routerLink",t.VKq(4,h,s._id)),t.xp6(2),t.Oqu(a+1),t.xp6(2),t.Oqu(s.title),t.xp6(2),t.Oqu(s.taskstatus)}}const O=function(n,c,s){return{itemsPerPage:n,currentPage:c,totalItems:s}};function I(n,c){if(1&n){const s=t.EpF();t.ynx(0),t.TgZ(1,"div",12)(2,"table",13)(3,"thead",14)(4,"tr")(5,"th"),t._uU(6,"#"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Title"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Status"),t.qZA()()(),t.TgZ(11,"tbody"),t.YNc(12,F,8,6,"ng-container",15),t.ALo(13,"paginate"),t.qZA()()(),t.TgZ(14,"div",16)(15,"pagination-controls",17),t.NdJ("pageChange",function(d){t.CHM(s);const f=t.oxw(3);return t.KtG(f.onPageChange(d))}),t.qZA()(),t.BQk()}if(2&n){const s=t.oxw(3);t.xp6(12),t.Q6J("ngForOf",t.xi3(13,1,s.tasks.results,t.kEZ(4,O,s.tasks.pageSize,s.currentPage,s.tasks.totalItems)))}}function M(n,c){1&n&&t._UZ(0,"app-no-data-found",20),2&n&&t.Q6J("dataLabel","Task")}function J(n,c){if(1&n&&(t.YNc(0,I,16,8,"ng-container",6),t.YNc(1,M,1,1,"ng-template",null,11,t.W1O)),2&n){const s=t.MAs(2),a=t.oxw(2);t.Q6J("ngIf",a.tasks&&a.tasks.results.length)("ngIfElse",s)}}function U(n,c){if(1&n&&(t.YNc(0,u,3,1,"ng-container",6),t.YNc(1,J,3,2,"ng-template",null,9,t.W1O)),2&n){const s=t.MAs(2),a=t.oxw();t.Q6J("ngIf",a.errorMessage)("ngIfElse",s)}}let N=(()=>{class n{constructor(s){this.taskService=s,this.loading=!0,this.currentPage=1,this.pageSize=10,this.options=[{name:"Task Title",formname:"title",type:"text"},{name:"Status",formname:"taskstatus",type:"select",selectoptions:[{val:"pending",name:"Pending"},{val:"progress",name:"Progress"},{val:"complete",name:"Complete"}]}]}ngOnInit(){this.loadTasks({})}loadTasks(s){this.loading=!0,this.taskService.getAllTasks(this.currentPage,this.pageSize,s).subscribe({next:a=>{this.tasks=a},error:a=>{this.errorMessage=a,this.loading=!1},complete:()=>{this.loading=!1}})}searchFunction(s){this.loadTasks(s)}onPageChange(s){this.currentPage=s,this.loadTasks({})}}return n.\u0275fac=function(s){return new(s||n)(t.Y36(x))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-list-tasks"]],decls:13,vars:4,consts:[[1,"py-4"],[1,"d-flex"],[1,"flex-grow-1"],[1,"text-secondary","fw-normal","mb-1"],[3,"searchlabel","searchOptions","searchEmit"],["routerLink","/targets/tasks/add",1,"btn","btn-outline-primary","btn-sm"],[4,"ngIf","ngIfElse"],["loadedContent",""],[1,"py-3"],["noError",""],[3,"errorMessage"],["nodata",""],[1,"table-responsive"],[1,"table","table-bordered","table-striped","text-nowrap"],[1,"thead"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end","pt-3"],[1,"my-pagination",3,"pageChange"],[1,"cursor-pointer",3,"routerLink"],[1,"text-capitalize"],[3,"dataLabel"]],template:function(s,a){if(1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),t._uU(4,"Tasks"),t.qZA()(),t.ynx(5),t.TgZ(6,"app-search-tab",4),t.NdJ("searchEmit",function(f){return a.searchFunction(f)}),t.qZA(),t.BQk(),t.TgZ(7,"div")(8,"button",5),t._uU(9," Add Task"),t.qZA()()(),t.YNc(10,o,3,0,"ng-container",6),t.YNc(11,U,3,2,"ng-template",null,7,t.W1O),t.qZA()),2&s){const d=t.MAs(12);t.xp6(6),t.Q6J("searchlabel","Search Tasks")("searchOptions",a.options),t.xp6(4),t.Q6J("ngIf",a.loading)("ngIfElse",d)}},dependencies:[e.sg,e.O5,A.S,y.i,l.A,_.O,m.LS,p.rH,m._s]}),n})();function S(n,c){if(1&n&&(t.ynx(0),t.TgZ(1,"div",19),t._UZ(2,"app-error-occured",20),t.qZA(),t.BQk()),2&n){const s=t.oxw();t.xp6(2),t.Q6J("errorMessage",s.errorMessage)}}function L(n,c){1&n&&(t.TgZ(0,"div",21),t._uU(1," Title is required. "),t.qZA())}function q(n,c){1&n&&(t.TgZ(0,"div",21),t._uU(1," Description is required. "),t.qZA())}function Q(n,c){if(1&n){const s=t.EpF();t.ynx(0),t.TgZ(1,"button",22),t.NdJ("click",function(){t.CHM(s);const d=t.oxw();return t.KtG(d.deleteTask())}),t._uU(2,"Delete Task"),t.qZA(),t.TgZ(3,"button",23),t.NdJ("click",function(){t.CHM(s);const d=t.oxw();return t.KtG(d.updateTask())}),t._uU(4,"Edit Task"),t.qZA(),t.BQk()}if(2&n){const s=t.oxw();t.xp6(1),t.Q6J("disabled",s.taskForm.invalid),t.xp6(2),t.Q6J("disabled",s.taskForm.invalid)}}function P(n,c){if(1&n){const s=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(s);const d=t.oxw();return t.KtG(d.addTask())}),t._uU(1,"Add Task"),t.qZA()}if(2&n){const s=t.oxw();t.Q6J("disabled",s.taskForm.invalid)}}let E=(()=>{class n{constructor(s,a,d,f){this.formBuilder=s,this.router=a,this.taskService=d,this.route=f,this.title="Add Task"}ngOnInit(){this.taskForm=this.formBuilder.group({title:["",r.kI.required],description:["",r.kI.required],taskstatus:["pending"]}),this.taskId=this.route.snapshot.paramMap.get("id"),this.taskId&&(this.title="Edit Task",this.getTask(this.taskId))}addTask(){this.taskForm.valid&&this.taskService.createTask(this.taskForm.value).subscribe({next:a=>{this.taskForm.reset(),this.router.navigate(["/targets/tasks"])},error:a=>{console.error("Failed to Add task",a)}})}getTask(s){this.taskService.getTask(s).subscribe({next:a=>{this.taskForm.patchValue(a)},error:a=>{console.error("Failed to Add task",a)}})}updateTask(){this.taskService.updateTask(this.taskId,this.taskForm.value).subscribe({next:a=>{console.log(a),this.router.navigate(["/targets/tasks"])},error:a=>{this.errorMessage=a}})}deleteTask(){this.taskService.deleteTask(this.taskId).subscribe({next:s=>{this.router.navigate(["/targets/tasks"])},error:s=>{this.errorMessage=s}})}}return n.\u0275fac=function(s){return new(s||n)(t.Y36(r.qu),t.Y36(p.F0),t.Y36(x),t.Y36(p.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-edit-tasks"]],decls:33,vars:7,consts:[[4,"ngIf"],[1,"my-4",3,"formGroup"],[1,"d-flex"],[1,"flex-grow-1"],[1,"fw-normal"],["routerLink","/targets/tasks",1,"btn","btn-outline-primary","btn-sm"],[1,"mb-3"],["for","title",1,"form-label"],["type","text","id","title","formControlName","title","placeholder","Enter Title",1,"form-control"],["class","invalid-feedback",4,"ngIf"],["for","description",1,"form-label"],["id","description","formControlName","description","placeholder","Enter Description",1,"form-control"],["for","projectlink",1,"form-label"],["aria-label","Default select example","formControlName","taskstatus",1,"form-select"],["value","pending"],["value","progress"],["value","complete"],[4,"ngIf","ngIfElse"],["adding",""],[1,"py-3"],[3,"errorMessage"],[1,"invalid-feedback"],["type","submit",1,"btn","btn-danger","btn-sm","me-2",3,"disabled","click"],["type","submit",1,"btn","btn-primary","btn-sm",3,"disabled","click"],["type","submit",1,"btn","btn-success","btn-sm",3,"disabled","click"]],template:function(s,a){if(1&s&&(t.TgZ(0,"div"),t.YNc(1,S,3,1,"ng-container",0),t.TgZ(2,"form",1)(3,"div",2)(4,"div",3)(5,"h2",4),t._uU(6),t.qZA()(),t.TgZ(7,"div")(8,"button",5),t._uU(9," List Tasks"),t.qZA()()(),t.TgZ(10,"div",6)(11,"label",7),t._uU(12,"Title"),t.qZA(),t._UZ(13,"input",8),t.YNc(14,L,2,0,"div",9),t.qZA(),t.TgZ(15,"div",6)(16,"label",10),t._uU(17,"Description"),t.qZA(),t._UZ(18,"textarea",11),t.YNc(19,q,2,0,"div",9),t.qZA(),t.TgZ(20,"div",6)(21,"label",12),t._uU(22,"Project Status"),t.qZA(),t.TgZ(23,"select",13)(24,"option",14),t._uU(25,"Pending"),t.qZA(),t.TgZ(26,"option",15),t._uU(27,"Progress"),t.qZA(),t.TgZ(28,"option",16),t._uU(29,"Completed"),t.qZA()()(),t.YNc(30,Q,5,2,"ng-container",17),t.YNc(31,P,2,1,"ng-template",null,18,t.W1O),t.qZA()()),2&s){const d=t.MAs(32);let f,v;t.xp6(1),t.Q6J("ngIf",a.errorMessage),t.xp6(1),t.Q6J("formGroup",a.taskForm),t.xp6(4),t.Oqu(a.title),t.xp6(8),t.Q6J("ngIf",(null==(f=a.taskForm.get("title"))?null:f.invalid)&&(null==(f=a.taskForm.get("title"))?null:f.touched)),t.xp6(5),t.Q6J("ngIf",(null==(v=a.taskForm.get("description"))?null:v.invalid)&&(null==(v=a.taskForm.get("description"))?null:v.touched)),t.xp6(11),t.Q6J("ngIf",a.taskId)("ngIfElse",d)}},dependencies:[e.O5,r._Y,r.YN,r.Kr,r.Fj,r.EJ,r.JJ,r.JL,r.sg,r.u,l.A,p.rH]}),n})();const Y=[{path:"",component:N},{path:"add",component:E},{path:"edit/:id",component:E},{path:"view/:id",component:Z},{path:"**",redirectTo:"",pathMatch:"full"}];let D=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[e.ez,r.u5,r.UX,g.C,m.JX,p.Bz.forChild(Y)]}),n})()},8057:(k,T,i)=>{i.d(T,{A:()=>p});var e=i(4650);let p=(()=>{class r{ngOnInit(){this.errorMessage?.error?.message&&(this.errormes=this.errorMessage.error.message)}}return r.\u0275fac=function(m){return new(m||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-error-occured"]],inputs:{errorMessage:"errorMessage"},decls:4,vars:1,consts:[[1,"py-2"],["role","alert",1,"alert","alert-danger"],[1,"d-flex","align-items-center"]],template:function(m,t){1&m&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3),e.qZA()()()),2&m&&(e.xp6(3),e.hij(" ",t.errormes?t.errormes:t.errorMessage.message," "))}}),r})()},5511:(k,T,i)=>{i.d(T,{i:()=>p});var e=i(4650);let p=(()=>{class r{}return r.\u0275fac=function(m){return new(m||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-no-data-found"]],inputs:{dataLabel:"dataLabel"},decls:4,vars:1,consts:[[1,"py-2"],["role","alert",1,"alert","alert-info"],[1,"d-flex","align-items-center"]],template:function(m,t){1&m&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3),e.qZA()()()),2&m&&(e.xp6(3),e.hij(" No ",t.dataLabel," record found with the given filter parameters "))}}),r})()},295:(k,T,i)=>{i.d(T,{O:()=>y});var e=i(4650),p=i(4006),r=i(6895),g=i(7392);function m(l,_){if(1&l&&e._UZ(0,"input",11),2&l){const o=e.oxw(2);e.Q6J("type",o.inputype)("placeholder",o.searchlabel)}}function t(l,_){if(1&l&&(e.ynx(0),e.TgZ(1,"option",13),e._uU(2),e.qZA(),e.BQk()),2&l){const o=_.$implicit;e.xp6(1),e.Q6J("value",o.val),e.xp6(1),e.Oqu(o.name)}}function Z(l,_){if(1&l&&(e.TgZ(0,"select",12),e.YNc(1,t,3,2,"ng-container",8),e.qZA()),2&l){const o=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",o.selectoptions)}}function C(l,_){if(1&l&&(e.ynx(0),e.TgZ(1,"option",13),e._uU(2),e.qZA(),e.BQk()),2&l){const o=_.$implicit;e.xp6(1),e.Q6J("value",o.formname),e.xp6(1),e.Oqu(o.name)}}function b(l,_){if(1&l){const o=e.EpF();e.TgZ(0,"mat-icon",14),e.NdJ("click",function(){e.CHM(o);const h=e.oxw(2);return e.KtG(h.submitForm())}),e._uU(1,"manage_search"),e.qZA()}}function x(l,_){if(1&l){const o=e.EpF();e.TgZ(0,"mat-icon",15),e.NdJ("click",function(){e.CHM(o);const h=e.oxw(2);return e.KtG(h.resetSearch())}),e._uU(1,"close"),e.qZA()}}function A(l,_){if(1&l){const o=e.EpF();e.TgZ(0,"form",2)(1,"div",3),e.YNc(2,m,1,2,"input",4),e.YNc(3,Z,2,1,"select",5),e.TgZ(4,"select",6),e.NdJ("change",function(){e.CHM(o);const h=e.oxw();return e.KtG(h.paramChange())}),e.TgZ(5,"option",7),e._uU(6,"Select Parameter"),e.qZA(),e.YNc(7,C,3,2,"ng-container",8),e.qZA(),e.YNc(8,b,2,0,"mat-icon",9),e.YNc(9,x,2,0,"mat-icon",10),e.qZA()()}if(2&l){const o=e.oxw();e.Q6J("formGroup",o.searchForm),e.xp6(2),e.Q6J("ngIf",!o.dispselect),e.xp6(1),e.Q6J("ngIf",o.dispselect&&o.selectoptions.length),e.xp6(2),e.Q6J("value",""),e.xp6(2),e.Q6J("ngForOf",o.searchOptions),e.xp6(1),e.Q6J("ngIf",o.searchForm.valid),e.xp6(1),e.Q6J("ngIf",o.searched)}}let y=(()=>{class l{constructor(o){this.searchFb=o,this.searchlabel="",this.searchOptions=[],this.searchEmit=new e.vpe,this.selectoptions=[],this.dispselect=!1,this.inputype="text",this.searched=!1,this.searchForm=this.searchFb.group({searchValue:["",p.kI.required],searchParam:["",p.kI.required]})}ngOnInit(){this.searchOptions.length&&this.searchForm.controls.searchParam.setValue(this.searchOptions[0].formname)}paramChange(){this.dispselect=!1;const o=this.searchForm.get("searchParam")?.value;this.searchForm.controls.searchValue.setValue("");const u=this.searchOptions.find(h=>h.formname===o);u?.selectoptions&&u?.selectoptions.length?(this.dispselect=!0,this.selectoptions=u.selectoptions,this.searchForm.controls.searchValue.setValue(this.selectoptions[0].val)):this.inputype=u?.type}submitForm(){if(this.searchForm.valid){const{searchParam:o,searchValue:u}=this.searchForm.value,h={};o&&(h[o]=u,this.searched=!0,this.searchEmit.emit(h))}}resetSearch(){this.searched=!1,this.dispselect=!1,this.searchForm.controls.searchValue.setValue(""),this.searchForm.controls.searchParam.setValue(""),this.searchEmit.emit({})}}return l.\u0275fac=function(o){return new(o||l)(e.Y36(p.qu))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-search-tab"]],inputs:{searchlabel:"searchlabel",searchOptions:"searchOptions"},outputs:{searchEmit:"searchEmit"},decls:2,vars:1,consts:[[1,"mb-2","me-2","d-none","d-lg-block"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],[1,"d-md-flex","align-items-center"],["class","form-control form-select-sm me-2  my-search","formControlName","searchValue",3,"type","placeholder",4,"ngIf"],["class","form-select  form-select-sm text-secondary my-search me-2","formControlName","searchValue",4,"ngIf"],["formControlName","searchParam",1,"form-select","form-select-sm","text-secondary","my-search","me-2",3,"change"],["disabled","",3,"value"],[4,"ngFor","ngForOf"],["class","m-0 text-primary",3,"click",4,"ngIf"],["class","m-0 text-danger",3,"click",4,"ngIf"],["formControlName","searchValue",1,"form-control","form-select-sm","me-2","my-search",3,"type","placeholder"],["formControlName","searchValue",1,"form-select","form-select-sm","text-secondary","my-search","me-2"],[3,"value"],[1,"m-0","text-primary",3,"click"],[1,"m-0","text-danger",3,"click"]],template:function(o,u){1&o&&(e.TgZ(0,"div",0),e.YNc(1,A,10,7,"form",1),e.qZA()),2&o&&(e.xp6(1),e.Q6J("ngIf",u.searchOptions&&u.searchOptions.length))},dependencies:[r.sg,r.O5,p._Y,p.YN,p.Kr,p.Fj,p.EJ,p.JJ,p.JL,g.Hw,p.sg,p.u],styles:["select[_ngcontent-%COMP%]{border-color:#0d6efd}.my-search[_ngcontent-%COMP%]{width:180px}"]}),l})()},7997:(k,T,i)=>{i.d(T,{S:()=>p});var e=i(4650);let p=(()=>{class r{}return r.\u0275fac=function(m){return new(m||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-sul-loader"]],decls:8,vars:0,consts:[[1,"py-2"],["role","alert",1,"alert","alert-warning"],[1,"d-flex","align-items-center"],["role","status",1,"spinner-border","spinner-border-sm"],[1,"visually-hidden"],[1,"blinks"]],template:function(m,t){1&m&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4),e._uU(5,"Loading..."),e.qZA()(),e.TgZ(6,"span",5),e._uU(7," \xa0 Loading ... "),e.qZA()()()())}}),r})()}}]);