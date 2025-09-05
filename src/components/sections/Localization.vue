<script setup>
import { ref, onMounted } from 'vue';
</script>


<template>
  <div>
    <el-divider />
    <el-row justify="center">
      <h1 class="section-title">Topometric Localization Result</h1>
    </el-row>
    
    <el-row justify="center">
      <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
        <img src="/Topometric_loc_website/topometric_result/f4.svg" alt="SVG Image" class="responsive-image"/>
         
      </el-col>
    </el-row>

    <el-row justify="center">
      <h1 class="section-title">Topometric Localization VS ORB-SLAM3</h1>
    </el-row>
    
    <el-row justify="center" style="margin-bottom: 10px;">
      <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Method</th>
              <th>Metric</th>
              <th>Seq 1</th>
              <th>Seq 2</th>
              <th>Seq 3</th>
              <th>Seq 4</th>
              <th>Seq 5</th>
              <th>Seq 6</th>
              <th>Seq 7</th>
              <th>Seq 8</th>
              <th>Seq 9</th>
              <th>Seq 10</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="2">ORB-SLAM3 (Stereo)</td>
              <td>Trajectory Length (m)</td>
              <td>372.7</td>
              <td>804.3</td>
              <td>170</td>
              <td>732.6</td>
              <td>812.7</td>
              <td>1485.3</td>
              <td>559</td>
              <td>294.2</td>
              <td>1423.9</td>
              <td>830.9</td>
            </tr>
            <tr>
              <td>Initial Localization Time (ms)</td>
              <td>794</td>
              <td>1058</td>
              <td>1077</td>
              <td>978</td>
              <td>1104</td>
              <td>1171</td>
              <td>1176</td>
              <td>894</td>
              <td>993</td>
              <td>1064</td>
            </tr>
            <tr>
              <td rowspan="2">Topometric map (Mono, ours)</td>
              <td>Initial Localization Time (ms)</td>
              <td><strong>1.54</strong></td>
              <td><strong>0.13</strong></td>
              <td><strong>0.65</strong></td>
              <td><strong>0.15</strong></td>
              <td><strong>2.02</strong></td>
              <td><strong>0.28</strong></td>
              <td><strong>0.12</strong></td>
              <td><strong>0.25</strong></td>
              <td><strong>0.21</strong></td>
              <td><strong>0.18</strong></td>
            </tr>
            <tr>
              <td>Localization Error (m)</td>
              <td>4.03</td>
              <td><strong>3.74</strong></td>
              <td>5.19</td>
              <td><strong>3.59</strong></td>
              <td><strong>3.56</strong></td>
              <td>6.33</td>
              <td><strong>3.65</strong></td>
              <td><strong>4.8</strong></td>
              <td><strong>4.63</strong></td>
              <td><strong>3.89</strong></td>
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

h1 {
  text-align: center;
  margin-top: 20px;
}

p {
  /* text-align: center; */
  margin-top: 15px;
  font-size: 1.0em;
}
.custom-table{
  font-size: 15px;
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  display: table;
  text-align: center;
}
tr{
  height: 40px;
}
</style>

