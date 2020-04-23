<template>
  <div>
    <!-- <h1>测试</h1>
    <img src="../../static/images/icon3.png" alt="">
    <img :src="imgUrl" alt="">
    <span class="bgimg"></span> -->
    <div class="app">
      <div class="Container">
        <!-- 左边布局 -->
        <div class="loutLeft">
          <div class="SchoolsNumberdata">
            <div class="titleIMG">
              <img src="../../static/images/icon1.png" alt="">
              <span>学校数量</span>
            </div>
            <div class="SchoolsN1l">
              <span v-for="(item,i) of SchoolsNumber" :key="i" v-text="`${item}`"></span>
            </div>
          </div>

          <div class="StudentdetailsData">
            <div class="titleIMG">
              <img src="../../static/images/icon1.png" alt="">
              <span>实时动态</span>
            </div>

            <div class="StudentNumber">
              <p class="iconfont icon-shuxian">学生数量</p>
              <span v-for="(item,i) of StudentNumber" :key="i" v-text="`${item}`"></span>
            </div>
            <div  class="StudentNumber">
              <p class="iconfont icon-shuxian">完成课堂数量</p>
               <span v-for="(item,i) of ClassroomNumber" :key="i" v-text="`${item}`"></span>
            </div>
            <div class="StudentNumber">
              <p class="iconfont icon-shuxian">完成课堂活动量</p>
               <span v-for="(item,i) of ClassroomActivity" :key="i" v-text="`${item}`"></span>
            </div>
          </div>
          <div class="SchoolList">
            <div class="titleIMG">
              <img src="../../static/images/icon1.png" alt="">
              <span>已加入学校名单</span>
            </div>
            <div class="DataTable">
              <div class="dataListTOP">
                <span class="SerialNumber">序号</span>
                <span class="SchoolsName">学校名</span>
                <span class="STNumbers">参与师生人数</span>
                <span class="AddTime">加入时间</span>
              </div>
              <div class="DataTableScoll">
                <!-- 循环 -->
                <div class="dataList" v-for="(item,index) in joinSchools" :key="index">
                  <span class="SerialNumber">{{index+1}}</span>
                  <span @click="$router.push({path:'/DataStatistics',query:{name:item.name}})" class="SchoolsName">{{item.name}}</span>
                  <span class="STNumbers">{{item.tsCount}}</span>
                  <span class="AddTime">{{item.joinTime}}</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        <!-- 中间布局 -->

        <div class="loutCenter">
          <div class="loutCtitle">
            <div class="imgDiv">
              <h3>广西中职课堂教学质量监控系统</h3>
            </div>
          </div>

          <div class="StateSwitching">
            <div :class="bgSwitch?'bgSwitch1':'bgSwitch2'">
              <span class="left" @click="$router.push({path:'/'})">总体情况</span>
              <span class="right" @click="$router.push({path:'/classroom'})">课堂监控</span>
            </div>
          </div>
          <div class="ParticipationDetails">
            <div class="Details1L">
              <img src="../../static/images/icon3.png" alt="">
              <span>参与师生数量</span>

            </div>
            <div class="Details2L">
              <span :style="`background: -webkit-linear-gradient(left, #004d92 ${bgcolorA},#67affe ${bgcolorB})`"></span>
              <p >多-少</p>
            </div>
          </div>

          <div class="canvasConta">
            <div class="MapLocation">
              <img src="../../static/images/baiseshi.png" alt="" class="Map1" @click="cehis">
              <img src="../../static/images/hechishi.png" alt="" class="Map2" @click="cehis">
              <img src="../../static/images/liuzhoushi.png" alt="" class="Map3" @click="cehis">
              <img src="../../static/images/guilingshi.png" alt="" class="Map4" @click="cehis">
              <img src="../../static/images/congzuoshi.png" alt="" class="Map5" @click="cehis">
              <img src="../../static/images/nanningshi.png" alt="" class="Map6" @click="cehis">
              <img src="../../static/images/laipingshi.png" alt="" class="Map7" @click="cehis">
              <img src="../../static/images/hezhoushi.png" alt="" class="Map8" @click="cehis">
              <img src="../../static/images/guigangshi.png" alt="" class="Map9" @click="cehis">
              <img src="../../static/images/qinzhoushi.png" alt="" class="Map10" @click="cehis">
              <img src="../../static/images/fangchenggangshi.png" alt="" class="Map11" @click="cehis">
              <img src="../../static/images/beihaihsi.png" alt="" class="Map12" @click="cehis">
              <img src="../../static/images/yulingshi.png" alt="" class="Map13" @click="cehis">
              <img src="../../static/images/wuzhoushi.png" alt="" class="Map14" @click="cehis">
            </div>
            <!-- 百色市 -->
            <div class="baiseshi">
              <span class="val">4</span>
              <div class="wrapPosi1">
                  <div class="wrap" :style="`height:90px;`">
                    <div class="box box1">
                      <div></div>
                    </div>
                    <div class="box box2">
                      <div></div>
                    </div>
                    <div class="box box3">
                      <div></div>
                    </div>
                    <div class="box box4">
                      <div></div>
                    </div>
                  </div>
              </div>

            </div>
            <!-- 河池市 -->
            <div class="hechishi">
              <span class="val">3</span>
              <div class="wrapPosi2">
                  <div class="wrap" :style="`height:70px;`">
                    <div class="box box1">
                      <div></div>
                    </div>
                    <div class="box box2">
                      <div></div>
                    </div>
                    <div class="box box3">
                      <div></div>
                    </div>
                    <div class="box box4">
                      <div></div>
                    </div>
                  </div>
              </div>

            </div>
            <!-- 柳州市 -->
            <div class="liuzhoushi">
              <span class="val">2</span>
              <div class="wrapPosi3">
                  <div class="wrap" :style="`height:50px;`">
                    <div class="box box1">
                      <div></div>
                    </div>
                    <div class="box box2">
                      <div></div>
                    </div>
                    <div class="box box3">
                      <div></div>
                    </div>
                    <div class="box box4">
                      <div></div>
                    </div>
                  </div>
              </div>

            </div>
            <!-- 桂林市 -->
            <div class="guilinshi">
              <span class="val">1</span>
              <div class="wrapPosi4">
                  <div class="wrap" :style="`height:30px;`">
                    <div class="box box1">
                      <div></div>
                    </div>
                    <div class="box box2">
                      <div></div>
                    </div>
                    <div class="box box3">
                      <div></div>
                    </div>
                    <div class="box box4">
                      <div></div>
                    </div>
                  </div>
              </div>

            </div>
            <!-- 崇左市 -->
            <div class="chongzuoshi">
              <span class="val">1</span>
              <div class="wrapPosi5">
                  <div class="wrap" :style="`height:30px;`">
                    <div class="box box1">
                      <div></div>
                    </div>
                    <div class="box box2">
                      <div></div>
                    </div>
                    <div class="box box3">
                      <div></div>
                    </div>
                    <div class="box box4">
                      <div></div>
                    </div>
                  </div>
              </div>

            </div>
            <!-- 南宁市 -->
            <div class="nanningshi">
              <span class="val">7</span>
              <div class="wrapPosi6">
                  <div class="wrap" :style="`height:150px;`">
                    <div class="box box1">
                      <div></div>
                    </div>
                    <div class="box box2">
                      <div></div>
                    </div>
                    <div class="box box3">
                      <div></div>
                    </div>
                    <div class="box box4">
                      <div></div>
                    </div>
                  </div>
              </div>

            </div>
            <!-- 来宾市 -->
            <div class="laibinshi">
              <span class="val">1</span>
              <div class="wrapPosi7">
                  <div class="wrap" :style="`height:30px;`">
                    <div class="box box1">
                      <div></div>
                    </div>
                    <div class="box box2">
                      <div></div>
                    </div>
                    <div class="box box3">
                      <div></div>
                    </div>
                    <div class="box box4">
                      <div></div>
                    </div>
                  </div>
              </div>

            </div>
            <!-- 贺州市 -->
            <div class="hezhoushi">
              <span class="val">3</span>
              <div class="wrapPosi8">
                  <div class="wrap" :style="`height:0px;`">
                    <div class="box box1">
                      <div></div>
                    </div>
                    <div class="box box2">
                      <div></div>
                    </div>
                    <div class="box box3">
                      <div></div>
                    </div>
                    <div class="box box4">
                      <div></div>
                    </div>
                  </div>
              </div>

            </div>
            <!-- 防城港市 -->
            <div class="fangchenggangshi">
              <span class="val">0</span>
              <div class="wrapPosi9">
                  <div class="wrap" :style="`height:0px;`">
                    <div class="box box1">
                      <div></div>
                    </div>
                    <div class="box box2">
                      <div></div>
                    </div>
                    <div class="box box3">
                      <div></div>
                    </div>
                    <div class="box box4">
                      <div></div>
                    </div>
                  </div>
              </div>

            </div>
            <!-- 钦州市 -->
            <div class="qinzhoushi">
              <span class="val">4</span>
              <div class="wrapPosi10">
                  <div class="wrap" :style="`height:90px;`">
                    <div class="box box1">
                      <div></div>
                    </div>
                    <div class="box box2">
                      <div></div>
                    </div>
                    <div class="box box3">
                      <div></div>
                    </div>
                    <div class="box box4">
                      <div></div>
                    </div>
                  </div>
              </div>

            </div>
            <!-- 贵港市 -->
            <div class="guigangshi">
              <span class="val">2</span>
              <div class="wrapPosi11">
                  <div class="wrap" :style="`height:50px;`">
                    <div class="box box1">
                      <div></div>
                    </div>
                    <div class="box box2">
                      <div></div>
                    </div>
                    <div class="box box3">
                      <div></div>
                    </div>
                    <div class="box box4">
                      <div></div>
                    </div>
                  </div>
              </div>

            </div>
            <!-- 梧州市 -->
            <div class="wuzhoushi">
              <span class="val">2</span>
              <div class="wrapPosi12">
                  <div class="wrap" :style="`height:50px;`">
                    <div class="box box1">
                      <div></div>
                    </div>
                    <div class="box box2">
                      <div></div>
                    </div>
                    <div class="box box3">
                      <div></div>
                    </div>
                    <div class="box box4">
                      <div></div>
                    </div>
                  </div>
              </div>

            </div>
            <!-- 玉林市 -->
            <div class="yulinshi">
              <span class="val">3</span>
              <div class="wrapPosi13">
                  <div class="wrap" :style="`height:70px;`">
                    <div class="box box1">
                      <div></div>
                    </div>
                    <div class="box box2">
                      <div></div>
                    </div>
                    <div class="box box3">
                      <div></div>
                    </div>
                    <div class="box box4">
                      <div></div>
                    </div>
                  </div>
              </div>

            </div>
            <!-- 北海市 -->
            <div class="beihaishi">
              <span class="val">1</span>
              <div class="wrapPosi14">
                  <div class="wrap" :style="`height:30px;`">
                    <div class="box box1">
                      <div></div>
                    </div>
                    <div class="box box2">
                      <div></div>
                    </div>
                    <div class="box box3">
                      <div></div>
                    </div>
                    <div class="box box4">
                      <div></div>
                    </div>
                  </div>
              </div>

            </div>

          </div>
          <div class="TrafficVolume">
            <div class="titleIMG">
              <img src="../../static/images/icon1.png" alt="">
              <span>每日访问用户使用量变化趋势图</span>
            </div>
            <div class="VisitBtns">
              <el-button type="primary" size="small">近7日</el-button>
              <el-button type="primary" size="small">近10日</el-button>
              <el-button type="primary" size="small">近30日</el-button>
              <el-button type="primary" size="small">近50日</el-button>
            </div>
            <div id="myecharts1">

            </div>
          </div>
        </div>
        <div class="loutRight">
            <div class="Sevaluate">
              <div class="titleIMG">
                <img src="../../static/images/icon1.png" alt="">
                <span>学生评价高频词汇</span>
              </div>
              <div class="evaluateLabel">
                <span v-for="(item,i) of evaluateList" :key="i" v-text="`${item}`" :style="`color:${rgb()};padding:${rdomN()}`" class=""></span>
              </div>
          </div>
          <div class="teachingTarget">
             <div class="titleIMG">
                <img src="../../static/images/icon1.png" alt="">
                <span>教学目标达成排行榜</span>
              </div>
              <div id="myecharts2"></div>
          </div>
          <div class="teachingTarget">
             <div class="titleIMG">
                <img src="../../static/images/icon1.png" alt="">
                <span>到课率排行榜</span>
              </div>
              <div id="myecharts3"></div>
          </div>
          <div class="teachingTarget">
             <div class="titleIMG">
                <img src="../../static/images/icon1.png" alt="">
                <span>备课资源量排行榜</span>
              </div>
              <div id="myecharts4"></div>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      SchoolsNumber: ['3', '1'],
      StudentNumber: [7, 3, 5, 8, 2],
      ClassroomNumber: [9, 8, 3],
      ClassroomActivity: [4, 1, 2, 0],
      bgSwitch: true,
      bgcolorA: '20%', // 动态数据
      bgcolorB: '80%', // 动态数据
      xAxisData: ['12-12', '12-13', '12-14', '12-15', '12-16', '12-17', '12-18'], // 动态数据
      evaluateList: ['收获颇多', '老师讲的真好', '很生动的一堂课', '老师的教学方式真是太棒了', '云课堂上课很好玩', '很新奇'], // 动态数据
      EsSname1: ['来宾市武宣职业教育中心', '广西交通技师学院', '南宁市第四职业技术学校', '广西机电工业学校',
        '河池市卫生学校', '玉林技师学院'], // 动态数据
      EsSname2: ['来宾市武宣职业教育中心', '南宁市第四职业技术学校', '广西交通技师学院', '广西机电工业学校', '玉林技师学院', '玉林市第一职业中等院校'], // 动态数据
      EsSname3: ['广西交通技师学院', '来宾市武宣职业教育中心', '北海市卫生学校', '灵山职业教育学校', '桂林市第二技工学校'], // 动态数据,
      joinSchools: [
        {name: '河池市卫生学校', tsCount: 3024, joinTime: '2019-11-19'},
        {name: '贵港市职业教育中心', tsCount: 3105, joinTime: '2019-11-19'},
        {name: '来宾市武宣职业教育中心', tsCount: 568, joinTime: '2019-11-26'},
        {name: '桂林市第二技工学校', tsCount: 1623, joinTime: '2019-11-28'},
        {name: '玉林市第一职业中等院校', tsCount: 708, joinTime: '2019-11-29'},
        {name: '灵山职业教育学校', tsCount: 3343, joinTime: '2019-12-03'},
        {name: '南宁市第四职业技术学校', tsCount: 2495, joinTime: '2019-12-03'},
        {name: '河池市巴马民族师范学校', tsCount: 1659, joinTime: '2019-12-03'},
        {name: '广西工贸职业技术学校', tsCount: 1863, joinTime: '2019-12-04'},
        {name: '广西百色农业学校', tsCount: 431, joinTime: '2019-12-04'},
        {name: '玉林技师学院', tsCount: 2806, joinTime: '2019-12-05'},
        {name: '百色市右江区职业技术学校', tsCount: 1841, joinTime: '2019-12-06'},
        {name: '广西机电工业学校', tsCount: 2060, joinTime: '2019-12-09'},
        {name: '广西交通技师学院', tsCount: 1167, joinTime: '2019-12-11'},
        {name: '北海市卫生学校', tsCount: 5088, joinTime: '2019-12-11'},
        {name: '广西科技大学附属卫生学校', tsCount: 2599, joinTime: '2019-12-12'},
        {name: '广西钦州农业学校', tsCount: 1235, joinTime: '2019-12-12'},
        {name: '百色市机电工程学校', tsCount: 285, joinTime: '2019-12-12'},
        {name: '百色市财经职业技术学校', tsCount: 1841, joinTime: '2019-12-13'},
        {name: '北部湾职业技术学校', tsCount: 6004, joinTime: '2019-12-13'},
        {name: '南宁市第三职业技术学校', tsCount: 2346, joinTime: '2019-12-17'},
        {name: '广西工商技师学院', tsCount: 3081, joinTime: '2019-12-19'},
        {name: '广西理工职业技术学校', tsCount: 3201, joinTime: '2019-12-19'},
        {name: '广西钦州商贸学校', tsCount: 13399, joinTime: '2019-12-20'},
        {name: '梧州市城市建设技工学校', tsCount: 2896, joinTime: '2019-12-12'},
        {name: '崇左市职业技术学校', tsCount: 1855, joinTime: '2019-12-13'},
        {name: '柳州市交通学校', tsCount: 2101, joinTime: '2019-12-13'},
        {name: '广西壮族自治区体育运动学校', tsCount: 1119, joinTime: '2019-12-17'},
        {name: '广西玉林农业学校', tsCount: 5032, joinTime: '2019-12-19'},
        {name: '桂平市第一中等职业技术学校', tsCount: 2551, joinTime: '2019-12-19'},
        {name: '广西南宁技师学院', tsCount: 1196, joinTime: '2019-12-20'}

      ] // 加入的学校列表
    }
  },
  methods: {
    rgb () {
      var r = Math.floor(Math.random() * 255)
      var g = Math.floor(Math.random() * 255)
      var b = Math.floor(Math.random() * 255)
      //  var a=Math.random().toFixed(1);
      // return `rgba(${r},${g},${b},${a})`
      return `rgba(${r},${g},${b})`
    },
    rdomN () {
      var x = Math.floor(Math.random() * 15)
      var y = Math.floor(Math.random() * 10)
      // console.log(`${y}px ${x}px`);
      return `${y}px ${x}px`
    },
    getmyecharts1 () {
      var myChart = this.$echarts.init(document.getElementById('myecharts1'))
      var option = {
        // backgroundColor: '#afc',
        color: ['#56fff7'],
        xAxis: {
          type: 'category',
          data: this.xAxisData,
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
          },
          // name:"时间日期",
          // nameLocation:'center',
          // nameTextStyle:{
          //     color:'red',

          // },
          // nameGap:-30,
          // inverse:true,
          axisPointer: {
            show: false,
            label: {
              color: '#fff'
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#fff',
              opacity: 0.8
            }
          },
          axisTick: {
            inside: true,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          }

        },
        yAxis: {
          type: 'value',
          // position:'left',
          splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
              color: ['#fff'],
              width: 0.5,
              type: 'solid',
              opacity: 0.8

            }
          },
          // axisLabel:{
          //   show:true,
          //   inside:false,
          //   color:'#fff',
          // },
          name: '(人)',
          nameTextStyle: {
            color: '#fff',
            fontWeight: 'bold',
            align: 'center'

          },
          nameGap: 15,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff',
              opacity: 0.8
            }
          },
          axisTick: {
            show: false,
            inside: true,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          }
        },
        series: [{
          data: [12, 56, 66, 44, 89, 120, 156], // 动态数据
          type: 'line',
          areaStyle: {}
        }]
      }
      // myChart.setOption(option);
      myChart.setOption(option, window.onresize = myChart.resize)
    },
    getmyecharts2 () {
      var myChart = this.$echarts.init(document.getElementById('myecharts2'))
      var option = {
        // backgroundColor: '#afc',
        color: ['#56fff7'],
        xAxis: {
          type: 'category',
          data: this.EsSname1,
          axisLabel: {
            // ----------------------
              formatter : function(params){
                  var newParamsName = "";// 最终拼接成的字符串
                  var paramsNameNumber = params.length;// 实际标签的个数
                  var provideNumber = 4;// 每行能显示的字的个数
                  var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                  /**
                   * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                   */
                  // 条件等同于rowNumber>1
                  if (paramsNameNumber > provideNumber) {
                      /** 循环每一行,p表示行 */
                      for (var p = 0; p < rowNumber; p++) {
                          var tempStr = "";// 表示每一次截取的字符串
                          var start = p * provideNumber;// 开始截取的位置
                          var end = start + provideNumber;// 结束截取的位置
                          // 此处特殊处理最后一行的索引值
                          if (p == rowNumber - 1) {
                              // 最后一次不换行
                              tempStr = params.substring(start, paramsNameNumber);
                          } else {
                              // 每一次拼接字符串并换行
                              tempStr = params.substring(start, end) + "\n";
                          }
                          newParamsName += tempStr;// 最终拼成的字符串
                      }

                  } else {
                      // 将旧标签的值赋给新标签
                      newParamsName = params;
                  }
                  //将最终的字符串返回
                  return newParamsName
              },
            // ----------------------
            textStyle: {
              color: '#fff',
              fontSize:9,
              lineHeight:12,

            }
          },
          // name:"时间日期",
          // nameLocation:'center',
          // nameTextStyle:{
          //     color:'red',

          // },
          // nameGap:-30,
          // inverse:true,
          axisPointer: {
            show: false,
            label: {
              color: '#fff'
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#fff',
              opacity: 0.8
            }
          },
          axisTick: {
            inside: true,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          }

        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
              color: ['#fff'],
              width: 0.5,
              type: 'solid',
              opacity: 0.8

            }
          },

          nameGap: 15,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff',
              opacity: 0.8
            }
          },
          axisTick: {
            show: false,
            inside: true,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        series: [{
          data: [53.62, 47.36, 40.23, 27.39, 26.9, 23.7], // 动态数据
          type: 'bar',
          areaStyle: {},
          barWidth: '40%',
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: '#f9c587' // 0% 处的颜色
              }, {
                offset: 1, color: '#bcf85f' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          }

        }]
      }
      // myChart.setOption(option);
      myChart.setOption(option, window.onresize = myChart.resize)
    },
    getmyecharts3 () {
      var myChart = this.$echarts.init(document.getElementById('myecharts3'))
      var option = {
        // backgroundColor: '#afc',
        color: ['#56fff7'],
        xAxis: {
          type: 'category',
          data: this.EsSname2,
          axisLabel: {
                 // ----------------------
              formatter : function(params){
                  var newParamsName = "";// 最终拼接成的字符串
                  var paramsNameNumber = params.length;// 实际标签的个数
                  var provideNumber = 4;// 每行能显示的字的个数
                  var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                  /**
                   * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                   */
                  // 条件等同于rowNumber>1
                  if (paramsNameNumber > provideNumber) {
                      /** 循环每一行,p表示行 */
                      for (var p = 0; p < rowNumber; p++) {
                          var tempStr = "";// 表示每一次截取的字符串
                          var start = p * provideNumber;// 开始截取的位置
                          var end = start + provideNumber;// 结束截取的位置
                          // 此处特殊处理最后一行的索引值
                          if (p == rowNumber - 1) {
                              // 最后一次不换行
                              tempStr = params.substring(start, paramsNameNumber);
                          } else {
                              // 每一次拼接字符串并换行
                              tempStr = params.substring(start, end) + "\n";
                          }
                          newParamsName += tempStr;// 最终拼成的字符串
                      }

                  } else {
                      // 将旧标签的值赋给新标签
                      newParamsName = params;
                  }
                  //将最终的字符串返回
                  return newParamsName
              },
            // ----------------------
            textStyle: {
              color: '#fff',
               fontSize:9,
              lineHeight:12,
            }
          },
          // name:"时间日期",
          // nameLocation:'center',
          // nameTextStyle:{
          //     color:'red',

          // },
          // nameGap:-30,
          // inverse:true,
          axisPointer: {
            show: false,
            label: {
              color: '#fff'
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#fff',
              opacity: 0.8
            }
          },
          axisTick: {
            inside: true,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          }

        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
              color: ['#fff'],
              width: 0.5,
              type: 'solid',
              opacity: 0.8

            }
          },

          nameGap: 15,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff',
              opacity: 0.8
            }
          },
          axisTick: {
            show: false,
            inside: true,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        series: [{
          data: [45.79, 42.52, 36.86, 36.16, 30.89, 20.71], // 动态数据
          type: 'bar',
          areaStyle: {},
          barWidth: '40%',
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: '#bef95e' // 0% 处的颜色
              }, {
                offset: 1, color: '#5ffdd3' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          }

        }]
      }
      // myChart.setOption(option);
      myChart.setOption(option, window.onresize = myChart.resize)
    },
    getmyecharts4 () {
      var myChart = this.$echarts.init(document.getElementById('myecharts4'))
      var option = {
        // backgroundColor: '#afc',
        color: ['#56fff7'],
        xAxis: {
          type: 'category',
          data: this.EsSname3,
          axisLabel: {
                 // ----------------------
              formatter : function(params){
                  var newParamsName = "";// 最终拼接成的字符串
                  var paramsNameNumber = params.length;// 实际标签的个数
                  var provideNumber = 4;// 每行能显示的字的个数
                  var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                  /**
                   * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                   */
                  // 条件等同于rowNumber>1
                  if (paramsNameNumber > provideNumber) {
                      /** 循环每一行,p表示行 */
                      for (var p = 0; p < rowNumber; p++) {
                          var tempStr = "";// 表示每一次截取的字符串
                          var start = p * provideNumber;// 开始截取的位置
                          var end = start + provideNumber;// 结束截取的位置
                          // 此处特殊处理最后一行的索引值
                          if (p == rowNumber - 1) {
                              // 最后一次不换行
                              tempStr = params.substring(start, paramsNameNumber);
                          } else {
                              // 每一次拼接字符串并换行
                              tempStr = params.substring(start, end) + "\n";
                          }
                          newParamsName += tempStr;// 最终拼成的字符串
                      }

                  } else {
                      // 将旧标签的值赋给新标签
                      newParamsName = params;
                  }
                  //将最终的字符串返回
                  return newParamsName
              },
            // ----------------------
            textStyle: {
              color: '#fff',
              fontSize:9,
              lineHeight:12,
            }
          },
          // name:"时间日期",
          // nameLocation:'center',
          // nameTextStyle:{
          //     color:'red',

          // },
          // nameGap:-30,
          // inverse:true,
          axisPointer: {
            show: false,
            label: {
              color: '#fff'
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#fff',
              opacity: 0.8
            }
          },
          axisTick: {
            inside: true,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          }

        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
              color: ['#fff'],
              width: 0.5,
              type: 'solid',
              opacity: 0.8

            }
          },

          nameGap: 15,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff',
              opacity: 0.8
            }
          },
          axisTick: {
            show: false,
            inside: true,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        series: [{
          data: [3244, 2341, 1231, 332, 321, 233], // 动态数据
          type: 'bar',
          areaStyle: {},
          barWidth: '40%',
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: '#5dfbd5' // 0% 处的颜色
              }, {
                offset: 1, color: '#56abfe' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          }

        }]
      }
      // myChart.setOption(option);
      myChart.setOption(option, window.onresize = myChart.resize)
    },
    cehis () {
    }

  },
  created () {
    this.rdomN()
  },
  mounted () {
    this.getmyecharts1()
    this.getmyecharts2()
    this.getmyecharts3()
    this.getmyecharts4()
  },
  computed: {

  }

}
</script>

