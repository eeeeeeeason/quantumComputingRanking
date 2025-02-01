<template>
  <div class="container">
    <h1>2025 Best Quantum Computers: Official Ranking of Top Quantum Computing Systems</h1>
    <h2>World's Most Powerful Quantum Computers: Performance Comparison</h2>
    <p>In the rapidly evolving field of quantum computing, understanding the performance metrics of different quantum systems is crucial. Our website provides a detailed ranking of the leading quantum computing platforms, showcasing essential parameters that help you make informed decisions for your quantum computing needs.</p>
    
    <!-- Enhanced Ranking Table -->
    <h2>2025 Quantum Computer Rankings: Top 10 Systems Compared</h2>
    <p class="ranking-subtitle">Comprehensive analysis of the <strong>best quantum computing platforms</strong> based on verified technical specifications:</p>
    <h3>Performance Metrics Overview</h3>
    <div class="matrixContainer">
      <div class="matrixItem">
        <h3>Qubit Count</h3>
        <p>The number of physical and logical qubits supported by the system is a fundamental metric. A higher qubit count typically indicates stronger computational capabilities and greater potential for complex calculations.</p>
      </div>
      <div class="matrixItem">
        <h3>Gate Fidelity</h3>
        <p>Gate fidelity measures the average precision of single and two-qubit operations. High fidelity (e.g., 99.9%) ensures reliable quantum operations, reducing the likelihood of errors during computations.</p>
      </div>
      <div class="matrixItem">
        <h3>Coherence Time</h3>
        <p>Coherence time refers to the average duration that a qubit can maintain its quantum state, defined by T1 and T2 values. Longer coherence times are essential for performing multiple operations without losing information.</p>
      </div>
      <div class="matrixItem">
        <h3>Quantum Volume</h3>
        <p>Quantum volume is a comprehensive metric for assessing the overall capability of a quantum computer. It combines the number of qubits, gate fidelity, and operability within quantum computation. The larger the quantum volume, the stronger the system's ability.</p>
      </div>
      <div class="matrixItem">
        <h3>Connectivity</h3>
        <p>The connectivity of qubits represents the topological arrangement of connections between them, which can be linear, grid-like, or custom architectures. Improved connectivity enhances the capability for complex quantum algorithms.</p>
      </div>
      <div class="matrixItem">
        <h3>Error Rates</h3>
        <p>Error rates are critical for assessing the accuracy of quantum operations and measurements. Lower error rates contribute to more reliable computations and trustworthiness of results.</p>
      </div>
      <div class="matrixItem">
        <h3>Calibration Time</h3>
        <p>Calibration time indicates the average duration it takes for a system to become operational from the moment it starts. Shorter calibration times lead to quicker utilization, enhancing the overall efficiency of the system.</p>
      </div>
      <div class="matrixItem">
        <h3>Scalability</h3>
        <p>Scalability assesses how well the hardware architecture supports future expansion. A scalable system can accommodate growing computational demands without requiring complete redesigns.</p>
      </div>
      
    </div>

    <!-- 发布时间 -->
    <h2>Rankings Version(Superconducting Quantum Computer): 2025-01-31</h2>
    <!-- 分别是Rank, system name, Qubit count, gate fidelity, coherence time, Quantum Volume, conectivity, error rates, Calibration Time, Error Rates, Calibration Time, Scalability -->
    <el-table :data="tableData.detail">
      <el-table-column type="expand" width="20">
        <!-- 存储一些细节信息，避免反复去查看原文 -->
        <template #default="{ row }">
          features: <el-tag v-for="itemrowD in row.referenceDetail" :key="itemrowD">{{ itemrowD }}</el-tag>
          <p  v-for="rowItm in row.reference" :key="rowItm">
            <a :href="rowItm" rel="noFollow">{{ rowItm }}</a>            
          </p>
        </template>
      </el-table-column>
      <el-table-column prop="rank" label="Rank" width="70"></el-table-column>
      <el-table-column prop="systemName" label="System Name" width="200"></el-table-column>
      <el-table-column prop="qubitCount" label="Qubit Count" width="120"></el-table-column>
      <el-table-column prop="gateFidelity" label="Gate Fidelity(single-qubit/two-qubits Gate)" width="220"></el-table-column>
      <el-table-column prop="coherenceTimeT1" label="Coherence Time(T1)" width="100"></el-table-column>
      <el-table-column prop="coherenceTimeT2" label="Coherence Time(T2)" width="100"></el-table-column>
      <!-- <el-table-column prop="quantumVolume" label="Quantum Volume" width="150"></el-table-column> -->
      <el-table-column prop="connectivity" label="Connectivity" width="150"></el-table-column>
      <el-table-column prop="organization" label="Organization" width="150"></el-table-column>
    </el-table>

    <h2>Conclusion</h2>
    <p>The ability to compare these metrics facilitates informed decision-making for potential users and stakeholders interested in adopting quantum technologies. As quantum computing evolves at an unprecedented pace, our rankings not only highlight current leading systems but also reflect emerging trends that are shaping the future of quantum computing globally.</p>

    <p>Our platform is committed to providing ongoing updates and insights into the evolving landscape of quantum computing. By enabling users to analyze and compare these cutting-edge systems, we support the transition into a new era of technology that leverages quantum mechanics for solving complex problems across various disciplines, including cryptography, materials science, and artificial intelligence.</p>

    <p>Stay tuned for further updates and advancements within our Quantum Computing Rankings, and join us in exploring the possibilities that quantum technologies hold for the future.</p>
    <br />
    <h2>FAQ:</h2>
    <h2>Why Our Quantum Computer Rankings Matter</h2>
    <p>As quantum computing enters its commercial phase in 2025, identifying the <strong>best quantum computer systems</strong> requires careful evaluation of multiple technical parameters. Our rankings of the <strong>top 10 quantum computers</strong> provide:</p>
    <ul class="benefits-list">
      <li>✅ Side-by-side comparison of leading quantum processors</li>
      <li>✅ Verified performance metrics from published research</li>
      <li>✅ Analysis of both superconducting and photonic systems</li>
      <li>✅ Regular updates with latest quantum advancements</li>
    </ul>

    <!-- New Industry Trends Section -->
    <h2>2025 Quantum Computing Trends</h2>
    <div class="trends-container">
      <div class="trend-card">
        <h3>Error Correction Breakthroughs</h3>
        <p>Leading systems like Google Willow now implement real-time error correction, a critical feature for <strong>reliable quantum computations</strong>.</p>
      </div>
      <div class="trend-card">
        <h3>Scalability Solutions</h3>
        <p>IBM's heavy-hexagonal architecture and Rigetti's 3D signal delivery demonstrate new approaches to <strong>quantum system scalability</strong>.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Quantum Computing Rankings | 2025 Best Quantum Computers',
  meta: [
    { name: 'description', content: 'Explore our comprehensive rankings of quantum computing systems! Analyze key performance metrics such as qubit count, gate fidelity, coherence time, connectivity, error rates, calibration time, and scalability. Stay ahead in the quantum computing landscape with our insightful data.' },
    { name: 'keywords', content: 'quantum computing, qubit count, gate fidelity, coherence time, quantum system rankings, quantum performance metrics, quantum connectivity, error rates, calibration time, scalability in quantum computing' }
  ]
})

