"use strict";(self.webpackChunksuluhi_admin_frontend=self.webpackChunksuluhi_admin_frontend||[]).push([[501],{5501:(P,x,d)=>{d.r(x),d.d(x,{ProjectsModule:()=>ht});var n=d(6895),u=d(6354),a=d(4006),y=d(4333),A=d(1213),_=d(403),h=d(4859),p=d(5412),D=d(7392),t=d(4650),C=d(354),q=d(7997),g=d(5511),j=d(8057),c=d(295);function f(i,m){1&i&&(t.ynx(0),t.TgZ(1,"div",8),t._UZ(2,"app-sul-loader"),t.qZA(),t.BQk())}function Z(i,m){if(1&i&&(t.ynx(0),t.TgZ(1,"div",8),t._UZ(2,"app-error-occured",10),t.qZA(),t.BQk()),2&i){const e=t.oxw(2);t.xp6(2),t.Q6J("errorMessage",e.errorMessage)}}const k=function(i){return["view",i]},J=function(i){return["edit",i]};function M(i,m){if(1&i&&(t.ynx(0),t.TgZ(1,"tr",19)(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td",20),t._uU(7),t.ALo(8,"date"),t.qZA(),t.TgZ(9,"td",20),t._uU(10),t.ALo(11,"date"),t.qZA(),t.TgZ(12,"td",21),t._uU(13),t.qZA(),t.TgZ(14,"td")(15,"button",22),t._uU(16,"Edit"),t.qZA()()(),t.BQk()),2&i){const e=m.$implicit,o=m.index;t.xp6(1),t.Q6J("routerLink",t.VKq(11,k,e._id)),t.xp6(2),t.Oqu(o+1),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Oqu(t.lcZ(8,7,e.startDate)),t.xp6(3),t.Oqu(t.lcZ(11,9,e.endDate)),t.xp6(3),t.Oqu(e.projectstatus),t.xp6(2),t.Q6J("routerLink",t.VKq(13,J,e._id))}}const O=function(i,m,e){return{itemsPerPage:i,currentPage:m,totalItems:e}};function w(i,m){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",12)(2,"table",13)(3,"thead",14)(4,"tr",15)(5,"th"),t._uU(6,"#"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Title"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Start Date"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"End date"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Status"),t.qZA(),t._UZ(15,"th"),t.qZA()(),t.TgZ(16,"tbody"),t.YNc(17,M,17,15,"ng-container",16),t.ALo(18,"paginate"),t.qZA()()(),t.TgZ(19,"div",17)(20,"pagination-controls",18),t.NdJ("pageChange",function(r){t.CHM(e);const s=t.oxw(3);return t.KtG(s.onPageChange(r))}),t.qZA()(),t.BQk()}if(2&i){const e=t.oxw(3);t.xp6(17),t.Q6J("ngForOf",t.xi3(18,1,e.projects.results,t.kEZ(4,O,e.projects.pageSize,e.currentPage,e.projects.totalItems)))}}function Y(i,m){1&i&&t._UZ(0,"app-no-data-found",23),2&i&&t.Q6J("dataLabel","Project")}function Q(i,m){if(1&i&&(t.YNc(0,w,21,8,"ng-container",6),t.YNc(1,Y,1,1,"ng-template",null,11,t.W1O)),2&i){const e=t.MAs(2),o=t.oxw(2);t.Q6J("ngIf",o.projects&&o.projects.results.length)("ngIfElse",e)}}function L(i,m){if(1&i&&(t.YNc(0,Z,3,1,"ng-container",6),t.YNc(1,Q,3,2,"ng-template",null,9,t.W1O)),2&i){const e=t.MAs(2),o=t.oxw();t.Q6J("ngIf",o.errorMessage)("ngIfElse",e)}}let B=(()=>{class i{constructor(e){this.projectService=e,this.currentPage=1,this.pageSize=10,this.options=[{name:"Project Name",formname:"title",type:"text"},{name:"Start Date",formname:"startDate",type:"date"},{name:"Status",formname:"projectstatus",type:"select",selectoptions:[{val:"pending",name:"Pending"},{val:"progress",name:"Progress"},{val:"complete",name:"Complete"}]}],this.loading=!0}ngOnInit(){this.loadProjects({})}loadProjects(e){this.loading=!0,this.projectService.getAllProjects(this.currentPage,this.pageSize,e).subscribe({next:o=>{this.loading=!1,o.results.sort((r,s)=>new Date(r.startDate)-new Date(s.startDate)),this.projects=o},error:o=>{this.errorMessage=o,this.loading=!1},complete:()=>{this.loading=!1}})}onPageChange(e){this.currentPage=e,this.loadProjects({})}searchFunction(e){this.loadProjects(e)}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(C.Y))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-list-projects"]],decls:13,vars:3,consts:[[1,"py-4"],[1,"d-flex"],[1,"flex-grow-1"],[1,"text-secondary","fw-normal","mb-1"],[3,"searchOptions","searchEmit"],["routerLink","/projectsgoals/projects/add",1,"btn","btn-outline-primary","btn-sm"],[4,"ngIf","ngIfElse"],["loadedContent",""],[1,"py-3"],["noError",""],[3,"errorMessage"],["nodata",""],[1,"table-responsive"],[1,"table","table-bordered","table-striped","table-hover","text-nowrap"],[1,"thead"],[1,""],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end","pt-3"],[1,"my-pagination",3,"pageChange"],[1,"cursor-pointer",3,"routerLink"],[1,"text-nowrap"],[1,"text-capitalize"],[1,"edit-btn",3,"routerLink"],[3,"dataLabel"]],template:function(o,r){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),t._uU(4,"Projects"),t.qZA()(),t.ynx(5),t.TgZ(6,"app-search-tab",4),t.NdJ("searchEmit",function(l){return r.searchFunction(l)}),t.qZA(),t.BQk(),t.TgZ(7,"div")(8,"button",5),t._uU(9," Add Project"),t.qZA()()(),t.YNc(10,f,3,0,"ng-container",6),t.YNc(11,L,3,2,"ng-template",null,7,t.W1O),t.qZA()),2&o){const s=t.MAs(12);t.xp6(6),t.Q6J("searchOptions",r.options),t.xp6(4),t.Q6J("ngIf",r.loading)("ngIfElse",s)}},dependencies:[n.sg,n.O5,q.S,g.i,j.A,c.O,y.LS,u.rH,n.uU,y._s],styles:[".icon-size[_ngcontent-%COMP%]{font-size:.82rem!important}"]})}return i})();var U=d(7846),E=d(4128);let F=(()=>{class i{constructor(e,o){this.dialogRef=e,this.confirmData=o}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(p.so),t.Y36(p.WI))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-confirm-dialog"]],decls:10,vars:4,consts:[["mat-dialog-title",""],[1,"mat-typography"],[1,"py-3"],["align","end"],["mat-raised-button","","color","primary","mat-dialog-close","",3,"mat-dialog-close"],["mat-raised-button","","color","warn","mat-dialog-close","",3,"mat-dialog-close"]],template:function(o,r){1&o&&(t.TgZ(0,"h2",0),t._uU(1),t.qZA(),t.TgZ(2,"mat-dialog-content",1)(3,"div",2),t._uU(4),t.qZA()(),t.TgZ(5,"mat-dialog-actions",3)(6,"button",4),t._uU(7,"No"),t.qZA(),t.TgZ(8,"button",5),t._uU(9,"Yes"),t.qZA()()),2&o&&(t.xp6(1),t.hij(" ",r.confirmData.title,"\n"),t.xp6(3),t.hij(" ",r.confirmData.description,""),t.xp6(2),t.Q6J("mat-dialog-close",!1),t.xp6(2),t.Q6J("mat-dialog-close",!0))},dependencies:[h.lW,p.ZT,p.uh,p.xY,p.H8]})}return i})();function V(i,m){1&i&&(t.TgZ(0,"div",14),t._uU(1," Title is required. "),t.qZA())}function H(i,m){1&i&&(t.TgZ(0,"div",14),t._uU(1," Description is required. "),t.qZA())}let W=(()=>{class i{get lf(){return this.notesForm.controls}constructor(e,o,r){this.formBuilder=e,this.dialogRef=o,this.dialogData=r,this.notesForm=this.formBuilder.group({title:["",a.kI.required],_id:[""],description:["",a.kI.required],isDelete:[!1]})}ngOnInit(){this.notesForm.reset(),this.dialogData.title&&this.dialogData.description&&(this.lf.title.setValue(this.dialogData.title),this.lf.description.setValue(this.dialogData.description)),this.lf._id.setValue(this.dialogData._id),this.lf.isDelete.setValue(!1)}saveNote(){this.dialogRef.close(this.notesForm.value)}deleteNote(){const e=this.notesForm.value;this.lf.isDelete.setValue(!0),this.dialogRef.close(e)}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(a.qu),t.Y36(p.so),t.Y36(p.WI))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-notes-add-edit"]],decls:24,vars:5,consts:[[1,"d-flex","align-items-center"],["mat-dialog-title","",1,"flex-grow-1"],["mat-dialog-close","","mat-icon-button","","color","warn",1,"me-2"],[1,"mat-typography"],[3,"formGroup"],[1,"mb-3"],["for","title",1,"form-label"],["type","text","id","title","formControlName","title","placeholder","Enter Note Title",1,"form-control"],["class","sul-error",4,"ngIf"],["for","description",1,"form-label"],["formControlName","description"],["align","end"],["mat-stroked-button","","color","warn",3,"disabled","click"],["mat-stroked-button","","color","primary",3,"disabled","click"],[1,"sul-error"]],template:function(o,r){if(1&o&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2," Add / Edit Notes "),t.qZA(),t.TgZ(3,"button",2)(4,"mat-icon"),t._uU(5,"close"),t.qZA()()(),t.TgZ(6,"mat-dialog-content",3)(7,"form",4)(8,"div",5)(9,"label",6),t._uU(10,"Title"),t.qZA(),t._UZ(11,"input",7),t.YNc(12,V,2,0,"div",8),t.qZA(),t.TgZ(13,"div",5)(14,"label",9),t._uU(15,"Description"),t.qZA(),t._UZ(16,"br")(17,"quill-editor",10),t.YNc(18,H,2,0,"div",8),t.qZA()()(),t.TgZ(19,"mat-dialog-actions",11)(20,"button",12),t.NdJ("click",function(){return r.deleteNote()}),t._uU(21,"Delete"),t.qZA(),t.TgZ(22,"button",13),t.NdJ("click",function(){return r.saveNote()}),t._uU(23,"Save"),t.qZA()()),2&o){let s,l;t.xp6(7),t.Q6J("formGroup",r.notesForm),t.xp6(5),t.Q6J("ngIf",(null==(s=r.notesForm.get("title"))?null:s.invalid)&&(null==(s=r.notesForm.get("title"))?null:s.touched)),t.xp6(6),t.Q6J("ngIf",(null==(l=r.notesForm.get("description"))?null:l.invalid)&&(null==(l=r.notesForm.get("description"))?null:l.touched)),t.xp6(2),t.Q6J("disabled",!r.dialogData._id),t.xp6(2),t.Q6J("disabled",r.notesForm.invalid)}},dependencies:[n.O5,a._Y,a.Fj,a.JJ,a.JL,h.lW,h.RK,p.ZT,p.uh,p.xY,p.H8,D.Hw,a.sg,a.u,_.g6],styles:["quill-editor{height:250px;width:100%}"]})}return i})();function G(i,m){1&i&&(t.TgZ(0,"div",18),t._uU(1," Title is required. "),t.qZA())}function K(i,m){1&i&&(t.TgZ(0,"div",18),t._uU(1," Start Date is required. "),t.qZA())}function $(i,m){1&i&&(t.TgZ(0,"div",18),t._uU(1," End Date is required. "),t.qZA())}function R(i,m){1&i&&(t.TgZ(0,"div",18),t._uU(1," Description is required. "),t.qZA())}let z=(()=>{class i{get lf(){return this.sectionForm.controls}constructor(e,o,r){this.formBuilder=e,this.dialogRef=o,this.dialogData=r,this.sectionForm=this.formBuilder.group({title:["",a.kI.required],description:["",a.kI.required],startDate:[""],endDate:[""],_id:[""],isDelete:[!1]})}ngOnInit(){this.sectionForm.reset(),this.dialogData.title&&this.dialogData.description&&(this.lf.title.setValue(this.dialogData.title),this.lf.description.setValue(this.dialogData.description),this.lf.startDate.setValue((0,U.Z)(new Date(this.dialogData.startDate),"yyyy-MM-dd'T'HH:mm")),this.lf.endDate.setValue((0,U.Z)(new Date(this.dialogData.endDate),"yyyy-MM-dd'T'HH:mm"))),this.lf._id.setValue(this.dialogData._id),this.lf.isDelete.setValue(!1)}saveSection(){this.dialogRef.close(this.sectionForm.value)}deleteSection(){const e=this.sectionForm.value;this.lf.isDelete.setValue(!0),this.dialogRef.close(e)}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(a.qu),t.Y36(p.so),t.Y36(p.WI))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-add-edit-project-section"]],decls:37,vars:7,consts:[[1,"d-flex","align-items-center"],["mat-dialog-title","",1,"flex-grow-1"],["mat-dialog-close","","mat-icon-button","","color","warn",1,"me-2"],[1,"mat-typography"],[3,"formGroup"],[1,"mb-3"],["for","title",1,"form-label"],["type","text","id","title","formControlName","title","placeholder","Enter Section Title",1,"form-control"],["class","sul-error",4,"ngIf"],[1,"row"],[1,"col-md-6"],["type","datetime-local","id","title","formControlName","startDate","placeholder","Enter Start Date",1,"form-control"],["type","datetime-local","id","endDate","formControlName","endDate","placeholder","Enter End Date",1,"form-control"],["for","description",1,"form-label"],["formControlName","description"],["align","end"],["mat-stroked-button","","color","warn",3,"disabled","click"],["mat-stroked-button","","color","primary",3,"disabled","click"],[1,"sul-error"]],template:function(o,r){if(1&o&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2," Add / Edit Project Section / Milestone "),t.qZA(),t.TgZ(3,"button",2)(4,"mat-icon"),t._uU(5,"close"),t.qZA()()(),t.TgZ(6,"mat-dialog-content",3)(7,"form",4)(8,"div",5)(9,"label",6),t._uU(10,"Title"),t.qZA(),t._UZ(11,"input",7),t.YNc(12,G,2,0,"div",8),t.qZA(),t.TgZ(13,"div",9)(14,"div",10)(15,"div",5)(16,"label",6),t._uU(17,"Start Date"),t.qZA(),t._UZ(18,"input",11),t.YNc(19,K,2,0,"div",8),t.qZA()(),t.TgZ(20,"div",10)(21,"div",5)(22,"label",6),t._uU(23,"End Date"),t.qZA(),t._UZ(24,"input",12),t.YNc(25,$,2,0,"div",8),t.qZA()()(),t.TgZ(26,"div",5)(27,"label",13),t._uU(28,"Description"),t.qZA(),t._UZ(29,"br")(30,"quill-editor",14),t.YNc(31,R,2,0,"div",8),t.qZA()()(),t.TgZ(32,"mat-dialog-actions",15)(33,"button",16),t.NdJ("click",function(){return r.deleteSection()}),t._uU(34,"Delete"),t.qZA(),t.TgZ(35,"button",17),t.NdJ("click",function(){return r.saveSection()}),t._uU(36,"Save"),t.qZA()()),2&o){let s;t.xp6(7),t.Q6J("formGroup",r.sectionForm),t.xp6(5),t.Q6J("ngIf",r.lf.title.invalid&&r.lf.title.touched),t.xp6(7),t.Q6J("ngIf",r.lf.startDate.invalid&&r.lf.startDate.touched),t.xp6(6),t.Q6J("ngIf",r.lf.endDate.invalid&&r.lf.endDate.touched),t.xp6(6),t.Q6J("ngIf",(null==(s=r.sectionForm.get("description"))?null:s.invalid)&&(null==(s=r.sectionForm.get("description"))?null:s.touched)),t.xp6(2),t.Q6J("disabled",!r.dialogData._id),t.xp6(2),t.Q6J("disabled",r.sectionForm.invalid)}},dependencies:[n.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,p.ZT,p.uh,p.xY,p.H8,h.lW,h.RK,D.Hw,_.g6],styles:["quill-editor{height:250px;width:100%}"]})}return i})();var X=d(2340),tt=d(529);let I=(()=>{class i{constructor(e){this.http=e,this.noteurl=`${X.N.apiUrl}notes`}createNote(e){return this.http.post(this.noteurl,e)}getNoteById(e){return this.http.get(`${this.noteurl}/${e}`)}updateNote(e,o){return this.http.put(`${this.noteurl}/${e}`,o)}deleteNote(e){return this.http.delete(`${this.noteurl}/${e}`)}getAllNotes(e,o,r){const s={currentPage:e,pageSize:o,...r};return this.http.get(this.noteurl,{params:s})}getNotesByProjid(e){return this.http.get(this.noteurl,{params:{noterefid:e,currentPage:1,pageSize:1e7}})}static#t=this.\u0275fac=function(o){return new(o||i)(t.LFG(tt.eN))};static#e=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function et(i,m){if(1&i&&(t.ynx(0),t.TgZ(1,"button",31),t._uU(2," View Project "),t.qZA(),t.BQk()),2&i){const e=t.oxw();t.xp6(1),t.MGl("routerLink","/projectsgoals/projects/view/",e.projectId,"")}}function ot(i,m){1&i&&(t.TgZ(0,"div",32),t._uU(1," Title is required. "),t.qZA())}function it(i,m){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",33)(2,"div",34)(3,"div",35)(4,"div",36)(5,"h4",37),t._uU(6),t.qZA(),t.TgZ(7,"mat-icon",38),t.NdJ("click",function(){const r=t.CHM(e),s=r.$implicit,l=r.index,v=t.oxw();return t.KtG(v.openNotesDialog(s.value,l))}),t._uU(8,"edit"),t.qZA(),t.TgZ(9,"mat-icon",39),t.NdJ("click",function(){const s=t.CHM(e).index,l=t.oxw();return t.KtG(l.confirmNoteDelete(s))}),t._uU(10," delete"),t.qZA()()()()(),t.BQk()}if(2&i){const e=m.$implicit;t.xp6(6),t.Oqu(e.value.title)}}function nt(i,m){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",33)(2,"div",34)(3,"div",35)(4,"div",36)(5,"h4",37),t._uU(6),t.qZA(),t.TgZ(7,"mat-icon",38),t.NdJ("click",function(){const r=t.CHM(e),s=r.$implicit,l=r.index,v=t.oxw();return t.KtG(v.openSectionDialog(s.value,l))}),t._uU(8,"edit"),t.qZA(),t.TgZ(9,"mat-icon",39),t.NdJ("click",function(){const s=t.CHM(e).index,l=t.oxw();return t.KtG(l.confirmSectionDelete(s))}),t._uU(10," delete"),t.qZA()()()()(),t.BQk()}if(2&i){const e=m.$implicit;t.xp6(6),t.Oqu(e.value.title)}}function rt(i,m){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",40),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.deleteProject())}),t._uU(2),t.qZA(),t.TgZ(3,"button",41),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.updateProject())}),t._uU(4),t.qZA(),t.BQk()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("disabled",e.submiting),t.xp6(1),t.hij(" ",e.submiting?"Loading...":"Delete Project"," "),t.xp6(1),t.Q6J("disabled",e.projectForm.invalid||e.submiting),t.xp6(1),t.hij(" ",e.submiting?"Loading...":"Edit Project"," ")}}function st(i,m){if(1&i){const e=t.EpF();t.TgZ(0,"button",42),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.addProject())}),t._uU(1),t.qZA()}if(2&i){const e=t.oxw();t.Q6J("disabled",e.projectForm.invalid||e.submiting),t.xp6(1),t.hij(" ",e.submiting?"Loading...":"Add Project"," ")}}let S=(()=>{class i{constructor(e,o,r,s,l,v){this.formBuilder=e,this.router=o,this.projectService=r,this.notesService=s,this.route=l,this.dialog=v,this.projectForm=this.formBuilder.group({title:["",a.kI.required],projectstatus:["pending"],projectlink:[""],startDate:["",a.kI.required],endDate:["",a.kI.required],notes:this.formBuilder.array([]),projectsections:this.formBuilder.array([])}),this.title="Add Project",this.submiting=!1,this.loading=!1,this.status=["pending","progress","complete"]}ngOnInit(){this.projectId=this.route.snapshot.paramMap.get("id"),this.projectId&&(this.title="Edit Project",this.loadData())}addProject(){this.projectForm.valid&&(this.submiting=!0,this.projectService.createProject(this.projectForm.value).subscribe({next:o=>{this.projectForm.reset(),this.router.navigate(["/projectsgoals/projects"])},error:o=>{this.errorMessage=o},complete:()=>{this.submiting=!1}}))}get projectsections(){return this.projectForm.get("projectsections")}get notesections(){return this.projectForm.get("notes")}loadData(){this.loading=!0;const e=this.projectService.getProject(this.projectId),o=this.projectService.getMiltestoneByProjId(this.projectId),r=this.notesService.getNotesByProjid(this.projectId);(0,E.D)([e,o,r]).subscribe({next:([s,l,v])=>{const T=s;T.projectsections=l;const ft=(0,U.Z)(new Date(T.startDate),"yyyy-MM-dd"),Zt=(0,U.Z)(new Date(T.endDate),"yyyy-MM-dd");T.startDate=ft,T.endDate=Zt,this.projectForm.patchValue(T),v.results.forEach(b=>{const N=this.formBuilder.group({title:[b.title,a.kI.required],description:[b.description,a.kI.required],_id:[b._id],noterefid:[b.noterefid]});this.notesections.push(N)}),T.projectsections.forEach(b=>{const N=this.formBuilder.group({title:[b.title,a.kI.required],description:[b.description,a.kI.required],startDate:[b.startDate],endDate:[b.endDate],_id:[b._id],project:[b.project]});this.projectsections.push(N)})},error:s=>{this.errorMessage=s,this.loading=!1},complete:()=>{this.loading=!1}})}updateProject(){const e=this.projectForm.value;this.submiting=!0,this.projectService.updateProject(this.projectId,e).subscribe({next:o=>{this.router.navigate(["/projectsgoals/projects"])},error:o=>{console.error("Failed to Edit project",o),this.submiting=!1},complete:()=>{this.submiting=!1}})}deleteProject(){this.submiting=!0,this.projectService.deleteProject(this.projectId).subscribe({next:e=>{console.log(e),this.router.navigate(["/projectsgoals/projects"])},error:e=>{this.errorMessage=e},complete:()=>{this.submiting=!1}})}openSectionDialog(e,o){this.dialog.open(z,{data:{...e},minWidth:"70%"}).afterClosed().subscribe(r=>{r&&(r.isDelete||(o<0?this.addProjectSection(r):o>=0&&this.updateProjectSection(r,o)))})}addProjectSection(e){const o=this.formBuilder.group({title:[e.title],description:[e.description],startDate:[e.startDate],endDate:[e.endDate],_id:[""],project:[this.projectId?this.projectId:""]});this.projectsections.push(o)}updateProjectSection(e,o){const r=this.projectsections.at(o);r&&r.patchValue({title:e.title,description:e.description,startDate:e.startDate,endDate:e.endDate})}confirmSectionDelete(e){this.dialog.open(F,{data:{title:"Delete Project Section",description:"Are you Sure you want to delete "},minWidth:"70%"}).afterClosed().subscribe(s=>{if(!0===s){const l=this.projectsections.value[e];l._id?this.deleteProjectSection(l._id,e):this.projectsections.removeAt(e)}})}deleteProjectSection(e,o){this.submiting=!0,this.projectService.deleteProjMileStone(e).subscribe({next:r=>{this.projectsections.removeAt(o)},error:r=>{console.error("Failed to Delete project",r)},complete:()=>{this.submiting=!1}})}openNotesDialog(e,o){this.dialog.open(W,{data:{...e},minWidth:"70%"}).afterClosed().subscribe(r=>{r&&(r.isDelete||(o<0?this.addNoteSection(r):o>=0&&this.updateNoteSection(r,o)))})}addNoteSection(e){const o=this.formBuilder.group({title:[e.title],description:[e.description],_id:[""],noterefid:[this.projectId?this.projectId:""]});this.notesections.push(o)}updateNoteSection(e,o){const r=this.notesections.at(o);r&&r.patchValue({title:e.title,description:e.description})}confirmNoteDelete(e){this.dialog.open(F,{data:{title:"Delete Note",description:"Are you Sure you want to delete "},minWidth:"70%"}).afterClosed().subscribe(s=>{if(!0===s){const l=this.notesections.value[e];l._id?this.deleteNote(l._id,e):this.notesections.removeAt(e)}})}deleteNote(e,o){this.submiting=!0,this.notesService.deleteNote(e).subscribe({next:r=>{this.notesections.removeAt(o)},error:r=>{console.error("Failed to Delete project",r)},complete:()=>{this.submiting=!1}})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(a.qu),t.Y36(u.F0),t.Y36(C.Y),t.Y36(I),t.Y36(u.gz),t.Y36(p.uw))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-add-edit-projects"]],decls:61,vars:8,consts:[[1,"my-4",3,"formGroup"],[1,"d-flex"],[1,"flex-grow-1"],[1,"fw-normal","d-none","d-lg-block"],["routerLink","/projectsgoals/projects",1,"btn","btn-outline-primary","btn-sm"],[4,"ngIf"],[1,"card","p-3","mb-2"],[1,"mb-3"],["for","title",1,"form-label"],["type","text","id","title","formControlName","title","placeholder","Enter Project Title",1,"form-control"],["class","sul-error",4,"ngIf"],[1,"row"],[1,"col-lg-6"],["for","projectlink",1,"form-label"],["aria-label","Default select example","formControlName","projectstatus",1,"form-select"],["value","pending"],["value","progress"],["value","complete"],["type","projectlink","id","projectlink","formControlName","projectlink","placeholder","Enter Link",1,"form-control"],["for","startDate",1,"form-label"],["type","date","id","startDate","formControlName","startDate",1,"form-control"],["for","endDate",1,"form-label"],["type","date","id","endDate","formControlName","endDate",1,"form-control"],[1,"mb-0","mt-3","fw-medium"],[4,"ngFor","ngForOf"],[1,"col-md-3"],[1,"btn","btn-outline-primary","btn-sm",3,"click"],["type","button",1,"btn","btn-outline-primary","btn-sm",3,"click"],[1,"mt-3"],[4,"ngIf","ngIfElse"],["adding",""],[1,"btn","btn-outline-success","btn-sm","ms-2",3,"routerLink"],[1,"sul-error"],[1,"col-md-3","mb-2"],[1,"card"],[1,"card-body"],[1,"d-flex","align-items-center"],[1,"card-title","my-0","py-0","flex-grow-1"],["color","primary",1,"cursor-pointer",2,"font-size","18px",3,"click"],["color","warn",1,"cursor-pointer",2,"font-size","18px",3,"click"],["type","submit",1,"btn","btn-danger","btn-sm","me-2",3,"disabled","click"],["type","submit",1,"btn","btn-primary","btn-sm",3,"disabled","click"],["type","submit",1,"btn","btn-success","btn-sm",3,"disabled","click"]],template:function(o,r){if(1&o&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"h2",3),t._uU(4),t.qZA()(),t.TgZ(5,"div")(6,"button",4),t._uU(7," List Projects"),t.qZA(),t.YNc(8,et,3,1,"ng-container",5),t.qZA()(),t.TgZ(9,"div",6)(10,"div",7)(11,"label",8),t._uU(12,"Title"),t.qZA(),t._UZ(13,"input",9),t.YNc(14,ot,2,0,"div",10),t.qZA(),t.TgZ(15,"div",11)(16,"div",12)(17,"div",7)(18,"label",13),t._uU(19,"Project Status"),t.qZA(),t.TgZ(20,"select",14)(21,"option",15),t._uU(22,"Pending"),t.qZA(),t.TgZ(23,"option",16),t._uU(24,"Progress"),t.qZA(),t.TgZ(25,"option",17),t._uU(26,"Completed"),t.qZA()()()(),t.TgZ(27,"div",12)(28,"div",7)(29,"label",13),t._uU(30,"Project Link"),t.qZA(),t._UZ(31,"input",18),t.qZA()()(),t.TgZ(32,"div",11)(33,"div",12)(34,"div",7)(35,"label",19),t._uU(36,"Start Date"),t.qZA(),t._UZ(37,"input",20),t.qZA()(),t.TgZ(38,"div",12)(39,"div",7)(40,"label",21),t._uU(41,"End Date"),t.qZA(),t._UZ(42,"input",22),t.qZA()()()(),t.TgZ(43,"h4",23),t._uU(44,"Notes"),t.qZA(),t.TgZ(45,"div",11),t.YNc(46,it,11,1,"ng-container",24),t.TgZ(47,"div",25)(48,"button",26),t.NdJ("click",function(){return r.openNotesDialog({title:"",description:"",isDelete:!1},-1)}),t._uU(49," Add Notes "),t.qZA()()(),t.TgZ(50,"h4",23),t._uU(51,"Project Milestone"),t.qZA(),t.TgZ(52,"div",11),t.YNc(53,nt,11,1,"ng-container",24),t.TgZ(54,"div",25)(55,"button",27),t.NdJ("click",function(){return r.openSectionDialog({title:"",startDate:"",endDate:"",description:"",isDelete:!1},-1)}),t._uU(56," Add Project Milestone "),t.qZA()()(),t.TgZ(57,"div",28),t.YNc(58,rt,5,4,"ng-container",29),t.YNc(59,st,2,2,"ng-template",null,30,t.W1O),t.qZA()()),2&o){const s=t.MAs(60);let l;t.Q6J("formGroup",r.projectForm),t.xp6(4),t.Oqu(r.title),t.xp6(4),t.Q6J("ngIf",r.projectId),t.xp6(6),t.Q6J("ngIf",(null==(l=r.projectForm.get("title"))?null:l.invalid)&&(null==(l=r.projectForm.get("title"))?null:l.touched)),t.xp6(32),t.Q6J("ngForOf",r.notesections.controls),t.xp6(7),t.Q6J("ngForOf",r.projectsections.controls),t.xp6(5),t.Q6J("ngIf",r.projectId)("ngIfElse",s)}},dependencies:[n.sg,n.O5,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.sg,a.u,D.Hw,u.rH],styles:["input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{font-size:.87rem!important}a[_ngcontent-%COMP%]{text-decoration:none}"]})}return i})(),at=(()=>{class i{constructor(e){this.dialogData=e}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(p.WI))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-view-project-section"]],decls:7,vars:3,consts:[["mat-dialog-title",""],[1,"mat-typography"],[3,"content"],["align","end"],["mat-stroked-button","","mat-dialog-close","",3,"mat-dialog-close"]],template:function(o,r){1&o&&(t.TgZ(0,"h2",0),t._uU(1),t.qZA(),t.TgZ(2,"mat-dialog-content",1),t._UZ(3,"quill-view",2),t.qZA(),t.TgZ(4,"mat-dialog-actions",3)(5,"button",4),t._uU(6,"Close"),t.qZA()()),2&o&&(t.xp6(1),t.hij(" ",r.dialogData.title," "),t.xp6(2),t.Q6J("content",r.dialogData.description),t.xp6(2),t.Q6J("mat-dialog-close",!1))},dependencies:[p.ZT,p.uh,p.xY,p.H8,h.lW,_.H]})}return i})(),ct=(()=>{class i{constructor(e){this.dialogData=e}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(p.WI))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-notes-view"]],decls:7,vars:3,consts:[["mat-dialog-title",""],[1,"mat-typography"],[3,"content"],["align","end"],["mat-stroked-button","","mat-dialog-close","",3,"mat-dialog-close"]],template:function(o,r){1&o&&(t.TgZ(0,"h2",0),t._uU(1),t.qZA(),t.TgZ(2,"mat-dialog-content",1),t._UZ(3,"quill-view",2),t.qZA(),t.TgZ(4,"mat-dialog-actions",3)(5,"button",4),t._uU(6,"Close"),t.qZA()()),2&o&&(t.xp6(1),t.hij(" ",r.dialogData.title," "),t.xp6(2),t.Q6J("content",r.dialogData.description),t.xp6(2),t.Q6J("mat-dialog-close",!1))},dependencies:[h.lW,p.ZT,p.uh,p.xY,p.H8,_.H]})}return i})();function lt(i,m){1&i&&(t.ynx(0),t.TgZ(1,"div",7),t._UZ(2,"app-sul-loader"),t.qZA(),t.BQk())}function dt(i,m){if(1&i&&(t.ynx(0),t.TgZ(1,"div",7),t._UZ(2,"app-error-occured",9),t.qZA(),t.BQk()),2&i){const e=t.oxw(2);t.xp6(2),t.Q6J("errorMessage",e.errorMessage)}}function pt(i,m){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",17)(2,"div",18)(3,"div",19)(4,"div",20)(5,"h4",21),t._uU(6),t.qZA(),t.TgZ(7,"mat-icon",22),t.NdJ("click",function(){const s=t.CHM(e).$implicit,l=t.oxw(3);return t.KtG(l.openNotesDialog(s))}),t._uU(8,"visibility"),t.qZA()()()()(),t.BQk()}if(2&i){const e=m.$implicit;t.xp6(6),t.Oqu(e.title)}}function mt(i,m){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",17)(2,"div",18)(3,"div",19)(4,"div",20)(5,"h4",21),t._uU(6),t.qZA(),t.TgZ(7,"mat-icon",22),t.NdJ("click",function(){const s=t.CHM(e).$implicit,l=t.oxw(3);return t.KtG(l.openSectionDialog(s))}),t._uU(8,"visibility"),t.qZA()()()()(),t.BQk()}if(2&i){const e=m.$implicit;t.xp6(6),t.Oqu(e.title)}}function ut(i,m){if(1&i&&(t.TgZ(0,"div",10)(1,"h3",11),t._uU(2,"Title"),t.qZA(),t.TgZ(3,"div",12),t._uU(4),t.qZA()(),t.TgZ(5,"div",10)(6,"h3",11),t._uU(7,"Project Timeline"),t.qZA(),t.TgZ(8,"div",12),t._uU(9),t.ALo(10,"date"),t.ALo(11,"date"),t.qZA()(),t.TgZ(12,"div",10)(13,"h3",11),t._uU(14,"Project Link"),t.qZA(),t.TgZ(15,"div",12)(16,"a",13),t._uU(17),t.qZA()()(),t.TgZ(18,"h4",14),t._uU(19,"Notes"),t.qZA(),t.TgZ(20,"div",15),t.YNc(21,pt,9,1,"ng-container",16),t.qZA(),t.TgZ(22,"h4",14),t._uU(23,"Project Milestone"),t.qZA(),t.TgZ(24,"div",15),t.YNc(25,mt,9,1,"ng-container",16),t.qZA()),2&i){const e=t.oxw(2);t.xp6(4),t.hij(" ",e.projectDetails.title," "),t.xp6(5),t.AsE(" ",t.lcZ(10,7,e.projectDetails.startDate)," - ",t.lcZ(11,9,e.projectDetails.endDate)," "),t.xp6(7),t.s9C("href",e.projectDetails.projectlink,t.LSH),t.xp6(1),t.Oqu(e.projectDetails.projectlink),t.xp6(4),t.Q6J("ngForOf",e.projectDetails.notes),t.xp6(4),t.Q6J("ngForOf",e.projectDetails.projectsections)}}function gt(i,m){if(1&i&&(t.YNc(0,dt,3,1,"ng-container",5),t.YNc(1,ut,26,11,"ng-template",null,8,t.W1O)),2&i){const e=t.MAs(2),o=t.oxw();t.Q6J("ngIf",o.errorMessage)("ngIfElse",e)}}const _t=[{path:"",component:B},{path:"add",component:S},{path:"edit/:id",component:S},{path:"view/:id",component:(()=>{class i{constructor(e,o,r,s,l){this.router=e,this.projectService=o,this.notesService=r,this.route=s,this.dialog=l,this.projectId="",this.loading=!0}ngOnInit(){this.projectId=this.route.snapshot.paramMap.get("id")||"",this.projectId&&""!==this.projectId?this.loadData():this.router.navigate(["/projectsgoals/projects"])}loadData(){this.loading=!0;const e=this.projectService.getProject(this.projectId),o=this.projectService.getMiltestoneByProjId(this.projectId),r=this.notesService.getNotesByProjid(this.projectId);(0,E.D)([e,o,r]).subscribe({next:([s,l,v])=>{const T=s;T.projectsections=l,T.notes=v.results,this.projectDetails=T},error:s=>{this.errorMessage=s,this.loading=!1},complete:()=>{this.loading=!1}})}openSectionDialog(e){this.dialog.open(at,{data:{...e},minWidth:"70%"}).afterClosed().subscribe(o=>{})}openNotesDialog(e){this.dialog.open(ct,{data:{...e},minWidth:"70%"}).afterClosed().subscribe(o=>{})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(u.F0),t.Y36(C.Y),t.Y36(I),t.Y36(u.gz),t.Y36(p.uw))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-project-details"]],decls:11,vars:3,consts:[[1,"my-4"],[1,"d-flex"],[1,"flex-grow-1"],["routerLink","/projectsgoals/projects",1,"btn","btn-outline-secondary","btn-sm"],[1,"btn","btn-outline-warning","btn-sm","ms-2",3,"routerLink"],[4,"ngIf","ngIfElse"],["loadedContent",""],[1,"py-3"],["noError",""],[3,"errorMessage"],[1,"my-3"],[1,"fw-normal","my-0"],[1,"text-secondary","sul-font"],[3,"href"],[1,"mb-0","mt-3","fw-medium"],[1,"row"],[4,"ngFor","ngForOf"],[1,"col-md-3","mb-2"],[1,"card"],[1,"card-body"],[1,"d-flex","align-items-center"],[1,"card-title","my-0","py-0","flex-grow-1"],["color","primary",1,"cursor-pointer",2,"font-size","18px",3,"click"]],template:function(o,r){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"div",2),t.TgZ(3,"div")(4,"button",3),t._uU(5," List Projects"),t.qZA(),t.TgZ(6,"button",4),t._uU(7," Edit Project "),t.qZA()()(),t.YNc(8,lt,3,0,"ng-container",5),t.YNc(9,gt,3,2,"ng-template",null,6,t.W1O),t.qZA()),2&o){const s=t.MAs(10);t.xp6(6),t.MGl("routerLink","/projectsgoals/projects/edit/",r.projectId,""),t.xp6(2),t.Q6J("ngIf",r.loading)("ngIfElse",s)}},dependencies:[n.sg,n.O5,q.S,j.A,D.Hw,u.rH,n.uU],styles:[".my-accordion-header[_ngcontent-%COMP%]{margin-bottom:0}.my-accordion-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding-top:5px!important;padding-bottom:5px!important}"]})}return i})()},{path:"**",redirectTo:"",pathMatch:"full"}];let ht=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#o=this.\u0275inj=t.cJS({imports:[n.ez,a.u5,a.UX,A.C,y.JX,p.Is,h.ot,D.Ps,_.fi.forRoot(),u.Bz.forChild(_t)]})}return i})()},8057:(P,x,d)=>{d.d(x,{A:()=>u});var n=d(4650);let u=(()=>{class a{ngOnInit(){this.errorMessage?.error?.message&&(this.errormes=this.errorMessage.error.message)}static#t=this.\u0275fac=function(_){return new(_||a)};static#e=this.\u0275cmp=n.Xpm({type:a,selectors:[["app-error-occured"]],inputs:{errorMessage:"errorMessage"},decls:4,vars:1,consts:[[1,"py-2"],["role","alert",1,"alert","alert-danger"],[1,"d-flex","align-items-center"]],template:function(_,h){1&_&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2),n._uU(3),n.qZA()()()),2&_&&(n.xp6(3),n.hij(" ",h.errormes?h.errormes:h.errorMessage.message," "))}})}return a})()},5511:(P,x,d)=>{d.d(x,{i:()=>u});var n=d(4650);let u=(()=>{class a{static#t=this.\u0275fac=function(_){return new(_||a)};static#e=this.\u0275cmp=n.Xpm({type:a,selectors:[["app-no-data-found"]],inputs:{dataLabel:"dataLabel"},decls:4,vars:1,consts:[[1,"py-2"],["role","alert",1,"alert","alert-info"],[1,"d-flex","align-items-center"]],template:function(_,h){1&_&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2),n._uU(3),n.qZA()()()),2&_&&(n.xp6(3),n.hij(" No ",h.dataLabel," record found with the given filter parameters "))}})}return a})()},295:(P,x,d)=>{d.d(x,{O:()=>q});var n=d(4650),u=d(4006),a=d(6895),y=d(7392);function A(g,j){if(1&g&&n._UZ(0,"input",11),2&g){const c=n.oxw(2);n.Q6J("type",c.inputype)("placeholder",c.searchlabel)}}function _(g,j){if(1&g&&(n.ynx(0),n.TgZ(1,"option",13),n._uU(2),n.qZA(),n.BQk()),2&g){const c=j.$implicit;n.xp6(1),n.Q6J("value",c.val),n.xp6(1),n.Oqu(c.name)}}function h(g,j){if(1&g&&(n.TgZ(0,"select",12),n.YNc(1,_,3,2,"ng-container",8),n.qZA()),2&g){const c=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",c.selectoptions)}}function p(g,j){if(1&g&&(n.ynx(0),n.TgZ(1,"option",13),n._uU(2),n.qZA(),n.BQk()),2&g){const c=j.$implicit;n.xp6(1),n.Q6J("value",c.formname),n.xp6(1),n.Oqu(c.name)}}function D(g,j){if(1&g){const c=n.EpF();n.TgZ(0,"mat-icon",14),n.NdJ("click",function(){n.CHM(c);const Z=n.oxw(2);return n.KtG(Z.submitForm())}),n._uU(1,"manage_search"),n.qZA()}}function t(g,j){if(1&g){const c=n.EpF();n.TgZ(0,"mat-icon",15),n.NdJ("click",function(){n.CHM(c);const Z=n.oxw(2);return n.KtG(Z.resetSearch())}),n._uU(1,"close"),n.qZA()}}function C(g,j){if(1&g){const c=n.EpF();n.TgZ(0,"form",2)(1,"div",3),n.YNc(2,A,1,2,"input",4),n.YNc(3,h,2,1,"select",5),n.TgZ(4,"select",6),n.NdJ("change",function(){n.CHM(c);const Z=n.oxw();return n.KtG(Z.paramChange())}),n.TgZ(5,"option",7),n._uU(6,"Select Parameter"),n.qZA(),n.YNc(7,p,3,2,"ng-container",8),n.qZA(),n.YNc(8,D,2,0,"mat-icon",9),n.YNc(9,t,2,0,"mat-icon",10),n.qZA()()}if(2&g){const c=n.oxw();n.Q6J("formGroup",c.searchForm),n.xp6(2),n.Q6J("ngIf",!c.dispselect),n.xp6(1),n.Q6J("ngIf",c.dispselect&&c.selectoptions.length),n.xp6(2),n.Q6J("value",""),n.xp6(2),n.Q6J("ngForOf",c.searchOptions),n.xp6(1),n.Q6J("ngIf",c.searchForm.valid),n.xp6(1),n.Q6J("ngIf",c.searched)}}let q=(()=>{class g{constructor(c){this.searchFb=c,this.searchlabel="",this.searchOptions=[],this.searchEmit=new n.vpe,this.selectoptions=[],this.dispselect=!1,this.inputype="text",this.searched=!1,this.searchForm=this.searchFb.group({searchValue:["",u.kI.required],searchParam:["",u.kI.required]})}ngOnInit(){if(this.searchOptions.length){this.searchForm.controls.searchParam.setValue(this.searchOptions[0].formname);const c=this.searchOptions[0].type;this.searchlabel="Search by "+this.searchOptions[0].name,("text"===c||"date"===c||"number"===c)&&(this.inputype=c)}}paramChange(){this.dispselect=!1;const c=this.searchForm.get("searchParam")?.value;this.searchForm.controls.searchValue.setValue("");const f=this.searchOptions.find(Z=>Z.formname===c);this.searchlabel="Search by "+f?.name,f?.selectoptions&&f?.selectoptions.length?(this.dispselect=!0,this.selectoptions=f.selectoptions,this.searchForm.controls.searchValue.setValue(this.selectoptions[0].val)):this.inputype=f?.type}submitForm(){if(this.searchForm.valid){const{searchParam:c,searchValue:f}=this.searchForm.value,Z={};c&&(Z[c]=f,this.searched=!0,this.searchEmit.emit(Z))}}resetSearch(){this.searched=!1,this.dispselect=!1,this.searchForm.controls.searchValue.setValue(""),this.searchForm.controls.searchParam.setValue(""),this.searchEmit.emit({})}static#t=this.\u0275fac=function(f){return new(f||g)(n.Y36(u.qu))};static#e=this.\u0275cmp=n.Xpm({type:g,selectors:[["app-search-tab"]],inputs:{searchOptions:"searchOptions"},outputs:{searchEmit:"searchEmit"},decls:2,vars:1,consts:[[1,"mb-2","me-2","d-none","d-lg-block"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],[1,"d-md-flex","align-items-center"],["class","form-control form-select-sm me-2  my-search","formControlName","searchValue",3,"type","placeholder",4,"ngIf"],["class","form-select  form-select-sm text-secondary my-search me-2","formControlName","searchValue",4,"ngIf"],["formControlName","searchParam",1,"form-select","form-select-sm","text-secondary","my-search","me-2",3,"change"],["disabled","",3,"value"],[4,"ngFor","ngForOf"],["class","m-0 text-primary",3,"click",4,"ngIf"],["class","m-0 text-danger",3,"click",4,"ngIf"],["formControlName","searchValue",1,"form-control","form-select-sm","me-2","my-search",3,"type","placeholder"],["formControlName","searchValue",1,"form-select","form-select-sm","text-secondary","my-search","me-2"],[3,"value"],[1,"m-0","text-primary",3,"click"],[1,"m-0","text-danger",3,"click"]],template:function(f,Z){1&f&&(n.TgZ(0,"div",0),n.YNc(1,C,10,7,"form",1),n.qZA()),2&f&&(n.xp6(1),n.Q6J("ngIf",Z.searchOptions&&Z.searchOptions.length))},dependencies:[a.sg,a.O5,u._Y,u.YN,u.Kr,u.Fj,u.EJ,u.JJ,u.JL,y.Hw,u.sg,u.u],styles:["select[_ngcontent-%COMP%]{border-color:#0d6efd}.my-search[_ngcontent-%COMP%]{width:180px}"]})}return g})()},7997:(P,x,d)=>{d.d(x,{S:()=>u});var n=d(4650);let u=(()=>{class a{static#t=this.\u0275fac=function(_){return new(_||a)};static#e=this.\u0275cmp=n.Xpm({type:a,selectors:[["app-sul-loader"]],decls:8,vars:0,consts:[[1,"py-2"],["role","alert",1,"alert","alert-warning"],[1,"d-flex","align-items-center"],["role","status",1,"spinner-border","spinner-border-sm"],[1,"visually-hidden"],[1,"blinks"]],template:function(_,h){1&_&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4),n._uU(5,"Loading..."),n.qZA()(),n.TgZ(6,"span",5),n._uU(7," \xa0 Loading ... "),n.qZA()()()())}})}return a})()}}]);