<style  scoped>
  /* .bgimg{
    width: 27px;
    height: 28px;
    display: inline-block;
    background:url('../../static/images/icon3.png');
  } */

  .app{
    display:block;
    width:1920px;
    height: 1080px;
    background:url('../../static/images/homebackground.jpg');

  }
  .Container{
    position: relative;
    box-sizing: border-box;
    display:flex;
    width: 100%;
    height: 100%;
    overflow: hidden;

  }
  .Container .loutLeft{
    width: 487px;
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;

  }
  .Container .loutCenter{
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;

  }
  .Container .loutRight{
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;

  }

  .loutLeft .SchoolsNumberdata .titleIMG{
    padding-top: 42px;
    position: relative;
    box-sizing: border-box;
  }
  .loutLeft .SchoolsNumberdata .titleIMG span{
    position: absolute;
    left:43px;
    font-family:思源黑体 CN Bold;
    color:#fff;
    font-size: 24px;
    top: 33px;
    font-weight: 500;
  }
  .loutLeft .SchoolList .titleIMG{
    padding-top: 42px;
    position: relative;
    box-sizing: border-box;
  }
  .loutLeft .SchoolList .titleIMG span{
    position: absolute;
    left:43px;
    font-family:思源黑体 CN Bold;
    color:#fff;
    font-size: 24px;
    top: 33px;
    font-weight: 500;
  }
    .loutLeft .SchoolsNumberdata .SchoolsN1l{
    padding: 0 0 0 45px;
    position: relative;
    box-sizing: border-box;
  }
    .loutLeft .SchoolsNumberdata .SchoolsN1l span{
    color:#fff85c;
    font-size: 72px;
    font-weight: bold;
    text-align: center;
    left: 63px;
    background: url(../../static/images/Dataframe.png);
    display: inline-block;
    width: 80px;height:104px;
    margin-top: 20px;

  }
    .loutLeft .SchoolsNumberdata .SchoolsN1l span+span{
    margin-left:40px ;

  }
    .loutLeft .SchoolsNumberdata .SchoolsN1l img{
      width: 80px;
      height:104px;
      margin-right: 40px;
  }

    .loutLeft .StudentdetailsData .titleIMG{
    padding-top: 28px;
    position: relative;
  }

   .loutLeft .StudentdetailsData .titleIMG span{
    position: absolute;
    left:43px;
    font-family:思源黑体 CN Bold;
    color:#fff;
    font-size: 24px;
    top: 18px;
    font-weight: 500;
  }
   .loutLeft .StudentdetailsData .StudentNumber{
    position: relative;
    margin-top: 30px;
    margin-left: 42px;
    box-sizing: border-box;
    width: 100%;
  }
   .loutLeft .StudentdetailsData .StudentNumber p:first-child{
    font-family:思源黑体 CN Bold;
    color:#fff;
    font-size: 20px;
    font-weight: 500;
  }
   .loutLeft .StudentdetailsData .StudentNumber span{
    font-family:Arial;
    color:#9fff49;
    font-size: 44px;
    font-weight: bold;
    letter-spacing:48px;
    text-align: center;
    left: 14px;
    background: url(../../static/images/Dataframe1.png)no-repeat;
    display: inline-block;
    width: 52px;height:60px;
    padding: 0 13px;

  }
   .loutLeft .StudentdetailsData .StudentNumber span+span{
   margin-left: 16px;
  }
   .loutLeft .StudentdetailsData .StudentNumber img{
      width: 52px;
      height:60px;
      margin-right: 16px;

  }

  .SchoolList .DataTable{
    width: 487px;
    padding-left: 13px;
    margin-top: 31px;
    box-sizing: border-box;
  }
