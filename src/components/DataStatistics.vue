<template>
  <div>
      <div class="app">
          <div class="Container">
              <div class="topConta">
                  <span class="Return iconfont icon-fanhui" @click="$router.go(-1)">返回</span>
                  <div class="titlelog">
                      <b><span>{{name}}关键数据统计</span></b>
                  </div>
                  <div> </div>
              </div>
              <div class="btmConta">
                  <div class="btmContaL">
                      <div class="btmContaLtop">
                          <div class="contRids">
                              <p class="iconfont icon-shuxian">核心指标</p>
                              <div class="rudisP">
                                <div class="rudis">
                                    <span>院系数量</span>
                                   <p v-text="`${data.coreIndicators.facultyNum}`"></p>
                                </div>
                                <div class="rudis">
                                    <span>专业数量</span>
                                    <p v-text="`${data.coreIndicators.professionNum}`"></p>
                                </div>
                                <div class="rudis">
                                    <span>课程数量</span>
                                    <p v-text="`${data.coreIndicators.courseNum}`"></p>
                                </div>
                                <div class="rudis">
                                    <span>老师数量</span>
                                    <p v-text="`${data.coreIndicators.teacherNum}`"></p>
                                </div>
                                <div class="rudis">
                                    <span>班级数量</span>
                                    <p v-text="`${data.coreIndicators.classNum}`"></p>
                                </div>
                                <div class="rudis">
                                    <span>学生数量</span>
                                    <p v-text="`${data.coreIndicators.studentNum}`"></p>
                                </div>

                              </div>
                          </div>
                          <div class="contBox">
                              <div class="boxP">
                                  <div class="boxs">
                                      <p>完成课堂</p>
                                      <span v-text="data.coreIndicators.completeClassNum"></span>
                                  </div>
                                  <div class="boxs">
                                      <p>良好优质课堂</p>
                                      <span v-text="`${data.coreIndicators.highQualityClassNum}`" ></span>
                                  </div>
                                  <div class="boxs">
                                      <p>完整课堂备课</p>
                                      <span v-text="`${data.coreIndicators.classPreparationNum}`"></span>
                                  </div>
                                  <div class="boxs">
                                      <p>课堂学生收获评价</p>
                                      <span v-text="`${data.coreIndicators.harvestEvaluation}`"></span>
                                  </div>
                              </div>
                              <div class="boxP">
                                  <div class="boxs">
                                      <p>质量综合评分</p>
                                      <span v-text="`${data.coreIndicators.overallRating}`"></span>
                                  </div>
                                  <div class="boxs">
                                      <p>平均到课率</p>
                                      <span v-text="`${data.coreIndicators.classRate}`"></span>
                                  </div>
                                  <div class="boxs">
                                      <p>课堂平均参与度</p>
                                      <span v-text="`${data.coreIndicators.participation}`"></span>
                                  </div>
                                  <div class="boxs">
                                      <p>课堂目标平均值</p>
                                      <span v-text="`${data.coreIndicators.averageValue}`"></span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="btmContaLbtm">
                          <p class="iconfont icon-shuxian">课堂教学人员趋势图</p>
                          <div class="canvasConta">

                              <div class="canvasL">
                                  <div id="myecharts1"></div>
                              </div>
                              <div class="canvasR">
                                  <div id="myecharts2"></div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="btmContaR">
                      <div class="btmContaRtop">
                          <div class="Faculty">
                              <span class="iconfont icon-shuxian">院系</span>
                              <h1>教学质量综合评分排名TOP15</h1>
                                <!-- 循环 -->
                              <div class="FacultyList" v-for="(item,index) in data.facultyRanking" :key="index">
                                  <div class="datalist">
                                      <span>{{index+1}}</span>
                                      <i>{{item.name}}</i>
                                  </div>
                                  <div class="datalistN">
                                      <P>{{item.score}}</P>
                                      <span class="iconfont icon-shang"></span>
                                  </div>
                              </div>

                          </div>
                          <div class="Faculty">

                            <span class="iconfont icon-shuxian">专业</span>
                              <h1>教学质量综合评分排名TOP15</h1>
                                <!-- 循环 -->
                            <div class="FacultyList" v-for="(item,index) in data.professionRanking" :key="index">
                              <div class="datalist">
                                <span>{{index+1}}</span>
                                <i>{{item.name}}</i>
                              </div>
                              <div class="datalistN">
                                <P>{{item.score}}</P>
                                <span class="iconfont icon-shang"></span>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div class="btmContaRtop">
                          <div class="Faculty">
                            <span class="iconfont icon-shuxian">课程</span>
                              <h1>教学质量综合评分排名TOP15</h1>
                                <!-- 循环 -->
                            <div class="FacultyList" v-for="(item,index) in data.courseRanking" :key="index">
                              <div class="datalist">
                                <span>{{index+1}}</span>
                                <i>{{item.name}}</i>
                              </div>
                              <div class="datalistN">
                                <P>{{item.score}}</P>
                                <span class="iconfont icon-shang"></span>
                              </div>
                            </div>
                          </div>
                          <div class="Faculty">
                            <span class="iconfont icon-shuxian">老师</span>
                              <h1>教学质量综合评分排名TOP15</h1>
                                <!-- 循环 -->
                            <div class="FacultyList" v-for="(item,index) in data.teacherRanking" :key="index">
                              <div class="datalist">
                                <span>{{index+1}}</span>
                                <i>{{item.name}}</i>
                              </div>
                              <div class="datalistN">
                                <P>{{item.score}}</P>
                                <span class="iconfont icon-shang"></span>
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>
  </div>
