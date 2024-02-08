"use strict";(self.webpackChunksuluhi_admin_frontend=self.webpackChunksuluhi_admin_frontend||[]).push([[162],{4162:(U,f,o)=>{o.r(f),o.d(f,{SuppliersModule:()=>te});var d=o(6895),a=o(6354),p=o(4006),g=o(4333),m=o(1213),T=o(8796),e=o(4650),s=o(583),_=o(7997),S=o(5511),y=o(8057),q=o(295);function E(t,l){1&t&&(e.ynx(0),e.TgZ(1,"div",8),e._UZ(2,"app-sul-loader"),e.qZA(),e.BQk())}function F(t,l){if(1&t&&(e.ynx(0),e.TgZ(1,"div",8),e._UZ(2,"app-error-occured",10),e.qZA(),e.BQk()),2&t){const i=e.oxw(2);e.xp6(2),e.Q6J("errorMessage",i.errorMessage)}}const I=function(t){return["edit",t]};function J(t,l){if(1&t&&(e.ynx(0),e.TgZ(1,"tr",19)(2,"td"),e._uU(3),e.qZA(),e.TgZ(4,"td"),e._uU(5),e.qZA(),e.TgZ(6,"td",20),e._uU(7),e.qZA(),e.TgZ(8,"td",20),e._uU(9),e.qZA(),e.TgZ(10,"td",21),e._uU(11),e.qZA(),e.TgZ(12,"td",21),e._uU(13),e.qZA(),e.TgZ(14,"td",21),e._uU(15),e.qZA()(),e.BQk()),2&t){const i=l.$implicit,n=l.index;e.xp6(1),e.Q6J("routerLink",e.VKq(9,I,i._id)),e.xp6(2),e.Oqu(n+1),e.xp6(2),e.AsE("",i.firstName," ",i.lastName,""),e.xp6(2),e.Oqu(i.email),e.xp6(2),e.Oqu(i.phoneNumber),e.xp6(2),e.Oqu(i.companyName),e.xp6(2),e.Oqu(i.department),e.xp6(2),e.Oqu(i.designation)}}const Q=function(t,l,i){return{itemsPerPage:t,currentPage:l,totalItems:i}};function M(t,l){if(1&t){const i=e.EpF();e.ynx(0),e.TgZ(1,"div",12)(2,"table",13)(3,"thead",14)(4,"tr",15)(5,"th"),e._uU(6,"#"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Name"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Email"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Phone Number"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Company"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"Department"),e.qZA(),e.TgZ(17,"th"),e._uU(18,"Designation"),e.qZA()()(),e.TgZ(19,"tbody"),e.YNc(20,J,16,11,"ng-container",16),e.ALo(21,"paginate"),e.qZA()()(),e.TgZ(22,"div",17)(23,"pagination-controls",18),e.NdJ("pageChange",function(r){e.CHM(i);const u=e.oxw(3);return e.KtG(u.onPageChange(r))}),e.qZA()(),e.BQk()}if(2&t){const i=e.oxw(3);e.xp6(20),e.Q6J("ngForOf",e.xi3(21,1,i.suppliers.results,e.kEZ(4,Q,i.suppliers.pageSize,i.currentPage,i.suppliers.totalItems)))}}function L(t,l){1&t&&e._UZ(0,"app-no-data-found",22),2&t&&e.Q6J("dataLabel","Supplier")}function O(t,l){if(1&t&&(e.YNc(0,M,24,8,"ng-container",6),e.YNc(1,L,1,1,"ng-template",null,11,e.W1O)),2&t){const i=e.MAs(2),n=e.oxw(2);e.Q6J("ngIf",n.suppliers&&n.suppliers.results.length)("ngIfElse",i)}}function Y(t,l){if(1&t&&(e.YNc(0,F,3,1,"ng-container",6),e.YNc(1,O,3,2,"ng-template",null,9,e.W1O)),2&t){const i=e.MAs(2),n=e.oxw();e.Q6J("ngIf",n.errorMessage)("ngIfElse",i)}}let D=(()=>{class t{constructor(i){this.clientService=i,this.currentPage=1,this.pageSize=10,this.options=[{name:"Supplier Name",formname:"name",type:"text"},{name:"Company",formname:"companyName",type:"text"},{name:"Designation",formname:"designation",type:"text"}],this.loading=!0}ngOnInit(){this.loadSupplier({type:"supplier"})}loadSupplier(i){this.loading=!0,this.clientService.getAllClientSuppliers(this.currentPage,this.pageSize,i).subscribe({next:n=>{this.suppliers=n},error:n=>{this.errorMessage=n,this.loading=!1},complete:()=>{this.loading=!1}})}onPageChange(i){this.currentPage=i,this.loadSupplier({type:"supplier"})}searchFunction(i){const n={...i,type:"supplier"};this.loadSupplier(n)}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(s.y))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-list-suppliers"]],decls:13,vars:3,consts:[[1,"py-4"],[1,"d-flex"],[1,"flex-grow-1"],[1,"text-secondary","fw-normal","mb-1"],[3,"searchOptions","searchEmit"],["routerLink","/clientsupplier/suppliers/add",1,"btn","btn-outline-primary","btn-sm"],[4,"ngIf","ngIfElse"],["loadedContent",""],[1,"py-3"],["noError",""],[3,"errorMessage"],["nodata",""],[1,"table-responsive"],[1,"table","table-bordered","table-striped","table-hover","text-nowrap"],[1,"thead"],[1,""],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end","pt-3"],[1,"my-pagination",3,"pageChange"],[1,"cursor-pointer",3,"routerLink"],[1,"text-nowrap"],[1,"text-capitalize"],[3,"dataLabel"]],template:function(n,r){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),e._uU(4,"Suppliers"),e.qZA()(),e.ynx(5),e.TgZ(6,"app-search-tab",4),e.NdJ("searchEmit",function(c){return r.searchFunction(c)}),e.qZA(),e.BQk(),e.TgZ(7,"div")(8,"button",5),e._uU(9," Add Supplier"),e.qZA()()(),e.YNc(10,E,3,0,"ng-container",6),e.YNc(11,Y,3,2,"ng-template",null,7,e.W1O),e.qZA()),2&n){const u=e.MAs(12);e.xp6(6),e.Q6J("searchOptions",r.options),e.xp6(4),e.Q6J("ngIf",r.loading)("ngIfElse",u)}},dependencies:[d.sg,d.O5,_.S,S.i,y.A,q.O,g.LS,a.rH,g._s]})}return t})();var P=o(6534);function B(t,l){if(1&t&&(e.ynx(0),e.TgZ(1,"div",32),e._UZ(2,"app-error-occured",33),e.qZA(),e.BQk()),2&t){const i=e.oxw();e.xp6(2),e.Q6J("errorMessage",i.errorMessage)}}function k(t,l){1&t&&(e.TgZ(0,"div",34),e._uU(1," First Name is required. "),e.qZA())}function z(t,l){1&t&&(e.TgZ(0,"div",34),e._uU(1," Last Name is required. "),e.qZA())}function w(t,l){1&t&&(e.TgZ(0,"div",34),e._uU(1," Email is required. "),e.qZA())}function $(t,l){1&t&&(e.TgZ(0,"div",34),e._uU(1," Phone Number is required. "),e.qZA())}function G(t,l){if(1&t&&(e.ynx(0),e.TgZ(1,"ng-option",38),e._uU(2),e.qZA(),e.BQk()),2&t){const i=l.$implicit;e.xp6(1),e.Q6J("value",i.name),e.xp6(1),e.hij(" ",i.name," ")}}function K(t,l){if(1&t&&(e.ynx(0),e.TgZ(1,"ng-select",35)(2,"ng-option",36),e._uU(3,"Select Country"),e.qZA(),e.YNc(4,G,3,2,"ng-container",37),e.qZA(),e.BQk()),2&t){const i=e.oxw();e.xp6(4),e.Q6J("ngForOf",i.listCountries)}}function W(t,l){1&t&&(e.TgZ(0,"div",34),e._uU(1," Company Name is required. "),e.qZA())}function j(t,l){1&t&&(e.TgZ(0,"div",34),e._uU(1," Department is required. "),e.qZA())}function H(t,l){1&t&&(e.TgZ(0,"div",34),e._uU(1," Designation is required. "),e.qZA())}function X(t,l){1&t&&(e.TgZ(0,"div",34),e._uU(1," Description is required. "),e.qZA())}function R(t,l){if(1&t){const i=e.EpF();e.ynx(0),e.TgZ(1,"button",39),e.NdJ("click",function(){e.CHM(i);const r=e.oxw();return e.KtG(r.deleteSupplier())}),e._uU(2,"Delete Supplier"),e.qZA(),e.TgZ(3,"button",40),e.NdJ("click",function(){e.CHM(i);const r=e.oxw();return e.KtG(r.updateSupplier())}),e._uU(4,"Edit Supplier"),e.qZA(),e.BQk()}if(2&t){const i=e.oxw();e.xp6(3),e.Q6J("disabled",i.supplierForm.invalid)}}function V(t,l){if(1&t){const i=e.EpF();e.TgZ(0,"button",41),e.NdJ("click",function(){e.CHM(i);const r=e.oxw();return e.KtG(r.addSupplier())}),e._uU(1,"Add Supplier"),e.qZA()}if(2&t){const i=e.oxw();e.Q6J("disabled",i.supplierForm.invalid)}}let N=(()=>{class t{constructor(i,n,r,u){this.formBuilder=i,this.router=n,this.supplierService=r,this.route=u,this.title="Add Supplier",this.submiting=!1,this.loading=!1,this.listCountries=P.h}ngOnInit(){this.supplierForm=this.formBuilder.group({firstName:["",p.kI.required],lastName:["",p.kI.required],email:[""],phoneNumber:["",p.kI.required],companyName:[""],department:[""],designation:[""],description:[""],address:this.formBuilder.group({country:[""],zipCode:[""],state:[""],city:[""],street:[""]}),type:["supplier"]}),this.supplierId=this.route.snapshot.paramMap.get("id"),this.supplierId&&(this.title="Edit Supplier",this.getClient(this.supplierId))}getClient(i){this.loading=!0,this.supplierService.getClientSupplier(i).subscribe({next:n=>{this.supplierForm.patchValue(n)},error:n=>{this.errorMessage=n,this.loading=!1},complete:()=>{this.loading=!1}})}addSupplier(){this.supplierForm.valid&&(this.submiting=!0,this.supplierService.createClientSupplier(this.supplierForm.value).subscribe({next:n=>{this.supplierForm.reset(),this.router.navigate(["/clientsupplier/suppliers"])},error:n=>{this.errorMessage=n,this.submiting=!1},complete:()=>{this.submiting=!1}}))}updateSupplier(){const i=this.supplierForm.value;this.submiting=!0,this.supplierService.updateClientSupplier(this.supplierId,i).subscribe({next:n=>{this.router.navigate(["/clientsupplier/suppliers"])},error:n=>{this.errorMessage=n,this.submiting=!1},complete:()=>{this.submiting=!1}})}deleteSupplier(){this.submiting=!0,this.supplierService.deleteClientSupplier(this.supplierId).subscribe({next:i=>{this.router.navigate(["/clientsupplier/suppliers"])},error:i=>{this.errorMessage=i,this.submiting=!1},complete:()=>{this.submiting=!1}})}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(p.qu),e.Y36(a.F0),e.Y36(s.y),e.Y36(a.gz))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-add-edit-suppliers"]],decls:89,vars:14,consts:[[4,"ngIf"],[1,"my-4",3,"formGroup"],[1,"d-flex"],[1,"flex-grow-1"],[1,"fw-normal"],["routerLink","/clientsupplier/suppliers",1,"btn","btn-outline-secondary","btn-sm"],[1,"row"],[1,"col-lg-6"],[1,"mb-3"],["for","title",1,"form-label"],["type","text","id","title","formControlName","firstName","placeholder","Enter First Name",1,"form-control"],["class","sul-error",4,"ngIf"],["type","text","id","title","formControlName","lastName","placeholder","Enter Last Name",1,"form-control"],["type","email","id","title","formControlName","email","placeholder","Enter Email",1,"form-control"],["type","text","id","title","formControlName","phoneNumber","placeholder","Enter Phone Number",1,"form-control"],["formGroupName","address",1,"card","p-3","mb-3"],["for","country",1,"form-label"],["for","zipCode",1,"form-label"],["type","text","id","zipCode","formControlName","zipCode","placeholder","Enter Zip Code",1,"form-control"],["for","state",1,"form-label"],["type","text","id","state","formControlName","state","placeholder","Enter State",1,"form-control"],["for","city",1,"form-label"],["type","text","id","city","formControlName","city","placeholder","Enter City",1,"form-control"],["for","street",1,"form-label"],["type","text","id","street","formControlName","street","placeholder","Enter Street",1,"form-control"],["type","text","id","title","formControlName","companyName","placeholder","Enter Company Name",1,"form-control"],["type","text","id","title","formControlName","department","placeholder","Enter Department",1,"form-control"],["type","text","id","title","formControlName","designation","placeholder","Enter Designation",1,"form-control"],["for","description",1,"form-label"],["id","description","formControlName","description","placeholder","Enter Description",1,"form-control"],[4,"ngIf","ngIfElse"],["adding",""],[1,"py-3"],[3,"errorMessage"],[1,"sul-error"],["formControlName","country","id","country"],["value","","disabled",""],[4,"ngFor","ngForOf"],[3,"value"],["type","submit",1,"btn","btn-danger","btn-sm","me-2",3,"click"],["type","submit",1,"btn","btn-primary","btn-sm",3,"disabled","click"],["type","submit",1,"btn","btn-success","btn-sm",3,"disabled","click"]],template:function(n,r){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,B,3,1,"ng-container",0),e.TgZ(2,"form",1)(3,"div",2)(4,"div",3)(5,"h2",4),e._uU(6),e.qZA()(),e.TgZ(7,"div")(8,"button",5),e._uU(9," List Suppliers"),e.qZA()()(),e.TgZ(10,"div",6)(11,"div",7)(12,"div",8)(13,"label",9),e._uU(14,"First Name"),e.qZA(),e._UZ(15,"input",10),e.YNc(16,k,2,0,"div",11),e.qZA()(),e.TgZ(17,"div",7)(18,"div",8)(19,"label",9),e._uU(20,"Last Name"),e.qZA(),e._UZ(21,"input",12),e.YNc(22,z,2,0,"div",11),e.qZA()()(),e.TgZ(23,"div",6)(24,"div",7)(25,"div",8)(26,"label",9),e._uU(27,"Email"),e.qZA(),e._UZ(28,"input",13),e.YNc(29,w,2,0,"div",11),e.qZA()(),e.TgZ(30,"div",7)(31,"div",8)(32,"label",9),e._uU(33,"Phone Number"),e.qZA(),e._UZ(34,"input",14),e.YNc(35,$,2,0,"div",11),e.qZA()()(),e.TgZ(36,"div",15)(37,"div",8)(38,"label",16),e._uU(39,"Country"),e.qZA(),e.YNc(40,K,5,1,"ng-container",0),e.qZA(),e.TgZ(41,"div",6)(42,"div",7)(43,"div",8)(44,"label",17),e._uU(45,"Zip Code"),e.qZA(),e._UZ(46,"input",18),e.qZA()(),e.TgZ(47,"div",7)(48,"div",8)(49,"label",19),e._uU(50,"State"),e.qZA(),e._UZ(51,"input",20),e.qZA()()(),e.TgZ(52,"div",6)(53,"div",7)(54,"div",8)(55,"label",21),e._uU(56,"City"),e.qZA(),e._UZ(57,"input",22),e.qZA()(),e.TgZ(58,"div",7)(59,"div",8)(60,"label",23),e._uU(61,"Street"),e.qZA(),e._UZ(62,"input",24),e.qZA()()()(),e.TgZ(63,"div",6)(64,"div",7)(65,"div",8)(66,"label",9),e._uU(67,"Company"),e.qZA(),e._UZ(68,"input",25),e.YNc(69,W,2,0,"div",11),e.qZA()(),e.TgZ(70,"div",7)(71,"div",8)(72,"label",9),e._uU(73,"Department"),e.qZA(),e._UZ(74,"input",26),e.YNc(75,j,2,0,"div",11),e.qZA()()(),e.TgZ(76,"div",8)(77,"label",9),e._uU(78,"Designation"),e.qZA(),e._UZ(79,"input",27),e.YNc(80,H,2,0,"div",11),e.qZA(),e.TgZ(81,"div",8)(82,"label",28),e._uU(83,"Description"),e.qZA(),e._UZ(84,"textarea",29),e.YNc(85,X,2,0,"div",11),e.qZA(),e.YNc(86,R,5,1,"ng-container",30),e.YNc(87,V,2,1,"ng-template",null,31,e.W1O),e.qZA()()),2&n){const u=e.MAs(88);let c,h,Z,v,A,x,C,b;e.xp6(1),e.Q6J("ngIf",r.errorMessage),e.xp6(1),e.Q6J("formGroup",r.supplierForm),e.xp6(4),e.Oqu(r.title),e.xp6(10),e.Q6J("ngIf",(null==(c=r.supplierForm.get("firstName"))?null:c.invalid)&&(null==(c=r.supplierForm.get("firstName"))?null:c.touched)),e.xp6(6),e.Q6J("ngIf",(null==(h=r.supplierForm.get("lastName"))?null:h.invalid)&&(null==(h=r.supplierForm.get("lastName"))?null:h.touched)),e.xp6(7),e.Q6J("ngIf",(null==(Z=r.supplierForm.get("email"))?null:Z.invalid)&&(null==(Z=r.supplierForm.get("email"))?null:Z.touched)),e.xp6(6),e.Q6J("ngIf",(null==(v=r.supplierForm.get("phoneNumber"))?null:v.invalid)&&(null==(v=r.supplierForm.get("phoneNumber"))?null:v.touched)),e.xp6(5),e.Q6J("ngIf",r.listCountries),e.xp6(29),e.Q6J("ngIf",(null==(A=r.supplierForm.get("companyName"))?null:A.invalid)&&(null==(A=r.supplierForm.get("companyName"))?null:A.touched)),e.xp6(6),e.Q6J("ngIf",(null==(x=r.supplierForm.get("department"))?null:x.invalid)&&(null==(x=r.supplierForm.get("department"))?null:x.touched)),e.xp6(5),e.Q6J("ngIf",(null==(C=r.supplierForm.get("designation"))?null:C.invalid)&&(null==(C=r.supplierForm.get("designation"))?null:C.touched)),e.xp6(5),e.Q6J("ngIf",(null==(b=r.supplierForm.get("description"))?null:b.invalid)&&(null==(b=r.supplierForm.get("description"))?null:b.touched)),e.xp6(1),e.Q6J("ngIf",r.supplierId)("ngIfElse",u)}},dependencies:[d.sg,d.O5,p._Y,p.Fj,p.JJ,p.JL,p.sg,p.u,p.x0,y.A,T.w9,T.jq,a.rH]})}return t})();const ee=[{path:"",component:D},{path:"add",component:N},{path:"edit/:id",component:N},{path:"**",redirectTo:"",pathMatch:"full"}];let te=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.oAB({type:t});static#i=this.\u0275inj=e.cJS({imports:[d.ez,p.u5,p.UX,m.C,g.JX,T.A0,a.Bz.forChild(ee)]})}return t})()},583:(U,f,o)=>{o.d(f,{y:()=>g});var d=o(2340),a=o(4650),p=o(529);let g=(()=>{class m{constructor(e){this.http=e,this.apiUrl=`${d.N.apiUrl}clientsupplier`}createClientSupplier(e){return this.http.post(this.apiUrl,e)}getClientSupplier(e){return this.http.get(`${this.apiUrl}/${e}`)}updateClientSupplier(e,s){return this.http.put(`${this.apiUrl}/${e}`,s)}deleteClientSupplier(e){return this.http.delete(`${this.apiUrl}/${e}`)}getAllClientSuppliers(e,s,_){const S={currentPage:e,pageSize:s,..._};return this.http.get(this.apiUrl,{params:S})}static#e=this.\u0275fac=function(s){return new(s||m)(a.LFG(p.eN))};static#t=this.\u0275prov=a.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})()}}]);