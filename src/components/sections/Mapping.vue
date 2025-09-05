<script setup>
import { ref, onMounted } from 'vue';
</script>


<template>
  <div>
    <el-divider />
    <el-row justify="center">
      <h1 class="section-title">Topometric Mapping Result</h1>
    </el-row>
    
    <el-row justify="center" style="margin-bottom: 20px;">
      <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
        <img src="/Topometric_loc_website/topometric_result/f3.svg" alt="SVG Image" class="responsive-image"/>
        <!-- <p>
          
        </p> -->
      </el-col>
    </el-row>

    <el-row justify="center">
      <h1 class="section-title">Topometric Mapping VS ORB-SLAM3</h1>
    </el-row>

    <el-row justify="center" style="margin-bottom: 30px;">
      <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Method</th>
              <th>CPU Usage (%)</th>
              <th>Map Size (M)</th>
              <th>Camera Frame</th>
              <th>Key Frame</th>
              <th>Vertex Nums</th>
              <th>Edge Nums</th>
              <th>APE (m)</th>
              <th>RPE (m)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Semi-metric map (Mono)</td>
              <td>1.3</td>
              <td>56.1</td>
              <td>-</td>
              <td>-</td>
              <td>1417</td>
              <td>1567</td>
              <td>121.2</td>
              <td>9.4</td>
            </tr>
            <tr>
              <td>ORB-SLAM3 (Stereo)</td>
              <td>40.57</td>
              <td>259</td>
              <td>14717</td>
              <td>715</td>
              <td>-</td>
              <td>-</td>
              <td>3.86</td>
              <td><strong>0.96</strong></td>
            </tr>
            <tr>
              <td>Topometric map (Mono, ours)</td>
              <td><strong>1.3</strong></td>
              <td><strong>56.1</strong></td>
              <td>-</td>
              <td>-</td>
              <td>1417</td>
              <td>1567</td>
              <td><strong>3.6</strong></td>
              <td>1.4</td>
            </tr>
          </tbody>
        </table>
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
    margin-bottom: 20px;
}

p {
  /* text-align: center; */
  margin-top: 15px;
  font-size: 1.0em;
}
.custom-table{
  font-size: 15px;
  text-align: center;
}
tr{
  height: 40px;
}
</style>

