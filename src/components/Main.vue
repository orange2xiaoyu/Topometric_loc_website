<script>
import Title from './sections/Title.vue'
import Abstract from './sections/Abstract.vue'
import Markdown from './sections/Markdown.vue'
import BibTeX from './sections/BibTeX.vue'
import Carousel from './sections/Carousel.vue'
import Video from './sections/Video.vue'
import ImageSlider from './sections/ImageSlider.vue'
import ImageSliderInner from './sections/ImageSliderInner.vue'
import ImageSelector from './sections/ImageSelector.vue'
import Echart from './sections/Echart.vue'
import Table from './sections/Table.vue'
import Collapse from './sections/Collapse.vue'
import SeletionForComparison from './sections/SeletionForComparison.vue'
import Comment from './sections/Comment.vue'
import Latex from './sections/Latex.vue'
import Model3D from './sections/Model3D.vue'
import GaussianSplats3D from './sections/GaussianSplats3D.vue'
import Framework from './sections/Framework.vue'
import Mapping from './sections/Mapping.vue'
import Localization from './sections/Localization.vue'

export default {
  components: {
    Title,
    Abstract,
    // Framework,
    // Mapping,
    // Localization,
    // Video,
    
  }
}
</script>

<template>
  <Title/>
  <Abstract/>
  <!-- <Framework/> -->
  <!-- <Mapping/> -->
  <!-- <Localization/> -->
   <!-- <Video/> -->
</template>