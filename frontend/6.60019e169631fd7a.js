"use strict";(self.webpackChunksuluhi_admin_frontend=self.webpackChunksuluhi_admin_frontend||[]).push([[6],{4006:(Cn,gt,y)=>{y.d(gt,{CE:()=>R,Fj:()=>F,JJ:()=>Be,JL:()=>xe,UX:()=>vn,Wl:()=>j,_Y:()=>ze,kI:()=>bt,qu:()=>_n,sg:()=>T,u:()=>re,u5:()=>yn,x0:()=>H});var i=y(4650),le=y(6895),mt=y(2076),_t=y(4128),yt=y(4004);let ue=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(i.Qsj),i.Y36(i.SBq))},n.\u0275dir=i.lG2({type:n}),n})(),g=(()=>{class n extends ue{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=i.n5z(n)))(r||n)}}(),n.\u0275dir=i.lG2({type:n,features:[i.qOj]}),n})();const d=new i.OlP("NgValueAccessor"),vt={provide:d,useExisting:(0,i.Gpc)(()=>j),multi:!0};let j=(()=>{class n extends g{writeValue(e){this.setProperty("checked",e)}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=i.n5z(n)))(r||n)}}(),n.\u0275dir=i.lG2({type:n,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(e,r){1&e&&i.NdJ("change",function(s){return r.onChange(s.target.checked)})("blur",function(){return r.onTouched()})},features:[i._Bn([vt]),i.qOj]}),n})();const Ct={provide:d,useExisting:(0,i.Gpc)(()=>F),multi:!0},At=new i.OlP("CompositionEventMode");let F=(()=>{class n extends ue{constructor(e,r,o){super(e,r),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Vt(){const n=(0,le.q)()?(0,le.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",e??"")}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(i.Qsj),i.Y36(i.SBq),i.Y36(At,8))},n.\u0275dir=i.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&i.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[i._Bn([Ct]),i.qOj]}),n})();const Dt=!1;function h(n){return null==n||("string"==typeof n||Array.isArray(n))&&0===n.length}function de(n){return null!=n&&"number"==typeof n.length}const l=new i.OlP("NgValidators"),f=new i.OlP("NgAsyncValidators"),Mt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class bt{static min(t){return function ce(n){return t=>{if(h(t.value)||h(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}(t)}static max(t){return function he(n){return t=>{if(h(t.value)||h(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}(t)}static required(t){return function fe(n){return h(n.value)?{required:!0}:null}(t)}static requiredTrue(t){return function pe(n){return!0===n.value?null:{required:!0}}(t)}static email(t){return function ge(n){return h(n.value)||Mt.test(n.value)?null:{email:!0}}(t)}static minLength(t){return function me(n){return t=>h(t.value)||!de(t.value)?null:t.value.length<n?{minlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static maxLength(t){return function _e(n){return t=>de(t.value)&&t.value.length>n?{maxlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static pattern(t){return function ye(n){if(!n)return w;let t,e;return"string"==typeof n?(e="","^"!==n.charAt(0)&&(e+="^"),e+=n,"$"!==n.charAt(n.length-1)&&(e+="$"),t=new RegExp(e)):(e=n.toString(),t=n),r=>{if(h(r.value))return null;const o=r.value;return t.test(o)?null:{pattern:{requiredPattern:e,actualValue:o}}}}(t)}static nullValidator(t){return null}static compose(t){return Me(t)}static composeAsync(t){return be(t)}}function w(n){return null}function ve(n){return null!=n}function Ce(n){const t=(0,i.QGY)(n)?(0,mt.D)(n):n;if(Dt&&!(0,i.CqO)(t)){let e="Expected async validator to return Promise or Observable.";throw"object"==typeof n&&(e+=" Are you using a synchronous validator where an async validator is expected?"),new i.vHH(-1101,e)}return t}function Ve(n){let t={};return n.forEach(e=>{t=null!=e?{...t,...e}:t}),0===Object.keys(t).length?null:t}function Ae(n,t){return t.map(e=>e(n))}function De(n){return n.map(t=>function Et(n){return!n.validate}(t)?t:e=>t.validate(e))}function Me(n){if(!n)return null;const t=n.filter(ve);return 0==t.length?null:function(e){return Ve(Ae(e,t))}}function L(n){return null!=n?Me(De(n)):null}function be(n){if(!n)return null;const t=n.filter(ve);return 0==t.length?null:function(e){const r=Ae(e,t).map(Ce);return(0,_t.D)(r).pipe((0,yt.U)(Ve))}}function q(n){return null!=n?be(De(n)):null}function Ee(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function Fe(n){return n._rawValidators}function we(n){return n._rawAsyncValidators}function Y(n){return n?Array.isArray(n)?n:[n]:[]}function O(n,t){return Array.isArray(n)?n.includes(t):n===t}function Oe(n,t){const e=Y(t);return Y(n).forEach(o=>{O(e,o)||e.push(o)}),e}function Ne(n,t){return Y(t).filter(e=>!O(n,e))}class Se{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=L(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=q(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class u extends Se{get formDirective(){return null}get path(){return null}}class p extends Se{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Ge{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Be=(()=>{class n extends Ge{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(p,2))},n.\u0275dir=i.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&i.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[i.qOj]}),n})(),xe=(()=>{class n extends Ge{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(u,10))},n.\u0275dir=i.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,r){2&e&&i.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[i.qOj]}),n})();function Pe(n,t){return n?`with name: '${t}'`:`at index: ${t}`}const z=!1,C="VALID",S="INVALID",v="PENDING",V="DISABLED";function J(n){return(G(n)?n.validators:n)||null}function K(n,t){return(G(t)?t.asyncValidators:n)||null}function G(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}function Ie(n,t,e){const r=n.controls;if(!(t?Object.keys(r):r).length)throw new i.vHH(1e3,z?function Nt(n){return`\n    There are no form controls registered with this ${n?"group":"array"} yet. If you're using ngModel,\n    you may want to check next tick (e.g. use setTimeout).\n  `}(t):"");if(!r[e])throw new i.vHH(1001,z?function St(n,t){return`Cannot find form control ${Pe(n,t)}`}(t,e):"")}function ke(n,t,e){n._forEachChild((r,o)=>{if(void 0===e[o])throw new i.vHH(1002,z?function Gt(n,t){return`Must supply a value for form control ${Pe(n,t)}`}(t,o):"")})}class B{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===C}get invalid(){return this.status===S}get pending(){return this.status==v}get disabled(){return this.status===V}get enabled(){return this.status!==V}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Oe(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Oe(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Ne(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Ne(t,this._rawAsyncValidators))}hasValidator(t){return O(this._rawValidators,t)}hasAsyncValidator(t){return O(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=v,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=V,this.errors=null,this._forEachChild(r=>{r.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=C,this._forEachChild(r=>{r.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===C||this.status===v)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?V:C}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=v,this._hasOwnPendingAsyncValidator=!0;const e=Ce(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){let e=t;return null==e||(Array.isArray(e)||(e=e.split(".")),0===e.length)?null:e.reduce((r,o)=>r&&r._find(o),this)}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new i.vpe,this.statusChanges=new i.vpe}_calculateStatus(){return this._allControlsDisabled()?V:this.errors?S:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v)?v:this._anyControlsHaveStatus(S)?S:C}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){G(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=function Bt(n){return Array.isArray(n)?L(n):n||null}(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=function xt(n){return Array.isArray(n)?q(n):n||null}(this._rawAsyncValidators)}}class A extends B{constructor(t,e,r){super(J(e),K(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){ke(this,!0,t),Object.keys(t).forEach(r=>{Ie(this,!0,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{const o=this.controls[r];o&&o.patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,o)=>{r.reset(t[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const[e,r]of Object.entries(this.controls))if(this.contains(e)&&t(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,r,o)=>((r.enabled||this.disabled)&&(e[o]=r.value),e))}_reduceChildren(t,e){let r=t;return this._forEachChild((o,s)=>{r=e(r,o,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}}class Te extends A{}const m=new i.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>D}),D="always";function x(n,t){return[...t.path,n]}function M(n,t,e=D){Q(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||"always"===e)&&t.valueAccessor.setDisabledState?.(n.disabled),function It(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&He(n,t)})}(n,t),function Tt(n,t){const e=(r,o)=>{t.valueAccessor.writeValue(r),o&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function kt(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&He(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function Pt(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function P(n,t,e=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),k(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function I(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function Q(n,t){const e=Fe(n);null!==t.validator?n.setValidators(Ee(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=we(n);null!==t.asyncValidator?n.setAsyncValidators(Ee(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const o=()=>n.updateValueAndValidity();I(t._rawValidators,o),I(t._rawAsyncValidators,o)}function k(n,t){let e=!1;if(null!==n){if(null!==t.validator){const o=Fe(n);if(Array.isArray(o)&&o.length>0){const s=o.filter(a=>a!==t.validator);s.length!==o.length&&(e=!0,n.setValidators(s))}}if(null!==t.asyncValidator){const o=we(n);if(Array.isArray(o)&&o.length>0){const s=o.filter(a=>a!==t.asyncValidator);s.length!==o.length&&(e=!0,n.setAsyncValidators(s))}}}const r=()=>{};return I(t._rawValidators,r),I(t._rawAsyncValidators,r),e}function He(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function je(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}function Le(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const E=class extends B{constructor(t=null,e,r){super(J(e),K(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),G(e)&&(e.nonNullable||e.initialValueIsDefault)&&(this.defaultValue=Le(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){je(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){je(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){Le(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};let qe=(()=>{class n extends u{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return x(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=i.n5z(n)))(r||n)}}(),n.\u0275dir=i.lG2({type:n,features:[i.qOj]}),n})(),ze=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=i.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})(),Ke=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({}),n})();const ne=new i.OlP("NgModelWithFormControlWarning"),Zt={provide:u,useExisting:(0,i.Gpc)(()=>T)};let T=(()=>{class n extends u{constructor(e,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new i.vpe,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(k(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){const r=this.form.get(e.path);return M(r,e,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){P(e.control||null,e,!1),function jt(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,r){this.form.get(e.path).setValue(r)}onSubmit(e){return this.submitted=!0,function Ue(n,t){n._syncPendingControls(),t.forEach(e=>{const r=e.control;"submit"===r.updateOn&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(e),"dialog"===e?.target?.method}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_updateDomValue(){this.directives.forEach(e=>{const r=e.control,o=this.form.get(e.path);r!==o&&(P(r||null,e),(n=>n instanceof E)(o)&&(M(o,e,this.callSetDisabledState),e.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){const r=this.form.get(e.path);(function Re(n,t){Q(n,t)})(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){const r=this.form.get(e.path);r&&function Ht(n,t){return k(n,t)}(r,e)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Q(this.form,this),this._oldForm&&k(this._oldForm,this)}_checkFormPresent(){}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(l,10),i.Y36(f,10),i.Y36(m,8))},n.\u0275dir=i.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(e,r){1&e&&i.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[i._Bn([Zt]),i.qOj,i.TTD]}),n})();const Xt={provide:u,useExisting:(0,i.Gpc)(()=>H)};let H=(()=>{class n extends qe{constructor(e,r,o){super(),this._parent=e,this._setValidators(r),this._setAsyncValidators(o)}_checkParentType(){et(this._parent)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(u,13),i.Y36(l,10),i.Y36(f,10))},n.\u0275dir=i.lG2({type:n,selectors:[["","formGroupName",""]],inputs:{name:["formGroupName","name"]},features:[i._Bn([Xt]),i.qOj]}),n})();const en={provide:u,useExisting:(0,i.Gpc)(()=>R)};let R=(()=>{class n extends u{constructor(e,r,o){super(),this._parent=e,this._setValidators(r),this._setAsyncValidators(o)}ngOnInit(){this._checkParentType(),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return x(null==this.name?this.name:this.name.toString(),this._parent)}_checkParentType(){et(this._parent)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(u,13),i.Y36(l,10),i.Y36(f,10))},n.\u0275dir=i.lG2({type:n,selectors:[["","formArrayName",""]],inputs:{name:["formArrayName","name"]},features:[i._Bn([en]),i.qOj]}),n})();function et(n){return!(n instanceof H||n instanceof T||n instanceof R)}const tn={provide:p,useExisting:(0,i.Gpc)(()=>re)};let re=(()=>{class n extends p{set isDisabled(e){}constructor(e,r,o,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.update=new i.vpe,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=function ee(n,t){if(!t)return null;let e,r,o;return Array.isArray(t),t.forEach(s=>{s.constructor===F?e=s:function Ut(n){return Object.getPrototypeOf(n.constructor)===g}(s)?r=s:o=s}),o||r||e||null}(0,s)}ngOnChanges(e){this._added||this._setUpControl(),function X(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return x(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(e){return new(e||n)(i.Y36(u,13),i.Y36(l,10),i.Y36(f,10),i.Y36(d,10),i.Y36(ne,8))},n.\u0275dir=i.lG2({type:n,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[i._Bn([tn]),i.qOj,i.TTD]}),n})(),ht=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[Ke]}),n})();class ft extends B{constructor(t,e,r){super(J(e),K(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[this._adjustIndex(t)]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,r={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(t,e={}){let r=this._adjustIndex(t);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,r={}){let o=this._adjustIndex(t);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),e&&(this.controls.splice(o,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){ke(this,!1,t),t.forEach((r,o)=>{Ie(this,!1,o),this.at(o).setValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((r,o)=>{this.at(o)&&this.at(o).patchValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((r,o)=>{r.reset(t[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_adjustIndex(t){return t<0?t+this.length:t}_syncPendingControls(){let t=this.controls.reduce((e,r)=>!!r._syncPendingControls()||e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,r)=>{t(e,r)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}_find(t){return this.at(t)??null}}function pt(n){return!!n&&(void 0!==n.asyncValidators||void 0!==n.validators||void 0!==n.updateOn)}let _n=(()=>{class n{constructor(){this.useNonNullable=!1}get nonNullable(){const e=new n;return e.useNonNullable=!0,e}group(e,r=null){const o=this._reduceControls(e);let s={};return pt(r)?s=r:null!==r&&(s.validators=r.validator,s.asyncValidators=r.asyncValidator),new A(o,s)}record(e,r=null){const o=this._reduceControls(e);return new Te(o,r)}control(e,r,o){let s={};return this.useNonNullable?(pt(r)?s=r:(s.validators=r,s.asyncValidators=o),new E(e,{...s,nonNullable:!0})):new E(e,r,o)}array(e,r,o){const s=e.map(a=>this._createControl(a));return new ft(s,r,o)}_reduceControls(e){const r={};return Object.keys(e).forEach(o=>{r[o]=this._createControl(e[o])}),r}_createControl(e){return e instanceof E||e instanceof B?e:Array.isArray(e)?this.control(e[0],e.length>1?e[1]:null,e.length>2?e[2]:null):this.control(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),yn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:m,useValue:e.callSetDisabledState??D}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[ht]}),n})(),vn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:ne,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:m,useValue:e.callSetDisabledState??D}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[ht]}),n})()}}]);