.DataTable .DataTableScoll{
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    height: 280px;
}
.DataTable .DataTableScoll::-webkit-scrollbar{
   display: none;
}
  .SchoolList .DataTable .dataListTOP{
    display: flex;
    width: 100%;
    box-sizing: border-box;
  }
  .SchoolList .DataTable .dataList{
    display: flex;
    width: 100%;
    box-sizing: border-box;
  }
  .SchoolList .DataTable .dataListTOP .SerialNumber{
    width: 12%;
    font-size: 18px;
    font-family:思源黑体 CN Bold;
    color: #fff;
  }
  .SchoolList .DataTable .dataListTOP .SchoolsName{
    width: 38%;
     font-size: 18px;
    font-family:思源黑体 CN Bold;
    color: #fff;
  }
  .SchoolList .DataTable .dataListTOP .STNumbers{
    width: 30%;
     font-size: 18px;
    font-family:思源黑体 CN Bold;
    color: #fff;
  }
  .SchoolList .DataTable .dataListTOP .AddTime{
    width: 20%;
     font-size: 18px;
    font-family:思源黑体 CN Bold;
    color: #fff;
  }
  .SchoolList .DataTable .dataList .SerialNumber{
    width: 12%;
    font-size: 12px;
    font-family:思源黑体 CN Bold;
    color: #fff;
  }
  .SchoolList .DataTable .dataList .SchoolsName{
   width: 38%;
   font-size: 12px;
    font-family:思源黑体 CN Bold;
    color: #fff;
    cursor: pointer;
  }
  .SchoolList .DataTable .dataList .STNumbers{
    width: 30%;
    font-size: 12px;
    font-family:思源黑体 CN Bold;
    color: #fff;
    text-align: center;
  }
  .SchoolList .DataTable .dataList .AddTime{
   width: 20%;
   font-size: 12px;
    font-family:思源黑体 CN Bold;
    color: #fff;
  }

 .Container .loutCenter {
    box-sizing: border-box;
    width: 916px;

  }
  .loutCenter .loutCtitle{
    box-sizing: border-box;
    position: relative;
    justify-content: center;
    display: flex;

  }
  .loutCenter .loutCtitle .imgDiv{
    box-sizing: border-box;
    background: url(../../static/images/icon4.png);
    width: 820px;
    height:74px;

  }
  .loutCenter .loutCtitle h3{
    text-align: center;
    padding-top: 20px;
    margin-bottom: 0;
     font-size: 28px;
    font-family:思源黑体 CN Bold;
    color: #fff;

  }
  .loutCenter .StateSwitching{
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }
  .loutCenter .StateSwitching .left{
      font-size: 20px;
    font-family:思源黑体 CN Bold;
    color: #fff;
    float: left;
    margin-left: 30px;
    cursor: pointer;
  }
  .loutCenter .StateSwitching .right{
      font-size: 20px;
    font-family:思源黑体 CN Bold;
    color: #fff;
    float: right;
    margin-right: 30px;
    cursor: pointer;

  }

