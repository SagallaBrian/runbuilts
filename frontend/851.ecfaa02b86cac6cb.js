"use strict";(self.webpackChunksuluhi_admin_frontend=self.webpackChunksuluhi_admin_frontend||[]).push([[851],{5851:(b,Z,p)=>{p.r(Z),p.d(Z,{ReceiptsModule:()=>Fe});var o=p(6895),u=p(8869),a=p(4006),g=p(8796),_=p(4333),x=p(1213),e=p(4650),I=p(2340),N=p(529);let T=(()=>{class i{constructor(t){this.http=t,this.apiUrl=`${I.N.apiUrl}payments`}createPayment(t){return this.http.post(this.apiUrl,t)}getPayment(t){return this.http.get(`${this.apiUrl}/${t}`)}getPaymentPrint(t){return this.http.get(`${this.apiUrl}/print/${t}`)}updatePayment(t,n){return this.http.put(`${this.apiUrl}/${t}`,n)}deletePayment(t){return this.http.delete(`${this.apiUrl}/${t}`)}getAllPayments(t,n,c){const l={currentPage:t,pageSize:n,...c};return this.http.get(this.apiUrl,{params:l})}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(N.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var C=p(7997),y=p(5511),d=p(8057),f=p(295);function s(i,r){1&i&&(e.ynx(0),e.TgZ(1,"div",8),e._UZ(2,"app-sul-loader"),e.qZA(),e.BQk())}function h(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"div",8),e._UZ(2,"app-error-occured",10),e.qZA(),e.BQk()),2&i){const t=e.oxw(2);e.xp6(2),e.Q6J("errorMessage",t.errorMessage)}}const v=function(i){return["view",i]},Q=function(i){return["edit",i]};function J(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"tr",18)(2,"td"),e._uU(3),e.qZA(),e.TgZ(4,"td"),e._uU(5),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.ALo(8,"date"),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td",19),e._uU(12),e.qZA(),e.TgZ(13,"td")(14,"button",20),e._uU(15,"Edit"),e.qZA()()(),e.BQk()),2&i){const t=r.$implicit,n=r.index;e.xp6(1),e.Q6J("routerLink",e.VKq(9,v,t._id)),e.xp6(2),e.Oqu(n+1),e.xp6(2),e.Oqu(t.uniqueNumber),e.xp6(2),e.Oqu(e.lcZ(8,7,t.paymentdate)),e.xp6(3),e.Oqu(t.transactioncode),e.xp6(2),e.Oqu(t.modeofpay),e.xp6(2),e.Q6J("routerLink",e.VKq(11,Q,t._id))}}const k=function(i,r,t){return{itemsPerPage:i,currentPage:r,totalItems:t}};function P(i,r){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",12)(2,"table",13)(3,"thead",14)(4,"tr")(5,"th"),e._uU(6,"#"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Receipt No"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Payment Date"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Transaction Code"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Mode of Pay"),e.qZA(),e._UZ(15,"th"),e.qZA()(),e.TgZ(16,"tbody"),e.YNc(17,J,16,13,"ng-container",15),e.ALo(18,"paginate"),e.qZA()()(),e.TgZ(19,"div",16)(20,"pagination-controls",17),e.NdJ("pageChange",function(c){e.CHM(t);const l=e.oxw(3);return e.KtG(l.onPageChange(c))}),e.qZA()(),e.BQk()}if(2&i){const t=e.oxw(3);e.xp6(17),e.Q6J("ngForOf",e.xi3(18,1,t.receipts.results,e.kEZ(4,k,t.receipts.pageSize,t.currentPage,t.receipts.totalItems)))}}function S(i,r){1&i&&e._UZ(0,"app-no-data-found",21),2&i&&e.Q6J("dataLabel","Receipt")}function M(i,r){if(1&i&&(e.YNc(0,P,21,8,"ng-container",6),e.YNc(1,S,1,1,"ng-template",null,11,e.W1O)),2&i){const t=e.MAs(2),n=e.oxw(2);e.Q6J("ngIf",n.receipts&&n.receipts.results.length)("ngIfElse",t)}}function Y(i,r){if(1&i&&(e.YNc(0,h,3,1,"ng-container",6),e.YNc(1,M,3,2,"ng-template",null,9,e.W1O)),2&i){const t=e.MAs(2),n=e.oxw();e.Q6J("ngIf",n.errorMessage)("ngIfElse",t)}}let L=(()=>{class i{constructor(t){this.receiptService=t,this.loading=!0,this.currentPage=1,this.pageSize=10,this.options=[{name:"Customer Title",formname:"title",type:"text"},{name:"Status",formname:"loanstatus",type:"select",selectoptions:[{val:"pending",name:"Pending"},{val:"approved",name:"Approved"},{val:"rejected",name:"Rejected"}]}]}ngOnInit(){this.loadInvoices({})}loadInvoices(t){this.loading=!0,this.receiptService.getAllPayments(this.currentPage,this.pageSize,t).subscribe({next:n=>{this.receipts=n},error:n=>{this.errorMessage=n,this.loading=!1},complete:()=>{this.loading=!1}})}searchFunction(t){this.loadInvoices(t)}onPageChange(t){this.currentPage=t,this.loadInvoices({})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(T))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-list-receipts"]],decls:13,vars:4,consts:[[1,"py-4"],[1,"d-flex"],[1,"flex-grow-1"],[1,"text-secondary","fw-normal","mb-1"],[3,"searchlabel","searchOptions","searchEmit"],["routerLink","/accounts/receipts/add",1,"btn","btn-outline-primary","btn-sm"],[4,"ngIf","ngIfElse"],["loadedContent",""],[1,"py-3"],["noError",""],[3,"errorMessage"],["nodata",""],[1,"table-responsive"],[1,"table","table-bordered","table-striped","text-nowrap"],[1,"thead"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end","pt-3"],[1,"my-pagination",3,"pageChange"],[1,"cursor-pointer",3,"routerLink"],[1,"text-capitalize"],[1,"edit-btn",3,"routerLink"],[3,"dataLabel"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),e._uU(4,"Receipts (Income)"),e.qZA()(),e.ynx(5),e.TgZ(6,"app-search-tab",4),e.NdJ("searchEmit",function(l){return n.searchFunction(l)}),e.qZA(),e.BQk(),e.TgZ(7,"div")(8,"button",5),e._uU(9," Add Receipt"),e.qZA()()(),e.YNc(10,s,3,0,"ng-container",6),e.YNc(11,Y,3,2,"ng-template",null,7,e.W1O),e.qZA()),2&t){const c=e.MAs(12);e.xp6(6),e.Q6J("searchlabel","Search Invoice")("searchOptions",n.options),e.xp6(4),e.Q6J("ngIf",n.loading)("ngIfElse",c)}},dependencies:[o.sg,o.O5,C.S,y.i,d.A,f.O,_.LS,u.rH,o.uU,_._s]}),i})();var w=p(583),D=p(8364);function B(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"div",35),e._UZ(2,"app-error-occured",36),e.qZA(),e.BQk()),2&i){const t=e.oxw();e.xp6(2),e.Q6J("errorMessage",t.errorMessage)}}function j(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"button",37),e._uU(2," Print Receipt "),e.qZA(),e.BQk()),2&i){const t=e.oxw();e.xp6(1),e.MGl("routerLink","/accounts/receipts/view/",t.receiptId,"")}}function K(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"ng-option",41),e._uU(2),e.qZA(),e.BQk()),2&i){const t=r.$implicit;e.xp6(1),e.Q6J("value",t._id),e.xp6(1),e.AsE(" ",t.firstName," ",t.lastName," ")}}function G(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"ng-select",38)(2,"ng-option",39),e._uU(3,"Search Customer"),e.qZA(),e.YNc(4,K,3,3,"ng-container",40),e.qZA(),e.BQk()),2&i){const t=e.oxw(2);e.xp6(4),e.Q6J("ngForOf",t.clients.results)}}function V(i,r){1&i&&(e.TgZ(0,"div",42),e._uU(1," Customer is required. "),e.qZA())}function H(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"div",6)(2,"div"),e.YNc(3,G,5,1,"ng-container",0),e.qZA(),e.YNc(4,V,2,0,"div",18),e.qZA(),e.BQk()),2&i){const t=e.oxw();let n;e.xp6(3),e.Q6J("ngIf",t.clients&&t.clients.results.length),e.xp6(1),e.Q6J("ngIf",(null==(n=t.receiptForm.get("customerid"))?null:n.invalid)&&(null==(n=t.receiptForm.get("customerid"))?null:n.touched))}}function $(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"ng-option",41),e._uU(2),e.qZA(),e.BQk()),2&i){const t=r.$implicit;e.xp6(1),e.Q6J("value",t._id),e.xp6(1),e.hij(" ",t.uniqueNumber," ")}}function W(i,r){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"ng-select",43),e.NdJ("change",function(){e.CHM(t);const c=e.oxw(2);return e.KtG(c.onSelectInvoice())}),e.TgZ(2,"ng-option",39),e._uU(3,"Search Invoice"),e.qZA(),e.YNc(4,$,3,2,"ng-container",40),e.qZA(),e.BQk()}if(2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("readonly",t.receiptId),e.xp6(3),e.Q6J("ngForOf",t.invoices.results)}}function z(i,r){1&i&&(e.TgZ(0,"div",42),e._uU(1," Invoice required. "),e.qZA())}function X(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"div",6)(2,"div"),e.YNc(3,W,5,2,"ng-container",0),e.qZA(),e.YNc(4,z,2,0,"div",18),e.qZA(),e.BQk()),2&i){const t=e.oxw();let n;e.xp6(3),e.Q6J("ngIf",t.invoices&&t.invoices.results.length),e.xp6(1),e.Q6J("ngIf",(null==(n=t.receiptForm.get("invoicelsoid"))?null:n.invalid)&&(null==(n=t.receiptForm.get("invoicelsoid"))?null:n.touched))}}function ee(i,r){1&i&&(e.TgZ(0,"div",42),e._uU(1," Recipient is required. "),e.qZA())}function te(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"div",6),e._UZ(2,"input",44),e.YNc(3,ee,2,0,"div",18),e.qZA(),e.BQk()),2&i){const t=e.oxw();let n;e.xp6(3),e.Q6J("ngIf",(null==(n=t.receiptForm.get("recipient"))?null:n.invalid)&&(null==(n=t.receiptForm.get("recipient"))?null:n.touched))}}function ie(i,r){1&i&&(e.TgZ(0,"div",42),e._uU(1," Payment Date is required. "),e.qZA())}function ne(i,r){1&i&&(e.TgZ(0,"div",42),e._uU(1," Transaction code is required. "),e.qZA())}function oe(i,r){1&i&&(e.TgZ(0,"div",42),e._uU(1," Description is required. "),e.qZA())}function re(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",49)(1,"div",50)(2,"div",2)(3,"div",3)(4,"h4",51),e._uU(5),e.qZA()(),e.TgZ(6,"div")(7,"button",52),e.NdJ("click",function(){const l=e.CHM(t).index,m=e.oxw(2);return e.KtG(m.deleteService(l))}),e._uU(8,"Remove"),e.qZA()()(),e.TgZ(9,"div",53)(10,"div",14)(11,"div",15)(12,"div",6)(13,"label",54),e._uU(14,"Name"),e.qZA(),e._UZ(15,"input",55),e.qZA()(),e.TgZ(16,"div",15)(17,"div",6)(18,"label",56),e._uU(19,"Price"),e.qZA(),e._UZ(20,"input",57),e.qZA()()()()()()}if(2&i){const t=r.index,n=e.oxw(2);let c,l,m;e.xp6(5),e.hij("Service ",t+1,""),e.xp6(2),e.Q6J("disabled","invoice"===(null==(c=n.receiptForm.get("customeorinvoice"))?null:c.value)),e.xp6(2),e.Q6J("formGroupName",t),e.xp6(6),e.Q6J("readOnly","invoice"===(null==(l=n.receiptForm.get("customeorinvoice"))?null:l.value)),e.xp6(5),e.Q6J("readOnly","invoice"===(null==(m=n.receiptForm.get("customeorinvoice"))?null:m.value))}}function ce(i,r){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",45),e.YNc(2,re,21,5,"div",46),e.TgZ(3,"div",47)(4,"button",48),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.addService())}),e._uU(5,"Add Service"),e.qZA()()(),e.BQk()}if(2&i){const t=e.oxw();let n;e.xp6(2),e.Q6J("ngForOf",t.serviceArr.controls),e.xp6(2),e.Q6J("disabled","invoice"===(null==(n=t.receiptForm.get("customeorinvoice"))?null:n.value))}}function ae(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",49)(1,"div",50)(2,"div",2)(3,"div",3)(4,"h4",51),e._uU(5),e.qZA()(),e.TgZ(6,"div")(7,"button",52),e.NdJ("click",function(){const l=e.CHM(t).index,m=e.oxw(2);return e.KtG(m.deleteProduct(l))}),e._uU(8,"Remove"),e.qZA()()(),e.TgZ(9,"div",53)(10,"div",14)(11,"div",59)(12,"div",6)(13,"label",54),e._uU(14,"Name"),e.qZA(),e._UZ(15,"input",60),e.qZA()(),e.TgZ(16,"div",59)(17,"div",6)(18,"label",56),e._uU(19,"Unit Price"),e.qZA(),e._UZ(20,"input",61),e.qZA()(),e.TgZ(21,"div",59)(22,"div",6)(23,"label",56),e._uU(24,"Number of ITems"),e.qZA(),e._UZ(25,"input",62),e.qZA()()()()()()}if(2&i){const t=r.index,n=e.oxw(2);let c,l,m,A;e.xp6(5),e.hij("Product ",t+1,""),e.xp6(2),e.Q6J("disabled","invoice"===(null==(c=n.receiptForm.get("customeorinvoice"))?null:c.value)),e.xp6(2),e.Q6J("formGroupName",t),e.xp6(6),e.Q6J("readOnly","invoice"===(null==(l=n.receiptForm.get("customeorinvoice"))?null:l.value)),e.xp6(5),e.Q6J("readOnly","invoice"===(null==(m=n.receiptForm.get("customeorinvoice"))?null:m.value)),e.xp6(5),e.Q6J("readOnly","invoice"===(null==(A=n.receiptForm.get("customeorinvoice"))?null:A.value))}}function se(i,r){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",58),e.YNc(2,ae,26,6,"div",46),e.TgZ(3,"div",47)(4,"button",48),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.addProduct())}),e._uU(5,"Add Product"),e.qZA()()(),e.BQk()}if(2&i){const t=e.oxw();let n;e.xp6(2),e.Q6J("ngForOf",t.productsArr.controls),e.xp6(2),e.Q6J("disabled","invoice"===(null==(n=t.receiptForm.get("customeorinvoice"))?null:n.value))}}function le(i,r){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",63),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.deleteReceipt())}),e._uU(2,"Delete Receipt"),e.qZA(),e.TgZ(3,"button",64),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.updateReceipt())}),e._uU(4,"Edit Receipt"),e.qZA(),e.BQk()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("disabled",t.receiptForm.invalid),e.xp6(2),e.Q6J("disabled",t.receiptForm.invalid)}}function pe(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"button",65),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.addReceipt())}),e._uU(1,"Add Receipt"),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("disabled",t.receiptForm.invalid)}}let F=(()=>{class i{constructor(t,n,c,l,m,A){this.formBuilder=t,this.router=n,this.receiptService=c,this.clientService=l,this.invoiceService=m,this.route=A,this.title="Add Receipt",this.today=(new Date).toISOString().substring(0,10),this.submiting=!1,this.loading=!1,this.loadingclients=!1,this.loadinginvoice=!1}ngOnInit(){this.loadClients({}),this.loadInvoices({}),this.receiptForm=this.formBuilder.group({customerid:[""],invoicelsoid:[""],recipient:[""],modeofpay:["mpesa",a.kI.required],typeofpay:["receipt"],transactioncode:[""],paymentdate:[this.today],description:[""],customeorinvoice:["customer"],serviceorproduct:["service"],products:this.formBuilder.array([]),service:this.formBuilder.array([])}),this.receiptId=this.route.snapshot.paramMap.get("id"),this.receiptId?(this.title="Edit Receipt",this.getInvoice(this.receiptId),this.receiptForm.get("serviceorproduct")?.disable(),this.receiptForm.get("customeorinvoice")?.disable()):this.addService()}checkIfprdServ(){const t=this.receiptForm.get("serviceorproduct")?.value;this.serviceArr.clear(),this.productsArr.clear(),"service"===t&&this.addService(),"product"===t&&this.addProduct()}checkIfnvc(){const t=this.receiptForm.get("customeorinvoice")?.value;this.serviceArr.clear(),this.productsArr.clear(),"customer"===t?(this.receiptForm.removeControl("invoicelsoid"),this.receiptForm.removeControl("recipient"),this.receiptForm.addControl("customerid",this.formBuilder.control("",a.kI.required)),this.receiptForm.get("serviceorproduct")?.enable()):"invoice"===t?(this.receiptForm.removeControl("customerid"),this.receiptForm.removeControl("recipient"),this.receiptForm.addControl("invoicelsoid",this.formBuilder.control("",a.kI.required)),this.receiptForm.get("serviceorproduct")?.disable()):"recipient"===t&&(this.receiptForm.removeControl("customerid"),this.receiptForm.removeControl("invoicelsoid"),this.receiptForm.addControl("recipient",this.formBuilder.control("",a.kI.required)),this.receiptForm.get("serviceorproduct")?.enable())}getInvoice(t){this.loading=!0,this.receiptService.getPayment(t).subscribe({next:n=>{const c=new Date(n.paymentdate).toISOString().substring(0,10);n.paymentdate=c,this.receiptForm.patchValue(n),n.products.forEach(l=>{const m=this.formBuilder.group({name:[l.name,a.kI.required],noOfitems:[l.noOfitems,a.kI.required],unitprice:[l.unitprice,a.kI.required],_id:[l._id]});this.productsArr.push(m)}),n.service.forEach(l=>{const m=this.formBuilder.group({name:[l.name,a.kI.required],price:[l.price,a.kI.required],_id:[l._id]});this.serviceArr.push(m)})},error:n=>{this.errorMessage=n,this.loading=!1},complete:()=>{this.loading=!1}})}get productsArr(){return this.receiptForm.get("products")}addProduct(){const t=this.formBuilder.group({name:["",a.kI.required],noOfitems:["",a.kI.required],unitprice:["",a.kI.required]});this.productsArr.push(t)}deleteProduct(t){this.productsArr.removeAt(t)}get serviceArr(){return this.receiptForm.get("service")}addService(){const t=this.formBuilder.group({name:["",a.kI.required],price:["",a.kI.required]});this.serviceArr.push(t)}deleteService(t){this.serviceArr.removeAt(t)}addReceipt(){if(this.receiptForm.valid){this.submiting=!0;const t=this.receiptForm.value;t.serviceorproduct=this.receiptForm.get("serviceorproduct")?.value,""===t.customerid&&delete t.customerid,""===t.invoicelsoid&&delete t.invoicelsoid,this.receiptService.createPayment(t).subscribe({next:n=>{this.receiptForm.reset(),this.router.navigate(["/accounts/receipts"])},error:n=>{this.errorMessage=n,this.submiting=!1},complete:()=>{this.submiting=!1}})}}updateReceipt(){const t=this.receiptForm.value;t.serviceorproduct=this.receiptForm.get("serviceorproduct")?.value,""===t.customerid&&delete t.customerid,""===t.invoicelsoid&&delete t.invoicelsoid,this.submiting=!0,this.receiptService.updatePayment(this.receiptId,t).subscribe({next:n=>{this.router.navigate(["/accounts/receipts"])},error:n=>{this.errorMessage=n,this.submiting=!1},complete:()=>{this.submiting=!1}})}deleteReceipt(){this.submiting=!0,this.receiptService.deletePayment(this.receiptId).subscribe({next:t=>{this.router.navigate(["/accounts/receipts"])},error:t=>{this.errorMessage=t,this.submiting=!1},complete:()=>{this.submiting=!1}})}loadClients(t){this.loadingclients=!0,this.clientService.getAllClientSuppliers(1,100,t).subscribe({next:n=>{this.clients=n},error:n=>{this.errorMessage=n,this.loadingclients=!1},complete:()=>{this.loadingclients=!1}})}loadInvoices(t){this.loadinginvoice=!0,this.invoiceService.getAllInvoicelsos(1,100,t).subscribe({next:n=>{this.invoices=n},error:n=>{this.errorMessage=n,this.loadinginvoice=!1},complete:()=>{this.loadinginvoice=!1}})}onSelectInvoice(){this.serviceArr.clear(),this.productsArr.clear();const t=this.receiptForm.get("invoicelsoid")?.value,n=this.invoices.results.find(c=>c._id===t);n&&n.serviceorproduct&&(this.receiptForm.get("serviceorproduct")?.setValue(n.serviceorproduct),n.products.forEach(c=>{const l=this.formBuilder.group({name:[c.name,a.kI.required],noOfitems:[c.noOfitems,a.kI.required],unitprice:[c.unitprice,a.kI.required],_id:[c._id]});this.productsArr.push(l)}),n.service.forEach(c=>{const l=this.formBuilder.group({name:[c.name,a.kI.required],price:[c.price,a.kI.required],_id:[c._id]});this.serviceArr.push(l)}))}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(a.qu),e.Y36(u.F0),e.Y36(T),e.Y36(w.y),e.Y36(D.v),e.Y36(u.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-add-edit-receipt"]],decls:73,vars:14,consts:[[4,"ngIf"],[1,"my-4",3,"formGroup"],[1,"d-flex"],[1,"flex-grow-1"],[1,"fw-normal"],["routerLink","/accounts/receipts",1,"btn","btn-outline-secondary","btn-sm"],[1,"mb-3"],[1,"form-check","form-check-inline"],["type","radio","formControlName","customeorinvoice","id","inlineRadio3","value","customer",1,"form-check-input",3,"change"],["for","inlineRadio3",1,"form-check-label"],["type","radio","formControlName","customeorinvoice","id","inlineRadio4","value","invoice",1,"form-check-input",3,"change"],["for","inlineRadio4",1,"form-check-label"],["type","radio","formControlName","customeorinvoice","id","inlineRadio5","value","recipient",1,"form-check-input",3,"change"],["for","inlineRadio5",1,"form-check-label"],[1,"row"],[1,"col-lg-6"],["for","title",1,"form-label"],["type","date","id","title","formControlName","paymentdate",1,"form-control"],["class","invalid-feedback",4,"ngIf"],["type","text","id","title","formControlName","transactioncode","placeholder","Enter Transaction code",1,"form-control"],["for","projectlink",1,"form-label"],["aria-label","Default select example","formControlName","modeofpay",1,"form-select"],["value","mpesa"],["value","cash"],["value","bank_deposit"],["value","cheque"],["value","paypal"],["for","description",1,"form-label"],["id","description","formControlName","description","placeholder","Enter Description",1,"form-control"],["type","radio","formControlName","serviceorproduct","id","inlineRadio1","value","service",1,"form-check-input",3,"change"],["for","inlineRadio1",1,"form-check-label"],["type","radio","formControlName","serviceorproduct","id","inlineRadio2","value","product",1,"form-check-input",3,"change"],["for","inlineRadio2",1,"form-check-label"],[4,"ngIf","ngIfElse"],["adding",""],[1,"py-3"],[3,"errorMessage"],[1,"btn","btn-outline-success","btn-sm","ms-2",3,"routerLink"],["formControlName","customerid"],["value","","disabled",""],[4,"ngFor","ngForOf"],[3,"value"],[1,"invalid-feedback"],["formControlName","invoicelsoid",3,"readonly","change"],["type","text","id","title","formControlName","recipient","placeholder","Enter Recipient",1,"form-control"],["formArrayName","service"],["class","card my-3",4,"ngFor","ngForOf"],[1,"text-end"],["type","button",1,"btn","btn-success","btn-sm","mt-3",3,"disabled","click"],[1,"card","my-3"],[1,"card-body"],[1,"card-title"],[1,"btn","btn-danger","btn-sm",3,"disabled","click"],[3,"formGroupName"],["for","titl",1,"form-label"],["type","text","id","titl","formControlName","name","placeholder","Enter Service Provided",1,"form-control",3,"readOnly"],["for","pric",1,"form-label"],["type","number","id","pric","formControlName","price","placeholder","Enter Price",1,"form-control",3,"readOnly"],["formArrayName","products"],[1,"col-lg-4"],["type","text","id","titl","formControlName","name","placeholder","Enter Product Name",1,"form-control",3,"readOnly"],["type","number","id","pric","formControlName","unitprice","placeholder","Enter Unit Price",1,"form-control",3,"readOnly"],["type","number","id","pric","formControlName","noOfitems","placeholder","Enter Number of Items",1,"form-control",3,"readOnly"],["type","submit",1,"btn","btn-danger","btn-sm","me-2",3,"disabled","click"],["type","submit",1,"btn","btn-primary","btn-sm",3,"disabled","click"],["type","submit",1,"btn","btn-success","btn-sm",3,"disabled","click"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,B,3,1,"ng-container",0),e.TgZ(2,"form",1)(3,"div",2)(4,"div",3)(5,"h2",4),e._uU(6),e.qZA()(),e.TgZ(7,"div")(8,"button",5),e._uU(9," List Receipts"),e.qZA(),e.YNc(10,j,3,1,"ng-container",0),e.qZA()(),e.TgZ(11,"div",6)(12,"div",7)(13,"input",8),e.NdJ("change",function(){return n.checkIfnvc()}),e.qZA(),e.TgZ(14,"label",9),e._uU(15,"Customer"),e.qZA()(),e.TgZ(16,"div",7)(17,"input",10),e.NdJ("change",function(){return n.checkIfnvc()}),e.qZA(),e.TgZ(18,"label",11),e._uU(19,"Invoice"),e.qZA()(),e.TgZ(20,"div",7)(21,"input",12),e.NdJ("change",function(){return n.checkIfnvc()}),e.qZA(),e.TgZ(22,"label",13),e._uU(23,"Direct Recipient"),e.qZA()()(),e.YNc(24,H,5,2,"ng-container",0),e.YNc(25,X,5,2,"ng-container",0),e.YNc(26,te,4,1,"ng-container",0),e.TgZ(27,"div",14)(28,"div",15)(29,"div",6)(30,"label",16),e._uU(31,"Payment Date "),e.qZA(),e._UZ(32,"input",17),e.YNc(33,ie,2,0,"div",18),e.qZA()(),e.TgZ(34,"div",15)(35,"div",6)(36,"label",16),e._uU(37,"Transaction Code "),e.qZA(),e._UZ(38,"input",19),e.YNc(39,ne,2,0,"div",18),e.qZA()()(),e.TgZ(40,"div",6)(41,"label",20),e._uU(42,"Mode Of Payment"),e.qZA(),e.TgZ(43,"select",21)(44,"option",22),e._uU(45,"Mpesa"),e.qZA(),e.TgZ(46,"option",23),e._uU(47,"Cash"),e.qZA(),e.TgZ(48,"option",24),e._uU(49,"Bank Deposit"),e.qZA(),e.TgZ(50,"option",25),e._uU(51,"Cheque"),e.qZA(),e.TgZ(52,"option",26),e._uU(53,"Paypal and Others"),e.qZA()()(),e.TgZ(54,"div",6)(55,"label",27),e._uU(56,"Description"),e.qZA(),e._UZ(57,"textarea",28),e.YNc(58,oe,2,0,"div",18),e.qZA(),e.TgZ(59,"div",6)(60,"div",7)(61,"input",29),e.NdJ("change",function(){return n.checkIfprdServ()}),e.qZA(),e.TgZ(62,"label",30),e._uU(63,"Service"),e.qZA()(),e.TgZ(64,"div",7)(65,"input",31),e.NdJ("change",function(){return n.checkIfprdServ()}),e.qZA(),e.TgZ(66,"label",32),e._uU(67,"Products"),e.qZA()()(),e.YNc(68,ce,6,2,"ng-container",0),e.YNc(69,se,6,2,"ng-container",0),e.YNc(70,le,5,2,"ng-container",33),e.YNc(71,pe,2,1,"ng-template",null,34,e.W1O),e.qZA()()),2&t){const c=e.MAs(72);let l,m,A,q,U,R,E,O;e.xp6(1),e.Q6J("ngIf",n.errorMessage),e.xp6(1),e.Q6J("formGroup",n.receiptForm),e.xp6(4),e.Oqu(n.title),e.xp6(4),e.Q6J("ngIf",n.receiptId),e.xp6(14),e.Q6J("ngIf","customer"===(null==(l=n.receiptForm.get("customeorinvoice"))?null:l.value)),e.xp6(1),e.Q6J("ngIf","invoice"===(null==(m=n.receiptForm.get("customeorinvoice"))?null:m.value)),e.xp6(1),e.Q6J("ngIf","recipient"===(null==(A=n.receiptForm.get("customeorinvoice"))?null:A.value)),e.xp6(7),e.Q6J("ngIf",(null==(q=n.receiptForm.get("paymentdate"))?null:q.invalid)&&(null==(q=n.receiptForm.get("paymentdate"))?null:q.touched)),e.xp6(6),e.Q6J("ngIf",(null==(U=n.receiptForm.get("transactioncode"))?null:U.invalid)&&(null==(U=n.receiptForm.get("transactioncode"))?null:U.touched)),e.xp6(19),e.Q6J("ngIf",(null==(R=n.receiptForm.get("description"))?null:R.invalid)&&(null==(R=n.receiptForm.get("description"))?null:R.touched)),e.xp6(10),e.Q6J("ngIf","service"===(null==(E=n.receiptForm.get("serviceorproduct"))?null:E.value)),e.xp6(1),e.Q6J("ngIf","product"===(null==(O=n.receiptForm.get("serviceorproduct"))?null:O.value)),e.xp6(1),e.Q6J("ngIf",n.receiptId)("ngIfElse",c)}},dependencies:[o.sg,o.O5,a._Y,a.YN,a.Kr,a.Fj,a.wV,a.EJ,a._,a.JJ,a.JL,a.sg,a.u,a.x0,a.CE,d.A,g.w9,g.jq,u.rH]}),i})();var de=p(7556);function ue(i,r){1&i&&(e.ynx(0),e.TgZ(1,"div",8),e._UZ(2,"app-sul-loader"),e.qZA(),e.BQk())}function me(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"div",8),e._UZ(2,"app-error-occured",10),e.qZA(),e.BQk()),2&i){const t=e.oxw(2);e.xp6(2),e.Q6J("errorMessage",t.errorMessage)}}function _e(i,r){if(1&i&&(e.ynx(0),e._uU(1),e.BQk()),2&i){const t=e.oxw(5);e.xp6(1),e.hij(" - ",t.detailReceipt.customerid.companyName," ")}}function ge(i,r){if(1&i&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&i){const t=e.oxw(5);e.xp6(1),e.AsE(" ",t.detailReceipt.customerid.address.state,", ",t.detailReceipt.customerid.address.country," ")}}function he(i,r){if(1&i&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&i){const t=e.oxw(5);e.xp6(1),e.hij(" ",t.detailReceipt.customerid.email," ")}}function fe(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"div"),e._uU(2),e.YNc(3,_e,2,1,"ng-container",21),e.qZA(),e.YNc(4,ge,2,2,"div",21),e.TgZ(5,"div",17),e._uU(6),e.qZA(),e.YNc(7,he,2,1,"div",21),e.BQk()),2&i){const t=e.oxw(4);e.xp6(2),e.AsE(" ",t.detailReceipt.customerid.firstName," ",t.detailReceipt.customerid.lastName," "),e.xp6(1),e.Q6J("ngIf",t.detailReceipt.customerid.companyName),e.xp6(1),e.Q6J("ngIf",t.detailReceipt.customerid.address.country),e.xp6(2),e.hij(" ",t.detailReceipt.customerid.phoneNumber," "),e.xp6(1),e.Q6J("ngIf",t.detailReceipt.customerid.email)}}function ve(i,r){if(1&i&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&i){const t=e.oxw(4);e.xp6(1),e.hij(" ",t.detailReceipt.recipient," ")}}function Ze(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"tr")(2,"td"),e._uU(3),e.qZA(),e.TgZ(4,"td",24),e._uU(5),e.qZA(),e.TgZ(6,"td",37),e._uU(7),e.ALo(8,"currency"),e.qZA()(),e.BQk()),2&i){const t=r.$implicit,n=r.index;e.xp6(3),e.Oqu(n+1),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(e.xi3(8,3,t.price,"Ksh. "))}}function xe(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"div",34)(2,"table",35)(3,"thead",36)(4,"tr")(5,"th"),e._uU(6,"#"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"DESCRIPTION"),e.qZA(),e.TgZ(9,"th",37),e._uU(10,"AMOUNT"),e.qZA()()(),e.TgZ(11,"tbody"),e.YNc(12,Ze,9,6,"ng-container",27),e.qZA()()(),e.BQk()),2&i){const t=e.oxw(4);e.xp6(12),e.Q6J("ngForOf",t.detailReceipt.service)}}function Ae(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"tr")(2,"td"),e._uU(3),e.qZA(),e.TgZ(4,"td",24),e._uU(5),e.qZA(),e.TgZ(6,"td",37),e._uU(7),e.qZA(),e.TgZ(8,"td",37),e._uU(9),e.ALo(10,"currency"),e.qZA(),e.TgZ(11,"td",37),e._uU(12),e.ALo(13,"currency"),e.qZA()(),e.BQk()),2&i){const t=r.$implicit,n=r.index;e.xp6(3),e.Oqu(n+1),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.noOfitems),e.xp6(2),e.Oqu(e.xi3(10,5,t.unitprice,"Ksh. ")),e.xp6(3),e.hij(" ",e.xi3(13,8,t.noOfitems*t.unitprice,"Ksh. ")," ")}}function Te(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"div",34)(2,"table",35)(3,"thead",36)(4,"tr")(5,"th"),e._uU(6,"#"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"DESCRIPTION"),e.qZA(),e.TgZ(9,"th",37),e._uU(10,"QTY"),e.qZA(),e.TgZ(11,"th",37),e._uU(12,"UNIT PRICE"),e.qZA(),e.TgZ(13,"th",37),e._uU(14,"TOTAL"),e.qZA()()(),e.TgZ(15,"tbody"),e.YNc(16,Ae,14,11,"ng-container",27),e.qZA()()(),e.BQk()),2&i){const t=e.oxw(4);e.xp6(16),e.Q6J("ngForOf",t.detailReceipt.products)}}function be(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"div",38)(2,"div",29),e._uU(3),e.qZA(),e.TgZ(4,"div",30),e._uU(5),e.ALo(6,"currency"),e.qZA()(),e.BQk()),2&i){const t=r.$implicit;e.xp6(3),e.hij("",t.name,": "),e.xp6(2),e.Oqu(e.xi3(6,2,t.ammount,"Ksh. "))}}function Ce(i,r){if(1&i&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&i){const t=e.oxw(4);e.xp6(1),e.AsE(" ",t.detailReceipt.customerid.firstName," ",t.detailReceipt.customerid.lastName," ")}}function ye(i,r){if(1&i&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&i){const t=e.oxw(4);e.xp6(1),e.hij(" ",t.detailReceipt.recipient," ")}}function qe(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"div",12)(2,"div",13)(3,"div",14)(4,"h2",15),e._uU(5,"Receipt"),e.qZA()(),e.TgZ(6,"div",16)(7,"div"),e._uU(8),e.qZA(),e.TgZ(9,"div"),e._uU(10),e.qZA(),e.TgZ(11,"div",17),e._uU(12),e.qZA(),e.TgZ(13,"div"),e._uU(14),e.qZA()()()(),e.TgZ(15,"div",18)(16,"div",19),e._uU(17," Received From: "),e.qZA(),e.TgZ(18,"div",20)(19,"div",14),e.YNc(20,fe,8,6,"ng-container",21),e.YNc(21,ve,2,1,"div",21),e.qZA(),e.TgZ(22,"div",14)(23,"div",1)(24,"div",22)(25,"div"),e._uU(26,"Receipt #:"),e.qZA(),e.TgZ(27,"div"),e._uU(28,"Transaction Code:"),e.qZA(),e.TgZ(29,"div"),e._uU(30,"Payment Date:"),e.qZA(),e.TgZ(31,"div"),e._uU(32,"Mode Of Payment:"),e.qZA()(),e.TgZ(33,"div",23)(34,"div"),e._uU(35),e.qZA(),e.TgZ(36,"div"),e._uU(37),e.qZA(),e.TgZ(38,"div"),e._uU(39),e.ALo(40,"date"),e.qZA(),e.TgZ(41,"div",24),e._uU(42),e.qZA()()()()()(),e.YNc(43,xe,13,1,"ng-container",21),e.YNc(44,Te,17,1,"ng-container",21),e.TgZ(45,"div",25)(46,"div",26),e.YNc(47,be,7,5,"ng-container",27),e.TgZ(48,"div",28)(49,"div",29),e._uU(50,"TOTAL: "),e.qZA(),e.TgZ(51,"div",30),e._uU(52),e.ALo(53,"currency"),e.qZA()()()(),e.TgZ(54,"div",0)(55,"div",20)(56,"div",14)(57,"div",31),e._uU(58,"Client"),e.qZA(),e.YNc(59,Ce,2,2,"div",21),e.YNc(60,ye,2,1,"div",21),e.TgZ(61,"div",32),e._uU(62," ........................................... "),e.qZA(),e.TgZ(63,"div"),e._uU(64),e.ALo(65,"date"),e.qZA()(),e.TgZ(66,"div",16)(67,"div",31),e._uU(68,"Issuer"),e.qZA(),e.TgZ(69,"div"),e._uU(70),e.qZA(),e.TgZ(71,"div",32),e._uU(72," ........................................... "),e.qZA(),e.TgZ(73,"div"),e._uU(74),e.ALo(75,"date"),e.qZA()()()(),e.TgZ(76,"div",0)(77,"div",33),e._uU(78,"Terms"),e.qZA(),e.TgZ(79,"div"),e._uU(80," The Payments can not be reversed once received "),e.qZA()(),e.BQk()),2&i){const t=e.oxw(3);e.xp6(8),e.hij(" ",t.currentUser.company.name," "),e.xp6(2),e.AsE(" ",t.currentUser.company.address.state,", ",t.currentUser.company.address.country," "),e.xp6(2),e.hij(" ",t.currentUser.company.phoneNumber," "),e.xp6(2),e.hij(" ",t.currentUser.company.email," "),e.xp6(6),e.Q6J("ngIf",null==t.detailReceipt?null:t.detailReceipt.customerid),e.xp6(1),e.Q6J("ngIf",t.detailReceipt.recipient),e.xp6(14),e.hij("",t.detailReceipt.uniqueNumber,"\xa0"),e.xp6(2),e.hij("",t.detailReceipt.transactioncode,"\xa0"),e.xp6(2),e.hij("",e.lcZ(40,21,t.detailReceipt.paymentdate),"\xa0"),e.xp6(3),e.hij("",t.detailReceipt.modeofpay,"\xa0"),e.xp6(1),e.Q6J("ngIf",t.detailReceipt.service&&t.detailReceipt.service.length),e.xp6(1),e.Q6J("ngIf",t.detailReceipt.products&&t.detailReceipt.products.length),e.xp6(3),e.Q6J("ngForOf",t.operatingCost),e.xp6(5),e.Oqu(e.xi3(53,23,t.totalamount,"Ksh. ")),e.xp6(7),e.Q6J("ngIf",t.detailReceipt.customerid),e.xp6(1),e.Q6J("ngIf",t.detailReceipt.recipient),e.xp6(4),e.hij(" ",e.lcZ(65,26,t.today)," "),e.xp6(6),e.AsE(" ",t.currentUser.firstName," ",t.currentUser.lastName," "),e.xp6(4),e.hij(" ",e.lcZ(75,28,t.today)," ")}}function Ue(i,r){1&i&&e._UZ(0,"app-no-data-found",39),2&i&&e.Q6J("dataLabel","Invoice")}function Re(i,r){if(1&i&&(e.YNc(0,qe,81,30,"ng-container",6),e.YNc(1,Ue,1,1,"ng-template",null,11,e.W1O)),2&i){const t=e.MAs(2),n=e.oxw(2);e.Q6J("ngIf",n.detailReceipt)("ngIfElse",t)}}function Ie(i,r){if(1&i&&(e.YNc(0,me,3,1,"ng-container",6),e.YNc(1,Re,3,2,"ng-template",null,9,e.W1O)),2&i){const t=e.MAs(2),n=e.oxw();e.Q6J("ngIf",n.errorMessage)("ngIfElse",t)}}const Ne=[{path:"",component:L},{path:"add",component:F},{path:"edit/:id",component:F},{path:"view/:id",component:(()=>{class i{constructor(t,n,c){this.receiptService=t,this.route=n,this.authService=c,this.loading=!1,this.totalamount=0,this.today=new Date,this.operatingCost=[{name:"SUBTOTAL",ammount:0,incrme:!0},{name:"DISCOUNT",ammount:0,incrme:!1},{name:"TOTAL TAX",ammount:0,incrme:!0}]}ngOnInit(){this.receiptId=this.route.snapshot.paramMap.get("id"),this.receiptId&&this.getReceipt(this.receiptId),this.getCurrentUser()}getCurrentUser(){this.currentUser=JSON.parse(this.authService.getUseriInfo())}getReceipt(t){this.loading=!0,this.receiptService.getPaymentPrint(t).subscribe({next:n=>{this.detailReceipt=n,this.detailReceipt.products.length&&(this.totalamount=this.prdtotal(this.detailReceipt.products)),this.detailReceipt.service.length&&(this.totalamount=this.servtotal(this.detailReceipt.service))},error:n=>{this.errorMessage=n,this.loading=!1},complete:()=>{this.loading=!1}})}prdtotal(t){let n=0;for(let c=0;c<t.length;c++){const l=t[c];n+=l.noOfitems*l.unitprice}return n}servtotal(t){let n=0;for(let c=0;c<t.length;c++)n+=t[c].price;return n}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(T),e.Y36(u.gz),e.Y36(de.e))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-details-receipt"]],decls:13,vars:3,consts:[[1,"py-4"],[1,"d-flex"],[1,"flex-grow-1"],["routerLink","/accounts/receipts",1,"btn","btn-outline-primary","btn-sm"],[1,"btn","btn-outline-success","btn-sm","ms-2"],[1,"btn","btn-outline-warning","btn-sm","ms-2",3,"routerLink"],[4,"ngIf","ngIfElse"],["loadedContent",""],[1,"py-3"],["noError",""],[3,"errorMessage"],["nodata",""],[1,"py-4","mt-2"],[1,"d-flex","align-items-center"],[1,"col-6"],[1,"detailsheader"],[1,"col-6","text-end"],[1,"mt-1"],[1,"my-4"],[1,"pb-1","text-secondary"],[1,"row"],[4,"ngIf"],[1,"flex-grow-1","text-end","text-dark"],[1,"text-end","ps-2"],[1,"text-capitalize"],[1,"row","justify-content-end"],[1,"col-lg-4","col-sm-8"],[4,"ngFor","ngForOf"],[1,"d-flex","operatingCost","fw-bold","mb-1","mt-2"],[1,"flex-grow-1","text-end"],[1,"ps-4","pe-2","text-end"],[1,""],[1,"pt-2"],[1,"fw-bold"],[1,"table-responsive"],[1,"table","table-bordered"],[1,"bg-light"],[1,"text-end"],[1,"d-flex","operatingCost","mb-1"],[3,"dataLabel"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"div",2),e.TgZ(3,"div")(4,"button",3),e._uU(5," List Receipts"),e.qZA(),e.TgZ(6,"button",4),e._uU(7," Print Receipt"),e.qZA(),e.TgZ(8,"button",5),e._uU(9," Edit Receipt "),e.qZA()()(),e.YNc(10,ue,3,0,"ng-container",6),e.YNc(11,Ie,3,2,"ng-template",null,7,e.W1O),e.qZA()),2&t){const c=e.MAs(12);e.xp6(8),e.MGl("routerLink","/accounts/receipts/edit/",n.receiptId,""),e.xp6(2),e.Q6J("ngIf",n.loading)("ngIfElse",c)}},dependencies:[o.sg,o.O5,C.S,y.i,d.A,u.rH,o.H9,o.uU]}),i})()},{path:"**",redirectTo:"",pathMatch:"full"}];let Fe=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[o.ez,a.u5,a.UX,x.C,_.JX,g.A0,u.Bz.forChild(Ne)]}),i})()},8057:(b,Z,p)=>{p.d(Z,{A:()=>u});var o=p(4650);let u=(()=>{class a{ngOnInit(){this.errorMessage?.error?.message&&(this.errormes=this.errorMessage.error.message)}}return a.\u0275fac=function(_){return new(_||a)},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-error-occured"]],inputs:{errorMessage:"errorMessage"},decls:4,vars:1,consts:[[1,"py-2"],["role","alert",1,"alert","alert-danger"],[1,"d-flex","align-items-center"]],template:function(_,x){1&_&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2),o._uU(3),o.qZA()()()),2&_&&(o.xp6(3),o.hij(" ",x.errormes?x.errormes:x.errorMessage.message," "))}}),a})()},5511:(b,Z,p)=>{p.d(Z,{i:()=>u});var o=p(4650);let u=(()=>{class a{}return a.\u0275fac=function(_){return new(_||a)},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-no-data-found"]],inputs:{dataLabel:"dataLabel"},decls:4,vars:1,consts:[[1,"py-2"],["role","alert",1,"alert","alert-info"],[1,"d-flex","align-items-center"]],template:function(_,x){1&_&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2),o._uU(3),o.qZA()()()),2&_&&(o.xp6(3),o.hij(" No ",x.dataLabel," record found with the given filter parameters "))}}),a})()},295:(b,Z,p)=>{p.d(Z,{O:()=>y});var o=p(4650),u=p(4006),a=p(6895),g=p(7392);function _(d,f){if(1&d&&o._UZ(0,"input",11),2&d){const s=o.oxw(2);o.Q6J("type",s.inputype)("placeholder",s.searchlabel)}}function x(d,f){if(1&d&&(o.ynx(0),o.TgZ(1,"option",13),o._uU(2),o.qZA(),o.BQk()),2&d){const s=f.$implicit;o.xp6(1),o.Q6J("value",s.val),o.xp6(1),o.Oqu(s.name)}}function e(d,f){if(1&d&&(o.TgZ(0,"select",12),o.YNc(1,x,3,2,"ng-container",8),o.qZA()),2&d){const s=o.oxw(2);o.xp6(1),o.Q6J("ngForOf",s.selectoptions)}}function I(d,f){if(1&d&&(o.ynx(0),o.TgZ(1,"option",13),o._uU(2),o.qZA(),o.BQk()),2&d){const s=f.$implicit;o.xp6(1),o.Q6J("value",s.formname),o.xp6(1),o.Oqu(s.name)}}function N(d,f){if(1&d){const s=o.EpF();o.TgZ(0,"mat-icon",14),o.NdJ("click",function(){o.CHM(s);const v=o.oxw(2);return o.KtG(v.submitForm())}),o._uU(1,"manage_search"),o.qZA()}}function T(d,f){if(1&d){const s=o.EpF();o.TgZ(0,"mat-icon",15),o.NdJ("click",function(){o.CHM(s);const v=o.oxw(2);return o.KtG(v.resetSearch())}),o._uU(1,"close"),o.qZA()}}function C(d,f){if(1&d){const s=o.EpF();o.TgZ(0,"form",2)(1,"div",3),o.YNc(2,_,1,2,"input",4),o.YNc(3,e,2,1,"select",5),o.TgZ(4,"select",6),o.NdJ("change",function(){o.CHM(s);const v=o.oxw();return o.KtG(v.paramChange())}),o.TgZ(5,"option",7),o._uU(6,"Select Parameter"),o.qZA(),o.YNc(7,I,3,2,"ng-container",8),o.qZA(),o.YNc(8,N,2,0,"mat-icon",9),o.YNc(9,T,2,0,"mat-icon",10),o.qZA()()}if(2&d){const s=o.oxw();o.Q6J("formGroup",s.searchForm),o.xp6(2),o.Q6J("ngIf",!s.dispselect),o.xp6(1),o.Q6J("ngIf",s.dispselect&&s.selectoptions.length),o.xp6(2),o.Q6J("value",""),o.xp6(2),o.Q6J("ngForOf",s.searchOptions),o.xp6(1),o.Q6J("ngIf",s.searchForm.valid),o.xp6(1),o.Q6J("ngIf",s.searched)}}let y=(()=>{class d{constructor(s){this.searchFb=s,this.searchlabel="",this.searchOptions=[],this.searchEmit=new o.vpe,this.selectoptions=[],this.dispselect=!1,this.inputype="text",this.searched=!1,this.searchForm=this.searchFb.group({searchValue:["",u.kI.required],searchParam:["",u.kI.required]})}ngOnInit(){this.searchOptions.length&&this.searchForm.controls.searchParam.setValue(this.searchOptions[0].formname)}paramChange(){this.dispselect=!1;const s=this.searchForm.get("searchParam")?.value;this.searchForm.controls.searchValue.setValue("");const h=this.searchOptions.find(v=>v.formname===s);h?.selectoptions&&h?.selectoptions.length?(this.dispselect=!0,this.selectoptions=h.selectoptions,this.searchForm.controls.searchValue.setValue(this.selectoptions[0].val)):this.inputype=h?.type}submitForm(){if(this.searchForm.valid){const{searchParam:s,searchValue:h}=this.searchForm.value,v={};s&&(v[s]=h,this.searched=!0,this.searchEmit.emit(v))}}resetSearch(){this.searched=!1,this.dispselect=!1,this.searchForm.controls.searchValue.setValue(""),this.searchForm.controls.searchParam.setValue(""),this.searchEmit.emit({})}}return d.\u0275fac=function(s){return new(s||d)(o.Y36(u.qu))},d.\u0275cmp=o.Xpm({type:d,selectors:[["app-search-tab"]],inputs:{searchlabel:"searchlabel",searchOptions:"searchOptions"},outputs:{searchEmit:"searchEmit"},decls:2,vars:1,consts:[[1,"mb-2","me-2","d-none","d-lg-block"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],[1,"d-md-flex","align-items-center"],["class","form-control form-select-sm me-2  my-search","formControlName","searchValue",3,"type","placeholder",4,"ngIf"],["class","form-select  form-select-sm text-secondary my-search me-2","formControlName","searchValue",4,"ngIf"],["formControlName","searchParam",1,"form-select","form-select-sm","text-secondary","my-search","me-2",3,"change"],["disabled","",3,"value"],[4,"ngFor","ngForOf"],["class","m-0 text-primary",3,"click",4,"ngIf"],["class","m-0 text-danger",3,"click",4,"ngIf"],["formControlName","searchValue",1,"form-control","form-select-sm","me-2","my-search",3,"type","placeholder"],["formControlName","searchValue",1,"form-select","form-select-sm","text-secondary","my-search","me-2"],[3,"value"],[1,"m-0","text-primary",3,"click"],[1,"m-0","text-danger",3,"click"]],template:function(s,h){1&s&&(o.TgZ(0,"div",0),o.YNc(1,C,10,7,"form",1),o.qZA()),2&s&&(o.xp6(1),o.Q6J("ngIf",h.searchOptions&&h.searchOptions.length))},dependencies:[a.sg,a.O5,u._Y,u.YN,u.Kr,u.Fj,u.EJ,u.JJ,u.JL,g.Hw,u.sg,u.u],styles:["select[_ngcontent-%COMP%]{border-color:#0d6efd}.my-search[_ngcontent-%COMP%]{width:180px}"]}),d})()},7997:(b,Z,p)=>{p.d(Z,{S:()=>u});var o=p(4650);let u=(()=>{class a{}return a.\u0275fac=function(_){return new(_||a)},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-sul-loader"]],decls:8,vars:0,consts:[[1,"py-2"],["role","alert",1,"alert","alert-warning"],[1,"d-flex","align-items-center"],["role","status",1,"spinner-border","spinner-border-sm"],[1,"visually-hidden"],[1,"blinks"]],template:function(_,x){1&_&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4),o._uU(5,"Loading..."),o.qZA()(),o.TgZ(6,"span",5),o._uU(7," \xa0 Loading ... "),o.qZA()()()())}}),a})()}}]);