<script>
  export let imageUrl = 'images/udemy_logo.png';
  export let title;
  export let completedDate;
  export let certificateUrl;
</script>

<a href={certificateUrl} target="_blank" rel="noreferrer noopener">
  <div class="udemy-card  hover:border-gray-300 bg-white overflow-hidden">
    <div class="bg-cover bg-center h-32" style="background-image: url({imageUrl})">
      <div class="h-32 p-12 bg-mouseover-blur"></div>
    </div>

    <div class="m-2 text-sm">
      <p class="text-right text-xs mb-2">{completedDate}</p>
      <h2 class="font-semibold h-16 mb-4">{title}</h2>
    </div>
  </div>
</a>
