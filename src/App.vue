<template>

  <router-view/>

</template>

<script>
iziToast.settings({
  timeout: 2000, // default timeout
  resetOnHover: true,
  // icon: '', // icon class
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
  onOpen: function () {
    console.log('callback abriu!');
  },
  onClose: function () {
    console.log("callback fechou!");
  }
});
</script>


