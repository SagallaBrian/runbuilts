"use strict";(self.webpackChunksuluhi_admin_frontend=self.webpackChunksuluhi_admin_frontend||[]).push([[697],{697:(T,Z,l)=>{l.r(Z),l.d(Z,{LoansModule:()=>te});var t=l(6895),m=l(8869),i=l(4006),_=l(4333),u=l(1213),h=l(8796),e=l(4650),q=l(2340),I=l(529);let x=(()=>{class o{constructor(n){this.http=n,this.apiUrl=`${q.N.apiUrl}loans`}createLoan(n){return this.http.post(this.apiUrl,n)}getLoan(n){return this.http.get(`${this.apiUrl}/${n}`)}updateLoan(n,a){return this.http.put(`${this.apiUrl}/${n}`,a)}deleteLoan(n){return this.http.delete(`${this.apiUrl}/${n}`)}getAllLoans(n,a,d){const v={currentPage:n,pageSize:a,...d};return this.http.get(this.apiUrl,{params:v})}}return o.\u0275fac=function(n){return new(n||o)(e.LFG(I.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var U=l(583),A=l(8057);function c(o,s){if(1&o&&(e.ynx(0),e.TgZ(1,"div",30),e._UZ(2,"app-error-occured",31),e.qZA(),e.BQk()),2&o){const n=e.oxw();e.xp6(2),e.Q6J("errorMessage",n.errorMessage)}}function g(o,s){if(1&o&&(e.ynx(0),e.TgZ(1,"ng-option",35),e._uU(2),e.qZA(),e.BQk()),2&o){const n=s.$implicit;e.xp6(1),e.Q6J("value",n._id),e.xp6(1),e.AsE(" ",n.firstName," ",n.lastName," ")}}function r(o,s){if(1&o&&(e.ynx(0),e.TgZ(1,"ng-select",32)(2,"ng-option",33),e._uU(3,"Search Customer"),e.qZA(),e.YNc(4,g,3,3,"ng-container",34),e.qZA(),e.BQk()),2&o){const n=e.oxw(2);e.xp6(4),e.Q6J("ngForOf",n.clients.results)}}function p(o,s){1&o&&(e.TgZ(0,"div",36),e._uU(1," Customer is required. "),e.qZA())}function f(o,s){if(1&o&&(e.ynx(0),e.TgZ(1,"div",6)(2,"div"),e.YNc(3,r,5,1,"ng-container",0),e.qZA(),e.YNc(4,p,2,0,"div",16),e.qZA(),e.BQk()),2&o){const n=e.oxw();let a;e.xp6(3),e.Q6J("ngIf",n.clients&&n.clients.results.length),e.xp6(1),e.Q6J("ngIf",(null==(a=n.loanForm.get("customerid"))?null:a.invalid)&&(null==(a=n.loanForm.get("customerid"))?null:a.touched))}}function O(o,s){1&o&&(e.TgZ(0,"div",36),e._uU(1," Loan Provider is required. "),e.qZA())}function D(o,s){if(1&o&&(e.ynx(0),e.TgZ(1,"div",6),e._UZ(2,"input",37),e.YNc(3,O,2,0,"div",16),e.qZA(),e.BQk()),2&o){const n=e.oxw();let a;e.xp6(3),e.Q6J("ngIf",(null==(a=n.loanForm.get("recipient"))?null:a.invalid)&&(null==(a=n.loanForm.get("recipient"))?null:a.touched))}}function J(o,s){1&o&&(e.TgZ(0,"div",36),e._uU(1," Amount is required. "),e.qZA())}function M(o,s){1&o&&(e.TgZ(0,"div",36),e._uU(1," Interest Rate is required. "),e.qZA())}function Q(o,s){1&o&&(e.TgZ(0,"div",36),e._uU(1," Company Name is required. "),e.qZA())}function S(o,s){1&o&&(e.TgZ(0,"div",36),e._uU(1," Department is required. "),e.qZA())}function k(o,s){1&o&&(e.TgZ(0,"div",36),e._uU(1," Description is required. "),e.qZA())}function Y(o,s){if(1&o){const n=e.EpF();e.ynx(0),e.TgZ(1,"button",38),e.NdJ("click",function(){e.CHM(n);const d=e.oxw();return e.KtG(d.deleteLoan())}),e._uU(2,"Delete Loan"),e.qZA(),e.TgZ(3,"button",39),e.NdJ("click",function(){e.CHM(n);const d=e.oxw();return e.KtG(d.updateLoan())}),e._uU(4,"Edit Loan"),e.qZA(),e.BQk()}if(2&o){const n=e.oxw();e.xp6(3),e.Q6J("disabled",n.loanForm.invalid)}}function P(o,s){if(1&o){const n=e.EpF();e.TgZ(0,"button",40),e.NdJ("click",function(){e.CHM(n);const d=e.oxw();return e.KtG(d.addLoan())}),e._uU(1,"Add Loan"),e.qZA()}if(2&o){const n=e.oxw();e.Q6J("disabled",n.loanForm.invalid)}}let N=(()=>{class o{constructor(n,a,d,v,C){this.formBuilder=n,this.router=a,this.loanService=d,this.clientService=v,this.route=C,this.title="Add Loan",this.submiting=!1,this.loading=!1,this.loadingclients=!1}ngOnInit(){this.loadClients({}),this.loanForm=this.formBuilder.group({customerid:["",i.kI.required],recipient:["",i.kI.required],amount:["",i.kI.required],interestRate:["",i.kI.required],customerordirect:["customer"],startDate:[""],endDate:[""],loanstatus:["approved"],description:[""]}),this.loanId=this.route.snapshot.paramMap.get("id"),this.loanId?(this.title="Edit Loans",this.getLoan(this.loanId),this.loanForm.get("customerordirect")?.disable()):this.checkIfCustomer()}getLoan(n){this.loading=!0,this.loanService.getLoan(n).subscribe({next:a=>{const d=new Date(a.startDate).toISOString().substring(0,10),v=new Date(a.endDate).toISOString().substring(0,10);a.startDate=d,a.endDate=v,this.loanForm.patchValue(a),this.checkIfCustomer()},error:a=>{this.errorMessage=a,this.loading=!1},complete:()=>{this.loading=!1}})}addLoan(){this.loanForm.valid&&(this.submiting=!0,this.loanService.createLoan(this.loanForm.value).subscribe({next:a=>{this.loanForm.reset(),this.router.navigate(["/accounts/loans"])},error:a=>{this.errorMessage=a,this.submiting=!1},complete:()=>{this.submiting=!1}}))}updateLoan(){const n=this.loanForm.value;this.submiting=!0,this.loanService.updateLoan(this.loanId,n).subscribe({next:a=>{this.router.navigate(["/accounts/loans"])},error:a=>{this.errorMessage=a,this.submiting=!1},complete:()=>{this.submiting=!1}})}deleteLoan(){this.submiting=!0,this.loanService.deleteLoan(this.loanId).subscribe({next:n=>{this.router.navigate(["/accounts/loans"])},error:n=>{this.errorMessage=n,this.submiting=!1},complete:()=>{this.submiting=!1}})}loadClients(n){this.loadingclients=!0,this.clientService.getAllClientSuppliers(1,100,n).subscribe({next:a=>{this.clients=a},error:a=>{this.errorMessage=a,this.loadingclients=!1},complete:()=>{this.loadingclients=!1}})}checkIfCustomer(){const n=this.loanForm.get("customerordirect")?.value;"customer"===n?(this.loanForm.removeControl("recipient"),this.loanForm.addControl("customerid",this.formBuilder.control("",i.kI.required))):"recipient"===n&&(this.loanForm.removeControl("customerid"),this.loanForm.addControl("recipient",this.formBuilder.control("",i.kI.required)))}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(i.qu),e.Y36(m.F0),e.Y36(x),e.Y36(U.y),e.Y36(m.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-add-edit-loans"]],decls:67,vars:12,consts:[[4,"ngIf"],[1,"my-4",3,"formGroup"],[1,"d-flex"],[1,"flex-grow-1"],[1,"fw-normal"],["routerLink","/accounts/loans",1,"btn","btn-outline-secondary","btn-sm"],[1,"mb-3"],[1,"form-check","form-check-inline"],["type","radio","formControlName","customerordirect","id","inlineRadio3","value","customer",1,"form-check-input",3,"change"],["for","inlineRadio3",1,"form-check-label"],["type","radio","formControlName","customerordirect","id","inlineRadio5","value","recipient",1,"form-check-input",3,"change"],["for","inlineRadio5",1,"form-check-label"],[1,"row"],[1,"col-lg-6"],["for","title",1,"form-label"],["type","number","id","title","formControlName","amount","placeholder","Enter Amount",1,"form-control"],["class","sul-error",4,"ngIf"],["type","number","id","title","formControlName","interestRate","placeholder","Enter Interest Rate",1,"form-control"],["type","date","id","title","formControlName","startDate",1,"form-control"],["type","date","id","title","formControlName","endDate",1,"form-control"],["for","projectlink",1,"form-label"],["aria-label","Default select example","formControlName","loanstatus",1,"form-select"],["value","pending"],["value","approved"],["value","rejected"],["value","paid"],["for","description",1,"form-label"],["id","description","formControlName","description","placeholder","Enter Description",1,"form-control"],[4,"ngIf","ngIfElse"],["adding",""],[1,"py-3"],[3,"errorMessage"],["formControlName","customerid"],["value","","disabled",""],[4,"ngFor","ngForOf"],[3,"value"],[1,"sul-error"],["type","text","id","title","formControlName","recipient","placeholder","Enter Loan Provider",1,"form-control"],["type","submit",1,"btn","btn-danger","btn-sm","me-2",3,"click"],["type","submit",1,"btn","btn-primary","btn-sm",3,"disabled","click"],["type","submit",1,"btn","btn-success","btn-sm",3,"disabled","click"]],template:function(n,a){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,c,3,1,"ng-container",0),e.TgZ(2,"form",1)(3,"div",2)(4,"div",3)(5,"h2",4),e._uU(6),e.qZA()(),e.TgZ(7,"div")(8,"button",5),e._uU(9," List Loans"),e.qZA()()(),e.TgZ(10,"div",6)(11,"div",7)(12,"input",8),e.NdJ("change",function(){return a.checkIfCustomer()}),e.qZA(),e.TgZ(13,"label",9),e._uU(14,"Customer"),e.qZA()(),e.TgZ(15,"div",7)(16,"input",10),e.NdJ("change",function(){return a.checkIfCustomer()}),e.qZA(),e.TgZ(17,"label",11),e._uU(18,"Provider"),e.qZA()()(),e.YNc(19,f,5,2,"ng-container",0),e.YNc(20,D,4,1,"ng-container",0),e.TgZ(21,"div",12)(22,"div",13)(23,"div",6)(24,"label",14),e._uU(25,"Amount"),e.qZA(),e._UZ(26,"input",15),e.YNc(27,J,2,0,"div",16),e.qZA()(),e.TgZ(28,"div",13)(29,"div",6)(30,"label",14),e._uU(31,"Interest Rate"),e.qZA(),e._UZ(32,"input",17),e.YNc(33,M,2,0,"div",16),e.qZA()()(),e.TgZ(34,"div",12)(35,"div",13)(36,"div",6)(37,"label",14),e._uU(38,"Issue Date"),e.qZA(),e._UZ(39,"input",18),e.YNc(40,Q,2,0,"div",16),e.qZA()(),e.TgZ(41,"div",13)(42,"div",6)(43,"label",14),e._uU(44,"Due Date"),e.qZA(),e._UZ(45,"input",19),e.YNc(46,S,2,0,"div",16),e.qZA()()(),e.TgZ(47,"div",6)(48,"label",20),e._uU(49,"Loan Status"),e.qZA(),e.TgZ(50,"select",21)(51,"option",22),e._uU(52,"Pending"),e.qZA(),e.TgZ(53,"option",23),e._uU(54,"Approved"),e.qZA(),e.TgZ(55,"option",24),e._uU(56,"Rejected"),e.qZA(),e.TgZ(57,"option",25),e._uU(58,"Paid"),e.qZA()()(),e.TgZ(59,"div",6)(60,"label",26),e._uU(61,"Description"),e.qZA(),e._UZ(62,"textarea",27),e.YNc(63,k,2,0,"div",16),e.qZA(),e.YNc(64,Y,5,1,"ng-container",28),e.YNc(65,P,2,1,"ng-template",null,29,e.W1O),e.qZA()()),2&n){const d=e.MAs(66);let v,C,L,b,y,F,E;e.xp6(1),e.Q6J("ngIf",a.errorMessage),e.xp6(1),e.Q6J("formGroup",a.loanForm),e.xp6(4),e.Oqu(a.title),e.xp6(13),e.Q6J("ngIf","customer"===(null==(v=a.loanForm.get("customerordirect"))?null:v.value)),e.xp6(1),e.Q6J("ngIf","recipient"===(null==(C=a.loanForm.get("customerordirect"))?null:C.value)),e.xp6(7),e.Q6J("ngIf",(null==(L=a.loanForm.get("amount"))?null:L.invalid)&&(null==(L=a.loanForm.get("amount"))?null:L.touched)),e.xp6(6),e.Q6J("ngIf",(null==(b=a.loanForm.get("interestRate"))?null:b.invalid)&&(null==(b=a.loanForm.get("interestRate"))?null:b.touched)),e.xp6(7),e.Q6J("ngIf",(null==(y=a.loanForm.get("startDate"))?null:y.invalid)&&(null==(y=a.loanForm.get("startDate"))?null:y.touched)),e.xp6(6),e.Q6J("ngIf",(null==(F=a.loanForm.get("endDate"))?null:F.invalid)&&(null==(F=a.loanForm.get("endDate"))?null:F.touched)),e.xp6(17),e.Q6J("ngIf",(null==(E=a.loanForm.get("description"))?null:E.invalid)&&(null==(E=a.loanForm.get("description"))?null:E.touched)),e.xp6(1),e.Q6J("ngIf",a.loanId)("ngIfElse",d)}},dependencies:[t.sg,t.O5,i._Y,i.YN,i.Kr,i.Fj,i.wV,i.EJ,i._,i.JJ,i.JL,i.sg,i.u,A.A,h.w9,h.jq,m.rH]}),o})();var w=l(7997),B=l(5511),R=l(295);function V(o,s){1&o&&(e.ynx(0),e.TgZ(1,"div",8),e._UZ(2,"app-sul-loader"),e.qZA(),e.BQk())}function K(o,s){if(1&o&&(e.ynx(0),e.TgZ(1,"div",8),e._UZ(2,"app-error-occured",10),e.qZA(),e.BQk()),2&o){const n=e.oxw(2);e.xp6(2),e.Q6J("errorMessage",n.errorMessage)}}const j=function(o){return["edit",o]};function G(o,s){if(1&o&&(e.ynx(0),e.TgZ(1,"tr",18)(2,"td"),e._uU(3),e.qZA(),e.TgZ(4,"td"),e._uU(5),e.ALo(6,"currency"),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.ALo(11,"date"),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.ALo(14,"date"),e.qZA(),e.TgZ(15,"td",19),e._uU(16),e.qZA()(),e.BQk()),2&o){const n=s.$implicit,a=s.index;e.xp6(1),e.Q6J("routerLink",e.VKq(14,j,n._id)),e.xp6(2),e.Oqu(a+1),e.xp6(2),e.Oqu(e.xi3(6,7,n.amount,"ksh. ")),e.xp6(3),e.hij("",n.interestRate,"% "),e.xp6(2),e.Oqu(e.lcZ(11,10,n.startDate)),e.xp6(3),e.Oqu(e.lcZ(14,12,n.endDate)),e.xp6(3),e.Oqu(n.loanstatus)}}const H=function(o,s,n){return{itemsPerPage:o,currentPage:s,totalItems:n}};function W(o,s){if(1&o){const n=e.EpF();e.ynx(0),e.TgZ(1,"div",12)(2,"table",13)(3,"thead",14)(4,"tr")(5,"th"),e._uU(6,"#"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Amount"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Interest Rate"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Issue Date"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Due Date"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"Status"),e.qZA()()(),e.TgZ(17,"tbody"),e.YNc(18,G,17,16,"ng-container",15),e.ALo(19,"paginate"),e.qZA()()(),e.TgZ(20,"div",16)(21,"pagination-controls",17),e.NdJ("pageChange",function(d){e.CHM(n);const v=e.oxw(3);return e.KtG(v.onPageChange(d))}),e.qZA()(),e.BQk()}if(2&o){const n=e.oxw(3);e.xp6(18),e.Q6J("ngForOf",e.xi3(19,1,n.loans.results,e.kEZ(4,H,n.loans.pageSize,n.currentPage,n.loans.totalItems)))}}function $(o,s){1&o&&e._UZ(0,"app-no-data-found",20),2&o&&e.Q6J("dataLabel","Loan")}function X(o,s){if(1&o&&(e.YNc(0,W,22,8,"ng-container",6),e.YNc(1,$,1,1,"ng-template",null,11,e.W1O)),2&o){const n=e.MAs(2),a=e.oxw(2);e.Q6J("ngIf",a.loans&&a.loans.results.length)("ngIfElse",n)}}function z(o,s){if(1&o&&(e.YNc(0,K,3,1,"ng-container",6),e.YNc(1,X,3,2,"ng-template",null,9,e.W1O)),2&o){const n=e.MAs(2),a=e.oxw();e.Q6J("ngIf",a.errorMessage)("ngIfElse",n)}}const ee=[{path:"",component:(()=>{class o{constructor(n){this.loanService=n,this.loading=!0,this.currentPage=1,this.pageSize=10,this.options=[{name:"Issue Date",formname:"startDate",type:"date"},{name:"Due Date",formname:"endDate",type:"date"},{name:"Amount",formname:"amount",type:"number"},{name:"Status",formname:"loanstatus",type:"select",selectoptions:[{val:"pending",name:"Pending"},{val:"approved",name:"Approved"},{val:"rejected",name:"Rejected"}]}]}ngOnInit(){this.loadTasks({})}loadTasks(n){this.loading=!0,this.loanService.getAllLoans(this.currentPage,this.pageSize,n).subscribe({next:a=>{this.loans=a},error:a=>{this.errorMessage=a,this.loading=!1},complete:()=>{this.loading=!1}})}searchFunction(n){this.loadTasks(n)}onPageChange(n){this.currentPage=n,this.loadTasks({})}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(x))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-list-loans"]],decls:13,vars:3,consts:[[1,"py-4"],[1,"d-flex"],[1,"flex-grow-1"],[1,"text-secondary","fw-normal","mb-1"],[3,"searchOptions","searchEmit"],["routerLink","/accounts/loans/add",1,"btn","btn-outline-primary","btn-sm"],[4,"ngIf","ngIfElse"],["loadedContent",""],[1,"py-3"],["noError",""],[3,"errorMessage"],["nodata",""],[1,"table-responsive"],[1,"table","table-bordered","table-striped","text-nowrap"],[1,"thead"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end","pt-3"],[1,"my-pagination",3,"pageChange"],[1,"cursor-pointer",3,"routerLink"],[1,"text-capitalize"],[3,"dataLabel"]],template:function(n,a){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),e._uU(4,"Loans"),e.qZA()(),e.ynx(5),e.TgZ(6,"app-search-tab",4),e.NdJ("searchEmit",function(v){return a.searchFunction(v)}),e.qZA(),e.BQk(),e.TgZ(7,"div")(8,"button",5),e._uU(9," Add Loan"),e.qZA()()(),e.YNc(10,V,3,0,"ng-container",6),e.YNc(11,z,3,2,"ng-template",null,7,e.W1O),e.qZA()),2&n){const d=e.MAs(12);e.xp6(6),e.Q6J("searchOptions",a.options),e.xp6(4),e.Q6J("ngIf",a.loading)("ngIfElse",d)}},dependencies:[t.sg,t.O5,w.S,B.i,A.A,R.O,_.LS,m.rH,t.H9,t.uU,_._s]}),o})()},{path:"add",component:N},{path:"edit/:id",component:N},{path:"view/:id",component:(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-details-loan"]],decls:2,vars:0,template:function(n,a){1&n&&(e.TgZ(0,"p"),e._uU(1,"details-loan works!"),e.qZA())}}),o})()},{path:"**",redirectTo:"",pathMatch:"full"}];let te=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[t.ez,i.u5,i.UX,u.C,_.JX,h.A0,m.Bz.forChild(ee)]}),o})()},8057:(T,Z,l)=>{l.d(Z,{A:()=>m});var t=l(4650);let m=(()=>{class i{ngOnInit(){this.errorMessage?.error?.message&&(this.errormes=this.errorMessage.error.message)}}return i.\u0275fac=function(u){return new(u||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-error-occured"]],inputs:{errorMessage:"errorMessage"},decls:4,vars:1,consts:[[1,"py-2"],["role","alert",1,"alert","alert-danger"],[1,"d-flex","align-items-center"]],template:function(u,h){1&u&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3),t.qZA()()()),2&u&&(t.xp6(3),t.hij(" ",h.errormes?h.errormes:h.errorMessage.message," "))}}),i})()},5511:(T,Z,l)=>{l.d(Z,{i:()=>m});var t=l(4650);let m=(()=>{class i{}return i.\u0275fac=function(u){return new(u||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-no-data-found"]],inputs:{dataLabel:"dataLabel"},decls:4,vars:1,consts:[[1,"py-2"],["role","alert",1,"alert","alert-info"],[1,"d-flex","align-items-center"]],template:function(u,h){1&u&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3),t.qZA()()()),2&u&&(t.xp6(3),t.hij(" No ",h.dataLabel," record found with the given filter parameters "))}}),i})()},295:(T,Z,l)=>{l.d(Z,{O:()=>A});var t=l(4650),m=l(4006),i=l(6895),_=l(7392);function u(c,g){if(1&c&&t._UZ(0,"input",11),2&c){const r=t.oxw(2);t.Q6J("type",r.inputype)("placeholder",r.searchlabel)}}function h(c,g){if(1&c&&(t.ynx(0),t.TgZ(1,"option",13),t._uU(2),t.qZA(),t.BQk()),2&c){const r=g.$implicit;t.xp6(1),t.Q6J("value",r.val),t.xp6(1),t.Oqu(r.name)}}function e(c,g){if(1&c&&(t.TgZ(0,"select",12),t.YNc(1,h,3,2,"ng-container",8),t.qZA()),2&c){const r=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",r.selectoptions)}}function q(c,g){if(1&c&&(t.ynx(0),t.TgZ(1,"option",13),t._uU(2),t.qZA(),t.BQk()),2&c){const r=g.$implicit;t.xp6(1),t.Q6J("value",r.formname),t.xp6(1),t.Oqu(r.name)}}function I(c,g){if(1&c){const r=t.EpF();t.TgZ(0,"mat-icon",14),t.NdJ("click",function(){t.CHM(r);const f=t.oxw(2);return t.KtG(f.submitForm())}),t._uU(1,"manage_search"),t.qZA()}}function x(c,g){if(1&c){const r=t.EpF();t.TgZ(0,"mat-icon",15),t.NdJ("click",function(){t.CHM(r);const f=t.oxw(2);return t.KtG(f.resetSearch())}),t._uU(1,"close"),t.qZA()}}function U(c,g){if(1&c){const r=t.EpF();t.TgZ(0,"form",2)(1,"div",3),t.YNc(2,u,1,2,"input",4),t.YNc(3,e,2,1,"select",5),t.TgZ(4,"select",6),t.NdJ("change",function(){t.CHM(r);const f=t.oxw();return t.KtG(f.paramChange())}),t.TgZ(5,"option",7),t._uU(6,"Select Parameter"),t.qZA(),t.YNc(7,q,3,2,"ng-container",8),t.qZA(),t.YNc(8,I,2,0,"mat-icon",9),t.YNc(9,x,2,0,"mat-icon",10),t.qZA()()}if(2&c){const r=t.oxw();t.Q6J("formGroup",r.searchForm),t.xp6(2),t.Q6J("ngIf",!r.dispselect),t.xp6(1),t.Q6J("ngIf",r.dispselect&&r.selectoptions.length),t.xp6(2),t.Q6J("value",""),t.xp6(2),t.Q6J("ngForOf",r.searchOptions),t.xp6(1),t.Q6J("ngIf",r.searchForm.valid),t.xp6(1),t.Q6J("ngIf",r.searched)}}let A=(()=>{class c{constructor(r){this.searchFb=r,this.searchlabel="",this.searchOptions=[],this.searchEmit=new t.vpe,this.selectoptions=[],this.dispselect=!1,this.inputype="text",this.searched=!1,this.searchForm=this.searchFb.group({searchValue:["",m.kI.required],searchParam:["",m.kI.required]})}ngOnInit(){if(this.searchOptions.length){this.searchForm.controls.searchParam.setValue(this.searchOptions[0].formname);const r=this.searchOptions[0].type;this.searchlabel="Search by "+this.searchOptions[0].name,("text"===r||"date"===r||"number"===r)&&(this.inputype=r)}}paramChange(){this.dispselect=!1;const r=this.searchForm.get("searchParam")?.value;this.searchForm.controls.searchValue.setValue("");const p=this.searchOptions.find(f=>f.formname===r);this.searchlabel="Search by "+p?.name,p?.selectoptions&&p?.selectoptions.length?(this.dispselect=!0,this.selectoptions=p.selectoptions,this.searchForm.controls.searchValue.setValue(this.selectoptions[0].val)):this.inputype=p?.type}submitForm(){if(this.searchForm.valid){const{searchParam:r,searchValue:p}=this.searchForm.value,f={};r&&(f[r]=p,this.searched=!0,this.searchEmit.emit(f))}}resetSearch(){this.searched=!1,this.dispselect=!1,this.searchForm.controls.searchValue.setValue(""),this.searchForm.controls.searchParam.setValue(""),this.searchEmit.emit({})}}return c.\u0275fac=function(r){return new(r||c)(t.Y36(m.qu))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-search-tab"]],inputs:{searchOptions:"searchOptions"},outputs:{searchEmit:"searchEmit"},decls:2,vars:1,consts:[[1,"mb-2","me-2","d-none","d-lg-block"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],[1,"d-md-flex","align-items-center"],["class","form-control form-select-sm me-2  my-search","formControlName","searchValue",3,"type","placeholder",4,"ngIf"],["class","form-select  form-select-sm text-secondary my-search me-2","formControlName","searchValue",4,"ngIf"],["formControlName","searchParam",1,"form-select","form-select-sm","text-secondary","my-search","me-2",3,"change"],["disabled","",3,"value"],[4,"ngFor","ngForOf"],["class","m-0 text-primary",3,"click",4,"ngIf"],["class","m-0 text-danger",3,"click",4,"ngIf"],["formControlName","searchValue",1,"form-control","form-select-sm","me-2","my-search",3,"type","placeholder"],["formControlName","searchValue",1,"form-select","form-select-sm","text-secondary","my-search","me-2"],[3,"value"],[1,"m-0","text-primary",3,"click"],[1,"m-0","text-danger",3,"click"]],template:function(r,p){1&r&&(t.TgZ(0,"div",0),t.YNc(1,U,10,7,"form",1),t.qZA()),2&r&&(t.xp6(1),t.Q6J("ngIf",p.searchOptions&&p.searchOptions.length))},dependencies:[i.sg,i.O5,m._Y,m.YN,m.Kr,m.Fj,m.EJ,m.JJ,m.JL,_.Hw,m.sg,m.u],styles:["select[_ngcontent-%COMP%]{border-color:#0d6efd}.my-search[_ngcontent-%COMP%]{width:180px}"]}),c})()},7997:(T,Z,l)=>{l.d(Z,{S:()=>m});var t=l(4650);let m=(()=>{class i{}return i.\u0275fac=function(u){return new(u||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-sul-loader"]],decls:8,vars:0,consts:[[1,"py-2"],["role","alert",1,"alert","alert-warning"],[1,"d-flex","align-items-center"],["role","status",1,"spinner-border","spinner-border-sm"],[1,"visually-hidden"],[1,"blinks"]],template:function(u,h){1&u&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4),t._uU(5,"Loading..."),t.qZA()(),t.TgZ(6,"span",5),t._uU(7," \xa0 Loading ... "),t.qZA()()()())}}),i})()}}]);