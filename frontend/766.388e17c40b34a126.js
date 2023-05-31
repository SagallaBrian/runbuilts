"use strict";(self.webpackChunksuluhi_admin_frontend=self.webpackChunksuluhi_admin_frontend||[]).push([[766],{3766:(v,Z,l)=>{l.r(Z),l.d(Z,{ProjectsModule:()=>$});var o=l(6895),p=l(8869),i=l(4006),u=l(4333),t=l(4650),j=l(2340),P=l(529);let x=(()=>{class n{constructor(e){this.http=e,this.apiUrl=`${j.N.apiUrl}projects`,this.secUrl=`${j.N.apiUrl}projsections`}createProject(e){return this.http.post(this.apiUrl,e)}getProject(e){return this.http.get(`${this.apiUrl}/${e}`)}updateProject(e,r){return this.http.put(`${this.apiUrl}/${e}`,r)}deleteProject(e){return this.http.delete(`${this.apiUrl}/${e}`)}deleteProjectSection(e){return this.http.delete(`${this.secUrl}/${e}`)}getAllProjects(e,r,a){const m={currentPage:e,pageSize:r,...a};return this.http.get(this.apiUrl,{params:m})}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(P.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var b=l(7997),A=l(5511),T=l(8057),C=l(295);function d(n,c){1&n&&(t.ynx(0),t.TgZ(1,"div",8),t._UZ(2,"app-sul-loader"),t.qZA(),t.BQk())}function g(n,c){if(1&n&&(t.ynx(0),t.TgZ(1,"div",8),t._UZ(2,"app-error-occured",10),t.qZA(),t.BQk()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("errorMessage",e.errorMessage)}}const s=function(n){return["view",n]},_=function(n){return["edit",n]};function h(n,c){if(1&n&&(t.ynx(0),t.TgZ(1,"tr",19)(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td",20),t._uU(7),t.ALo(8,"date"),t.qZA(),t.TgZ(9,"td",20),t._uU(10),t.ALo(11,"date"),t.qZA(),t.TgZ(12,"td",21),t._uU(13),t.qZA(),t.TgZ(14,"td")(15,"button",22),t._uU(16,"Edit"),t.qZA()()(),t.BQk()),2&n){const e=c.$implicit,r=c.index;t.xp6(1),t.Q6J("routerLink",t.VKq(11,s,e._id)),t.xp6(2),t.Oqu(r+1),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Oqu(t.lcZ(8,7,e.startDate)),t.xp6(3),t.Oqu(t.lcZ(11,9,e.endDate)),t.xp6(3),t.Oqu(e.projectstatus),t.xp6(2),t.Q6J("routerLink",t.VKq(13,_,e._id))}}const q=function(n,c,e){return{itemsPerPage:n,currentPage:c,totalItems:e}};function E(n,c){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",12)(2,"table",13)(3,"thead",14)(4,"tr",15)(5,"th"),t._uU(6,"#"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Title"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Start Date"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"End date"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Status"),t.qZA(),t._UZ(15,"th"),t.qZA()(),t.TgZ(16,"tbody"),t.YNc(17,h,17,15,"ng-container",16),t.ALo(18,"paginate"),t.qZA()()(),t.TgZ(19,"div",17)(20,"pagination-controls",18),t.NdJ("pageChange",function(a){t.CHM(e);const m=t.oxw(3);return t.KtG(m.onPageChange(a))}),t.qZA()(),t.BQk()}if(2&n){const e=t.oxw(3);t.xp6(17),t.Q6J("ngForOf",t.xi3(18,1,e.projects.results,t.kEZ(4,q,e.projects.pageSize,e.currentPage,e.projects.totalItems)))}}function D(n,c){1&n&&t._UZ(0,"app-no-data-found",23),2&n&&t.Q6J("dataLabel","Project")}function O(n,c){if(1&n&&(t.YNc(0,E,21,8,"ng-container",6),t.YNc(1,D,1,1,"ng-template",null,11,t.W1O)),2&n){const e=t.MAs(2),r=t.oxw(2);t.Q6J("ngIf",r.projects&&r.projects.results.length)("ngIfElse",e)}}function F(n,c){if(1&n&&(t.YNc(0,g,3,1,"ng-container",6),t.YNc(1,O,3,2,"ng-template",null,9,t.W1O)),2&n){const e=t.MAs(2),r=t.oxw();t.Q6J("ngIf",r.errorMessage)("ngIfElse",e)}}let I=(()=>{class n{constructor(e){this.projectService=e,this.currentPage=1,this.pageSize=10,this.options=[{name:"Project Name",formname:"title",type:"text"},{name:"Start Date",formname:"startDate",type:"date"},{name:"Status",formname:"projectstatus",type:"select",selectoptions:[{val:"pending",name:"Pending"},{val:"progress",name:"Progress"},{val:"complete",name:"Complete"}]}],this.loading=!0}ngOnInit(){this.loadProjects({})}loadProjects(e){this.loading=!0,this.projectService.getAllProjects(this.currentPage,this.pageSize,e).subscribe({next:r=>{this.loading=!1,r.results.sort((a,m)=>new Date(a.startDate)-new Date(m.startDate)),this.projects=r},error:r=>{this.errorMessage=r,this.loading=!1},complete:()=>{this.loading=!1}})}onPageChange(e){this.currentPage=e,this.loadProjects({})}searchFunction(e){this.loadProjects(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(x))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-list-projects"]],decls:13,vars:4,consts:[[1,"py-4"],[1,"d-flex"],[1,"flex-grow-1"],[1,"text-secondary","fw-normal","mb-1"],[3,"searchlabel","searchOptions","searchEmit"],["routerLink","/projects/add",1,"btn","btn-outline-primary","btn-sm"],[4,"ngIf","ngIfElse"],["loadedContent",""],[1,"py-3"],["noError",""],[3,"errorMessage"],["nodata",""],[1,"table-responsive"],[1,"table","table-bordered","table-striped","table-hover"],[1,"thead"],[1,""],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end"],[1,"my-pagination",3,"pageChange"],[1,"cursor-pointer",3,"routerLink"],[1,"text-nowrap"],[1,"text-capitalize"],[1,"edit-btn",3,"routerLink"],[3,"dataLabel"]],template:function(e,r){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),t._uU(4,"Projects"),t.qZA()(),t.ynx(5),t.TgZ(6,"app-search-tab",4),t.NdJ("searchEmit",function(m){return r.searchFunction(m)}),t.qZA(),t.BQk(),t.TgZ(7,"div")(8,"button",5),t._uU(9," Add Project"),t.qZA()()(),t.YNc(10,d,3,0,"ng-container",6),t.YNc(11,F,3,2,"ng-template",null,7,t.W1O),t.qZA()),2&e){const a=t.MAs(12);t.xp6(6),t.Q6J("searchlabel","Search Projects")("searchOptions",r.options),t.xp6(4),t.Q6J("ngIf",r.loading)("ngIfElse",a)}},dependencies:[o.sg,o.O5,b.S,A.i,T.A,C.O,u.LS,p.rH,o.uU,u._s],styles:[".icon-size[_ngcontent-%COMP%]{font-size:.82rem!important}"]}),n})();function S(n,c){1&n&&(t.TgZ(0,"div",30),t._uU(1," Title is required. "),t.qZA())}function M(n,c){1&n&&(t.TgZ(0,"div",30),t._uU(1," Description is required. "),t.qZA())}function N(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"div",31)(1,"div",32)(2,"div",1)(3,"div",2)(4,"h4",33),t._uU(5),t.qZA()(),t.TgZ(6,"div")(7,"button",34),t.NdJ("click",function(){const m=t.CHM(e).index,f=t.oxw();return t.KtG(f.deleteSection(m))}),t._uU(8,"Remove"),t.qZA()()(),t.TgZ(9,"div",35)(10,"div",5)(11,"label",36),t._uU(12,"Section Title"),t.qZA(),t._UZ(13,"input",37),t.qZA(),t.TgZ(14,"div",5)(15,"label",38),t._uU(16,"Section Description"),t.qZA(),t._UZ(17,"textarea",39),t.qZA()()()()}if(2&n){const e=c.index;t.xp6(5),t.hij("Section ",e+1,""),t.xp6(4),t.Q6J("formGroupName",e)}}function k(n,c){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",40),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.deleteProject())}),t._uU(2),t.qZA(),t.TgZ(3,"button",41),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.updateProject())}),t._uU(4),t.qZA(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(2),t.hij(" ",e.submiting?"Loading...":"Delete Project"," "),t.xp6(1),t.Q6J("disabled",e.projectForm.invalid),t.xp6(1),t.hij(" ",e.submiting?"Loading...":"Edit Project"," ")}}function L(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"button",42),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.addProject())}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("disabled",e.projectForm.invalid),t.xp6(1),t.hij(" ",e.submiting?"Loading...":"Add Project"," ")}}let U=(()=>{class n{constructor(e,r,a,m){this.formBuilder=e,this.router=r,this.projectService=a,this.route=m,this.title="Add Project",this.submiting=!1,this.loading=!1,this.status=["pending","progress","complete"]}ngOnInit(){this.projectForm=this.formBuilder.group({title:["",i.kI.required],description:["",i.kI.required],projectstatus:["pending"],startDate:[""],projectlink:[""],endDate:[""],projectsections:this.formBuilder.array([])}),this.projectId=this.route.snapshot.paramMap.get("id"),this.projectId&&(this.title="Edit Project",this.getProject(this.projectId))}addProject(){this.projectForm.valid&&(this.submiting=!0,this.projectService.createProject(this.projectForm.value).subscribe({next:r=>{this.projectForm.reset(),this.router.navigate(["/projects"])},error:r=>{console.error("Failed to Add project",r)},complete:()=>{this.submiting=!1}}))}get projectsections(){return this.projectForm.get("projectsections")}addSection(){const e=this.formBuilder.group({title:["",i.kI.required],description:["",i.kI.required],_id:[""]});this.projectsections.push(e)}deleteSection(e){const r=this.projectsections.value[e];r._id?this.deleteProjectSection(r._id,e):this.projectsections.removeAt(e)}getProject(e){this.loading=!0,this.projectService.getProject(e).subscribe({next:r=>{const a=new Date(r.startDate).toISOString().substring(0,10),m=new Date(r.endDate).toISOString().substring(0,10);r.startDate=a,r.endDate=m,this.projectForm.patchValue(r),r.projectsections.forEach(f=>{const y=this.formBuilder.group({title:[f.title,i.kI.required],description:[f.description,i.kI.required],_id:[f._id]});this.projectsections.push(y)})},error:r=>{console.error("Failed to Get project",r),this.loading=!1},complete:()=>{this.loading=!1}})}updateProject(){const e=this.projectForm.value;this.submiting=!0,this.projectService.updateProject(this.projectId,e).subscribe({next:r=>{this.router.navigate(["/projects"])},error:r=>{console.error("Failed to Edit project",r),this.submiting=!1},complete:()=>{this.submiting=!1}})}deleteProject(){this.submiting=!0,this.projectService.deleteProject(this.projectId).subscribe({next:e=>{console.log(e),this.router.navigate(["/projects"])},error:e=>{console.error("Failed to Delete project",e)},complete:()=>{this.submiting=!1}})}deleteProjectSection(e,r){this.submiting=!0,this.projectService.deleteProjectSection(e).subscribe({next:a=>{console.log(a),this.projectsections.removeAt(r)},error:a=>{console.error("Failed to Delete project",a)},complete:()=>{this.submiting=!1}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.qu),t.Y36(p.F0),t.Y36(x),t.Y36(p.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-edit-projects"]],decls:55,vars:7,consts:[[1,"my-4",3,"formGroup"],[1,"d-flex"],[1,"flex-grow-1"],[1,"fw-normal"],["routerLink","/projects",1,"btn","btn-outline-primary","btn-sm"],[1,"mb-3"],["for","title",1,"form-label"],["type","text","id","title","formControlName","title","placeholder","Enter Project Title",1,"form-control"],["class","invalid-feedback",4,"ngIf"],["for","description",1,"form-label"],["id","description","formControlName","description","placeholder","Enter Project Description",1,"form-control"],[1,"row"],[1,"col-lg-6"],["for","projectlink",1,"form-label"],["aria-label","Default select example","formControlName","projectstatus",1,"form-select"],["value","pending"],["value","progress"],["value","complete"],["type","projectlink","id","projectlink","formControlName","projectlink","placeholder","Enter Link",1,"form-control"],["for","startDate",1,"form-label"],["type","date","id","startDate","formControlName","startDate",1,"form-control"],["for","endDate",1,"form-label"],["type","date","id","endDate","formControlName","endDate",1,"form-control"],["formArrayName","projectsections"],["class","card my-3",4,"ngFor","ngForOf"],[1,"text-end"],["type","button",1,"btn","btn-success","btn-sm","mt-3",3,"click"],[1,"mt-3"],[4,"ngIf","ngIfElse"],["addTasking",""],[1,"invalid-feedback"],[1,"card","my-3"],[1,"card-body"],[1,"card-title"],[1,"btn","btn-danger","btn-sm",3,"click"],[3,"formGroupName"],["for","titl",1,"form-label"],["type","text","id","titl","formControlName","title",1,"form-control"],["for","descr",1,"form-label"],["id","descr","formControlName","description",1,"form-control"],["type","submit",1,"btn","btn-danger","btn-sm","me-2",3,"click"],["type","submit",1,"btn","btn-primary","btn-sm",3,"disabled","click"],["type","submit",1,"btn","btn-success","btn-sm",3,"disabled","click"]],template:function(e,r){if(1&e&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"h2",3),t._uU(4),t.qZA()(),t.TgZ(5,"div")(6,"button",4),t._uU(7," List Projects"),t.qZA()()(),t.TgZ(8,"div",5)(9,"label",6),t._uU(10,"Title"),t.qZA(),t._UZ(11,"input",7),t.YNc(12,S,2,0,"div",8),t.qZA(),t.TgZ(13,"div",5)(14,"label",9),t._uU(15,"Description"),t.qZA(),t._UZ(16,"textarea",10),t.YNc(17,M,2,0,"div",8),t.qZA(),t.TgZ(18,"div",11)(19,"div",12)(20,"div",5)(21,"label",13),t._uU(22,"Project Status"),t.qZA(),t.TgZ(23,"select",14)(24,"option",15),t._uU(25,"Pending"),t.qZA(),t.TgZ(26,"option",16),t._uU(27,"Progress"),t.qZA(),t.TgZ(28,"option",17),t._uU(29,"Completed"),t.qZA()()()(),t.TgZ(30,"div",12)(31,"div",5)(32,"label",13),t._uU(33,"Project Link"),t.qZA(),t._UZ(34,"input",18),t.qZA()()(),t.TgZ(35,"div",11)(36,"div",12)(37,"div",5)(38,"label",19),t._uU(39,"Start Date"),t.qZA(),t._UZ(40,"input",20),t.qZA()(),t.TgZ(41,"div",12)(42,"div",5)(43,"label",21),t._uU(44,"End Date"),t.qZA(),t._UZ(45,"input",22),t.qZA()()(),t.TgZ(46,"div",23),t.YNc(47,N,18,2,"div",24),t.TgZ(48,"div",25)(49,"button",26),t.NdJ("click",function(){return r.addSection()}),t._uU(50,"Add Section"),t.qZA()()(),t.TgZ(51,"div",27),t.YNc(52,k,5,3,"ng-container",28),t.YNc(53,L,2,2,"ng-template",null,29,t.W1O),t.qZA()()),2&e){const a=t.MAs(54);let m,f;t.Q6J("formGroup",r.projectForm),t.xp6(4),t.Oqu(r.title),t.xp6(8),t.Q6J("ngIf",(null==(m=r.projectForm.get("title"))?null:m.invalid)&&(null==(m=r.projectForm.get("title"))?null:m.touched)),t.xp6(5),t.Q6J("ngIf",(null==(f=r.projectForm.get("description"))?null:f.invalid)&&(null==(f=r.projectForm.get("description"))?null:f.touched)),t.xp6(30),t.Q6J("ngForOf",r.projectsections.controls),t.xp6(5),t.Q6J("ngIf",r.projectId)("ngIfElse",a)}},dependencies:[o.sg,o.O5,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.sg,i.u,i.x0,i.CE,p.rH],styles:["input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{font-size:.87rem!important}a[_ngcontent-%COMP%]{text-decoration:none}"]}),n})();var J=l(1213);function Q(n,c){if(1&n&&(t.ynx(0),t.TgZ(1,"h2",7),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw();t.xp6(2),t.Oqu(e.projectDetails.title)}}function Y(n,c){1&n&&(t.ynx(0),t.TgZ(1,"div",8),t._UZ(2,"app-sul-loader"),t.qZA(),t.BQk())}function w(n,c){if(1&n&&(t.ynx(0),t.TgZ(1,"div",8),t._UZ(2,"app-error-occured",10),t.qZA(),t.BQk()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("errorMessage",e.errorMessage)}}function B(n,c){if(1&n&&(t.ynx(0),t.TgZ(1,"div",17)(2,"h3",18)(3,"button",19),t._uU(4),t.qZA()(),t.TgZ(5,"div",20)(6,"div",21),t._uU(7),t.qZA()()(),t.BQk()),2&n){const e=c.$implicit,r=c.index;t.xp6(3),t.uIk("data-bs-target","#flush-collapse"+r),t.xp6(1),t.hij(" ",e.title," "),t.xp6(1),t.MGl("id","flush-collapse",r,""),t.xp6(2),t.hij(" ",e.description," ")}}function G(n,c){if(1&n&&(t.TgZ(0,"div",11)(1,"h3",12),t._uU(2,"Description"),t.qZA(),t.TgZ(3,"div",13),t._uU(4),t.qZA()(),t.TgZ(5,"div",11)(6,"h3",12),t._uU(7,"Project Timeline"),t.qZA(),t.TgZ(8,"div",13),t._uU(9),t.ALo(10,"date"),t.ALo(11,"date"),t.qZA()(),t.TgZ(12,"div",11)(13,"h3",12),t._uU(14,"Project Link"),t.qZA(),t.TgZ(15,"div",13)(16,"a",14),t._uU(17),t.qZA()()(),t.TgZ(18,"div",11)(19,"h3",12),t._uU(20,"Project MileStone"),t.qZA(),t.TgZ(21,"div",15),t.YNc(22,B,8,4,"ng-container",16),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(4),t.hij(" ",e.projectDetails.description," "),t.xp6(5),t.AsE(" ",t.lcZ(10,6,e.projectDetails.startDate)," - ",t.lcZ(11,8,e.projectDetails.endDate)," "),t.xp6(7),t.s9C("href",e.projectDetails.projectlink,t.LSH),t.xp6(1),t.Oqu(e.projectDetails.projectlink),t.xp6(5),t.Q6J("ngForOf",e.projectDetails.projectsections)}}function K(n,c){if(1&n&&(t.YNc(0,w,3,1,"ng-container",5),t.YNc(1,G,23,10,"ng-template",null,9,t.W1O)),2&n){const e=t.MAs(2),r=t.oxw();t.Q6J("ngIf",r.errorMessage)("ngIfElse",e)}}const V=[{path:"",component:I},{path:"add",component:U},{path:"edit/:id",component:U},{path:"view/:id",component:(()=>{class n{constructor(e,r,a){this.router=e,this.projectService=r,this.route=a,this.loading=!0}ngOnInit(){this.projectId=this.route.snapshot.paramMap.get("id"),this.projectId&&this.getProject(this.projectId)}getProject(e){this.loading=!0,this.projectService.getProject(e).subscribe({next:r=>{this.projectDetails=r},error:r=>{this.loading=!1,this.errorMessage=r},complete:()=>{this.loading=!1}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.F0),t.Y36(x),t.Y36(p.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-project-details"]],decls:10,vars:3,consts:[[1,"my-4"],[1,"d-flex"],[1,"flex-grow-1"],[4,"ngIf"],["routerLink","/projects",1,"btn","btn-outline-secondary","btn-sm"],[4,"ngIf","ngIfElse"],["loadedContent",""],[1,"text-","fw-normal","mb-1"],[1,"py-3"],["noError",""],[3,"errorMessage"],[1,"my-3"],[1,"fw-normal","my-0"],[1,"text-secondary","sul-font"],[3,"href"],["id","accordionFlushExample",1,"accordion","accordion-flush"],[4,"ngFor","ngForOf"],[1,"accordion-item"],[1,"accordion-header","my-accordion-header"],["type","button","data-bs-toggle","collapse","aria-expanded","false","aria-controls","flush-collapseOne",1,"accordion-button","collapsed","text-secondary","sul-font"],["data-bs-parent","#accordionFlushExample",1,"accordion-collapse","collapse","my-0",3,"id"],[1,"accordion-body","text-secondary"]],template:function(e,r){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.YNc(3,Q,3,1,"ng-container",3),t.qZA(),t.TgZ(4,"div")(5,"button",4),t._uU(6," List Projects"),t.qZA()()(),t.YNc(7,Y,3,0,"ng-container",5),t.YNc(8,K,3,2,"ng-template",null,6,t.W1O),t.qZA()),2&e){const a=t.MAs(9);t.xp6(3),t.Q6J("ngIf",r.projectDetails&&r.projectDetails.title),t.xp6(4),t.Q6J("ngIf",r.loading)("ngIfElse",a)}},dependencies:[o.sg,o.O5,b.S,T.A,p.rH,o.uU],styles:[".my-accordion-header[_ngcontent-%COMP%]{margin-bottom:0}.my-accordion-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding-top:5px!important;padding-bottom:5px!important}"]}),n})()},{path:"**",redirectTo:"",pathMatch:"full"}];let $=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[o.ez,i.u5,i.UX,J.C,u.JX,p.Bz.forChild(V)]}),n})()},8057:(v,Z,l)=>{l.d(Z,{A:()=>p});var o=l(4650);let p=(()=>{class i{ngOnInit(){this.errorMessage?.error?.message&&(this.errormes=this.errorMessage.error.message)}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-error-occured"]],inputs:{errorMessage:"errorMessage"},decls:4,vars:1,consts:[[1,"py-2"],["role","alert",1,"alert","alert-danger"],[1,"d-flex","align-items-center"]],template:function(t,j){1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2),o._uU(3),o.qZA()()()),2&t&&(o.xp6(3),o.hij(" ",j.errormes?j.errormes:j.errorMessage.message," "))}}),i})()},5511:(v,Z,l)=>{l.d(Z,{i:()=>p});var o=l(4650);let p=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-no-data-found"]],inputs:{dataLabel:"dataLabel"},decls:4,vars:1,consts:[[1,"py-2"],["role","alert",1,"alert","alert-info"],[1,"d-flex","align-items-center"]],template:function(t,j){1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2),o._uU(3),o.qZA()()()),2&t&&(o.xp6(3),o.hij(" No ",j.dataLabel," record found with the given filter parameters "))}}),i})()},295:(v,Z,l)=>{l.d(Z,{O:()=>C});var o=l(4650),p=l(4006),i=l(6895),u=l(7392);function t(d,g){if(1&d&&o._UZ(0,"input",11),2&d){const s=o.oxw(2);o.Q6J("type",s.inputype)("placeholder",s.searchlabel)}}function j(d,g){if(1&d&&(o.ynx(0),o.TgZ(1,"option",13),o._uU(2),o.qZA(),o.BQk()),2&d){const s=g.$implicit;o.xp6(1),o.Q6J("value",s.val),o.xp6(1),o.Oqu(s.name)}}function P(d,g){if(1&d&&(o.TgZ(0,"select",12),o.YNc(1,j,3,2,"ng-container",8),o.qZA()),2&d){const s=o.oxw(2);o.xp6(1),o.Q6J("ngForOf",s.selectoptions)}}function x(d,g){if(1&d&&(o.ynx(0),o.TgZ(1,"option",13),o._uU(2),o.qZA(),o.BQk()),2&d){const s=g.$implicit;o.xp6(1),o.Q6J("value",s.formname),o.xp6(1),o.Oqu(s.name)}}function b(d,g){if(1&d){const s=o.EpF();o.TgZ(0,"mat-icon",14),o.NdJ("click",function(){o.CHM(s);const h=o.oxw(2);return o.KtG(h.submitForm())}),o._uU(1,"manage_search"),o.qZA()}}function A(d,g){if(1&d){const s=o.EpF();o.TgZ(0,"mat-icon",15),o.NdJ("click",function(){o.CHM(s);const h=o.oxw(2);return o.KtG(h.resetSearch())}),o._uU(1,"close"),o.qZA()}}function T(d,g){if(1&d){const s=o.EpF();o.TgZ(0,"form",2)(1,"div",3),o.YNc(2,t,1,2,"input",4),o.YNc(3,P,2,1,"select",5),o.TgZ(4,"select",6),o.NdJ("change",function(){o.CHM(s);const h=o.oxw();return o.KtG(h.paramChange())}),o.TgZ(5,"option",7),o._uU(6,"Select Parameter"),o.qZA(),o.YNc(7,x,3,2,"ng-container",8),o.qZA(),o.YNc(8,b,2,0,"mat-icon",9),o.YNc(9,A,2,0,"mat-icon",10),o.qZA()()}if(2&d){const s=o.oxw();o.Q6J("formGroup",s.searchForm),o.xp6(2),o.Q6J("ngIf",!s.dispselect),o.xp6(1),o.Q6J("ngIf",s.dispselect&&s.selectoptions.length),o.xp6(2),o.Q6J("value",""),o.xp6(2),o.Q6J("ngForOf",s.searchOptions),o.xp6(1),o.Q6J("ngIf",s.searchForm.valid),o.xp6(1),o.Q6J("ngIf",s.searched)}}let C=(()=>{class d{constructor(s){this.searchFb=s,this.searchlabel="",this.searchOptions=[],this.searchEmit=new o.vpe,this.selectoptions=[],this.dispselect=!1,this.inputype="text",this.searched=!1,this.searchForm=this.searchFb.group({searchValue:["",p.kI.required],searchParam:["",p.kI.required]})}ngOnInit(){this.searchOptions.length&&this.searchForm.controls.searchParam.setValue(this.searchOptions[0].formname)}paramChange(){this.dispselect=!1;const s=this.searchForm.get("searchParam")?.value;this.searchForm.controls.searchValue.setValue("");const _=this.searchOptions.find(h=>h.formname===s);_?.selectoptions&&_?.selectoptions.length?(this.dispselect=!0,this.selectoptions=_.selectoptions,this.searchForm.controls.searchValue.setValue(this.selectoptions[0].val)):this.inputype=_?.type}submitForm(){if(this.searchForm.valid){const{searchParam:s,searchValue:_}=this.searchForm.value,h={};s&&(h[s]=_,this.searched=!0,this.searchEmit.emit(h))}}resetSearch(){this.searched=!1,this.dispselect=!1,this.searchForm.controls.searchValue.setValue(""),this.searchForm.controls.searchParam.setValue(""),this.searchEmit.emit({})}}return d.\u0275fac=function(s){return new(s||d)(o.Y36(p.qu))},d.\u0275cmp=o.Xpm({type:d,selectors:[["app-search-tab"]],inputs:{searchlabel:"searchlabel",searchOptions:"searchOptions"},outputs:{searchEmit:"searchEmit"},decls:2,vars:1,consts:[[1,"mb-2","me-2","d-none","d-lg-block"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],[1,"d-md-flex","align-items-center"],["class","form-control form-select-sm me-2  my-search","formControlName","searchValue",3,"type","placeholder",4,"ngIf"],["class","form-select  form-select-sm text-secondary my-search me-2","formControlName","searchValue",4,"ngIf"],["formControlName","searchParam",1,"form-select","form-select-sm","text-secondary","my-search","me-2",3,"change"],["disabled","",3,"value"],[4,"ngFor","ngForOf"],["class","m-0 text-primary",3,"click",4,"ngIf"],["class","m-0 text-danger",3,"click",4,"ngIf"],["formControlName","searchValue",1,"form-control","form-select-sm","me-2","my-search",3,"type","placeholder"],["formControlName","searchValue",1,"form-select","form-select-sm","text-secondary","my-search","me-2"],[3,"value"],[1,"m-0","text-primary",3,"click"],[1,"m-0","text-danger",3,"click"]],template:function(s,_){1&s&&(o.TgZ(0,"div",0),o.YNc(1,T,10,7,"form",1),o.qZA()),2&s&&(o.xp6(1),o.Q6J("ngIf",_.searchOptions&&_.searchOptions.length))},dependencies:[i.sg,i.O5,p._Y,p.YN,p.Kr,p.Fj,p.EJ,p.JJ,p.JL,u.Hw,p.sg,p.u],styles:["select[_ngcontent-%COMP%]{border-color:#0d6efd}.my-search[_ngcontent-%COMP%]{width:180px}"]}),d})()},7997:(v,Z,l)=>{l.d(Z,{S:()=>p});var o=l(4650);let p=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-sul-loader"]],decls:8,vars:0,consts:[[1,"py-2"],["role","alert",1,"alert","alert-warning"],[1,"d-flex","align-items-center"],["role","status",1,"spinner-border","spinner-border-sm"],[1,"visually-hidden"],[1,"blinks"]],template:function(t,j){1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4),o._uU(5,"Loading..."),o.qZA()(),o.TgZ(6,"span",5),o._uU(7," \xa0 Loading ... "),o.qZA()()()())}}),i})()}}]);