</template>

<script>

import data from '@/data/data.js'

export default {
  data () {
    return {
      data: {coreIndicators: {}},
      defData: {
        coreIndicators: {
          facultyNum: 0,
          professionNum: 0,
          courseNum: 0,
          teacherNum: 0,
          classNum: 0,
          studentNum: 0,
          completeClassNum: 0,
          highQualityClassNum: 0,
          classPreparationNum: 0,
          harvestEvaluation: 0,
          overallRating: 0,
          classRate: 0,
          participation: 0,
          averageValue: 0
        },
        facultyRanking: [
        ],
        professionRanking: [

        ],
        courseRanking: [
        ],
        teacherRanking: [
        ]
      },
      name: '',
      xAxisData1: ['2019/10/12', '2019/10/14', '2019/10/16'], // 动态数据
      xAxisData2: ['2019/10/12', '2019/10/14', '2019/10/16']// 动态数据
    }
  },
  methods: {
    Return () {
      // alert('测试')
    },
    getmyecharts1 () {
      var myChart = this.$echarts.init(document.getElementById('myecharts1'))
      var option = {
        // backgroundColor: '#afc',
        color: ['#f87a3a'],
        xAxis: {
          type: 'category',
          data: this.xAxisData1,
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
          offset: -6,
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
          name: '教师使用情况',
          nameTextStyle: {
            color: '#fff',
            fontWeight: 'bold',
            align: 'center',
            fontSize: '14',
            fontFamily: '思源黑体 CN Bold'

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
          data: [220, 106, 205], // 动态数据
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
        color: ['#21fe0e'],
        xAxis: {
          type: 'category',
          data: this.xAxisData2,
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
          offset: -6,
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
          name: '学生使用数量',
          nameTextStyle: {
            color: '#fff',
            fontWeight: 'bold',
            align: 'center',
            fontSize: '14',
            fontFamily: '思源黑体 CN Bold'

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
          data: [220, 106, 205], // 动态数据
          type: 'line',
          areaStyle: {}
        }]
      }
      // myChart.setOption(option);
      myChart.setOption(option, window.onresize = myChart.resize)
    }

  },
  mounted () {
    let name = this.$route.query.name
    this.data = data[name]
    if (this.data === undefined) {
      this.data = this.defData
    }
    this.name = name
    this.getmyecharts1()
    this.getmyecharts2()
  },
  computed: {

  }
}
</script>

<style scoped>
  .app{
    display:block;
    width:1920px;
    height: 1080px;
    background:url('../../static/images/shcool-background.jpg');
    box-sizing: border-box;
    overflow: hidden;

  }
  .Container{
      height: 100%;
      width:100%;
      padding:0 26px;
      box-sizing: border-box;
    overflow: hidden;
  }
  .Container .topConta{
      height: 74px;
      width:100%;
      padding:0 26px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;

  }
  .Container .Return{
      cursor: pointer;
      background: #48a1f8;
      font-size: 20px;
      font-weight: bold;
      color: #fff;
      font-family:思源黑体 CN Bold;
      display: inline-block;
        padding: 8px 20px;
        border-radius: 30px;
        text-align: center;
  }
  .Container .titlelog{
      width: 820px;
      height: 74px;
      background: url('../../static/images/icon4.png');
      text-align: center;

  }
  .Container b{
      font-size: 28px;
      font-weight: bold;
      color: #fff;
      font-family:思源黑体 CN Bold;
      display: inline-block;
      text-align: center;
      margin-top: 14px;
  }
  .Container .btmConta{
     box-sizing: border-box;
     height: 100%;width: 100%;
     display: flex;
     justify-content: space-between;
     margin-top: 62px;
  }
  .btmContaL .btmContaLtop{
    box-sizing: border-box;

    background: #80cbff;
    width: 842px;
    height:522px;
    margin-bottom: 37px;

  }
  .btmContaL .btmContaLbtm{
    box-sizing: border-box;
    padding:12px 14px;
    background: #80cbff;
    width: 842px;
    height:336px;

  }
  .btmContaL .btmContaLbtm>p{
    font-size: 18px;
      font-weight: 500;
      color: #fff;
      font-family:思源黑体 CN Bold;

  }

  .btmContaR{
      width: 664px;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;

  }
  .btmContaRtop {
      width: 100%;
      height:450px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
  }
  .btmContaRtop .Faculty{
      width: 327px;height:436px;
      background: rgb(98,189,255);
      border-radius: 6px;
      margin-top: 12px;
      box-sizing: border-box;
      padding: 7px;
      overflow-x: hidden;
      overflow-y: auto;
  }
  .btmContaRtop .Faculty::-webkit-scrollbar{
      display: none;
  }

 .contRids>p{
        font-size: 18px;
      font-weight: bold;
      color: #fff;
      font-family:思源黑体 CN Bold;
      margin-bottom: 35px;
 }
 .contRids{
     width: 100%;height:210px;
     box-sizing: border-box;
    border-bottom:1px solid rgb(238,238,238,0.5);
     padding:9px 16px;

 }
 .rudisP{
     display: flex;
     justify-content:space-around;
     align-items: center;
     box-sizing: border-box;

 }
 .contRids .rudis{
   display: flex;
   flex-direction: column;
   background: black;
   border-radius: 50%;
   height: 120px; width: 120px;
   margin: 0;
   background: radial-gradient(circle at 100px 100px, #67acf5, rgb(46, 144, 224));
   box-sizing: border-box;
}
 .contRids .rudis span{
     margin-top: 20px;
   font-size: 18px;
    font-weight: 600;
    color: #fff;
    font-family:思源黑体 CN Bold;
     text-align: center;
}
 .contRids .rudis p{
   font-family:Arial;
   font-size: 36px;
    font-weight: bold;
    color: #f7ff00;
    text-align: center;
    margin-bottom: 0;
}
 .contBox{
     width: 100%;
     box-sizing: border-box;
     padding:35px 30px;
 }
 .contBox .boxP{
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    margin-top: 30px;
 }
 .boxP .boxs{

    box-sizing: border-box;
    width: 162px;
    height:96px;
    background: #56befe;
    text-align: center;
    border-radius: 7px;

 }
  .boxs p{
   margin-bottom: 0;
   margin-top: 20px;
   color:#fff;
   font-size: 16px;
   font-weight: 500;

 }
  .boxs span{

    color: #fff;
    font-size: 30px;
    font-weight: 600;

 }
 .canvasConta{
     display: flex;
     box-sizing: border-box;
     justify-content: space-between;

 }
 .canvasL{
     width: 400px;
     height: 280px;

 }
  .canvasL #myecharts1{
     width: 100%;
     height: 100%;
     box-sizing: border-box;

 }
 .canvasR{
     width: 400px;
     height: 280px;

 }
 .canvasR #myecharts2{
     width: 100%;
     height: 100%;
     box-sizing: border-box;

 }
 .Faculty>span{
    font-size: 14px;
    font-weight: 600;
    color: #0071eb;
    font-family:思源黑体 CN Bold;
    display: inline-block;
    padding-right: 10px;

 }
 .Faculty h1{
     font-size: 14px;
    font-weight: 600;
    color: #fff;
    font-family:思源黑体 CN Bold;
    display: inline-block;
    margin-bottom:11px ;

 }
 .Faculty .FacultyList{
    padding: 4px 16px ;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;

 }
.datalist{
   align-items: center;
   display: flex;

 }
.datalist i{
   font-style: normal;
    font-size: 12px;
    color: #fff;
    font-family:思源黑体 CN Bold;

 }
.datalist span{
    display: inline-block;
    width: 17px;height:17px;
    border-radius: 50%;
    background: #bbb;
    text-align: center;
    margin:0 5px;
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    font-family:思源黑体 CN Bold;

 }
.datalistN{
    display: flex;
    align-items: center;
}
.datalistN p{
    display: inline-block;
     font-size: 12px;
    font-weight: 600;
    color: #fff;
    font-family:思源黑体 CN Bold;
    padding: 0 20px;
    margin-bottom: 0;
}
.datalistN span{
    display: inline-block;
     font-size: 12px;
    font-weight: 600;
    color: #fe1c19;
    font-family:思源黑体 CN Bold;
    padding: 0 20px;
}
.FacultyList:nth-of-type(1) .datalist>span{
   background: #fe1c19;
}
.FacultyList:nth-of-type(2) .datalist>span{
   background: #fe1c19;
}
.FacultyList:nth-of-type(3) .datalist>span{
   background: #fe1c19;
}
.FacultyList:nth-of-type(4) .datalist>span{
   background: #fe1c19;
}
.FacultyList:nth-of-type(5) .datalist>span{
   background: #fe1c19;
}
.FacultyList:nth-of-type(6) .datalist>span{
   background: #fdc81d;
}
.FacultyList:nth-of-type(7) .datalist>span{
   background: #fdc81d;
}
.FacultyList:nth-of-type(8) .datalist>span{
   background: #fdc81d;
}
.FacultyList:nth-of-type(9) .datalist>span{
   background: #fdc81d;
}
.FacultyList:nth-of-type(10) .datalist>span{
   background: #fdc81d;
}
.FacultyList:nth-of-type(11) .datalist>span{
   background: #91ff1b;
}
.FacultyList:nth-of-type(12) .datalist>span{
   background: #91ff1b;
}
.FacultyList:nth-of-type(12) .datalist>span{
   background: #91ff1b;
}
.FacultyList:nth-of-type(13) .datalist>span{
   background: #91ff1b;
}
.FacultyList:nth-of-type(14) .datalist>span{
   background: #91ff1b;
}
.FacultyList:nth-of-type(15) .datalist>span{
   background: #91ff1b;
}
</style>
