import { NgModule } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';
import { RecipeResolverService } from './recipes/recipe-resolver.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

@NgModule({
    providers: [
        RecipeService,
        RecipeResolverService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
    ]
})
export class CoreModule {}
