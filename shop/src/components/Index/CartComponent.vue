<template>
  <div class="q-pa-md">
    <div class="image1"></div>
    <div class="image2"></div>
    <div class="image3"></div>
    <div class="clear"></div> <!-- Add this clearing element -->

    <q-card class="index-card" flat bordered>
      <q-img src="https://media.istockphoto.com/id/454321895/es/foto/sombrero-colombiano.jpg?s=1024x1024&w=is&k=20&c=ftIfebyr5A7izNJjeD_eQ4azRFzuF_KqKVq_W4uCzBE=" />

      <q-card-section>

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            Sombrero Vuelteao
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="attach_money" />
            250.000
          </div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          Descripcion
        </div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn class="" flat round icon="delete" color="red" />
        <q-btn flat color="black">
          Eliminar
        </q-btn>
        <q-btn flat round icon="shopping_bag" color="green" />
        <q-btn flat color="black">
          Comprar
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<style scoped>

.image1 {
  width: 60%;
  height: 80vh;
  background-image: url('https://images.pexels.com/photos/4792079/pexels-photo-4792079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  /* Replace with your image URL */
  background-size: cover;
  float: left;
}

.image2,
.image3 {
  width: 40%;
  height: 40vh;
  background-size: cover;
  background-position: center;
  float: left;
}

.image2 {
  background-image: url('https://images.pexels.com/photos/6850579/pexels-photo-6850579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  /* Replace with your image URL */
}

.image3 {
  background-image: url('https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  /* Replace with your image URL */
}

.index-card {
  position: absolute;
  margin-left: 0.5%;
  margin-top: 0.5%;
  min-width: 20%;
  max-width: 25%;
}

.index-card2 {
  position: relative;
  margin-left: 0.5%;
  margin-top: 0.5%;
  min-width: 20%;
  max-width: 25%;
}
</style>