.bgSwitch1{
    box-sizing: border-box;
    background: url(../../static/images/bgSwitch1.png)no-repeat;
    margin-top: 10px;
    height:34px;width:323px;

}
.bgSwitch2{
    box-sizing: border-box;
    background: url(../../static/images/bgSwitch2.png)no-repeat;
    margin-top: 10px;
    height:34px;width:323px;
}
.ParticipationDetails .Details1L{
  align-items: center;
  margin-top: 72px;
  box-sizing: border-box;
}
.ParticipationDetails .Details1L span{
  font-size: 16px;
  font-weight: 500;
  color:#fff;
  margin-left: 10px;
}

.ParticipationDetails .Details2L{
  box-sizing: border-box;
  margin-top: 24px;
  align-items: center;
  display: flex;
}
.ParticipationDetails .Details2L>span{
  width:80px;height:20px;
  display:inline-block;

}
.ParticipationDetails .Details2L p{
 font-size: 16px;
  font-weight: 500;
  color:#fff;
  margin-left: 10px;
  display:inline-block;
  margin-bottom: 0;
}
.canvasConta{
  width: 100%;
  height:470px;
  /* background: rgba(255,170,204,.5); */
  /* opacity: .5; */
}

  .TrafficVolume .titleIMG{
    padding-top: 23px;
    position: relative;
    box-sizing: border-box;
    padding-left: 120px;
  }
  .TrafficVolume .titleIMG span{
    position: absolute;
    left:165px;
    font-family:思源黑体 CN Bold;
    color:#fff;
    font-size: 18px;
    top: 20px;
    font-weight: 500;
  }
  /* --------------3d柱形-------- */
  .wrap{
        position: absolute;
        transform-style: preserve-3d;
        transform-origin: center center;
        transform: rotateX(-30deg) rotateY(-47deg);
        width: 30px;
        box-sizing: border-box;
    }

    .box{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }
    .box div{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }
    .box1{
        transform: rotateY(90deg) translateZ(15px);
    }
    .box1>div{
        background-color:rgba(220,152,72,.8);
        /* background-color:#dc9848; */
    }
    .box2{
        transform: rotateY(90deg) translateZ(-15px);
    }
    .box2>div{
        /* background-color: #efb26e; */
        background-color: rgba(239,178,110,.8);
    }

    .box3{
        transform: rotateX(0deg) translateZ(-15px);
    }
    .box3>div{
        /* background-color: #efb26e; */
        background-color: rgba(239,178,110,.8);
    }
    .box4{
        transform: rotateX(0deg) translateZ(15px);
    }
    .box4>div{
        background-color:rgba(220,152,72,.8);
        /* background-color:#dc9848; */
    }
  /* --------------3d柱形-------- */
