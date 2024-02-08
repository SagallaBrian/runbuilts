"use strict";(self.webpackChunksuluhi_admin_frontend=self.webpackChunksuluhi_admin_frontend||[]).push([[272],{5695:(ae,b,a)=>{a.r(b),a.d(b,{EmployeesModule:()=>re});var p=a(6895),r=a(4006),d=a(6354),E=a(8796),A=a(4333),C=a(1213),e=a(4650),U=a(2340),N=a(529);let x=(()=>{class t{constructor(o){this.http=o,this.apiUrl=`${U.N.apiUrl}employees`}createEmployee(o){return this.http.post(this.apiUrl,o)}getEmployee(o){return this.http.get(`${this.apiUrl}/${o}`)}updateEmployee(o,n){return this.http.put(`${this.apiUrl}/${o}`,n)}deleteEmployee(o){return this.http.delete(`${this.apiUrl}/${o}`)}getAllEmployees(o,n,i){const m={currentPage:o,pageSize:n,...i};return this.http.get(this.apiUrl,{params:m})}static#e=this.\u0275fac=function(n){return new(n||t)(e.LFG(N.eN))};static#t=this.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var F=a(7997),I=a(5511),T=a(8057),J=a(295);function Q(t,l){1&t&&(e.ynx(0),e.TgZ(1,"div",8),e._UZ(2,"app-sul-loader"),e.qZA(),e.BQk())}function D(t,l){if(1&t&&(e.ynx(0),e.TgZ(1,"div",8),e._UZ(2,"app-error-occured",10),e.qZA(),e.BQk()),2&t){const o=e.oxw(2);e.xp6(2),e.Q6J("errorMessage",o.errorMessage)}}const O=function(t){return["edit",t]};function Y(t,l){if(1&t&&(e.ynx(0),e.TgZ(1,"tr",19)(2,"td"),e._uU(3),e.qZA(),e.TgZ(4,"td"),e._uU(5),e.qZA(),e.TgZ(6,"td",20),e._uU(7),e.qZA(),e.TgZ(8,"td",20),e._uU(9),e.qZA(),e.TgZ(10,"td",21),e._uU(11),e.qZA(),e.TgZ(12,"td",21),e._uU(13),e.qZA()(),e.BQk()),2&t){const o=l.$implicit,n=l.index;e.xp6(1),e.Q6J("routerLink",e.VKq(8,O,o._id)),e.xp6(2),e.Oqu(n+1),e.xp6(2),e.AsE("",o.firstName," ",o.lastName,""),e.xp6(2),e.Oqu(o.email),e.xp6(2),e.Oqu(o.phoneNumber),e.xp6(2),e.Oqu(o.department),e.xp6(2),e.Oqu(o.designation)}}const M=function(t,l,o){return{itemsPerPage:t,currentPage:l,totalItems:o}};function S(t,l){if(1&t){const o=e.EpF();e.ynx(0),e.TgZ(1,"div",12)(2,"table",13)(3,"thead",14)(4,"tr",15)(5,"th"),e._uU(6,"#"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Name"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Email"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Phone Number"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Department"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"Designation"),e.qZA()()(),e.TgZ(17,"tbody"),e.YNc(18,Y,14,10,"ng-container",16),e.ALo(19,"paginate"),e.qZA()()(),e.TgZ(20,"div",17)(21,"pagination-controls",18),e.NdJ("pageChange",function(i){e.CHM(o);const m=e.oxw(3);return e.KtG(m.onPageChange(i))}),e.qZA()(),e.BQk()}if(2&t){const o=e.oxw(3);e.xp6(18),e.Q6J("ngForOf",e.xi3(19,1,o.employees.results,e.kEZ(4,M,o.employees.pageSize,o.currentPage,o.employees.totalItems)))}}function B(t,l){1&t&&e._UZ(0,"app-no-data-found",22),2&t&&e.Q6J("dataLabel","Employee")}function L(t,l){if(1&t&&(e.YNc(0,S,22,8,"ng-container",6),e.YNc(1,B,1,1,"ng-template",null,11,e.W1O)),2&t){const o=e.MAs(2),n=e.oxw(2);e.Q6J("ngIf",n.employees&&n.employees.results.length)("ngIfElse",o)}}function k(t,l){if(1&t&&(e.YNc(0,D,3,1,"ng-container",6),e.YNc(1,L,3,2,"ng-template",null,9,e.W1O)),2&t){const o=e.MAs(2),n=e.oxw();e.Q6J("ngIf",n.errorMessage)("ngIfElse",o)}}let w=(()=>{class t{constructor(o){this.employeeService=o,this.currentPage=1,this.pageSize=10,this.options=[{name:"Employee Name",formname:"name",type:"text"},{name:"Designation",formname:"designation",type:"text"}],this.loading=!0}ngOnInit(){this.loadEmployees({})}loadEmployees(o){this.loading=!0,this.employeeService.getAllEmployees(this.currentPage,this.pageSize,o).subscribe({next:n=>{this.employees=n},error:n=>{this.errorMessage=n,this.loading=!1},complete:()=>{this.loading=!1}})}onPageChange(o){this.currentPage=o,this.loadEmployees({type:"client"})}searchFunction(o){const n={...o,type:"client"};this.loadEmployees(n)}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(x))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-list-employees"]],decls:13,vars:3,consts:[[1,"py-4"],[1,"d-flex"],[1,"flex-grow-1"],[1,"text-secondary","fw-normal","mb-1"],[3,"searchOptions","searchEmit"],["routerLink","/company/employees/add",1,"btn","btn-outline-primary","btn-sm"],[4,"ngIf","ngIfElse"],["loadedContent",""],[1,"py-3"],["noError",""],[3,"errorMessage"],["nodata",""],[1,"table-responsive"],[1,"table","table-bordered","table-striped","table-hover","text-nowrap"],[1,"thead"],[1,""],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end","pt-3"],[1,"my-pagination",3,"pageChange"],[1,"cursor-pointer",3,"routerLink"],[1,"text-nowrap"],[1,"text-capitalize"],[3,"dataLabel"]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),e._uU(4,"Employees"),e.qZA()(),e.ynx(5),e.TgZ(6,"app-search-tab",4),e.NdJ("searchEmit",function(s){return i.searchFunction(s)}),e.qZA(),e.BQk(),e.TgZ(7,"div")(8,"button",5),e._uU(9," Add Employee"),e.qZA()()(),e.YNc(10,Q,3,0,"ng-container",6),e.YNc(11,k,3,2,"ng-template",null,7,e.W1O),e.qZA()),2&n){const m=e.MAs(12);e.xp6(6),e.Q6J("searchOptions",i.options),e.xp6(4),e.Q6J("ngIf",i.loading)("ngIfElse",m)}},dependencies:[p.sg,p.O5,F.S,I.i,T.A,J.O,A.LS,d.rH,A._s]})}return t})();var P=a(6534);function z(t,l){if(1&t&&(e.ynx(0),e.TgZ(1,"div",38),e._UZ(2,"app-error-occured",39),e.qZA(),e.BQk()),2&t){const o=e.oxw();e.xp6(2),e.Q6J("errorMessage",o.errorMessage)}}function G(t,l){1&t&&(e.TgZ(0,"div",40),e._uU(1," First Name is required. "),e.qZA())}function $(t,l){1&t&&(e.TgZ(0,"div",40),e._uU(1," Last Name is required. "),e.qZA())}function H(t,l){1&t&&(e.TgZ(0,"div",40),e._uU(1," Email is required. "),e.qZA())}function j(t,l){1&t&&(e.TgZ(0,"div",40),e._uU(1," Phone Number is required. "),e.qZA())}function K(t,l){1&t&&(e.TgZ(0,"div",40),e._uU(1," Date of Birth is required. "),e.qZA())}function X(t,l){if(1&t&&(e.ynx(0),e.TgZ(1,"ng-option",44),e._uU(2),e.qZA(),e.BQk()),2&t){const o=l.$implicit;e.xp6(1),e.Q6J("value",o.name),e.xp6(1),e.hij(" ",o.name," ")}}function W(t,l){if(1&t&&(e.ynx(0),e.TgZ(1,"ng-select",41)(2,"ng-option",42),e._uU(3,"Select Country"),e.qZA(),e.YNc(4,X,3,2,"ng-container",43),e.qZA(),e.BQk()),2&t){const o=e.oxw();e.xp6(4),e.Q6J("ngForOf",o.listCountries)}}function V(t,l){1&t&&(e.TgZ(0,"div",40),e._uU(1," Department is required. "),e.qZA())}function R(t,l){1&t&&(e.TgZ(0,"div",40),e._uU(1," Designation is required. "),e.qZA())}function ee(t,l){1&t&&(e.TgZ(0,"div",40),e._uU(1," Hire Date is required. "),e.qZA())}function te(t,l){1&t&&(e.TgZ(0,"div",40),e._uU(1," Salary is required. "),e.qZA())}function oe(t,l){1&t&&(e.TgZ(0,"div",40),e._uU(1," Description is required. "),e.qZA())}function ne(t,l){if(1&t){const o=e.EpF();e.ynx(0),e.TgZ(1,"button",45),e.NdJ("click",function(){e.CHM(o);const i=e.oxw();return e.KtG(i.deleteEmployee())}),e._uU(2,"Delete Employee"),e.qZA(),e.TgZ(3,"button",46),e.NdJ("click",function(){e.CHM(o);const i=e.oxw();return e.KtG(i.updateEmployee())}),e._uU(4,"Edit Employee"),e.qZA(),e.BQk()}if(2&t){const o=e.oxw();e.xp6(3),e.Q6J("disabled",o.employeeForm.invalid)}}function ie(t,l){if(1&t){const o=e.EpF();e.TgZ(0,"button",47),e.NdJ("click",function(){e.CHM(o);const i=e.oxw();return e.KtG(i.addEmployee())}),e._uU(1,"Add Employee"),e.qZA()}if(2&t){const o=e.oxw();e.Q6J("disabled",o.employeeForm.invalid)}}let q=(()=>{class t{constructor(o,n,i,m){this.formBuilder=o,this.router=n,this.employeeService=i,this.route=m,this.title="Add Employee",this.submiting=!1,this.loading=!1,this.listCountries=P.h}ngOnInit(){this.employeeForm=this.formBuilder.group({firstName:["",r.kI.required],lastName:["",r.kI.required],phoneNumber:["",r.kI.required],email:[""],gender:["female"],dateOfBirth:[""],department:[""],designation:[""],hireDate:[""],salary:[""],description:[""],address:this.formBuilder.group({country:[""],zipCode:[""],state:[""],city:[""],street:[""]}),status:["active"]}),this.employeeId=this.route.snapshot.paramMap.get("id"),this.employeeId&&(this.title="Edit Employee",this.getEmployee(this.employeeId))}getEmployee(o){this.loading=!0,this.employeeService.getEmployee(o).subscribe({next:n=>{const i=new Date(n.dateOfBirth).toISOString().substring(0,10);n.dateOfBirth=i;const m=new Date(n.hireDate).toISOString().substring(0,10);n.hireDate=m,this.employeeForm.patchValue(n)},error:n=>{this.errorMessage=n,this.loading=!1},complete:()=>{this.loading=!1}})}addEmployee(){this.employeeForm.valid&&(this.submiting=!0,this.employeeService.createEmployee(this.employeeForm.value).subscribe({next:n=>{this.employeeForm.reset(),this.router.navigate(["/company/employees"])},error:n=>{this.errorMessage=n,this.submiting=!1},complete:()=>{this.submiting=!1}}))}updateEmployee(){const o=this.employeeForm.value;this.submiting=!0,this.employeeService.updateEmployee(this.employeeId,o).subscribe({next:n=>{this.router.navigate(["/company/employees"])},error:n=>{this.errorMessage=n,this.submiting=!1},complete:()=>{this.submiting=!1}})}deleteEmployee(){this.submiting=!0,this.employeeService.deleteEmployee(this.employeeId).subscribe({next:o=>{this.router.navigate(["/company/employees"])},error:o=>{this.errorMessage=o,this.submiting=!1},complete:()=>{this.submiting=!1}})}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(r.qu),e.Y36(d.F0),e.Y36(x),e.Y36(d.gz))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-add-edit-employee"]],decls:113,vars:16,consts:[[4,"ngIf"],[1,"my-4",3,"formGroup"],[1,"d-flex"],[1,"flex-grow-1"],[1,"fw-normal"],["routerLink","/company/employees",1,"btn","btn-outline-secondary","btn-sm"],[1,"row"],[1,"col-lg-6"],[1,"mb-3"],["for","title",1,"form-label"],["type","text","id","title","formControlName","firstName","placeholder","Enter First Name",1,"form-control"],["class","sul-error",4,"ngIf"],["type","text","id","title","formControlName","lastName","placeholder","Enter Last Name",1,"form-control"],["type","email","id","title","formControlName","email","placeholder","Enter Email",1,"form-control"],["type","text","id","title","formControlName","phoneNumber","placeholder","Enter Phone Number",1,"form-control"],["for","dateOfBirth",1,"form-label"],["type","date","id","dateOfBirth","formControlName","dateOfBirth",1,"form-control"],["aria-label","Default select example","formControlName","gender",1,"form-select"],["value","male"],["value","female"],["formGroupName","address",1,"card","p-3","mb-3"],["for","country",1,"form-label"],["for","zipCode",1,"form-label"],["type","text","id","zipCode","formControlName","zipCode","placeholder","Enter Zip Code",1,"form-control"],["for","state",1,"form-label"],["type","text","id","state","formControlName","state","placeholder","Enter State",1,"form-control"],["for","city",1,"form-label"],["type","text","id","city","formControlName","city","placeholder","Enter City",1,"form-control"],["for","street",1,"form-label"],["type","text","id","street","formControlName","street","placeholder","Enter Street",1,"form-control"],["type","text","id","title","formControlName","department","placeholder","Enter Department",1,"form-control"],["type","text","id","title","formControlName","designation","placeholder","Enter Designation",1,"form-control"],["type","date","id","title","formControlName","hireDate",1,"form-control"],["type","number","id","title","formControlName","salary","placeholder","Enter Salary",1,"form-control"],["for","description",1,"form-label"],["id","description","formControlName","description","placeholder","Enter Description",1,"form-control"],[4,"ngIf","ngIfElse"],["adding",""],[1,"py-3"],[3,"errorMessage"],[1,"sul-error"],["formControlName","country","id","country"],["value","","disabled",""],[4,"ngFor","ngForOf"],[3,"value"],["type","submit",1,"btn","btn-danger","btn-sm","me-2",3,"click"],["type","submit",1,"btn","btn-primary","btn-sm",3,"disabled","click"],["type","submit",1,"btn","btn-success","btn-sm",3,"disabled","click"]],template:function(n,i){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,z,3,1,"ng-container",0),e.TgZ(2,"form",1)(3,"div",2)(4,"div",3)(5,"h2",4),e._uU(6),e.qZA()(),e.TgZ(7,"div")(8,"button",5),e._uU(9," List Employees "),e.qZA()()(),e.TgZ(10,"div",6)(11,"div",7)(12,"div",8)(13,"label",9),e._uU(14,"First Name"),e.qZA(),e._UZ(15,"input",10),e.YNc(16,G,2,0,"div",11),e.qZA()(),e.TgZ(17,"div",7)(18,"div",8)(19,"label",9),e._uU(20,"Last Name"),e.qZA(),e._UZ(21,"input",12),e.YNc(22,$,2,0,"div",11),e.qZA()()(),e.TgZ(23,"div",6)(24,"div",7)(25,"div",8)(26,"label",9),e._uU(27,"Email"),e.qZA(),e._UZ(28,"input",13),e.YNc(29,H,2,0,"div",11),e.qZA()(),e.TgZ(30,"div",7)(31,"div",8)(32,"label",9),e._uU(33,"Phone Number"),e.qZA(),e._UZ(34,"input",14),e.YNc(35,j,2,0,"div",11),e.qZA()()(),e.TgZ(36,"div",6)(37,"div",7)(38,"div",8)(39,"label",15),e._uU(40,"Date of Birth"),e.qZA(),e._UZ(41,"input",16),e.YNc(42,K,2,0,"div",11),e.qZA()(),e.TgZ(43,"div",7)(44,"div",8)(45,"label",9),e._uU(46,"Select Gender"),e.qZA(),e.TgZ(47,"select",17)(48,"option",18),e._uU(49,"Male"),e.qZA(),e.TgZ(50,"option",19),e._uU(51,"Female"),e.qZA()()()()(),e.TgZ(52,"div",20)(53,"div",8)(54,"label",21),e._uU(55,"Country"),e.qZA(),e.YNc(56,W,5,1,"ng-container",0),e.qZA(),e.TgZ(57,"div",6)(58,"div",7)(59,"div",8)(60,"label",22),e._uU(61,"Zip Code"),e.qZA(),e._UZ(62,"input",23),e.qZA()(),e.TgZ(63,"div",7)(64,"div",8)(65,"label",24),e._uU(66,"State"),e.qZA(),e._UZ(67,"input",25),e.qZA()()(),e.TgZ(68,"div",6)(69,"div",7)(70,"div",8)(71,"label",26),e._uU(72,"City"),e.qZA(),e._UZ(73,"input",27),e.qZA()(),e.TgZ(74,"div",7)(75,"div",8)(76,"label",28),e._uU(77,"Street"),e.qZA(),e._UZ(78,"input",29),e.qZA()()()(),e.TgZ(79,"div",6)(80,"div",7)(81,"div",8)(82,"label",9),e._uU(83,"Department"),e.qZA(),e._UZ(84,"input",30),e.YNc(85,V,2,0,"div",11),e.qZA()(),e.TgZ(86,"div",7)(87,"div",8)(88,"label",9),e._uU(89,"Designation"),e.qZA(),e._UZ(90,"input",31),e.YNc(91,R,2,0,"div",11),e.qZA()()(),e.TgZ(92,"div",6)(93,"div",7)(94,"div",8)(95,"label",9),e._uU(96,"Hire Date"),e.qZA(),e._UZ(97,"input",32),e.YNc(98,ee,2,0,"div",11),e.qZA()(),e.TgZ(99,"div",7)(100,"div",8)(101,"label",9),e._uU(102,"Salary"),e.qZA(),e._UZ(103,"input",33),e.YNc(104,te,2,0,"div",11),e.qZA()()(),e.TgZ(105,"div",8)(106,"label",34),e._uU(107,"Description"),e.qZA(),e._UZ(108,"textarea",35),e.YNc(109,oe,2,0,"div",11),e.qZA(),e.YNc(110,ne,5,1,"ng-container",36),e.YNc(111,ie,2,1,"ng-template",null,37,e.W1O),e.qZA()()),2&n){const m=e.MAs(112);let s,u,c,g,_,f,y,h,Z,v;e.xp6(1),e.Q6J("ngIf",i.errorMessage),e.xp6(1),e.Q6J("formGroup",i.employeeForm),e.xp6(4),e.Oqu(i.title),e.xp6(10),e.Q6J("ngIf",(null==(s=i.employeeForm.get("firstName"))?null:s.invalid)&&(null==(s=i.employeeForm.get("firstName"))?null:s.touched)),e.xp6(6),e.Q6J("ngIf",(null==(u=i.employeeForm.get("lastName"))?null:u.invalid)&&(null==(u=i.employeeForm.get("lastName"))?null:u.touched)),e.xp6(7),e.Q6J("ngIf",(null==(c=i.employeeForm.get("email"))?null:c.invalid)&&(null==(c=i.employeeForm.get("email"))?null:c.touched)),e.xp6(6),e.Q6J("ngIf",(null==(g=i.employeeForm.get("phoneNumber"))?null:g.invalid)&&(null==(g=i.employeeForm.get("phoneNumber"))?null:g.touched)),e.xp6(7),e.Q6J("ngIf",(null==(_=i.employeeForm.get("dateOfBirth"))?null:_.invalid)&&(null==(_=i.employeeForm.get("dateOfBirth"))?null:_.touched)),e.xp6(14),e.Q6J("ngIf",i.listCountries),e.xp6(29),e.Q6J("ngIf",(null==(f=i.employeeForm.get("department"))?null:f.invalid)&&(null==(f=i.employeeForm.get("department"))?null:f.touched)),e.xp6(6),e.Q6J("ngIf",(null==(y=i.employeeForm.get("designation"))?null:y.invalid)&&(null==(y=i.employeeForm.get("designation"))?null:y.touched)),e.xp6(7),e.Q6J("ngIf",(null==(h=i.employeeForm.get("hireDate"))?null:h.invalid)&&(null==(h=i.employeeForm.get("hireDate"))?null:h.touched)),e.xp6(6),e.Q6J("ngIf",(null==(Z=i.employeeForm.get("salary"))?null:Z.invalid)&&(null==(Z=i.employeeForm.get("salary"))?null:Z.touched)),e.xp6(5),e.Q6J("ngIf",(null==(v=i.employeeForm.get("description"))?null:v.invalid)&&(null==(v=i.employeeForm.get("description"))?null:v.touched)),e.xp6(1),e.Q6J("ngIf",i.employeeId)("ngIfElse",m)}},dependencies:[p.sg,p.O5,r._Y,r.YN,r.Kr,r.Fj,r.wV,r.EJ,r.JJ,r.JL,r.sg,r.u,r.x0,T.A,E.w9,E.jq,d.rH]})}return t})();const le=[{path:"",component:w},{path:"add",component:q},{path:"edit/:id",component:q},{path:"view/:id",component:(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-details-employee"]],decls:2,vars:0,template:function(n,i){1&n&&(e.TgZ(0,"p"),e._uU(1,"details-employee works!"),e.qZA())}})}return t})()},{path:"**",redirectTo:"",pathMatch:"full"}];let re=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.oAB({type:t});static#o=this.\u0275inj=e.cJS({imports:[p.ez,r.u5,r.UX,C.C,A.JX,E.A0,d.Bz.forChild(le)]})}return t})()}}]);