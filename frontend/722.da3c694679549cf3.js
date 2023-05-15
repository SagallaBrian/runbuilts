"use strict";(self.webpackChunksuluhi_admin_frontend=self.webpackChunksuluhi_admin_frontend||[]).push([[722],{2722:(J,u,s)=>{s.r(u),s.d(u,{ProjectsModule:()=>N});var a=s(6895),p=s(8869),t=s(4650),_=s(2340),f=s(529);let m=(()=>{class o{constructor(e){this.http=e,this.apiUrl=`${_.N.apiUrl}projects`}createProject(e){return this.http.post(this.apiUrl,e)}getProject(e){return this.http.get(`${this.apiUrl}/${e}`)}updateProject(e,r){return this.http.put(`${this.apiUrl}/${e}`,r)}deleteProject(e){return this.http.delete(`${this.apiUrl}/${e}`)}getAllProjects(){return this.http.get(this.apiUrl)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(f.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var j=s(7997),h=s(5511),Z=s(8057);function b(o,n){1&o&&(t.ynx(0),t.TgZ(1,"div",6),t._UZ(2,"app-sul-loader"),t.qZA(),t.BQk())}function v(o,n){if(1&o&&(t.ynx(0),t.TgZ(1,"div",6),t._UZ(2,"app-error-occured",8),t.qZA(),t.BQk()),2&o){const e=t.oxw(2);t.xp6(2),t.Q6J("errorMessage",e.errorMessage)}}const A=function(o){return["edit",o]};function x(o,n){if(1&o&&(t.ynx(0),t.TgZ(1,"tr",13)(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td",14),t._uU(9),t.ALo(10,"date"),t.qZA(),t.TgZ(11,"td",14),t._uU(12),t.ALo(13,"date"),t.qZA(),t.TgZ(14,"td",15),t._uU(15),t.qZA()(),t.BQk()),2&o){const e=n.$implicit,r=n.index;t.xp6(1),t.Q6J("routerLink",t.VKq(11,A,e._id)),t.xp6(2),t.Oqu(r+1),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Oqu(e.description),t.xp6(2),t.Oqu(t.lcZ(10,7,e.startDate)),t.xp6(3),t.Oqu(t.lcZ(13,9,e.endDate)),t.xp6(3),t.Oqu(e.projectstatus)}}function T(o,n){if(1&o&&(t.ynx(0),t.TgZ(1,"div",10)(2,"table",11)(3,"thead")(4,"tr")(5,"th"),t._uU(6,"#"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Title"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Description"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Start Date"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Projected Enddate"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Status"),t.qZA()()(),t.TgZ(17,"tbody"),t.YNc(18,x,16,13,"ng-container",12),t.qZA()()(),t.BQk()),2&o){const e=t.oxw(3);t.xp6(18),t.Q6J("ngForOf",e.projects)}}function P(o,n){1&o&&t._UZ(0,"app-no-data-found",16),2&o&&t.Q6J("dataLabel","Project")}function U(o,n){if(1&o&&(t.YNc(0,T,19,1,"ng-container",4),t.YNc(1,P,1,1,"ng-template",null,9,t.W1O)),2&o){const e=t.MAs(2),r=t.oxw(2);t.Q6J("ngIf",r.projects&&r.projects.length)("ngIfElse",e)}}function q(o,n){if(1&o&&(t.YNc(0,v,3,1,"ng-container",4),t.YNc(1,U,3,2,"ng-template",null,7,t.W1O)),2&o){const e=t.MAs(2),r=t.oxw();t.Q6J("ngIf",r.errorMessage)("ngIfElse",e)}}let C=(()=>{class o{constructor(e){this.projectService=e,this.loading=!0}ngOnInit(){this.loadTasks()}loadTasks(){this.loading=!0,this.projectService.getAllProjects().subscribe({next:e=>{this.projects=e},error:e=>{console.error("Failed to Load Projects",e),this.errorMessage=e,this.loading=!1},complete:()=>{this.loading=!1}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-list-projects"]],decls:11,vars:2,consts:[[1,"py-4"],[1,"d-flex"],[1,"flex-grow-1"],["routerLink","/projects/add",1,"btn","btn-secondary","btn-sm"],[4,"ngIf","ngIfElse"],["loadedContent",""],[1,"py-3"],["noError",""],[3,"errorMessage"],["nodata",""],[1,"table-responsive"],[1,"table","table-bordered","table-striped"],[4,"ngFor","ngForOf"],[1,"cursor-pointer",3,"routerLink"],[1,"text-nowrap"],[1,"text-capitalize"],[3,"dataLabel"]],template:function(e,r){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),t._uU(4,"Projects"),t.qZA()(),t.TgZ(5,"div")(6,"button",3),t._uU(7," Add Project"),t.qZA()()(),t.YNc(8,b,3,0,"ng-container",4),t.YNc(9,q,3,2,"ng-template",null,5,t.W1O),t.qZA()),2&e){const c=t.MAs(10);t.xp6(8),t.Q6J("ngIf",r.loading)("ngIfElse",c)}},dependencies:[a.sg,a.O5,j.S,h.i,Z.A,p.rH,a.uU]}),o})();var i=s(4006);function F(o,n){1&o&&(t.TgZ(0,"div",21),t._uU(1," Title is required. "),t.qZA())}function S(o,n){1&o&&(t.TgZ(0,"div",21),t._uU(1," Description is required. "),t.qZA())}function y(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",22)(1,"div",23)(2,"div",1)(3,"div",2)(4,"h4",24),t._uU(5),t.qZA()(),t.TgZ(6,"div")(7,"button",25),t.NdJ("click",function(){const d=t.CHM(e).index,l=t.oxw();return t.KtG(l.deleteSection(d))}),t._uU(8,"Remove"),t.qZA()()(),t.TgZ(9,"div",26)(10,"div",4)(11,"label",27),t._uU(12,"Section Title"),t.qZA(),t._UZ(13,"input",28),t.qZA(),t.TgZ(14,"div",4)(15,"label",29),t._uU(16,"Section Description"),t.qZA(),t._UZ(17,"textarea",30),t.qZA()()()()}if(2&o){const e=n.index;t.xp6(5),t.hij("Section ",e+1,""),t.xp6(4),t.Q6J("formGroupName",e)}}function I(o,n){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",31),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.deleteProject())}),t._uU(2),t.qZA(),t.TgZ(3,"button",32),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.updateProject())}),t._uU(4),t.qZA(),t.BQk()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("disabled",e.projectForm.invalid),t.xp6(1),t.hij(" ",e.submiting?"Loading...":"Delete Project"," "),t.xp6(1),t.Q6J("disabled",e.projectForm.invalid),t.xp6(1),t.hij(" ",e.submiting?"Loading...":"Edit Project"," ")}}function E(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"button",33),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.addProject())}),t._uU(1),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("disabled",e.projectForm.invalid),t.xp6(1),t.hij(" ",e.submiting?"Loading...":"Add Project"," ")}}let g=(()=>{class o{constructor(e,r,c,d){this.formBuilder=e,this.router=r,this.projectService=c,this.route=d,this.title="Add Project",this.submiting=!1,this.loading=!1}ngOnInit(){this.projectForm=this.formBuilder.group({title:["",i.kI.required],description:["",i.kI.required],startDate:[""],endDate:[""],projectSections:this.formBuilder.array([])}),this.projectId=this.route.snapshot.paramMap.get("id"),this.projectId&&(this.title="Edit Project",this.getProject(this.projectId))}addProject(){this.projectForm.valid&&(this.submiting=!0,this.projectService.createProject(this.projectForm.value).subscribe({next:r=>{this.projectForm.reset(),this.router.navigate(["/projects"])},error:r=>{console.error("Failed to Add project",r)},complete:()=>{this.submiting=!1}}))}get projectSections(){return this.projectForm.get("projectSections")}addSection(){const e=this.formBuilder.group({title:["",i.kI.required],description:["",i.kI.required]});this.projectSections.push(e)}deleteSection(e){this.projectSections.removeAt(e)}getProject(e){this.loading=!0,this.projectService.getProject(e).subscribe({next:r=>{const c=new Date(r.startDate).toISOString().substring(0,10),d=new Date(r.endDate).toISOString().substring(0,10);r.startDate=c,r.endDate=d,this.projectForm.patchValue(r),r.projectSections.forEach(l=>{const L=this.formBuilder.group({title:[l.title,i.kI.required],description:[l.description,i.kI.required]});this.projectSections.push(L)})},error:r=>{console.error("Failed to Get project",r),this.loading=!1},complete:()=>{this.loading=!1}})}updateProject(){const e=this.projectForm.value;this.submiting=!0,this.projectService.updateProject(this.projectId,e).subscribe({next:r=>{console.log(r),this.router.navigate(["/projects"])},error:r=>{console.error("Failed to Edit project",r),this.submiting=!1},complete:()=>{this.submiting=!1}})}deleteProject(){this.submiting=!0,this.projectService.deleteProject(this.projectId).subscribe({next:e=>{console.log(e),this.router.navigate(["/projects"])},error:e=>{console.error("Failed to Delete project",e)},complete:()=>{this.submiting=!1}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(i.qu),t.Y36(p.F0),t.Y36(m),t.Y36(p.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-edit-projects"]],decls:35,vars:7,consts:[[1,"my-4",3,"formGroup"],[1,"d-flex"],[1,"flex-grow-1"],["routerLink","/projects",1,"btn","btn-secondary","btn-sm"],[1,"mb-3"],["for","title",1,"form-label"],["type","text","id","title","formControlName","title",1,"form-control"],["class","invalid-feedback",4,"ngIf"],["for","description",1,"form-label"],["id","description","formControlName","description",1,"form-control"],["for","startDate",1,"form-label"],["type","date","id","startDate","formControlName","startDate",1,"form-control"],["for","endDate",1,"form-label"],["type","date","id","endDate","formControlName","endDate",1,"form-control"],["formArrayName","projectSections"],["class","card my-3",4,"ngFor","ngForOf"],[1,"text-end"],["type","button",1,"btn","btn-success","btn-sm","mt-3",3,"click"],[1,"mt-3"],[4,"ngIf","ngIfElse"],["addTasking",""],[1,"invalid-feedback"],[1,"card","my-3"],[1,"card-body"],[1,"card-title"],[1,"btn","btn-danger","btn-sm",3,"click"],[3,"formGroupName"],["for","titl",1,"form-label"],["type","text","id","titl","formControlName","title",1,"form-control"],["for","descr",1,"form-label"],["id","descr","formControlName","description",1,"form-control"],["type","submit",1,"btn","btn-danger","btn-sm","me-2",3,"disabled","click"],["type","submit",1,"btn","btn-primary","btn-sm",3,"disabled","click"],["type","submit",1,"btn","btn-success","btn-sm",3,"disabled","click"]],template:function(e,r){if(1&e&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"h2"),t._uU(4),t.qZA()(),t.TgZ(5,"div")(6,"button",3),t._uU(7," List Projects"),t.qZA()()(),t.TgZ(8,"div",4)(9,"label",5),t._uU(10,"Title"),t.qZA(),t._UZ(11,"input",6),t.YNc(12,F,2,0,"div",7),t.qZA(),t.TgZ(13,"div",4)(14,"label",8),t._uU(15,"Description"),t.qZA(),t._UZ(16,"textarea",9),t.YNc(17,S,2,0,"div",7),t.qZA(),t.TgZ(18,"div",4)(19,"label",10),t._uU(20,"Start Date"),t.qZA(),t._UZ(21,"input",11),t.qZA(),t.TgZ(22,"div",4)(23,"label",12),t._uU(24,"End Date"),t.qZA(),t._UZ(25,"input",13),t.qZA(),t.TgZ(26,"div",14),t.YNc(27,y,18,2,"div",15),t.TgZ(28,"div",16)(29,"button",17),t.NdJ("click",function(){return r.addSection()}),t._uU(30,"Add Section"),t.qZA()()(),t.TgZ(31,"div",18),t.YNc(32,I,5,4,"ng-container",19),t.YNc(33,E,2,2,"ng-template",null,20,t.W1O),t.qZA()()),2&e){const c=t.MAs(34);let d,l;t.Q6J("formGroup",r.projectForm),t.xp6(4),t.Oqu(r.title),t.xp6(8),t.Q6J("ngIf",(null==(d=r.projectForm.get("title"))?null:d.invalid)&&(null==(d=r.projectForm.get("title"))?null:d.touched)),t.xp6(5),t.Q6J("ngIf",(null==(l=r.projectForm.get("description"))?null:l.invalid)&&(null==(l=r.projectForm.get("description"))?null:l.touched)),t.xp6(10),t.Q6J("ngForOf",r.projectSections.controls),t.xp6(5),t.Q6J("ngIf",r.projectId)("ngIfElse",c)}},dependencies:[a.sg,a.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,i.x0,i.CE,p.rH]}),o})();var k=s(1213);const D=[{path:"",component:C},{path:"add",component:g},{path:"edit/:id",component:g},{path:"**",redirectTo:"",pathMatch:"full"}];let N=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[a.ez,i.u5,i.UX,k.C,p.Bz.forChild(D)]}),o})()}}]);