/* ---------柱形位置调节----- */
/* 百色市 */
.wrapPosi1{
  position: relative;
  top:106px;left:182px;
  transform: rotateX(183deg) ;

}
 .baiseshi .val{
  position: relative;
  top:132px;left:174px;
   font-family:思源黑体 CN Bold;
    color:#fff;
    font-weight: 500;
}
/* 河池市 */
.wrapPosi2{
  position: relative;
  top:50px;left:335px;
  transform: rotateX(183deg) ;

}
 .hechishi .val{
  position: relative;
  top:77px;left:335px;
   font-family:思源黑体 CN Bold;
    color:#fff;
    font-weight: 500;
}
/* 柳州市 */
.wrapPosi3{
  position: relative;
  top:-10px;left:598px;
  transform: rotateX(183deg) ;

}
 .liuzhoushi .val{
  position: relative;
  top:10px;left:578px;
   font-family:思源黑体 CN Bold;
    color:#fff;
    font-weight: 500;
}
/* 桂林市 */
.wrapPosi4{
  position: relative;
  top:-38px;left:745px;
  transform: rotateX(183deg) ;

}
 .guilinshi .val{
  position: relative;
  top:-13px;left:745px;
   font-family:思源黑体 CN Bold;
    color:#fff;
    font-weight: 500;
}
/* 崇左市 */
.wrapPosi5{
  position: relative;
  top:162px;left:223px;
  transform: rotateX(183deg) ;

}
 .chongzuoshi .val{
  position: relative;
  top:182px;left:215px;
   font-family:思源黑体 CN Bold;
    color:#fff;
    font-weight: 500;
}
/* 南宁市 */
.wrapPosi6{
  position: relative;
  top:110px;left:424px;
  transform: rotateX(183deg) ;

}
 .nanningshi .val{
  position: relative;
  top:130px;left:404px;
   font-family:思源黑体 CN Bold;
    color:#fff;
    font-weight: 500;
}
/* 来宾市 */
.wrapPosi7{
  position: relative;
  top:39px;left:497px;
  transform: rotateX(183deg) ;

}
 .laibinshi .val{
  position: relative;
  top:59px;left:477px;
   font-family:思源黑体 CN Bold;
    color:#fff;
    font-weight: 500;
}
/* 贺州市 */
.wrapPosi8{
  position: relative;
  top:4px;left:846px;
  transform: rotateX(183deg) ;

}
 .hezhoushi .val{
  position: relative;
  top:26px;left:837px;
   font-family:思源黑体 CN Bold;
    color:#fff;
    font-weight: 500;
}
/* 防城港市 */
.wrapPosi9{
  position: relative;
  top:151px;left:285px;
  transform: rotateX(183deg) ;

}
 .fangchenggangshi .val{
  position: relative;
  top:171px;left:265px;
   font-family:思源黑体 CN Bold;
    color:#fff;
    font-weight: 500;
}
/* 钦州市 */
.wrapPosi10{
  position: relative;
  top:124px;left:475px;
  transform: rotateX(183deg) ;

}
 .qinzhoushi .val{
  position: relative;
  top:144px;left:455px;
   font-family:思源黑体 CN Bold;
    color:#fff;
    font-weight: 500;
}
/* 贵港市 */
.wrapPosi11{
  position: relative;
  top:-6px;left:632px;
  transform: rotateX(183deg) ;

}
 .guigangshi .val{
  position: relative;
  top:10px;left:612px;
   font-family:思源黑体 CN Bold;
    color:#fff;
    font-weight: 500;
}
/* 梧州市 */
.wrapPosi12{
  position: relative;
  top:-29px;left:719px;
  transform: rotateX(183deg) ;

}
 .wuzhoushi .val{
  position: relative;
  top:-22px;left:760px;
   font-family:思源黑体 CN Bold;
    color:#fff;
    font-weight: 500;
}
/* 玉林市 */
.wrapPosi13{
  position: relative;
  top:46px;left:585px;
  transform: rotateX(183deg) ;

}
 .yulinshi .val{
  position: relative;
  top:46px;left:563px;
   font-family:思源黑体 CN Bold;
    color:#fff;
    font-weight: 500;
}
/* 北海市 */
/* .wrapPosi14 .wrap .box1>div{
  background-color:rgba(220,152,72,.5);

}
.wrapPosi14 .wrap .box2>div{
  background-color:rgba(239,178,110,.5);

}
.wrapPosi14 .wrap .box3>div{
  background-color:rgba(239,178,110,.5);

}
.wrapPosi14 .wrap .box4>div{
  background-color:rgba(220,152,72,.5);

} */
.wrapPosi14{
  position: relative;
  top:103px;left:431px;
  transform: rotateX(183deg) ;

}
 .beihaishi .val{
  position: relative;
  top:90px;left:471px;
   font-family:思源黑体 CN Bold;
    color:#fff;
    font-weight: 500;
}
/* ---------柱形位置调节----- */
/* ------------echarts----------- */
.TrafficVolume{
  width: 100%;
}