const tableData = reactive({
  detail:[
    {
      rank: 1,
      systemName: 'ibm_fez-Heron r2',
      qubitCount: 156,
      gateFidelity: '99.956%/99.715%',
      coherenceTimeT1: '136.52 µs',
      coherenceTimeT2: '78.58 µs',
      quantumVolume: 512,
      connectivity: '1 to 2 or 3 qubit(heavy-hexagonal lattice)',
      organization: 'IBM Quantum',
      reference: ['https://arxiv.org/html/2410.00916v1#bib.bib43','https://www.ibm.com/quantum/blog/quantum-volume-256','https://docs.quantum.ibm.com/guides/processor-types#egret'],
      referenceDate: 'July 3, 2024',
      referenceDetail: ['high-density flex cabling','big-size','new TLS mitigation feature','heavy-hexagonal lattice']
    },
    {
      rank: 2,
      systemName: 'ibm_torino-Heron r1',
      qubitCount: 133,
      gateFidelity: '99.924%/99.523%',
      coherenceTimeT1: '157.48 µs',
      coherenceTimeT2: '131.87 µs',
      quantumVolume: 512,
      connectivity: '1 to 2 or 3 qubit(heavy-hexagonal lattice)',
      organization: 'IBM Quantum',
      reference: ['https://arxiv.org/html/2410.00916v1#bib.bib43','https://www.ibm.com/quantum/blog/quantum-volume-256','https://docs.quantum.ibm.com/guides/processor-types#egret'],
      referenceDate: 'July 3, 2024',
      referenceDetail: ['new TLS mitigation feature','heavy-hexagonal lattice']
    },
    {
      rank: 3,
      systemName: 'ibm_kyiv-Eagle r3',
      qubitCount: 127,
      gateFidelity: '99.945%/98.84%',
      coherenceTimeT1: '263.38 µs',
      coherenceTimeT2: '146.82 µs',
      quantumVolume: '-',
      connectivity: '1 to 2 or 3 qubit(heavy-hexagonal lattice)',
      organization: 'IBM Quantum',
      reference: ['https://arxiv.org/html/2410.00916v1#bib.bib43','https://www.ibm.com/quantum/blog/quantum-volume-256','https://docs.quantum.ibm.com/guides/processor-types#egret'],
      referenceDate: 'July 3, 2024',
      referenceDetail: ['readout multiplexing', 'space-efficient qubit-qubit couplers', 'flip-chip technology']
    },
    {
      rank:4,
      systemName: 'google-willow',
      qubitCount: '105/72',
      gateFidelity: '99.935%/99.48%',
      coherenceTimeT1: '68 µs',
      coherenceTimeT2: '-',
      quantumVolume: '-',
      connectivity: '3.47(4-way typical)',
      organization: 'Google Quantum AI',
      reference: ['https://arxiv.org/pdf/2408.13687','https://www.oezratty.net/wordpress/2024/inside-google-willow/'],
      referenceDate: 'July 3, 2024',
      referenceDetail: ['real-time error correction(72-qubit-chip)', 'single qubit logical gate with the 105-qubits chip']
    },
    {
      rank: 5,
      systemName: 'Zuchongzhi 3.0',
      qubitCount: 105,
      gateFidelity: '99.90%/99.62%',
      coherenceTimeT1: '-',
      coherenceTimeT2: '-',
      quantumVolume: '-',
      connectivity: '1 to 2 or 3 qubit',
      organization: 'University of Science and Technology of China',
      reference: ['https://arxiv.org/pdf/2412.11924'],
      referenceDate: 'Dec 16, 2024',
      referenceDetail: ['superior performance']
    },
    {
      rank: 6,
      systemName: 'Baihua',
      qubitCount: 116,
      gateFidelity: '99.60%/97.6%',
      coherenceTimeT1: '75.83',
      coherenceTimeT2: '~20',
      quantumVolume: '-',
      connectivity: '1 to 2 or 3 qubit',
      organization: 'Beijing Academy of Quantum Information Sciences',
      reference: ['https://arxiv.org/pdf/2412.11924'],
      referenceDate: 'Oct 10, 2024',
      referenceDetail: ['superior performance']
    },
    {
      rank: 7,
      systemName: 'Ankaa™-3 System',
      qubitCount: 84,
      gateFidelity: '99.90%/99.62%',
      coherenceTimeT1: '-',
      coherenceTimeT2: '-',
      quantumVolume: '-',
      connectivity: '-',
      organization: 'Riggeti Computing, Inc.',
      reference: ['https://investors.rigetti.com/news-releases/news-release-details/rigetti-computing-launches-84-qubit-ankaatm-3-system-achieves'],
      referenceDate: 'Dec 23, 2024',
      referenceDetail: ['3D signal delivery','industry-leading chip architecture','new cryogenic hardware design']
    },
    {
      rank: 8,
      systemName: 'OriginQ-WuKong',
      qubitCount: 72,
      gateFidelity: '99.70%/96.82%',
      coherenceTimeT1: '19.00',
      coherenceTimeT2: '5.72',
      quantumVolume: '-',
      connectivity: '4-way typical',
      organization: 'Origin Quantum',
      reference: ['https://console.originqc.com.cn/'],
      referenceDate: 'Jan 31, 2025',
      referenceDetail: []
    },
    {
      rank: 9,
      systemName: 'SpinQ-C20',
      qubitCount: 20,
      gateFidelity: '99.90%/98%',
      coherenceTimeT1: '20-100',
      coherenceTimeT2: '20-100',
      quantumVolume: '-',
      connectivity: '1 to 2 or 3 qubit',
      organization: 'SpinQ Technology Co., Ltd.',
      reference: ['https://www.spinquanta.com/products-services/quantumChip'],
      referenceDate: 'Jan 31, 2025',
      referenceDetail: []
    },
    {
      rank: 10,
      systemName: 'IQM-Spark',
      qubitCount: 5,
      gateFidelity: '99.90%/99%',
      coherenceTimeT1: '-',
      coherenceTimeT2: '-',
      quantumVolume: '-',
      connectivity: '1D chain',
      organization: 'IQM Finland Oy',
      reference: ['https://www.meetiqm.com/products/iqm-spark','https://link.springer.com/content/pdf/10.1140/epjqt/s40507-024-00243-z.pdf'],
      referenceDate: 'Jan 31, 2025',
      referenceDetail: []
    }
    
  ]
})


</script>

<style scoped lang="less">
/* Add your custom styles here */
h1{
  color: #1e3a8ab3;
  text-align: center;
}
.container{
  padding: 0 20px;
  width: 1200px;
  margin: 0 auto;

  .matrixContainer{
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    .matrixItem{
      width: 240px;
      height: 300px;
      margin-right: 10px;
      border-radius: 5px;
      border: 1px solid #1e3a8ab3;
      box-sizing: border-box;
      padding: 10px;
      font-size: 15px;
      margin-bottom: 10px;
      h3{
        font-size: 18px;
        margin-bottom: 10px;
        margin-top: 0;
      }
    }
  }
  .el-table{
    :deep(.el-tag){
      margin-right: 10px;
    }
  }
}

// 移动端样式
@media screen and (max-width: 768px) {
  .container{
    padding: 0 10px;
    width: 100%;
    .matrixContainer{
      .matrixItem{
        width: 100%;
        height: auto;
        margin-right: 0;
        margin-bottom: 20px;
      }
    }
  }
}
</style>