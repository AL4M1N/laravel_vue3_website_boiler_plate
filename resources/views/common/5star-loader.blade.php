<div class="out_loader">
    <div class="img_spinner_loader">
        @if($websiteInfo->image)
        <img src="{{ asset('/images/backend/website/small/' . $websiteInfo->image ) }}" alt="Loading...">
        @else
        <img src="{{ asset('/all-assets/common/logo/cpb/logo.png' ) }}" alt="Loading...">
        @endif
    </div>
</div>

{{-- for blink --}}
{{-- <div class="loader">
    <img class="5star_image" src="{{ asset('/all-assets/common/logo/cpb/cpfivestar.png') }}">
</div> --}}
