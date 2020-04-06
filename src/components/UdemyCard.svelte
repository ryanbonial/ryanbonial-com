<script>
  export let imageUrl;
  export let title;
  export let completedDate;
  export let certificateUrl;
</script>

<a href={certificateUrl} target="_blank" rel="noreferrer noopener">
  <div class="bg-white shadow-xl rounded-lg overflow-hidden">
    <div class="bg-cover bg-center h-20 p-12" style="background-image: url({imageUrl})" />

    <div class="m-2 text-sm">
      <p class="text-right text-xs mb-2">{completedDate}</p>
      <h2 class="font-bold h-16 mb-4">{title}</h2>   
    </div>
  </div>
</a>
