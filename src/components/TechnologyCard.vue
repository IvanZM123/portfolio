<template>
  <div
    :class="`card border-0 bg-${technology.color}-transparent`"
    style="border-radius: 20px"
  >
    <div class="card-body">
      <div class="row my-2">
        <div class="col-12 col-md-3">
          <img
            :src="technology.picture"
            class="d-block mx-auto"
            alt="Picture"
          />
        </div>
        <div class="col-12 col-md-9">
          <h4>{{ technology.name }}</h4>
          <p class="m-0">{{ technology.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    technology: Object,
  },
})
export default class TechnologyCard extends Vue {}
</script>
