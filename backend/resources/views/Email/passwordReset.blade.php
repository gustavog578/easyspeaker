@component('mail::message')
# Pedido de cambio de clave

Click en el boton de abajo para cambiar tu clave

@component('mail::button', ['url' => 'http://localhost:4200/response-password-reset?token='.$token])
Cambiar Clave
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
