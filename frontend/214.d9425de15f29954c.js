"use strict";(self.webpackChunksuluhi_admin_frontend=self.webpackChunksuluhi_admin_frontend||[]).push([[214],{4214:(C,Z,a)=>{a.r(Z),a.d(Z,{InvoicesModule:()=>pe});var i=a(6895),d=a(8869),c=a(4006),g=a(8796),u=a(4333),x=a(1213),e=a(4650),h=a(8364),A=a(7997),b=a(5511),U=a(8057),y=a(295);function p(n,r){1&n&&(e.ynx(0),e.TgZ(1,"div",8),e._UZ(2,"app-sul-loader"),e.qZA(),e.BQk())}function f(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",8),e._UZ(2,"app-error-occured",10),e.qZA(),e.BQk()),2&n){const t=e.oxw(2);e.xp6(2),e.Q6J("errorMessage",t.errorMessage)}}const s=function(n){return["view",n]},v=function(n){return["edit",n]};function I(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"tr",18)(2,"td"),e._uU(3),e.qZA(),e.TgZ(4,"td",19),e._uU(5),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.ALo(8,"date"),e.qZA(),e.TgZ(9,"td",19),e._uU(10),e.qZA(),e.TgZ(11,"td")(12,"button",20),e._uU(13,"Edit"),e.qZA()()(),e.BQk()),2&n){const t=r.$implicit,o=r.index;e.xp6(1),e.Q6J("routerLink",e.VKq(8,s,t._id)),e.xp6(2),e.Oqu(o+1),e.xp6(2),e.Oqu(t.uniqueNumber),e.xp6(2),e.Oqu(e.lcZ(8,6,t.dueDate)),e.xp6(3),e.Oqu(t.status),e.xp6(2),e.Q6J("routerLink",e.VKq(10,v,t._id))}}const F=function(n,r,t){return{itemsPerPage:n,currentPage:r,totalItems:t}};function Q(n,r){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",12)(2,"table",13)(3,"thead",14)(4,"tr")(5,"th"),e._uU(6,"#"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Invoice No"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Due Date"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Status"),e.qZA(),e._UZ(13,"th"),e.qZA()(),e.TgZ(14,"tbody"),e.YNc(15,I,14,12,"ng-container",15),e.ALo(16,"paginate"),e.qZA()()(),e.TgZ(17,"div",16)(18,"pagination-controls",17),e.NdJ("pageChange",function(l){e.CHM(t);const m=e.oxw(3);return e.KtG(m.onPageChange(l))}),e.qZA()(),e.BQk()}if(2&n){const t=e.oxw(3);e.xp6(15),e.Q6J("ngForOf",e.xi3(16,1,t.invoices.results,e.kEZ(4,F,t.invoices.pageSize,t.currentPage,t.invoices.totalItems)))}}function J(n,r){1&n&&e._UZ(0,"app-no-data-found",21),2&n&&e.Q6J("dataLabel","Invoice")}function D(n,r){if(1&n&&(e.YNc(0,Q,19,8,"ng-container",6),e.YNc(1,J,1,1,"ng-template",null,11,e.W1O)),2&n){const t=e.MAs(2),o=e.oxw(2);e.Q6J("ngIf",o.invoices&&o.invoices.results.length)("ngIfElse",t)}}function S(n,r){if(1&n&&(e.YNc(0,f,3,1,"ng-container",6),e.YNc(1,D,3,2,"ng-template",null,9,e.W1O)),2&n){const t=e.MAs(2),o=e.oxw();e.Q6J("ngIf",o.errorMessage)("ngIfElse",t)}}let M=(()=>{class n{constructor(t){this.invoiceService=t,this.loading=!0,this.currentPage=1,this.pageSize=10,this.options=[{name:"Customer Title",formname:"title",type:"text"},{name:"Status",formname:"loanstatus",type:"select",selectoptions:[{val:"pending",name:"Pending"},{val:"approved",name:"Approved"},{val:"rejected",name:"Rejected"}]}]}ngOnInit(){this.loadInvoices({})}loadInvoices(t){this.loading=!0,this.invoiceService.getAllInvoicelsos(this.currentPage,this.pageSize,t).subscribe({next:o=>{this.invoices=o},error:o=>{this.errorMessage=o,this.loading=!1},complete:()=>{this.loading=!1}})}searchFunction(t){this.loadInvoices(t)}onPageChange(t){this.currentPage=t,this.loadInvoices({})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.v))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-list-invoices"]],decls:13,vars:4,consts:[[1,"py-4"],[1,"d-flex"],[1,"flex-grow-1"],[1,"text-secondary","fw-normal","mb-1"],[3,"searchlabel","searchOptions","searchEmit"],["routerLink","/accounts/invoices/add",1,"btn","btn-outline-primary","btn-sm"],[4,"ngIf","ngIfElse"],["loadedContent",""],[1,"py-3"],["noError",""],[3,"errorMessage"],["nodata",""],[1,"table-responsive"],[1,"table","table-bordered","table-striped"],[1,"thead"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end"],[1,"my-pagination",3,"pageChange"],[1,"cursor-pointer",3,"routerLink"],[1,"text-capitalize"],[1,"edit-btn",3,"routerLink"],[3,"dataLabel"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),e._uU(4,"Invoices"),e.qZA()(),e.ynx(5),e.TgZ(6,"app-search-tab",4),e.NdJ("searchEmit",function(m){return o.searchFunction(m)}),e.qZA(),e.BQk(),e.TgZ(7,"div")(8,"button",5),e._uU(9," Add Invoice"),e.qZA()()(),e.YNc(10,p,3,0,"ng-container",6),e.YNc(11,S,3,2,"ng-template",null,7,e.W1O),e.qZA()),2&t){const l=e.MAs(12);e.xp6(6),e.Q6J("searchlabel","Search Invoice")("searchOptions",o.options),e.xp6(4),e.Q6J("ngIf",o.loading)("ngIfElse",l)}},dependencies:[i.sg,i.O5,A.S,b.i,U.A,y.O,u.LS,d.rH,i.uU,u._s]}),n})();var k=a(583);function L(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",23),e._UZ(2,"app-error-occured",24),e.qZA(),e.BQk()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("errorMessage",t.errorMessage)}}function P(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"button",25),e._uU(2," Print Invoice "),e.qZA(),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.MGl("routerLink","/accounts/invoices/view/",t.invoiceId,"")}}function Y(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"ng-option",29),e._uU(2),e.qZA(),e.BQk()),2&n){const t=r.$implicit;e.xp6(1),e.Q6J("value",t._id),e.xp6(1),e.AsE(" ",t.firstName," ",t.lastName," ")}}function w(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"ng-select",26)(2,"ng-option",27),e._uU(3,"Search Customer"),e.qZA(),e.YNc(4,Y,3,3,"ng-container",28),e.qZA(),e.BQk()),2&n){const t=e.oxw();e.xp6(4),e.Q6J("ngForOf",t.clients.results)}}function B(n,r){1&n&&(e.TgZ(0,"div",30),e._uU(1," Customer is required. "),e.qZA())}function K(n,r){1&n&&(e.TgZ(0,"div",30),e._uU(1," Date is required. "),e.qZA())}function j(n,r){1&n&&(e.TgZ(0,"div",30),e._uU(1," Date is required. "),e.qZA())}function G(n,r){1&n&&(e.TgZ(0,"div",30),e._uU(1," Description is required. "),e.qZA())}function R(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",35)(1,"div",36)(2,"div",2)(3,"div",3)(4,"h4",37),e._uU(5),e.qZA()(),e.TgZ(6,"div")(7,"button",38),e.NdJ("click",function(){const m=e.CHM(t).index,_=e.oxw(2);return e.KtG(_.deleteService(m))}),e._uU(8,"Remove"),e.qZA()()(),e.TgZ(9,"div",39)(10,"div",8)(11,"div",9)(12,"div",6)(13,"label",40),e._uU(14,"Name"),e.qZA(),e._UZ(15,"input",41),e.qZA()(),e.TgZ(16,"div",9)(17,"div",6)(18,"label",42),e._uU(19,"Price"),e.qZA(),e._UZ(20,"input",43),e.qZA()()()()()()}if(2&n){const t=r.index,o=e.oxw(2);e.xp6(5),e.hij("Service ",t+1,""),e.xp6(2),e.Q6J("disabled",o.invoiceId),e.xp6(2),e.Q6J("formGroupName",t),e.xp6(6),e.Q6J("readOnly",o.invoiceId),e.xp6(5),e.Q6J("readOnly",o.invoiceId)}}function V(n,r){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",31),e.YNc(2,R,21,5,"div",32),e.TgZ(3,"div",33)(4,"button",34),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.addService())}),e._uU(5,"Add Service"),e.qZA()()(),e.BQk()}if(2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.serviceArr.controls),e.xp6(2),e.Q6J("disabled",t.invoiceId)}}function W(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",35)(1,"div",36)(2,"div",2)(3,"div",3)(4,"h4",37),e._uU(5),e.qZA()(),e.TgZ(6,"div")(7,"button",38),e.NdJ("click",function(){const m=e.CHM(t).index,_=e.oxw(2);return e.KtG(_.deleteProduct(m))}),e._uU(8,"Remove"),e.qZA()()(),e.TgZ(9,"div",39)(10,"div",8)(11,"div",45)(12,"div",6)(13,"label",40),e._uU(14,"Name"),e.qZA(),e._UZ(15,"input",46),e.qZA()(),e.TgZ(16,"div",45)(17,"div",6)(18,"label",42),e._uU(19,"Unit Price"),e.qZA(),e._UZ(20,"input",47),e.qZA()(),e.TgZ(21,"div",45)(22,"div",6)(23,"label",42),e._uU(24,"Number of ITems"),e.qZA(),e._UZ(25,"input",48),e.qZA()()()()()()}if(2&n){const t=r.index,o=e.oxw(2);e.xp6(5),e.hij("Product ",t+1,""),e.xp6(2),e.Q6J("disabled",o.invoiceId),e.xp6(2),e.Q6J("formGroupName",t),e.xp6(6),e.Q6J("readOnly",o.invoiceId),e.xp6(5),e.Q6J("readOnly",o.invoiceId),e.xp6(5),e.Q6J("readOnly",o.invoiceId)}}function H(n,r){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",44),e.YNc(2,W,26,6,"div",32),e.TgZ(3,"div",33)(4,"button",34),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.addProduct())}),e._uU(5,"Add Product"),e.qZA()()(),e.BQk()}if(2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.productsArr.controls),e.xp6(2),e.Q6J("disabled",t.invoiceId)}}function $(n,r){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",49),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.deleteInvoice())}),e._uU(2,"Delete Invoice"),e.qZA(),e.TgZ(3,"button",50),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.updateInvoice())}),e._uU(4,"Edit Invoice"),e.qZA(),e.BQk()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("disabled",t.invoiceForm.invalid),e.xp6(2),e.Q6J("disabled",t.invoiceForm.invalid)}}function z(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"button",51),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.addInvoice())}),e._uU(1,"Add Invoice"),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("disabled",t.invoiceForm.invalid)}}let O=(()=>{class n{constructor(t,o,l,m,_){this.formBuilder=t,this.router=o,this.invoiceService=l,this.clientService=m,this.route=_,this.title="Add Invoice",this.today=(new Date).toISOString().substring(0,10),this.submiting=!1,this.loading=!1,this.loadingclients=!1}ngOnInit(){this.loadClients({}),this.invoiceForm=this.formBuilder.group({customerid:["",c.kI.required],issueDate:[this.today,c.kI.required],dueDate:[this.today,c.kI.required],status:["pending"],type:["invoice"],description:[""],serviceorproduct:["service"],products:this.formBuilder.array([]),service:this.formBuilder.array([])}),this.invoiceId=this.route.snapshot.paramMap.get("id"),this.invoiceId?(this.title="Edit Invoice",this.getInvoice(this.invoiceId),this.invoiceForm.get("serviceorproduct")?.disable()):(this.addService(),this.invoiceForm.get("serviceorproduct")?.valueChanges.subscribe(t=>{"service"===t&&(this.addService(),this.productsArr.clear()),"product"===t&&(this.addProduct(),this.serviceArr.clear())}))}getInvoice(t){this.loading=!0,this.invoiceService.getInvoicelso(t).subscribe({next:o=>{const l=new Date(o.dueDate).toISOString().substring(0,10),m=new Date(o.issueDate).toISOString().substring(0,10);o.dueDate=l,o.issueDate=m,this.invoiceForm.patchValue(o),o.products.forEach(_=>{const T=this.formBuilder.group({name:[_.name,c.kI.required],noOfitems:[_.noOfitems,c.kI.required],unitprice:[_.unitprice,c.kI.required],_id:[_._id]});this.productsArr.push(T)}),o.service.forEach(_=>{const T=this.formBuilder.group({name:[_.name,c.kI.required],price:[_.price,c.kI.required],_id:[_._id]});this.serviceArr.push(T)})},error:o=>{this.errorMessage=o,this.loading=!1},complete:()=>{this.loading=!1}})}get productsArr(){return this.invoiceForm.get("products")}addProduct(){const t=this.formBuilder.group({name:["",c.kI.required],noOfitems:["",c.kI.required],unitprice:["",c.kI.required]});this.productsArr.push(t)}deleteProduct(t){this.productsArr.removeAt(t)}get serviceArr(){return this.invoiceForm.get("service")}addService(){const t=this.formBuilder.group({name:["",c.kI.required],price:["",c.kI.required]});this.serviceArr.push(t)}deleteService(t){this.serviceArr.removeAt(t)}addInvoice(){this.invoiceForm.valid&&(this.submiting=!0,this.invoiceService.createInvoicelso(this.invoiceForm.value).subscribe({next:o=>{this.invoiceForm.reset(),this.router.navigate(["/accounts/invoices"])},error:o=>{this.errorMessage=o,this.submiting=!1},complete:()=>{this.submiting=!1}}))}updateInvoice(){const t=this.invoiceForm.value;this.submiting=!0,this.invoiceService.updateInvoicelso(this.invoiceId,t).subscribe({next:o=>{this.router.navigate(["/accounts/invoices"])},error:o=>{this.errorMessage=o,this.submiting=!1},complete:()=>{this.submiting=!1}})}deleteInvoice(){this.submiting=!0,this.invoiceService.deleteInvoicelso(this.invoiceId).subscribe({next:t=>{this.router.navigate(["/accounts/invoices"])},error:t=>{this.errorMessage=t,this.submiting=!1},complete:()=>{this.submiting=!1}})}loadClients(t){this.loadingclients=!0,this.clientService.getAllClientSuppliers(1,100,t).subscribe({next:o=>{this.clients=o},error:o=>{this.errorMessage=o,this.loadingclients=!1},complete:()=>{this.loadingclients=!1}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c.qu),e.Y36(d.F0),e.Y36(h.v),e.Y36(k.y),e.Y36(d.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-add-edit-invoice"]],decls:47,vars:13,consts:[[4,"ngIf"],[1,"my-4",3,"formGroup"],[1,"d-flex"],[1,"flex-grow-1"],[1,"fw-normal"],["routerLink","/accounts/invoices",1,"btn","btn-outline-secondary","btn-sm"],[1,"mb-3"],["class","invalid-feedback",4,"ngIf"],[1,"row"],[1,"col-lg-6"],["for","issueDate",1,"form-label"],["type","date","id","issueDate","formControlName","issueDate",1,"form-control"],["for","title",1,"form-label"],["type","date","id","title","formControlName","dueDate",1,"form-control"],["for","description",1,"form-label"],["id","description","formControlName","description","placeholder","Enter Description",1,"form-control"],[1,"form-check","form-check-inline"],["type","radio","formControlName","serviceorproduct","id","inlineRadio1","value","service",1,"form-check-input"],["for","inlineRadio1",1,"form-check-label"],["type","radio","formControlName","serviceorproduct","id","inlineRadio2","value","product",1,"form-check-input"],["for","inlineRadio2",1,"form-check-label"],[4,"ngIf","ngIfElse"],["adding",""],[1,"py-3"],[3,"errorMessage"],[1,"btn","btn-outline-success","btn-sm","ms-2",3,"routerLink"],["formControlName","customerid"],["value","","disabled",""],[4,"ngFor","ngForOf"],[3,"value"],[1,"invalid-feedback"],["formArrayName","service"],["class","card my-3",4,"ngFor","ngForOf"],[1,"text-end"],["type","button",1,"btn","btn-success","btn-sm","mt-3",3,"disabled","click"],[1,"card","my-3"],[1,"card-body"],[1,"card-title"],[1,"btn","btn-danger","btn-sm",3,"disabled","click"],[3,"formGroupName"],["for","titl",1,"form-label"],["type","text","id","titl","formControlName","name","placeholder","Enter Service Provided",1,"form-control",3,"readOnly"],["for","pric",1,"form-label"],["type","number","id","pric","formControlName","price","placeholder","Enter Price",1,"form-control",3,"readOnly"],["formArrayName","products"],[1,"col-lg-4"],["type","text","id","titl","formControlName","name","placeholder","Enter Product Name",1,"form-control",3,"readOnly"],["type","number","id","pric","formControlName","unitprice","placeholder","Enter Unit Price",1,"form-control",3,"readOnly"],["type","number","id","pric","formControlName","noOfitems","placeholder","Enter Number of Items",1,"form-control",3,"readOnly"],["type","submit",1,"btn","btn-danger","btn-sm","me-2",3,"disabled","click"],["type","submit",1,"btn","btn-primary","btn-sm",3,"disabled","click"],["type","submit",1,"btn","btn-success","btn-sm",3,"disabled","click"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,L,3,1,"ng-container",0),e.TgZ(2,"form",1)(3,"div",2)(4,"div",3)(5,"h2",4),e._uU(6),e.qZA()(),e.TgZ(7,"div")(8,"button",5),e._uU(9," List Invoices"),e.qZA(),e.YNc(10,P,3,1,"ng-container",0),e.qZA()(),e.TgZ(11,"div",6)(12,"div"),e.YNc(13,w,5,1,"ng-container",0),e.qZA(),e.YNc(14,B,2,0,"div",7),e.qZA(),e.TgZ(15,"div",8)(16,"div",9)(17,"div",6)(18,"label",10),e._uU(19,"Issue Date"),e.qZA(),e._UZ(20,"input",11),e.YNc(21,K,2,0,"div",7),e.qZA()(),e.TgZ(22,"div",9)(23,"div",6)(24,"label",12),e._uU(25,"Due Date"),e.qZA(),e._UZ(26,"input",13),e.YNc(27,j,2,0,"div",7),e.qZA()()(),e.TgZ(28,"div",6)(29,"label",14),e._uU(30,"Description"),e.qZA(),e._UZ(31,"textarea",15),e.YNc(32,G,2,0,"div",7),e.qZA(),e.TgZ(33,"div",6)(34,"div",16),e._UZ(35,"input",17),e.TgZ(36,"label",18),e._uU(37,"Service"),e.qZA()(),e.TgZ(38,"div",16),e._UZ(39,"input",19),e.TgZ(40,"label",20),e._uU(41,"Products"),e.qZA()()(),e.YNc(42,V,6,2,"ng-container",0),e.YNc(43,H,6,2,"ng-container",0),e.YNc(44,$,5,2,"ng-container",21),e.YNc(45,z,2,1,"ng-template",null,22,e.W1O),e.qZA()()),2&t){const l=e.MAs(46);let m,_,T,q,E,N;e.xp6(1),e.Q6J("ngIf",o.errorMessage),e.xp6(1),e.Q6J("formGroup",o.invoiceForm),e.xp6(4),e.Oqu(o.title),e.xp6(4),e.Q6J("ngIf",o.invoiceId),e.xp6(3),e.Q6J("ngIf",o.clients&&o.clients.results.length),e.xp6(1),e.Q6J("ngIf",(null==(m=o.invoiceForm.get("customerid"))?null:m.invalid)&&(null==(m=o.invoiceForm.get("customerid"))?null:m.touched)),e.xp6(7),e.Q6J("ngIf",(null==(_=o.invoiceForm.get("issueDate"))?null:_.invalid)&&(null==(_=o.invoiceForm.get("issueDate"))?null:_.touched)),e.xp6(6),e.Q6J("ngIf",(null==(T=o.invoiceForm.get("dueDate"))?null:T.invalid)&&(null==(T=o.invoiceForm.get("dueDate"))?null:T.touched)),e.xp6(5),e.Q6J("ngIf",(null==(q=o.invoiceForm.get("description"))?null:q.invalid)&&(null==(q=o.invoiceForm.get("description"))?null:q.touched)),e.xp6(10),e.Q6J("ngIf","service"===(null==(E=o.invoiceForm.get("serviceorproduct"))?null:E.value)),e.xp6(1),e.Q6J("ngIf","product"===(null==(N=o.invoiceForm.get("serviceorproduct"))?null:N.value)),e.xp6(1),e.Q6J("ngIf",o.invoiceId)("ngIfElse",l)}},dependencies:[i.sg,i.O5,c._Y,c.Fj,c.wV,c._,c.JJ,c.JL,c.sg,c.u,c.x0,c.CE,U.A,g.w9,g.jq,d.rH]}),n})();var X=a(7556);function ee(n,r){1&n&&(e.ynx(0),e.TgZ(1,"div",8),e._UZ(2,"app-sul-loader"),e.qZA(),e.BQk())}function te(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",8),e._UZ(2,"app-error-occured",10),e.qZA(),e.BQk()),2&n){const t=e.oxw(2);e.xp6(2),e.Q6J("errorMessage",t.errorMessage)}}function ne(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"tr")(2,"td"),e._uU(3),e.qZA(),e.TgZ(4,"td",36),e._uU(5),e.qZA(),e.TgZ(6,"td",35),e._uU(7),e.ALo(8,"currency"),e.qZA()(),e.BQk()),2&n){const t=r.$implicit,o=r.index;e.xp6(3),e.Oqu(o+1),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(e.xi3(8,3,t.price,"Ksh. "))}}function ie(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",32)(2,"table",33)(3,"thead",34)(4,"tr")(5,"th"),e._uU(6,"#"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"DESCRIPTION"),e.qZA(),e.TgZ(9,"th",35),e._uU(10,"AMOUNT"),e.qZA()()(),e.TgZ(11,"tbody"),e.YNc(12,ne,9,6,"ng-container",26),e.qZA()()(),e.BQk()),2&n){const t=e.oxw(4);e.xp6(12),e.Q6J("ngForOf",t.detailInvoice.service)}}function oe(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"tr")(2,"td"),e._uU(3),e.qZA(),e.TgZ(4,"td",36),e._uU(5),e.qZA(),e.TgZ(6,"td",35),e._uU(7),e.qZA(),e.TgZ(8,"td",35),e._uU(9),e.ALo(10,"currency"),e.qZA(),e.TgZ(11,"td",35),e._uU(12),e.ALo(13,"currency"),e.qZA()(),e.BQk()),2&n){const t=r.$implicit,o=r.index;e.xp6(3),e.Oqu(o+1),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.noOfitems),e.xp6(2),e.Oqu(e.xi3(10,5,t.unitprice,"Ksh. ")),e.xp6(3),e.hij(" ",e.xi3(13,8,t.noOfitems*t.unitprice,"Ksh. ")," ")}}function re(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",32)(2,"table",33)(3,"thead",34)(4,"tr")(5,"th"),e._uU(6,"#"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"DESCRIPTION"),e.qZA(),e.TgZ(9,"th",35),e._uU(10,"QTY"),e.qZA(),e.TgZ(11,"th",35),e._uU(12,"UNIT PRICE"),e.qZA(),e.TgZ(13,"th",35),e._uU(14,"TOTAL"),e.qZA()()(),e.TgZ(15,"tbody"),e.YNc(16,oe,14,11,"ng-container",26),e.qZA()()(),e.BQk()),2&n){const t=e.oxw(4);e.xp6(16),e.Q6J("ngForOf",t.detailInvoice.products)}}function ce(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",37)(2,"div",28),e._uU(3),e.qZA(),e.TgZ(4,"div",29),e._uU(5),e.ALo(6,"currency"),e.qZA()(),e.BQk()),2&n){const t=r.$implicit;e.xp6(3),e.hij("",t.name,": "),e.xp6(2),e.Oqu(e.xi3(6,2,t.ammount,"Ksh. "))}}function se(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",12)(2,"div",13)(3,"div",14)(4,"h2",15),e._uU(5,"Invoice"),e.qZA()(),e.TgZ(6,"div",16)(7,"div"),e._uU(8),e.qZA(),e.TgZ(9,"div"),e._uU(10),e.qZA(),e.TgZ(11,"div"),e._uU(12),e.qZA(),e.TgZ(13,"div",17),e._uU(14),e.qZA(),e.TgZ(15,"div"),e._uU(16),e.qZA()()()(),e.TgZ(17,"div",18)(18,"div",19),e._uU(19," Bill To: "),e.qZA(),e.TgZ(20,"div",20)(21,"div",14)(22,"div"),e._uU(23),e.qZA(),e.TgZ(24,"div"),e._uU(25),e.qZA(),e.TgZ(26,"div"),e._uU(27),e.qZA(),e.TgZ(28,"div",17),e._uU(29),e.qZA(),e.TgZ(30,"div"),e._uU(31),e.qZA()(),e.TgZ(32,"div",14)(33,"div",1)(34,"div",21)(35,"div"),e._uU(36,"Invoice #:"),e.qZA(),e.TgZ(37,"div"),e._uU(38,"Issued Date:"),e.qZA(),e.TgZ(39,"div"),e._uU(40,"Due Date:"),e.qZA()(),e.TgZ(41,"div",22)(42,"div"),e._uU(43),e.qZA(),e.TgZ(44,"div"),e._uU(45),e.ALo(46,"date"),e.qZA(),e.TgZ(47,"div"),e._uU(48),e.ALo(49,"date"),e.qZA()()()()()(),e.YNc(50,ie,13,1,"ng-container",23),e.YNc(51,re,17,1,"ng-container",23),e.TgZ(52,"div",24)(53,"div",25),e.YNc(54,ce,7,5,"ng-container",26),e.TgZ(55,"div",27)(56,"div",28),e._uU(57,"TOTAL: "),e.qZA(),e.TgZ(58,"div",29),e._uU(59),e.ALo(60,"currency"),e.qZA()()()(),e.TgZ(61,"div",0)(62,"div",20)(63,"div",14)(64,"div",30),e._uU(65,"Client"),e.qZA(),e.TgZ(66,"div"),e._uU(67),e.qZA(),e.TgZ(68,"div",31),e._uU(69," ........................................... "),e.qZA(),e.TgZ(70,"div"),e._uU(71),e.ALo(72,"date"),e.qZA()(),e.TgZ(73,"div",16)(74,"div",30),e._uU(75,"Issuer"),e.qZA(),e.TgZ(76,"div"),e._uU(77),e.qZA(),e.TgZ(78,"div",31),e._uU(79," ........................................... "),e.qZA(),e.TgZ(80,"div"),e._uU(81),e.ALo(82,"date"),e.qZA()()()(),e.BQk()),2&n){const t=e.oxw(3);e.xp6(8),e.hij(" ",t.currentUser.company.name," "),e.xp6(2),e.AsE(" ",t.currentUser.company.address.state,", ",t.currentUser.company.address.country," "),e.xp6(2),e.hij(" Zip Code: ",t.currentUser.company.address.zipCode," "),e.xp6(2),e.hij(" ",t.currentUser.company.phoneNumber," "),e.xp6(2),e.hij(" ",t.currentUser.company.email," "),e.xp6(7),e.lnq(" ",t.detailInvoice.customerid.firstName," ",t.detailInvoice.customerid.lastName," - ",t.detailInvoice.customerid.companyName," "),e.xp6(2),e.AsE(" ",t.detailInvoice.customerid.address.state,", ",t.detailInvoice.customerid.address.country," "),e.xp6(2),e.hij(" Zip Code: ",t.detailInvoice.customerid.address.zipCode," "),e.xp6(2),e.hij(" ",t.detailInvoice.customerid.phoneNumber," "),e.xp6(2),e.hij(" ",t.detailInvoice.customerid.email," "),e.xp6(12),e.Oqu(t.detailInvoice.uniqueNumber),e.xp6(2),e.Oqu(e.lcZ(46,27,t.detailInvoice.issueDate)),e.xp6(3),e.Oqu(e.lcZ(49,29,t.detailInvoice.dueDate)),e.xp6(2),e.Q6J("ngIf",t.detailInvoice.service&&t.detailInvoice.service.length),e.xp6(1),e.Q6J("ngIf",t.detailInvoice.products&&t.detailInvoice.products.length),e.xp6(3),e.Q6J("ngForOf",t.operatingCost),e.xp6(5),e.Oqu(e.xi3(60,31,t.totalamount,"Ksh. ")),e.xp6(8),e.AsE(" ",t.detailInvoice.customerid.firstName," ",t.detailInvoice.customerid.lastName," "),e.xp6(4),e.hij(" ",e.lcZ(72,34,t.today)," "),e.xp6(6),e.AsE(" ",t.currentUser.firstName," ",t.currentUser.lastName," "),e.xp6(4),e.hij(" ",e.lcZ(82,36,t.today)," ")}}function ae(n,r){1&n&&e._UZ(0,"app-no-data-found",38),2&n&&e.Q6J("dataLabel","Invoice")}function le(n,r){if(1&n&&(e.YNc(0,se,83,38,"ng-container",6),e.YNc(1,ae,1,1,"ng-template",null,11,e.W1O)),2&n){const t=e.MAs(2),o=e.oxw(2);e.Q6J("ngIf",o.detailInvoice)("ngIfElse",t)}}function de(n,r){if(1&n&&(e.YNc(0,te,3,1,"ng-container",6),e.YNc(1,le,3,2,"ng-template",null,9,e.W1O)),2&n){const t=e.MAs(2),o=e.oxw();e.Q6J("ngIf",o.errorMessage)("ngIfElse",t)}}const ue=[{path:"",component:M},{path:"add",component:O},{path:"edit/:id",component:O},{path:"view/:id",component:(()=>{class n{constructor(t,o,l){this.invoiceService=t,this.authService=o,this.route=l,this.loading=!1,this.totalamount=0,this.today=new Date,this.operatingCost=[{name:"SUBTOTAL",ammount:0,incrme:!0},{name:"DISCOUNT",ammount:0,incrme:!1},{name:"TOTAL TAX",ammount:0,incrme:!0}]}ngOnInit(){this.invoiceId=this.route.snapshot.paramMap.get("id"),this.invoiceId&&this.getInvoice(this.invoiceId),this.getCurrentUser()}getCurrentUser(){this.currentUser=JSON.parse(this.authService.getUseriInfo())}getInvoice(t){this.loading=!0,this.invoiceService.getInvoicelsoprint(t).subscribe({next:o=>{this.detailInvoice=o,this.detailInvoice.products.length&&(this.totalamount=this.prdtotal(this.detailInvoice.products)),this.detailInvoice.service.length&&(this.totalamount=this.servtotal(this.detailInvoice.service))},error:o=>{this.errorMessage=o,this.loading=!1},complete:()=>{this.loading=!1}})}prdtotal(t){let o=0;for(let l=0;l<t.length;l++){const m=t[l];o+=m.noOfitems*m.unitprice}return o}servtotal(t){let o=0;for(let l=0;l<t.length;l++)o+=t[l].price;return o}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.v),e.Y36(X.e),e.Y36(d.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-details-invoice"]],decls:13,vars:3,consts:[[1,"py-4"],[1,"d-flex"],[1,"flex-grow-1"],["routerLink","/accounts/invoices",1,"btn","btn-outline-primary","btn-sm"],[1,"btn","btn-outline-success","btn-sm","ms-2"],[1,"btn","btn-outline-warning","btn-sm","ms-2",3,"routerLink"],[4,"ngIf","ngIfElse"],["loadedContent",""],[1,"py-3"],["noError",""],[3,"errorMessage"],["nodata",""],[1,"py-4","mt-2"],[1,"d-flex","align-items-center"],[1,"col-6"],[1,"detailsheader"],[1,"col-6","text-end"],[1,"mt-1"],[1,"my-4"],[1,"pb-1","text-secondary"],[1,"row"],[1,"flex-grow-1","text-end","text-dark"],[1,"text-end","ps-2"],[4,"ngIf"],[1,"row","justify-content-end"],[1,"col-lg-4","col-sm-8"],[4,"ngFor","ngForOf"],[1,"d-flex","operatingCost","fw-bold","mb-1","mt-2"],[1,"flex-grow-1","text-end"],[1,"ps-4","pe-2","text-end"],[1,""],[1,"pt-2"],[1,"table-responsive"],[1,"table","table-bordered"],[1,"bg-light"],[1,"text-end"],[1,"text-capitalize"],[1,"d-flex","operatingCost","mb-1"],[3,"dataLabel"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"div",2),e.TgZ(3,"div")(4,"button",3),e._uU(5," List Invoices"),e.qZA(),e.TgZ(6,"button",4),e._uU(7," Print Invoice"),e.qZA(),e.TgZ(8,"button",5),e._uU(9," Edit Invoice "),e.qZA()()(),e.YNc(10,ee,3,0,"ng-container",6),e.YNc(11,de,3,2,"ng-template",null,7,e.W1O),e.qZA()),2&t){const l=e.MAs(12);e.xp6(8),e.MGl("routerLink","/accounts/invoices/edit/",o.invoiceId,""),e.xp6(2),e.Q6J("ngIf",o.loading)("ngIfElse",l)}},dependencies:[i.sg,i.O5,A.S,b.i,U.A,d.rH,i.H9,i.uU],styles:[".operatingCost[_ngcontent-%COMP%]{font-size:.86rem!important}"]}),n})()},{path:"**",redirectTo:"",pathMatch:"full"}];let pe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[i.ez,c.u5,c.UX,x.C,u.JX,g.A0,d.Bz.forChild(ue)]}),n})()},8057:(C,Z,a)=>{a.d(Z,{A:()=>d});var i=a(4650);let d=(()=>{class c{ngOnInit(){this.errorMessage?.error?.message&&(this.errormes=this.errorMessage.error.message)}}return c.\u0275fac=function(u){return new(u||c)},c.\u0275cmp=i.Xpm({type:c,selectors:[["app-error-occured"]],inputs:{errorMessage:"errorMessage"},decls:4,vars:1,consts:[[1,"py-2"],["role","alert",1,"alert","alert-danger"],[1,"d-flex","align-items-center"]],template:function(u,x){1&u&&(i.TgZ(0,"div",0)(1,"div",1)(2,"div",2),i._uU(3),i.qZA()()()),2&u&&(i.xp6(3),i.hij(" ",x.errormes?x.errormes:x.errorMessage.message," "))}}),c})()},5511:(C,Z,a)=>{a.d(Z,{i:()=>d});var i=a(4650);let d=(()=>{class c{}return c.\u0275fac=function(u){return new(u||c)},c.\u0275cmp=i.Xpm({type:c,selectors:[["app-no-data-found"]],inputs:{dataLabel:"dataLabel"},decls:4,vars:1,consts:[[1,"py-2"],["role","alert",1,"alert","alert-info"],[1,"d-flex","align-items-center"]],template:function(u,x){1&u&&(i.TgZ(0,"div",0)(1,"div",1)(2,"div",2),i._uU(3),i.qZA()()()),2&u&&(i.xp6(3),i.hij(" No ",x.dataLabel," record found with the given filter parameters "))}}),c})()},295:(C,Z,a)=>{a.d(Z,{O:()=>y});var i=a(4650),d=a(4006),c=a(6895),g=a(7392);function u(p,f){if(1&p&&i._UZ(0,"input",11),2&p){const s=i.oxw(2);i.Q6J("type",s.inputype)("placeholder",s.searchlabel)}}function x(p,f){if(1&p&&(i.ynx(0),i.TgZ(1,"option",13),i._uU(2),i.qZA(),i.BQk()),2&p){const s=f.$implicit;i.xp6(1),i.Q6J("value",s.val),i.xp6(1),i.Oqu(s.name)}}function e(p,f){if(1&p&&(i.TgZ(0,"select",12),i.YNc(1,x,3,2,"ng-container",8),i.qZA()),2&p){const s=i.oxw(2);i.xp6(1),i.Q6J("ngForOf",s.selectoptions)}}function h(p,f){if(1&p&&(i.ynx(0),i.TgZ(1,"option",13),i._uU(2),i.qZA(),i.BQk()),2&p){const s=f.$implicit;i.xp6(1),i.Q6J("value",s.formname),i.xp6(1),i.Oqu(s.name)}}function A(p,f){if(1&p){const s=i.EpF();i.TgZ(0,"mat-icon",14),i.NdJ("click",function(){i.CHM(s);const I=i.oxw(2);return i.KtG(I.submitForm())}),i._uU(1,"manage_search"),i.qZA()}}function b(p,f){if(1&p){const s=i.EpF();i.TgZ(0,"mat-icon",15),i.NdJ("click",function(){i.CHM(s);const I=i.oxw(2);return i.KtG(I.resetSearch())}),i._uU(1,"close"),i.qZA()}}function U(p,f){if(1&p){const s=i.EpF();i.TgZ(0,"form",2)(1,"div",3),i.YNc(2,u,1,2,"input",4),i.YNc(3,e,2,1,"select",5),i.TgZ(4,"select",6),i.NdJ("change",function(){i.CHM(s);const I=i.oxw();return i.KtG(I.paramChange())}),i.TgZ(5,"option",7),i._uU(6,"Select Parameter"),i.qZA(),i.YNc(7,h,3,2,"ng-container",8),i.qZA(),i.YNc(8,A,2,0,"mat-icon",9),i.YNc(9,b,2,0,"mat-icon",10),i.qZA()()}if(2&p){const s=i.oxw();i.Q6J("formGroup",s.searchForm),i.xp6(2),i.Q6J("ngIf",!s.dispselect),i.xp6(1),i.Q6J("ngIf",s.dispselect&&s.selectoptions.length),i.xp6(2),i.Q6J("value",""),i.xp6(2),i.Q6J("ngForOf",s.searchOptions),i.xp6(1),i.Q6J("ngIf",s.searchForm.valid),i.xp6(1),i.Q6J("ngIf",s.searched)}}let y=(()=>{class p{constructor(s){this.searchFb=s,this.searchlabel="",this.searchOptions=[],this.searchEmit=new i.vpe,this.selectoptions=[],this.dispselect=!1,this.inputype="text",this.searched=!1,this.searchForm=this.searchFb.group({searchValue:["",d.kI.required],searchParam:["",d.kI.required]})}ngOnInit(){this.searchOptions.length&&this.searchForm.controls.searchParam.setValue(this.searchOptions[0].formname)}paramChange(){this.dispselect=!1;const s=this.searchForm.get("searchParam")?.value;this.searchForm.controls.searchValue.setValue("");const v=this.searchOptions.find(I=>I.formname===s);v?.selectoptions&&v?.selectoptions.length?(this.dispselect=!0,this.selectoptions=v.selectoptions,this.searchForm.controls.searchValue.setValue(this.selectoptions[0].val)):this.inputype=v?.type}submitForm(){if(this.searchForm.valid){const{searchParam:s,searchValue:v}=this.searchForm.value,I={};s&&(I[s]=v,this.searched=!0,this.searchEmit.emit(I))}}resetSearch(){this.searched=!1,this.dispselect=!1,this.searchForm.controls.searchValue.setValue(""),this.searchForm.controls.searchParam.setValue(""),this.searchEmit.emit({})}}return p.\u0275fac=function(s){return new(s||p)(i.Y36(d.qu))},p.\u0275cmp=i.Xpm({type:p,selectors:[["app-search-tab"]],inputs:{searchlabel:"searchlabel",searchOptions:"searchOptions"},outputs:{searchEmit:"searchEmit"},decls:2,vars:1,consts:[[1,"mb-2","me-2","d-none","d-lg-block"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],[1,"d-md-flex","align-items-center"],["class","form-control form-select-sm me-2  my-search","formControlName","searchValue",3,"type","placeholder",4,"ngIf"],["class","form-select  form-select-sm text-secondary my-search me-2","formControlName","searchValue",4,"ngIf"],["formControlName","searchParam",1,"form-select","form-select-sm","text-secondary","my-search","me-2",3,"change"],["disabled","",3,"value"],[4,"ngFor","ngForOf"],["class","m-0 text-primary",3,"click",4,"ngIf"],["class","m-0 text-danger",3,"click",4,"ngIf"],["formControlName","searchValue",1,"form-control","form-select-sm","me-2","my-search",3,"type","placeholder"],["formControlName","searchValue",1,"form-select","form-select-sm","text-secondary","my-search","me-2"],[3,"value"],[1,"m-0","text-primary",3,"click"],[1,"m-0","text-danger",3,"click"]],template:function(s,v){1&s&&(i.TgZ(0,"div",0),i.YNc(1,U,10,7,"form",1),i.qZA()),2&s&&(i.xp6(1),i.Q6J("ngIf",v.searchOptions&&v.searchOptions.length))},dependencies:[c.sg,c.O5,d._Y,d.YN,d.Kr,d.Fj,d.EJ,d.JJ,d.JL,g.Hw,d.sg,d.u],styles:["select[_ngcontent-%COMP%]{border-color:#0d6efd}.my-search[_ngcontent-%COMP%]{width:180px}"]}),p})()},7997:(C,Z,a)=>{a.d(Z,{S:()=>d});var i=a(4650);let d=(()=>{class c{}return c.\u0275fac=function(u){return new(u||c)},c.\u0275cmp=i.Xpm({type:c,selectors:[["app-sul-loader"]],decls:8,vars:0,consts:[[1,"py-2"],["role","alert",1,"alert","alert-warning"],[1,"d-flex","align-items-center"],["role","status",1,"spinner-border","spinner-border-sm"],[1,"visually-hidden"],[1,"blinks"]],template:function(u,x){1&u&&(i.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4),i._uU(5,"Loading..."),i.qZA()(),i.TgZ(6,"span",5),i._uU(7," \xa0 Loading ... "),i.qZA()()()())}}),c})()},583:(C,Z,a)=>{a.d(Z,{y:()=>g});var i=a(2340),d=a(4650),c=a(529);let g=(()=>{class u{constructor(e){this.http=e,this.apiUrl=`${i.N.apiUrl}clientsupplier`}createClientSupplier(e){return this.http.post(this.apiUrl,e)}getClientSupplier(e){return this.http.get(`${this.apiUrl}/${e}`)}updateClientSupplier(e,h){return this.http.put(`${this.apiUrl}/${e}`,h)}deleteClientSupplier(e){return this.http.delete(`${this.apiUrl}/${e}`)}getAllClientSuppliers(e,h,A){const b={currentPage:e,pageSize:h,...A};return this.http.get(this.apiUrl,{params:b})}}return u.\u0275fac=function(e){return new(e||u)(d.LFG(c.eN))},u.\u0275prov=d.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);