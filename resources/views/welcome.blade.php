<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {{-- @include('common.cpbd-icon') --}}

    @vite('resources/css/common/preloader.css')
</head>
<body>
    <div id="app">
        <div v-if="preloader" class="loader">
            <div class="out_loader">
                <div class="img_spinner_loader"></div>
            </div>
        </div>
        <index-component></index-component>
    </div>

    @vite('resources/js/website/js/app.js')
    <div class="fb-customerchat messenger-icon" attribution=setup_tool page_id="102603987981724">
    </div>
</body>
</html>
