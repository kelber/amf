var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/do';
var AuthGuardService = (function () {
    function AuthGuardService(authS, af, router) {
        this.authS = authS;
        this.af = af;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        var _this = this;
        console.log('Route Guards !! :< ');
        return this.authS.isAutenticated().do(function (authenticated) {
            if (!authenticated)
                _this.router.navigate(['/auth/login']);
        });
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AuthService,
        AngularFire,
        Router])
], AuthGuardService);
export { AuthGuardService };
//# sourceMappingURL=../../../../src/app/auth/auth-guard.service.js.map