.VisitBtns{
  margin: 10px 0;
  position: absolute;
  z-index: 9999;
  padding-left: 120px;
}
.el-button+.el-button{
  margin-left: 20px;
}
.el-button--primary{
  background-color:#409bff;
  border-color:#409bff;
  cursor: pointer;
}
#myecharts1{
  width:100%;
  height:300px;
  position: relative;
  top:24px;left:14px;
  /* background: red; */
  display: block;
  text-align: center;
  
}

  .Sevaluate{
    width: 527px;
    box-sizing: border-box;
  }
  .Sevaluate  .titleIMG{
    padding-top: 37px;
    position: relative;
    box-sizing: border-box;
  }
  .Sevaluate .titleIMG span{
    position: absolute;
    left:43px;
    font-family:思源黑体 CN Bold;
    color:#fff;
    font-size: 18px;
    top: 32px;
    font-weight: 500;
  }
  .evaluateLabel{
    margin-top: 10px;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
    background: url(../../static/images/icon2.png)no-repeat;
    background-position: 163px 54px;
    height: 175px;
    overflow: hidden;

  }
  .evaluateLabel div{

    box-sizing: border-box;
    display: inline-block;
  }
  .evaluateLabel span{
    border:1px solid rgba(255,255,255,.3);
    border-radius: 30px;
    font-weight: 600;
    font-size: 18px;
    font-family:思源黑体 CN Bold;
    margin-top: 10px;
    display: inline-block;
  }
  .evaluateLabel span+span{
    margin-left: 20px;

  }

  .teachingTarget  {
    width: 100%;
    box-sizing: border-box;
    padding-top: 18px;
  }
  .teachingTarget  .titleIMG{
    position: relative;
    box-sizing: border-box;
  }
  .teachingTarget .titleIMG span{
    position: absolute;
    left:43px;
    font-family:思源黑体 CN Bold;
    color:#fff;
    font-size: 18px;
    top: -3px;
    font-weight: 500;
  }
