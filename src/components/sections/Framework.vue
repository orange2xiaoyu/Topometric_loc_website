<script setup>
import { ref, onMounted } from 'vue';
</script>


<template>
  <div>
    <el-divider />
    <el-row justify="center">
      <h1 class="section-title">Framework</h1>
    </el-row>
    
    <el-row justify="center">
      <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
        <img src="/Topometric_loc_website/topometric_result/f2.svg" alt="SVG Image" class="responsive-image"/>
        <p>
          Visual and vestibular cues are integrated to construct a semi-metric cognitive map. 
          Local view cells encode visual features, while integration and calibration cells support the formation of head direction and grid cell models for orientation and spatial representation. 
          RC-HMM incorporates road networks, refining the map with global and local constraints. 
          The neurodynamics of grid and head direction cells enable visual localization within the topometric map.
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.responsive-image {
  max-width: 100%; /* 最大宽度 */
  height: auto; /* 保持原始宽高比 */
  display: block;
  margin: 0 auto;
}
.section-title{
    margin-bottom: 10px;
}

p {
  /* text-align: center; */
  margin-top: 15px;
  font-size: 1.0em;
}
</style>

