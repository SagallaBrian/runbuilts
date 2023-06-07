"use strict";(self.webpackChunksuluhi_admin_frontend=self.webpackChunksuluhi_admin_frontend||[]).push([[291],{8291:(xt,Z,c)=>{c.r(Z),c.d(Z,{LsoLpoModule:()=>vt});var p=c(6895),u=c(8869),s=c(4006),g=c(8796),f=c(4333),q=c(1213),t=c(4650),L=c(8364),v=c(7997),x=c(5511),h=c(8057),U=c(295);function C(o,i){1&o&&(t.ynx(0),t.TgZ(1,"div",8),t._UZ(2,"app-sul-loader"),t.qZA(),t.BQk())}function y(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"div",8),t._UZ(2,"app-error-occured",10),t.qZA(),t.BQk()),2&o){const e=t.oxw(2);t.xp6(2),t.Q6J("errorMessage",e.errorMessage)}}const I=function(o){return["view",o]},N=function(o){return["edit",o]};function Q(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"tr",18)(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td",19),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.ALo(8,"date"),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.ALo(11,"date"),t.qZA(),t.TgZ(12,"td",19),t._uU(13),t.qZA(),t.TgZ(14,"td")(15,"button",20),t._uU(16,"Edit"),t.qZA()()(),t.BQk()),2&o){const e=i.$implicit,n=i.index;t.xp6(1),t.Q6J("routerLink",t.VKq(11,I,e._id)),t.xp6(2),t.Oqu(n+1),t.xp6(2),t.Oqu(e.uniqueNumber),t.xp6(2),t.Oqu(t.lcZ(8,7,e.issueDate)),t.xp6(3),t.Oqu(t.lcZ(11,9,e.dueDate)),t.xp6(3),t.Oqu(e.status),t.xp6(2),t.Q6J("routerLink",t.VKq(13,N,e._id))}}const k=function(o,i,e){return{itemsPerPage:o,currentPage:i,totalItems:e}};function E(o,i){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",12)(2,"table",13)(3,"thead",14)(4,"tr")(5,"th"),t._uU(6,"#"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Lso / Lpo No"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Issued Date"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Due Date"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Status"),t.qZA(),t._UZ(15,"th"),t.qZA()(),t.TgZ(16,"tbody"),t.YNc(17,Q,17,15,"ng-container",15),t.ALo(18,"paginate"),t.qZA()()(),t.TgZ(19,"div",16)(20,"pagination-controls",17),t.NdJ("pageChange",function(r){t.CHM(e);const l=t.oxw(3);return t.KtG(l.onPageChange(r))}),t.qZA()(),t.BQk()}if(2&o){const e=t.oxw(3);t.xp6(17),t.Q6J("ngForOf",t.xi3(18,1,e.lsolpos.results,t.kEZ(4,k,e.lsolpos.pageSize,e.currentPage,e.lsolpos.totalItems)))}}function O(o,i){1&o&&t._UZ(0,"app-no-data-found",21),2&o&&t.Q6J("dataLabel","Lso / Lpo")}function J(o,i){if(1&o&&(t.YNc(0,E,21,8,"ng-container",6),t.YNc(1,O,1,1,"ng-template",null,11,t.W1O)),2&o){const e=t.MAs(2),n=t.oxw(2);t.Q6J("ngIf",n.lsolpos&&n.lsolpos.results.length)("ngIfElse",e)}}function D(o,i){if(1&o&&(t.YNc(0,y,3,1,"ng-container",6),t.YNc(1,J,3,2,"ng-template",null,9,t.W1O)),2&o){const e=t.MAs(2),n=t.oxw();t.Q6J("ngIf",n.errorMessage)("ngIfElse",e)}}let F=(()=>{class o{constructor(e){this.invoiceService=e,this.loading=!0,this.currentPage=1,this.pageSize=10,this.options=[{name:"Lso/Lpo No",formname:"uniqueNumber",type:"text"},{name:"Issued Date",formname:"issueDate",type:"date"},{name:"Due Date",formname:"dueDate",type:"date"},{name:"Status",formname:"status",type:"select",selectoptions:[{val:"pending",name:"Pending"},{val:"paid",name:"Paid"}]}]}ngOnInit(){this.loadLsolpo({type:"lsolpo"})}loadLsolpo(e){this.loading=!0,this.invoiceService.getAllInvoicelsos(this.currentPage,this.pageSize,e).subscribe({next:n=>{this.lsolpos=n},error:n=>{this.errorMessage=n,this.loading=!1},complete:()=>{this.loading=!1}})}searchFunction(e){const n={...e,type:"lsolpo"};this.loadLsolpo(n)}onPageChange(e){this.currentPage=e,this.loadLsolpo({type:"lsolpo"})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(L.v))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-list-lso-lpo"]],decls:13,vars:3,consts:[[1,"py-4"],[1,"d-flex"],[1,"flex-grow-1"],[1,"text-secondary","fw-normal","mb-1"],[3,"searchOptions","searchEmit"],["routerLink","/accounts/lso-lpo/add",1,"btn","btn-outline-primary","btn-sm"],[4,"ngIf","ngIfElse"],["loadedContent",""],[1,"py-3"],["noError",""],[3,"errorMessage"],["nodata",""],[1,"table-responsive"],[1,"table","table-bordered","table-striped","text-nowrap"],[1,"thead"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end","pt-3"],[1,"my-pagination",3,"pageChange"],[1,"cursor-pointer",3,"routerLink"],[1,"text-capitalize"],[1,"edit-btn",3,"routerLink"],[3,"dataLabel"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),t._uU(4,"Lso / Lpo"),t.qZA()(),t.ynx(5),t.TgZ(6,"app-search-tab",4),t.NdJ("searchEmit",function(l){return n.searchFunction(l)}),t.qZA(),t.BQk(),t.TgZ(7,"div")(8,"button",5),t._uU(9," Add Lso / Lpo"),t.qZA()()(),t.YNc(10,C,3,0,"ng-container",6),t.YNc(11,D,3,2,"ng-template",null,7,t.W1O),t.qZA()),2&e){const r=t.MAs(12);t.xp6(6),t.Q6J("searchOptions",n.options),t.xp6(4),t.Q6J("ngIf",n.loading)("ngIfElse",r)}},dependencies:[p.sg,p.O5,v.S,x.i,h.A,U.O,f.LS,u.rH,p.uU,f._s]}),o})();var S=c(583);function Y(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"div",27),t._UZ(2,"app-error-occured",28),t.qZA(),t.BQk()),2&o){const e=t.oxw();t.xp6(2),t.Q6J("errorMessage",e.errorMessage)}}function w(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"button",29),t._uU(2," Print Lso/Lpo "),t.qZA(),t.BQk()),2&o){const e=t.oxw();t.xp6(1),t.MGl("routerLink","/accounts/lso-lpo/view/",e.lsolpoId,"")}}function M(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"ng-option",33),t._uU(2),t.qZA(),t.BQk()),2&o){const e=i.$implicit;t.xp6(1),t.Q6J("value",e._id),t.xp6(1),t.AsE(" ",e.firstName," ",e.lastName," ")}}function B(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"ng-select",30)(2,"ng-option",31),t._uU(3,"Search Customer"),t.qZA(),t.YNc(4,M,3,3,"ng-container",32),t.qZA(),t.BQk()),2&o){const e=t.oxw(2);t.xp6(4),t.Q6J("ngForOf",e.clients.results)}}function P(o,i){1&o&&(t.TgZ(0,"div",34),t._uU(1," Customer is required. "),t.qZA())}function j(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"div",6)(2,"div"),t.YNc(3,B,5,1,"ng-container",0),t.qZA(),t.YNc(4,P,2,0,"div",16),t.qZA(),t.BQk()),2&o){const e=t.oxw();let n;t.xp6(3),t.Q6J("ngIf",e.clients&&e.clients.results.length),t.xp6(1),t.Q6J("ngIf",(null==(n=e.lsolpoForm.get("customerid"))?null:n.invalid)&&(null==(n=e.lsolpoForm.get("customerid"))?null:n.touched))}}function G(o,i){1&o&&(t.TgZ(0,"div",34),t._uU(1," Supplier is required. "),t.qZA())}function K(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"div",6),t._UZ(2,"input",35),t.YNc(3,G,2,0,"div",16),t.qZA(),t.BQk()),2&o){const e=t.oxw();let n;t.xp6(3),t.Q6J("ngIf",(null==(n=e.lsolpoForm.get("recipient"))?null:n.invalid)&&(null==(n=e.lsolpoForm.get("recipient"))?null:n.touched))}}function R(o,i){1&o&&(t.TgZ(0,"div",34),t._uU(1," Date is required. "),t.qZA())}function H(o,i){1&o&&(t.TgZ(0,"div",34),t._uU(1," Date is required. "),t.qZA())}function z(o,i){1&o&&(t.TgZ(0,"div",34),t._uU(1," Description is required. "),t.qZA())}function W(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",40)(1,"div",41)(2,"div",2)(3,"div",3)(4,"h4",42),t._uU(5),t.qZA()(),t.TgZ(6,"div")(7,"button",43),t.NdJ("click",function(){const l=t.CHM(e).index,a=t.oxw(2);return t.KtG(a.deleteService(l))}),t._uU(8,"Remove"),t.qZA()()(),t.TgZ(9,"div",44)(10,"div",12)(11,"div",13)(12,"div",6)(13,"label",45),t._uU(14,"Name"),t.qZA(),t._UZ(15,"input",46),t.qZA()(),t.TgZ(16,"div",13)(17,"div",6)(18,"label",47),t._uU(19,"Price"),t.qZA(),t._UZ(20,"input",48),t.qZA()()()()()()}if(2&o){const e=i.index,n=t.oxw(2);t.xp6(5),t.hij("Service ",e+1,""),t.xp6(2),t.Q6J("disabled",n.lsolpoId),t.xp6(2),t.Q6J("formGroupName",e),t.xp6(6),t.Q6J("readOnly",n.lsolpoId),t.xp6(5),t.Q6J("readOnly",n.lsolpoId)}}function X(o,i){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",36),t.YNc(2,W,21,5,"div",37),t.TgZ(3,"div",38)(4,"button",39),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.addService())}),t._uU(5,"Add Service"),t.qZA()()(),t.BQk()}if(2&o){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.serviceArr.controls),t.xp6(2),t.Q6J("disabled",e.lsolpoId)}}function $(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",40)(1,"div",41)(2,"div",2)(3,"div",3)(4,"h4",42),t._uU(5),t.qZA()(),t.TgZ(6,"div")(7,"button",43),t.NdJ("click",function(){const l=t.CHM(e).index,a=t.oxw(2);return t.KtG(a.deleteProduct(l))}),t._uU(8,"Remove"),t.qZA()()(),t.TgZ(9,"div",44)(10,"div",12)(11,"div",50)(12,"div",6)(13,"label",45),t._uU(14,"Name"),t.qZA(),t._UZ(15,"input",51),t.qZA()(),t.TgZ(16,"div",50)(17,"div",6)(18,"label",47),t._uU(19,"Unit Price"),t.qZA(),t._UZ(20,"input",52),t.qZA()(),t.TgZ(21,"div",50)(22,"div",6)(23,"label",47),t._uU(24,"Number of ITems"),t.qZA(),t._UZ(25,"input",53),t.qZA()()()()()()}if(2&o){const e=i.index,n=t.oxw(2);t.xp6(5),t.hij("Product ",e+1,""),t.xp6(2),t.Q6J("disabled",n.lsolpoId),t.xp6(2),t.Q6J("formGroupName",e),t.xp6(6),t.Q6J("readOnly",n.lsolpoId),t.xp6(5),t.Q6J("readOnly",n.lsolpoId),t.xp6(5),t.Q6J("readOnly",n.lsolpoId)}}function V(o,i){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",49),t.YNc(2,$,26,6,"div",37),t.TgZ(3,"div",38)(4,"button",39),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.addProduct())}),t._uU(5," Add Product "),t.qZA()()(),t.BQk()}if(2&o){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.productsArr.controls),t.xp6(2),t.Q6J("disabled",e.lsolpoId)}}function tt(o,i){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",54),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.deleteLsoLpo())}),t._uU(2,"Delete Lso/Lpo"),t.qZA(),t.TgZ(3,"button",55),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.updateLsoLpo())}),t._uU(4," Edit Lso/Lpo "),t.qZA(),t.BQk()}if(2&o){const e=t.oxw();t.xp6(3),t.Q6J("disabled",e.lsolpoForm.invalid)}}function et(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",56),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.addLsoLpo())}),t._uU(1," Add Lso/Lpo "),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("disabled",e.lsolpoForm.invalid)}}let A=(()=>{class o{constructor(e,n,r,l,a){this.formBuilder=e,this.router=n,this.lsoploServ=r,this.clientService=l,this.route=a,this.title="Add Lso / Lpo",this.today=(new Date).toISOString().substring(0,10),this.submiting=!1,this.loading=!1,this.loadingclients=!1}ngOnInit(){this.loadClients({}),this.lsolpoForm=this.formBuilder.group({customerid:["",s.kI.required],recipient:[""],customerordirect:["customer"],issueDate:[this.today,s.kI.required],dueDate:[this.today,s.kI.required],status:["pending"],type:["lsolpo"],description:[""],serviceorproduct:["service"],products:this.formBuilder.array([]),service:this.formBuilder.array([])}),this.lsolpoId=this.route.snapshot.paramMap.get("id"),this.lsolpoId?(this.title="Edit Lso / Lpo",this.getLsolpo(this.lsolpoId),this.lsolpoForm.get("serviceorproduct")?.disable(),this.lsolpoForm.get("customerordirect")?.disable()):(this.addService(),this.lsolpoForm.get("serviceorproduct")?.valueChanges.subscribe(e=>{"service"===e&&(this.addService(),this.productsArr.clear()),"product"===e&&(this.addProduct(),this.serviceArr.clear())}))}getLsolpo(e){this.loading=!0,this.lsoploServ.getInvoicelso(e).subscribe({next:n=>{const r=new Date(n.dueDate).toISOString().substring(0,10),l=new Date(n.issueDate).toISOString().substring(0,10);n.dueDate=r,n.issueDate=l,this.lsolpoForm.patchValue(n),this.checkIfCustomer(),n.products.forEach(a=>{const d=this.formBuilder.group({name:[a.name,s.kI.required],noOfitems:[a.noOfitems,s.kI.required],unitprice:[a.unitprice,s.kI.required],_id:[a._id]});this.productsArr.push(d)}),n.service.forEach(a=>{const d=this.formBuilder.group({name:[a.name,s.kI.required],price:[a.price,s.kI.required],_id:[a._id]});this.serviceArr.push(d)})},error:n=>{this.errorMessage=n,this.loading=!1},complete:()=>{this.loading=!1}})}get productsArr(){return this.lsolpoForm.get("products")}addProduct(){const e=this.formBuilder.group({name:["",s.kI.required],noOfitems:["",s.kI.required],unitprice:["",s.kI.required]});this.productsArr.push(e)}deleteProduct(e){this.productsArr.removeAt(e)}get serviceArr(){return this.lsolpoForm.get("service")}addService(){const e=this.formBuilder.group({name:["",s.kI.required],price:["",s.kI.required]});this.serviceArr.push(e)}deleteService(e){this.serviceArr.removeAt(e)}addLsoLpo(){this.lsolpoForm.valid&&(this.submiting=!0,this.lsoploServ.createInvoicelso(this.lsolpoForm.value).subscribe({next:n=>{this.lsolpoForm.reset(),this.router.navigate(["/accounts/lso-lpo"])},error:n=>{this.errorMessage=n,this.submiting=!1},complete:()=>{this.submiting=!1}}))}updateLsoLpo(){const e=this.lsolpoForm.value;this.submiting=!0,this.lsoploServ.updateInvoicelso(this.lsolpoId,e).subscribe({next:n=>{this.router.navigate(["/accounts/lso-lpo"])},error:n=>{this.errorMessage=n,this.submiting=!1},complete:()=>{this.submiting=!1}})}deleteLsoLpo(){this.submiting=!0,this.lsoploServ.deleteInvoicelso(this.lsolpoId).subscribe({next:e=>{this.router.navigate(["/accounts/lso-lpo"])},error:e=>{this.errorMessage=e,this.submiting=!1},complete:()=>{this.submiting=!1}})}loadClients(e){this.loadingclients=!0,this.clientService.getAllClientSuppliers(1,100,e).subscribe({next:n=>{this.clients=n},error:n=>{this.errorMessage=n,this.loadingclients=!1},complete:()=>{this.loadingclients=!1}})}checkIfCustomer(){const e=this.lsolpoForm.get("customerordirect")?.value;"customer"===e?(this.lsolpoForm.removeControl("recipient"),this.lsolpoForm.addControl("customerid",this.formBuilder.control("",s.kI.required))):"recipient"===e&&(this.lsolpoForm.removeControl("customerid"),this.lsolpoForm.addControl("recipient",this.formBuilder.control("",s.kI.required)))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s.qu),t.Y36(u.F0),t.Y36(L.v),t.Y36(S.y),t.Y36(u.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-edit-lso-lpo"]],decls:54,vars:13,consts:[[4,"ngIf"],[1,"my-4",3,"formGroup"],[1,"d-flex"],[1,"flex-grow-1"],[1,"fw-normal"],["routerLink","/accounts/lso-lpo",1,"btn","btn-outline-secondary","btn-sm"],[1,"mb-3"],[1,"form-check","form-check-inline"],["type","radio","formControlName","customerordirect","id","inlineRadio3","value","customer",1,"form-check-input",3,"change"],["for","inlineRadio3",1,"form-check-label"],["type","radio","formControlName","customerordirect","id","inlineRadio5","value","recipient",1,"form-check-input",3,"change"],["for","inlineRadio5",1,"form-check-label"],[1,"row"],[1,"col-lg-6"],["for","issueDate",1,"form-label"],["type","date","id","issueDate","formControlName","issueDate",1,"form-control"],["class","sul-error",4,"ngIf"],["for","title",1,"form-label"],["type","date","id","title","formControlName","dueDate",1,"form-control"],["for","description",1,"form-label"],["id","description","formControlName","description","placeholder","Enter Description",1,"form-control"],["type","radio","formControlName","serviceorproduct","id","inlineRadio1","value","service",1,"form-check-input"],["for","inlineRadio1",1,"form-check-label"],["type","radio","formControlName","serviceorproduct","id","inlineRadio2","value","product",1,"form-check-input"],["for","inlineRadio2",1,"form-check-label"],[4,"ngIf","ngIfElse"],["adding",""],[1,"py-3"],[3,"errorMessage"],[1,"btn","btn-outline-success","btn-sm","ms-2",3,"routerLink"],["formControlName","customerid"],["value","","disabled",""],[4,"ngFor","ngForOf"],[3,"value"],[1,"sul-error"],["type","text","id","title","formControlName","recipient","placeholder","Enter Supplier",1,"form-control"],["formArrayName","service"],["class","card my-3",4,"ngFor","ngForOf"],[1,"text-end"],["type","button",1,"btn","btn-success","btn-sm","mt-3",3,"disabled","click"],[1,"card","my-3"],[1,"card-body"],[1,"card-title"],[1,"btn","btn-danger","btn-sm",3,"disabled","click"],[3,"formGroupName"],["for","titl",1,"form-label"],["type","text","id","titl","formControlName","name","placeholder","Enter Service Provided",1,"form-control",3,"readOnly"],["for","pric",1,"form-label"],["type","number","id","pric","formControlName","price","placeholder","Enter Price",1,"form-control",3,"readOnly"],["formArrayName","products"],[1,"col-lg-4"],["type","text","id","titl","formControlName","name","placeholder","Enter Product Name",1,"form-control",3,"readOnly"],["type","number","id","pric","formControlName","unitprice","placeholder","Enter Unit Price",1,"form-control",3,"readOnly"],["type","number","id","pric","formControlName","noOfitems","placeholder","Enter Number of Items",1,"form-control",3,"readOnly"],["type","submit",1,"btn","btn-danger","btn-sm","me-2",3,"click"],["type","submit",1,"btn","btn-primary","btn-sm",3,"disabled","click"],["type","submit",1,"btn","btn-success","btn-sm",3,"disabled","click"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,Y,3,1,"ng-container",0),t.TgZ(2,"form",1)(3,"div",2)(4,"div",3)(5,"h2",4),t._uU(6),t.qZA()(),t.TgZ(7,"div")(8,"button",5),t._uU(9," List Lso/Lpo"),t.qZA(),t.YNc(10,w,3,1,"ng-container",0),t.qZA()(),t.TgZ(11,"div",6)(12,"div",7)(13,"input",8),t.NdJ("change",function(){return n.checkIfCustomer()}),t.qZA(),t.TgZ(14,"label",9),t._uU(15,"Customer"),t.qZA()(),t.TgZ(16,"div",7)(17,"input",10),t.NdJ("change",function(){return n.checkIfCustomer()}),t.qZA(),t.TgZ(18,"label",11),t._uU(19,"Supplier"),t.qZA()()(),t.YNc(20,j,5,2,"ng-container",0),t.YNc(21,K,4,1,"ng-container",0),t.TgZ(22,"div",12)(23,"div",13)(24,"div",6)(25,"label",14),t._uU(26,"Issue Date"),t.qZA(),t._UZ(27,"input",15),t.YNc(28,R,2,0,"div",16),t.qZA()(),t.TgZ(29,"div",13)(30,"div",6)(31,"label",17),t._uU(32,"Due Date"),t.qZA(),t._UZ(33,"input",18),t.YNc(34,H,2,0,"div",16),t.qZA()()(),t.TgZ(35,"div",6)(36,"label",19),t._uU(37,"Description"),t.qZA(),t._UZ(38,"textarea",20),t.YNc(39,z,2,0,"div",16),t.qZA(),t.TgZ(40,"div",6)(41,"div",7),t._UZ(42,"input",21),t.TgZ(43,"label",22),t._uU(44,"Service"),t.qZA()(),t.TgZ(45,"div",7),t._UZ(46,"input",23),t.TgZ(47,"label",24),t._uU(48,"Products"),t.qZA()()(),t.YNc(49,X,6,2,"ng-container",0),t.YNc(50,V,6,2,"ng-container",0),t.YNc(51,tt,5,1,"ng-container",25),t.YNc(52,et,2,1,"ng-template",null,26,t.W1O),t.qZA()()),2&e){const r=t.MAs(53);let l,a,d,_,m,T,b;t.xp6(1),t.Q6J("ngIf",n.errorMessage),t.xp6(1),t.Q6J("formGroup",n.lsolpoForm),t.xp6(4),t.Oqu(n.title),t.xp6(4),t.Q6J("ngIf",n.lsolpoId),t.xp6(10),t.Q6J("ngIf","customer"===(null==(l=n.lsolpoForm.get("customerordirect"))?null:l.value)),t.xp6(1),t.Q6J("ngIf","recipient"===(null==(a=n.lsolpoForm.get("customerordirect"))?null:a.value)),t.xp6(7),t.Q6J("ngIf",(null==(d=n.lsolpoForm.get("issueDate"))?null:d.invalid)&&(null==(d=n.lsolpoForm.get("issueDate"))?null:d.touched)),t.xp6(6),t.Q6J("ngIf",(null==(_=n.lsolpoForm.get("dueDate"))?null:_.invalid)&&(null==(_=n.lsolpoForm.get("dueDate"))?null:_.touched)),t.xp6(5),t.Q6J("ngIf",(null==(m=n.lsolpoForm.get("description"))?null:m.invalid)&&(null==(m=n.lsolpoForm.get("description"))?null:m.touched)),t.xp6(10),t.Q6J("ngIf","service"===(null==(T=n.lsolpoForm.get("serviceorproduct"))?null:T.value)),t.xp6(1),t.Q6J("ngIf","product"===(null==(b=n.lsolpoForm.get("serviceorproduct"))?null:b.value)),t.xp6(1),t.Q6J("ngIf",n.lsolpoId)("ngIfElse",r)}},dependencies:[p.sg,p.O5,s._Y,s.Fj,s.wV,s._,s.JJ,s.JL,s.sg,s.u,s.x0,s.CE,h.A,g.w9,g.jq,u.rH]}),o})();var ot=c(7556),nt=c(6518);function it(o,i){1&o&&(t.ynx(0),t.TgZ(1,"div",8),t._UZ(2,"app-sul-loader"),t.qZA(),t.BQk())}function rt(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"div",8),t._UZ(2,"app-error-occured",10),t.qZA(),t.BQk()),2&o){const e=t.oxw(2);t.xp6(2),t.Q6J("errorMessage",e.errorMessage)}}function st(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"div",14)(2,"div"),t._uU(3),t.qZA(),t.TgZ(4,"div"),t._uU(5),t.qZA(),t.TgZ(6,"div",17),t._uU(7),t.qZA(),t.TgZ(8,"div"),t._uU(9),t.qZA()(),t.BQk()),2&o){const e=t.oxw(4);t.xp6(3),t.lnq(" ",e.detailLsoLpo.customerid.firstName," ",e.detailLsoLpo.customerid.lastName," - ",e.detailLsoLpo.customerid.companyName," "),t.xp6(2),t.AsE(" ",e.detailLsoLpo.customerid.address.state,", ",e.detailLsoLpo.customerid.address.country," "),t.xp6(2),t.hij(" ",e.detailLsoLpo.customerid.phoneNumber," "),t.xp6(2),t.hij(" ",e.detailLsoLpo.customerid.email," ")}}function lt(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"div",14)(2,"div"),t._uU(3),t.qZA()(),t.BQk()),2&o){const e=t.oxw(4);t.xp6(3),t.hij(" ",e.detailLsoLpo.recipient," ")}}function at(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"tr")(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td",37),t._uU(5),t.qZA(),t.TgZ(6,"td",36),t._uU(7),t.ALo(8,"currency"),t.qZA()(),t.BQk()),2&o){const e=i.$implicit,n=i.index;t.xp6(3),t.Oqu(n+1),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(t.xi3(8,3,e.price,"Ksh "))}}function ct(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"div",33)(2,"table",34)(3,"thead",35)(4,"tr")(5,"th"),t._uU(6,"#"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"DESCRIPTION"),t.qZA(),t.TgZ(9,"th",36),t._uU(10,"AMOUNT"),t.qZA()()(),t.TgZ(11,"tbody"),t.YNc(12,at,9,6,"ng-container",26),t.qZA()()(),t.BQk()),2&o){const e=t.oxw(4);t.xp6(12),t.Q6J("ngForOf",e.detailLsoLpo.service)}}function pt(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"tr")(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td",37),t._uU(5),t.qZA(),t.TgZ(6,"td",36),t._uU(7),t.qZA(),t.TgZ(8,"td",36),t._uU(9),t.ALo(10,"currency"),t.qZA(),t.TgZ(11,"td",36),t._uU(12),t.ALo(13,"currency"),t.qZA()(),t.BQk()),2&o){const e=i.$implicit,n=i.index;t.xp6(3),t.Oqu(n+1),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.noOfitems),t.xp6(2),t.Oqu(t.xi3(10,5,e.unitprice,"Ksh ")),t.xp6(3),t.hij(" ",t.xi3(13,8,e.noOfitems*e.unitprice,"Ksh ")," ")}}function dt(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"div",33)(2,"table",34)(3,"thead",35)(4,"tr")(5,"th"),t._uU(6,"#"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"DESCRIPTION"),t.qZA(),t.TgZ(9,"th",36),t._uU(10,"QTY"),t.qZA(),t.TgZ(11,"th",36),t._uU(12,"UNIT PRICE"),t.qZA(),t.TgZ(13,"th",36),t._uU(14,"TOTAL"),t.qZA()()(),t.TgZ(15,"tbody"),t.YNc(16,pt,14,11,"ng-container",26),t.qZA()()(),t.BQk()),2&o){const e=t.oxw(4);t.xp6(16),t.Q6J("ngForOf",e.detailLsoLpo.products)}}function ut(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"div",38)(2,"div",28),t._uU(3),t.qZA(),t.TgZ(4,"div",29),t._uU(5),t.ALo(6,"currency"),t.qZA()(),t.BQk()),2&o){const e=i.$implicit;t.xp6(3),t.hij("",e.name,": "),t.xp6(2),t.Oqu(t.xi3(6,2,e.ammount,"Ksh "))}}function _t(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"div"),t._uU(2),t.qZA(),t.BQk()),2&o){const e=t.oxw(4);t.xp6(2),t.AsE(" ",e.detailLsoLpo.customerid.firstName," ",e.detailLsoLpo.customerid.lastName," ")}}function mt(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"div"),t._uU(2),t.qZA(),t.BQk()),2&o){const e=t.oxw(4);t.xp6(2),t.hij(" ",e.detailLsoLpo.recipient," ")}}function gt(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"div",12)(2,"div",13)(3,"div",14)(4,"h2",15),t._uU(5,"Lso - Lpo"),t.qZA()(),t.TgZ(6,"div",16)(7,"div"),t._uU(8),t.qZA(),t.TgZ(9,"div"),t._uU(10),t.qZA(),t.TgZ(11,"div",17),t._uU(12),t.qZA(),t.TgZ(13,"div"),t._uU(14),t.qZA()()()(),t.TgZ(15,"div",18)(16,"div",19),t._uU(17," Bill From: "),t.qZA(),t.TgZ(18,"div",20),t.YNc(19,st,10,7,"ng-container",21),t.YNc(20,lt,4,1,"ng-container",21),t.TgZ(21,"div",14)(22,"div",1)(23,"div",22)(24,"div"),t._uU(25,"Lso - Lpo #:"),t.qZA(),t.TgZ(26,"div"),t._uU(27,"Issued Date:"),t.qZA(),t.TgZ(28,"div"),t._uU(29,"Due Date:"),t.qZA()(),t.TgZ(30,"div",23)(31,"div"),t._uU(32),t.qZA(),t.TgZ(33,"div"),t._uU(34),t.ALo(35,"date"),t.qZA(),t.TgZ(36,"div"),t._uU(37),t.ALo(38,"date"),t.qZA()()()()()(),t.YNc(39,ct,13,1,"ng-container",21),t.YNc(40,dt,17,1,"ng-container",21),t.TgZ(41,"div",24)(42,"div",25),t.YNc(43,ut,7,5,"ng-container",26),t.TgZ(44,"div",27)(45,"div",28),t._uU(46,"TOTAL: "),t.qZA(),t.TgZ(47,"div",29),t._uU(48),t.ALo(49,"currency"),t.qZA()()()(),t.TgZ(50,"div",0)(51,"div",20)(52,"div",14)(53,"div",30),t._uU(54,"Supplier"),t.qZA(),t.YNc(55,_t,3,2,"ng-container",21),t.YNc(56,mt,3,1,"ng-container",21),t.TgZ(57,"div",31),t._uU(58," ........................................... "),t.qZA(),t.TgZ(59,"div"),t._uU(60),t.ALo(61,"date"),t.qZA()(),t.TgZ(62,"div",16)(63,"div",30),t._uU(64,"Issuer"),t.qZA(),t.TgZ(65,"div"),t._uU(66),t.qZA(),t.TgZ(67,"div",31),t._uU(68," ........................................... "),t.qZA(),t.TgZ(69,"div"),t._uU(70),t.ALo(71,"date"),t.qZA()()()(),t.TgZ(72,"div",0)(73,"div",32),t._uU(74,"Terms"),t.qZA(),t.TgZ(75,"div"),t._uU(76),t.ALo(77,"date"),t.qZA()(),t.BQk()),2&o){const e=t.oxw(3);t.xp6(8),t.hij(" ",e.currentUser.company.name," "),t.xp6(2),t.AsE(" ",e.currentUser.company.address.state,", ",e.currentUser.company.address.country," "),t.xp6(2),t.hij(" ",e.currentUser.company.phoneNumber," "),t.xp6(2),t.hij(" ",e.currentUser.company.email," "),t.xp6(5),t.Q6J("ngIf",e.detailLsoLpo.customerid),t.xp6(1),t.Q6J("ngIf",e.detailLsoLpo.recipient),t.xp6(12),t.Oqu(e.detailLsoLpo.uniqueNumber),t.xp6(2),t.Oqu(t.lcZ(35,21,e.detailLsoLpo.issueDate)),t.xp6(3),t.Oqu(t.lcZ(38,23,e.detailLsoLpo.dueDate)),t.xp6(2),t.Q6J("ngIf",e.detailLsoLpo.service&&e.detailLsoLpo.service.length),t.xp6(1),t.Q6J("ngIf",e.detailLsoLpo.products&&e.detailLsoLpo.products.length),t.xp6(3),t.Q6J("ngForOf",e.operatingCost),t.xp6(5),t.Oqu(t.xi3(49,25,e.totalamount,"Ksh ")),t.xp6(7),t.Q6J("ngIf",e.detailLsoLpo.customerid),t.xp6(1),t.Q6J("ngIf",e.detailLsoLpo.recipient),t.xp6(4),t.hij(" ",t.lcZ(61,28,e.today)," "),t.xp6(6),t.AsE(" ",e.currentUser.firstName," ",e.currentUser.lastName," "),t.xp6(4),t.hij(" ",t.lcZ(71,30,e.today)," "),t.xp6(6),t.hij(" Payments would be made by ",t.lcZ(77,32,e.detailLsoLpo.dueDate)," ")}}function ft(o,i){1&o&&t._UZ(0,"app-no-data-found",39),2&o&&t.Q6J("dataLabel","Lso - Lpo")}function Lt(o,i){if(1&o&&(t.YNc(0,gt,78,34,"ng-container",6),t.YNc(1,ft,1,1,"ng-template",null,11,t.W1O)),2&o){const e=t.MAs(2),n=t.oxw(2);t.Q6J("ngIf",n.detailLsoLpo)("ngIfElse",e)}}function ht(o,i){if(1&o&&(t.YNc(0,rt,3,1,"ng-container",6),t.YNc(1,Lt,3,2,"ng-template",null,9,t.W1O)),2&o){const e=t.MAs(2),n=t.oxw();t.Q6J("ngIf",n.errorMessage)("ngIfElse",e)}}const Zt=[{path:"",component:F},{path:"add",component:A},{path:"edit/:id",component:A},{path:"view/:id",component:(()=>{class o{constructor(e,n,r,l){this.lsolpoServ=e,this.authService=n,this.route=r,this.pdfService=l,this.loading=!1,this.totalamount=0,this.today=new Date,this.operatingCost=[{name:"SUBTOTAL",ammount:0,incrme:!0},{name:"DISCOUNT",ammount:0,incrme:!1},{name:"TOTAL TAX",ammount:0,incrme:!0}]}ngOnInit(){this.lsolpoId=this.route.snapshot.paramMap.get("id"),this.lsolpoId&&this.getLsoLpo(this.lsolpoId),this.getCurrentUser()}getCurrentUser(){this.currentUser=JSON.parse(this.authService.getUseriInfo())}getLsoLpo(e){this.loading=!0,this.lsolpoServ.getInvoicelsoprint(e).subscribe({next:n=>{this.detailLsoLpo=n,this.detailLsoLpo.products.length&&(this.totalamount=this.prdtotal(this.detailLsoLpo.products)),this.detailLsoLpo.service.length&&(this.totalamount=this.servtotal(this.detailLsoLpo.service)),this.detailLsoLpo.totalAmount=this.totalamount},error:n=>{this.errorMessage=n,this.loading=!1},complete:()=>{this.loading=!1}})}prdtotal(e){let n=0;for(let r=0;r<e.length;r++){const l=e[r];n+=l.noOfitems*l.unitprice}return n}servtotal(e){let n=0;for(let r=0;r<e.length;r++)n+=e[r].price;return n}generatePdf(){this.detailLsoLpo&&this.pdfService.genePdfNvcLso(this.detailLsoLpo,this.currentUser,`lsolpo${this.detailLsoLpo.uniqueNumber}.pdf`,["Bill From","Supplier"])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(L.v),t.Y36(ot.e),t.Y36(u.gz),t.Y36(nt.F))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-details-lso-lpo"]],decls:13,vars:3,consts:[[1,"py-4"],[1,"d-flex"],[1,"flex-grow-1"],["routerLink","/accounts/lso-lpo",1,"btn","btn-outline-primary","btn-sm"],[1,"btn","btn-outline-success","btn-sm","ms-2",3,"click"],[1,"btn","btn-outline-warning","btn-sm","ms-2",3,"routerLink"],[4,"ngIf","ngIfElse"],["loadedContent",""],[1,"py-3"],["noError",""],[3,"errorMessage"],["nodata",""],[1,"py-4","mt-2"],[1,"d-flex","align-items-center"],[1,"col-6"],[1,"detailsheader"],[1,"col-6","text-end"],[1,"mt-1"],[1,"my-4"],[1,"pb-1","text-secondary"],[1,"row"],[4,"ngIf"],[1,"flex-grow-1","text-end","text-dark"],[1,"text-end","ps-2"],[1,"row","justify-content-end"],[1,"col-lg-4","col-sm-8"],[4,"ngFor","ngForOf"],[1,"d-flex","operatingCost","fw-bold","mb-1","mt-2"],[1,"flex-grow-1","text-end"],[1,"ps-4","pe-2","text-end"],[1,""],[1,"pt-2"],[1,"fw-bold"],[1,"table-responsive"],[1,"table","table-bordered"],[1,"bg-light"],[1,"text-end"],[1,"text-capitalize"],[1,"d-flex","operatingCost","mb-1"],[3,"dataLabel"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"div",2),t.TgZ(3,"div")(4,"button",3),t._uU(5," List Lso/Lpo"),t.qZA(),t.TgZ(6,"button",4),t.NdJ("click",function(){return n.generatePdf()}),t._uU(7," Print Lso - Lpo"),t.qZA(),t.TgZ(8,"button",5),t._uU(9," Edit Lso/Lpo "),t.qZA()()(),t.YNc(10,it,3,0,"ng-container",6),t.YNc(11,ht,3,2,"ng-template",null,7,t.W1O),t.qZA()),2&e){const r=t.MAs(12);t.xp6(8),t.MGl("routerLink","/accounts/lso-lpo/edit/",n.lsolpoId,""),t.xp6(2),t.Q6J("ngIf",n.loading)("ngIfElse",r)}},dependencies:[p.sg,p.O5,v.S,x.i,h.A,u.rH,p.H9,p.uU]}),o})()},{path:"**",redirectTo:"",pathMatch:"full"}];let vt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.ez,s.u5,s.UX,q.C,f.JX,g.A0,u.Bz.forChild(Zt)]}),o})()}}]);