.teachingTarget #myecharts2{
  width:100%;
  height:240px;
  position: relative;
  display: block;
  top:-30px;
}
.teachingTarget #myecharts3{
  width:100%;
  height:240px;
  position: relative;
  display: block;
  top:-30px;
}
.teachingTarget #myecharts4{
  width:100%;
  height:240px;
  position: relative;
  display: block;
  top:-30px;
}
/* ------------echarts----------- */
/* ---------地图------------ */
  .Map1{
    position: absolute;
    top:292px;left:469px;
    cursor: pointer;
  }
  .Map2{
    position: absolute;
    top:269px;left:733px;
    cursor: pointer;
  }
  .Map3{
    position: absolute;
    top:264px;left:962px;
    cursor: pointer;
  }
  .Map4{
    position: absolute;
    top:250px;left:1094px;
    cursor: pointer;
  }
  .Map5{
    position: absolute;
    top:491px;left:615px;
    cursor: pointer;
  }
  .Map6{
    position: absolute;
    top:444px;left:745px;
    cursor: pointer;
  }
  .Map7{
    position: absolute;
    top:412px;left:911px;
    cursor: pointer;
  }
  .Map8{
    position: absolute;
    top:373px;left:1193px;
    cursor: pointer;
  }
  .Map9{
    position: absolute;
    top:470px;left:980px;
    cursor: pointer;
  }
  .Map10{
    position: absolute;
    top:592px;left:794px;
    cursor: pointer;
  }
  .Map11{
    position: absolute;
    top:591px;left:682px;
    cursor: pointer;
  }
  .Map12{
    position: absolute;
    top:664px;left:833px;
    cursor: pointer;
  }
  .Map13{
    position: absolute;
    top:561px;left:963px;
    cursor: pointer;
  }
  .Map14{
    position: absolute;
    top:439px;left:1138px;
    cursor: pointer;
  }
/* ---------地图------------ */
</style>
